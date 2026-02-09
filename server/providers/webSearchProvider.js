// Provider that searches the web for courses using Serper API (Google Search)
// Requires SERPER_API_KEY environment variable
// Get free API key at https://serper.dev

module.exports = {
  search: async (q) => {
    if (!q || !q.trim()) return [];
    const apiKey = process.env.SERPER_API_KEY;
    if (!apiKey) {
      console.warn('webSearchProvider: SERPER_API_KEY not set, skipping');
      return [];
    }

    try {
      const res = await fetch('https://google.serper.dev/search', {
        method: 'POST',
        headers: {
          'X-API-KEY': apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: `${q} courses online`,
          num: 8,
        }),
      });

      const data = await res.json();
      if (!data.organic || !Array.isArray(data.organic)) return [];

      return data.organic.map((result, i) => ({
        id: `web_${i}`,
        title: result.title,
        description: result.snippet,
        category: 'Web Search',
        level: 'Various',
        duration: '—',
        rating: 0,
        students: '—',
        url: result.link,
      }));
    } catch (err) {
      console.error('webSearchProvider error', err);
      return [];
    }
  },
};
