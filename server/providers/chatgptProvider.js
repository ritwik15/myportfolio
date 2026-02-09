// Provider that uses OpenAI Chat Completions to synthesize course-like results
// Requires environment variable OPENAI_API_KEY to be set.
module.exports = {
  search: async (q) => {
    if (!q || !q.trim()) return [];
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.warn('chatgptProvider: OPENAI_API_KEY not set, skipping');
      return [];
    }

    const prompt = `You are a helpful assistant that returns up to 8 course suggestions for a user's query. Respond with a JSON array only. Each item must be an object with keys: title, description, category, level (Beginner/Intermediate/Advanced), duration (text), rating (number 0-5), students (string), url (optional).
Query: "${q.replace(/"/g, '\\"')}"
Return varied, realistic course titles and short descriptions.`;

    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a course discovery assistant. Only respond with JSON.' },
            { role: 'user', content: prompt }
          ],
          max_tokens: 700,
          temperature: 0.2,
        }),
      });

      const j = await res.json();
      const text = j?.choices?.[0]?.message?.content || j?.choices?.[0]?.text || '';
      if (!text) return [];

      // Attempt to extract JSON from the model output
      const jsonStart = text.indexOf('[');
      const jsonStr = jsonStart >= 0 ? text.slice(jsonStart) : text;
      try {
        const parsed = JSON.parse(jsonStr);
        if (Array.isArray(parsed)) return parsed.map((item, i) => ({ id: `gpt_${i}`, ...item }));
      } catch (err) {
        console.warn('chatgptProvider: JSON parse failed', err);
        return [];
      }
    } catch (err) {
      console.error('chatgptProvider error', err);
      return [];
    }
    return [];
  },
};
