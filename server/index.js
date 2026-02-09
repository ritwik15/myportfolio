// Load local .env into process.env (if present)
try { require('dotenv').config(); } catch (e) { /* ignore if dotenv not installed */ }
const express = require('express');
const cors = require('cors');
const mockProvider = require('./providers/mockProvider');
const chatgptProvider = require('./providers/chatgptProvider');
const webSearchProvider = require('./providers/webSearchProvider');

const app = express();
app.use(cors());
app.use(express.json());

// Basic search endpoint that aggregates providers
app.get('/api/search', async (req, res) => {
  const q = (req.query.q || '').trim();
  try {
    const providers = [mockProvider, chatgptProvider, webSearchProvider];
    let results = [];
    for (const p of providers) {
      try {
        const r = await p.search(q);
        if (Array.isArray(r)) results = results.concat(r);
      } catch (err) {
        console.error('provider error', err);
      }
    }

    // simple dedupe by title
    const seen = new Set();
    const dedup = [];
    for (const item of results) {
      const key = (item.title || '').toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        dedup.push(item);
      }
    }

    res.json({ ok: true, query: q, results: dedup });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: err.message });
  }
});

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, '0.0.0.0', () => console.log(`Course agent listening on port ${PORT}`));
}

module.exports = app;
