// Load environment variables
require('dotenv').config();

const mockProvider = require('../server/providers/mockProvider');
const chatgptProvider = require('../server/providers/chatgptProvider');
const webSearchProvider = require('../server/providers/webSearchProvider');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const q = (req.query.q || '').trim();
  
  if (!q) {
    return res.status(400).json({ ok: false, error: 'Query parameter required' });
  }

  try {
    const providers = [mockProvider, chatgptProvider, webSearchProvider];
    let results = [];

    for (const p of providers) {
      try {
        const r = await p.search(q);
        if (Array.isArray(r)) results = results.concat(r);
      } catch (err) {
        console.error('provider error:', err);
      }
    }

    // Simple dedupe by title
    const seen = new Set();
    const dedup = [];
    for (const item of results) {
      const key = (item.title || '').toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        dedup.push(item);
      }
    }

    res.status(200).json({ ok: true, query: q, results: dedup });
  } catch (err) {
    console.error('Search error:', err);
    res.status(500).json({ ok: false, error: err.message });
  }
};
