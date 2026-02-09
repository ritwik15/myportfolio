// Mock provider returning sample courses. Replace or extend with real providers.
module.exports = {
  search: async (q) => {
    const courses = [
      {
        id: 'm1',
        title: 'Advanced React & TypeScript',
        description: 'Master modern React patterns with TypeScript type safety',
        category: 'Web Development',
        level: 'Advanced',
        duration: '40 hours',
        rating: 4.8,
        students: '12.5K',
      },
      {
        id: 'm2',
        title: 'Node.js & Express Mastery',
        description: 'Build scalable backend applications with Node.js',
        category: 'Backend',
        level: 'Intermediate',
        duration: '32 hours',
        rating: 4.7,
        students: '9.2K',
      },
      {
        id: 'm3',
        title: 'AWS Cloud Architecture',
        description: 'Design and deploy production-ready AWS solutions',
        category: 'Cloud',
        level: 'Advanced',
        duration: '28 hours',
        rating: 4.9,
        students: '8.1K',
      },
      {
        id: 'm4',
        title: 'PostgreSQL for Developers',
        description: 'Master database design and optimization with PostgreSQL',
        category: 'Database',
        level: 'Intermediate',
        duration: '24 hours',
        rating: 4.6,
        students: '6.3K',
      },
    ];

    if (!q) return courses;
    const ql = q.toLowerCase();
    return courses.filter((c) =>
      (c.title || '').toLowerCase().includes(ql) ||
      (c.description || '').toLowerCase().includes(ql) ||
      (c.category || '').toLowerCase().includes(ql)
    );
  },
};
