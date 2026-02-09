// Provider that queries Wikipedia search API and maps results to course-like items
module.exports = {
  search: async (q) => {
    if (!q || !q.trim()) return [];
    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(q)}&utf8=&format=json&srlimit=8`;
    try {
      const resp = await fetch(endpoint, { headers: { 'User-Agent': 'myportfolio-course-agent/1.0 (contact)' } });
      const json = await resp.json();
      if (!json || !json.query || !Array.isArray(json.query.search)) return [];
      return json.query.search.map((s) => ({
        id: `wiki_${s.pageid}`,
        title: s.title,
        description: (s.snippet || '').replace(/<[^>]+>/g, ''),
        category: 'Reference',
        level: 'Intro',
        duration: 'Varies',
        rating: 0,
        students: '—',
        url: `https://en.wikipedia.org/?curid=${s.pageid}`,
      }));
    } catch (err) {
      console.error('wikipediaProvider error', err);
      return [];
    }
  },
};
