import React, { useState } from 'react';
import { FaSearch, FaSpinner, FaBook, FaStar, FaClock, FaUsers, FaTrophy, FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    setSearched(true);

    // Simulate API call with mock data
    setTimeout(() => {
      const mockResults = [
        {
          id: 1,
          title: 'Advanced React & TypeScript',
          description: 'Master modern React patterns with TypeScript type safety',
          category: 'Web Development',
          level: 'Advanced',
          duration: '40 hours',
          rating: 4.8,
          students: '12.5K',
          color: 'from-blue-400 to-blue-600'
        },
        {
          id: 2,
          title: 'Node.js & Express Mastery',
          description: 'Build scalable backend applications with Node.js',
          category: 'Backend',
          level: 'Intermediate',
          duration: '32 hours',
          rating: 4.7,
          students: '9.2K',
          color: 'from-green-400 to-green-600'
        },
        {
          id: 3,
          title: 'AWS Cloud Architecture',
          description: 'Design and deploy production-ready AWS solutions',
          category: 'Cloud',
          level: 'Advanced',
          duration: '28 hours',
          rating: 4.9,
          students: '8.1K',
          color: 'from-orange-400 to-orange-600'
        },
        {
          id: 4,
          title: 'PostgreSQL for Developers',
          description: 'Master database design and optimization with PostgreSQL',
          category: 'Database',
          level: 'Intermediate',
          duration: '24 hours',
          rating: 4.6,
          students: '6.3K',
          color: 'from-purple-400 to-purple-600'
        }
      ];

      // Filter based on search query
      const filtered = mockResults.filter(
        course =>
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setResults(filtered.length > 0 ? filtered : mockResults);
      setLoading(false);
    }, 800);
  };

  const categories = [
    { name: 'Web Development', icon: '🌐', count: 245, color: 'from-blue-400 to-blue-600' },
    { name: 'Backend', icon: '⚙️', count: 128, color: 'from-green-400 to-green-600' },
    { name: 'Cloud', icon: '☁️', count: 87, color: 'from-orange-400 to-orange-600' },
    { name: 'Database', icon: '💾', count: 64, color: 'from-purple-400 to-purple-600' },
  ];

  const courseCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const getLevelColor = (level) => {
    switch(level) {
      case 'Beginner': return 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300';
      case 'Intermediate': return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300';
      case 'Advanced': return 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300';
      default: return 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"
          animate={{ y: [0, 100, 0], x: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"
          animate={{ y: [0, -100, 0], x: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, delay: 1 }}
        ></motion.div>
      </div>

      {/* Header Section */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-12 border-b border-purple-500/20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div 
              className="inline-flex items-center gap-3 mb-6 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-6 py-3"
              whileHover={{ scale: 1.05 }}
            >
              <FaGraduationCap className="text-purple-400" />
              <span className="text-sm font-semibold text-purple-300">AI-Powered Learning</span>
            </motion.div>
            
            <h1 className="text-5xl sm:text-7xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Explore Courses
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the perfect course tailored to your learning goals. AI-powered search, curated content.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.form
            onSubmit={handleSearch}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-2xl mx-auto"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-slate-900 rounded-2xl p-1">
                <div className="flex items-center px-6 py-4 bg-slate-800 rounded-xl">
                  <FaSearch className="text-purple-400 text-xl mr-4" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search courses, topics, skills..."
                    className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none text-lg"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="ml-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 disabled:opacity-50 text-white px-8 py-2 rounded-lg font-bold transition-all transform hover:scale-105"
                  >
                    {loading ? <FaSpinner className="animate-spin inline" /> : 'Search'}
                  </button>
                </div>
              </div>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-20">
        {!searched ? (
          <div>
            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Browse by Category</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    whileHover={{ scale: 1.08, y: -8 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSearchQuery(category.name);
                      setSearched(true);
                    }}
                    className="group relative overflow-hidden"
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-300`}></div>
                    <div className="relative bg-slate-900 rounded-2xl p-8 text-left h-full flex flex-col justify-between">
                      <div>
                        <div className="text-5xl mb-4">{category.icon}</div>
                        <h3 className="font-bold text-xl text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition">
                          {category.name}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition">
                        {category.count} courses
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Featured Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
                <FaTrophy className="text-yellow-400" />
                Popular Courses
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {[
                  {
                    title: 'JavaScript Masterclass',
                    category: 'Web Development',
                    level: 'Beginner',
                    rating: 4.9,
                    color: 'from-yellow-400 to-orange-600'
                  },
                  {
                    title: 'Full-Stack MERN Development',
                    category: 'Web Development',
                    level: 'Advanced',
                    rating: 4.8,
                    color: 'from-blue-400 to-purple-600'
                  },
                  {
                    title: 'DevOps Essentials',
                    category: 'Cloud',
                    level: 'Intermediate',
                    rating: 4.7,
                    color: 'from-green-400 to-teal-600'
                  },
                  {
                    title: 'System Design Fundamentals',
                    category: 'Backend',
                    level: 'Advanced',
                    rating: 4.8,
                    color: 'from-pink-400 to-red-600'
                  },
                ].map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    whileHover={{ scale: 1.04, y: -8 }}
                    className="group relative overflow-hidden"
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${course.color} rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-300`}></div>
                    <div className="relative bg-slate-900 rounded-2xl p-8 h-full">
                      <div className="flex items-start justify-between mb-4">
                        <motion.div 
                          className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-xl text-white"
                          whileHover={{ rotate: 10, scale: 1.1 }}
                        >
                          <FaBook className="text-2xl" />
                        </motion.div>
                        <span className={`text-xs font-bold px-4 py-2 rounded-full ${getLevelColor(course.level)}`}>
                          {course.level}
                        </span>
                      </div>
                      <h3 className="font-bold text-xl text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition">
                        {course.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-6">
                        {course.category}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <FaStar className="text-yellow-400" />
                          <span className="font-bold text-white">{course.rating}</span>
                        </div>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-400 text-sm">1.2K students</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        ) : (
          <div>
            {/* Search Results */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold text-white">Search Results</h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => {
                    setSearched(false);
                    setResults([]);
                    setSearchQuery('');
                  }}
                  className="text-purple-400 hover:text-purple-300 font-bold underline transition"
                >
                  Clear Search
                </motion.button>
              </div>

              {results.length === 0 ? (
                <motion.div
                  variants={courseCardVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-center py-20"
                >
                  <FaSearch className="text-6xl text-gray-500 mx-auto mb-4 opacity-50" />
                  <p className="text-gray-400 text-xl">
                    No courses found. Try a different search.
                  </p>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {results.map((course, index) => (
                    <motion.div
                      key={course.id}
                      variants={courseCardVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.04, y: -8 }}
                      className="group relative overflow-hidden"
                    >
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${course.color} rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-300`}></div>
                      <div className="relative bg-slate-900 rounded-2xl p-8 h-full">
                        <div className="flex items-start justify-between mb-4">
                          <motion.div 
                            className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-xl text-white"
                            whileHover={{ rotate: 10, scale: 1.1 }}
                          >
                            <FaBook className="text-2xl" />
                          </motion.div>
                          <span className={`text-xs font-bold px-4 py-2 rounded-full ${getLevelColor(course.level)}`}>
                            {course.level}
                          </span>
                        </div>
                        <h3 className="font-bold text-xl text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition">
                          {course.title}
                        </h3>
                        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                          {course.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          <span className="text-xs bg-purple-500/20 border border-purple-500/30 text-purple-300 px-3 py-1 rounded-full font-semibold">
                            {course.category}
                          </span>
                          <span className="text-xs flex items-center gap-1 text-gray-400 bg-gray-500/10 border border-gray-500/20 px-3 py-1 rounded-full">
                            <FaClock size={12} /> {course.duration}
                          </span>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <FaStar className="text-yellow-400" />
                              <span className="font-bold text-white">{course.rating}</span>
                            </div>
                          </div>
                          <span className="text-gray-400 text-sm flex items-center gap-1">
                            <FaUsers size={14} /> {course.students}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Search;
