import React, { useState, useRef, useEffect } from 'react';
import { FaSearch, FaSpinner, FaBook, FaStar, FaClock, FaUsers, FaTrophy, FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState('');

  const debounceRef = useRef(null);
  const cacheRef = useRef({});

  const handleSearch = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!searchQuery.trim()) return;
    if (searchQuery.trim().length < 3) {
      setError(`Enter at least 3 characters (${searchQuery.trim().length}/3)`);
      return;
    }
    setError('');
    await performSearch(searchQuery);
  };

  // helper to perform search programmatically (e.g., from category clicks)
  const performSearch = async (query) => {
    if (!query || !query.trim()) return;
    setSearchQuery(query);
    setSearched(true);
    setError('');
    // return cached results if available
    const cached = cacheRef.current[query.toLowerCase()];
    if (cached) {
      setResults(cached);
      return;
    }

    setLoading(true);
    const url = `/api/search?q=${encodeURIComponent(query)}`;
    console.log('Searching:', url);
    try {
      const res = await fetch(url);
      console.log('Response status:', res.status);
      const text = await res.text();
      console.log('Response:', text.slice(0, 200));
      const data = JSON.parse(text);
      if (res.ok && data && Array.isArray(data.results)) {
        const normalized = data.results.map((r, i) => ({ ...r, id: r.id || `${i}` }));
        setResults(normalized);
        try { cacheRef.current[query.toLowerCase()] = normalized; } catch (e) { /* ignore */ }
      } else {
        setResults([]);
        setError('No results found or invalid response');
        console.error('Search error', data);
      }
    } catch (err) {
      console.error('Search request failed', err);
      setResults([]);
      setError(`Connection failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  const handleInputChange = (e) => {
    const v = e.target.value;
    setSearchQuery(v);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    // Only proceed if at least 3 characters
    const charCount = v.trim().length;
    if (charCount < 3) {
      setError(`Enter at least 3 characters (${charCount}/3)`);
      return;
    }
    // auto-search after user stops typing
    debounceRef.current = setTimeout(() => {
      if (v && v.trim()) {
        setError('');
        performSearch(v);
      }
    }, 600);
  };

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

      {/* Unified Search & Content Section */}
      <section className="relative w-full">
        {/* Sticky Search Header */}
        <div className={`sticky top-0 z-40 w-full px-4 sm:px-6 lg:px-12 transition-all duration-300 ${
          searched ? 'bg-slate-900/95 backdrop-blur-md py-4 border-b border-purple-500/20' : 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20'
        }`}>
          <div className="max-w-6xl mx-auto">
            {/* Title Section - Only Show on Landing */}
            {!searched && (
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
                
                <h1 className="text-5xl sm:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Explore Courses
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                  Discover the perfect course tailored to your learning goals. AI-powered search, curated content.
                </p>
              </motion.div>
            )}

            {/* Search Form - Always Visible */}
            <motion.form
              onSubmit={handleSearch}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className={`transition-all duration-300 mx-auto ${
                searched ? 'max-w-2xl' : 'max-w-4xl'
              }`}>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-slate-900 rounded-2xl p-1">
                    <div className="flex items-center bg-slate-800 rounded-xl px-6 py-4">
                      <FaSearch className="text-purple-400 text-xl mr-4 flex-shrink-0" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={handleInputChange}
                        placeholder="Search courses, topics, skills..."
                        className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none text-lg"
                      />
                      <button
                        type="submit"
                        disabled={loading}
                        className="ml-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 disabled:opacity-50 text-white px-8 py-2 rounded-lg font-bold transition-all transform hover:scale-105 flex-shrink-0"
                      >
                        {loading ? <FaSpinner className="animate-spin inline" /> : 'Search'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.form>
          </div>
        </div>

        {searched && (
          <>
            {/* Main Content Area */}
            <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-20">
            {/* Search Results */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-6">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Search Results</h2>
                  <p className="text-gray-400 text-sm">Found <span className="text-purple-400 font-bold">{results.length}</span> amazing courses for you</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSearched(false);
                    setResults([]);
                    setSearchQuery('');
                    setError('');
                  }}
                  className="px-6 py-2 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-bold rounded-lg transition"
                >
                  Clear Search
                </motion.button>
              </div>

              {loading ? (
                <motion.div
                  variants={courseCardVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-center py-24"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    className="inline-block"
                  >
                    <FaSpinner className="text-7xl text-purple-400 mx-auto mb-6" />
                  </motion.div>
                  <p className="text-gray-300 text-2xl font-bold mb-2">
                    Finding perfect courses...
                  </p>
                  <p className="text-gray-400 text-base">
                    This usually takes a few seconds
                  </p>
                </motion.div>
              ) : error ? (
                <motion.div
                  variants={courseCardVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-center py-24"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaSearch className="text-7xl text-red-500 mx-auto mb-6 opacity-70" />
                  </motion.div>
                  <p className="text-red-400 text-xl font-bold mb-3">
                    {error}
                  </p>
                  <p className="text-gray-400 text-base">
                    Make sure the frontend dev server is running (npm start) and backend on port 3001
                  </p>
                </motion.div>
              ) : results.length === 0 ? (
                <motion.div
                  variants={courseCardVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-center py-24"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaSearch className="text-7xl text-gray-500 mx-auto mb-6 opacity-50" />
                  </motion.div>
                  <p className="text-gray-300 text-2xl font-bold mb-2">
                    No courses found
                  </p>
                  <p className="text-gray-400 text-base">
                    Try adjusting your search terms or explore other keywords
                  </p>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.map((course, index) => (
                    <motion.div
                      key={course.id}
                      variants={courseCardVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.04, y: -8 }}
                      onClick={() => {
                        if (course.url) window.open(course.url, '_blank');
                      }}
                      className="group relative overflow-hidden cursor-pointer"
                    >
                      <div className={`absolute -inset-0.5 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-xl blur opacity-40 group-hover:opacity-100 transition duration-500`}></div>
                      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 h-full flex flex-col border border-purple-500/20 group-hover:border-purple-500/50 transition duration-300">
                        <div className="flex items-start justify-between mb-2">
                          <motion.div 
                            className="bg-gradient-to-br from-blue-500 to-purple-500 p-1.5 rounded-lg text-white"
                            whileHover={{ rotate: 10, scale: 1.1 }}
                          >
                            <FaBook className="text-sm" />
                          </motion.div>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${getLevelColor(course.level)}`}>
                            {course.level}
                          </span>
                        </div>
                        <h3 className="font-black text-base text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition line-clamp-2">
                          {course.title}
                        </h3>
                        <p className="text-gray-400 mb-3 text-sm line-clamp-3 flex-grow">
                          {course.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-2">
                          <span className="text-xs bg-purple-500/20 border border-purple-500/30 text-purple-300 px-2 py-0.5 rounded-full">
                            {course.category}
                          </span>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-gray-700 mt-auto">
                          <div className="flex items-center gap-1">
                            <FaStar className="text-yellow-400 text-xs" />
                            <span className="font-bold text-white text-xs">{course.rating}</span>
                          </div>
                        </div>
                        {course.url && (
                          <motion.a
                            href={course.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="block mt-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded-lg text-center text-sm transition shadow-lg hover:shadow-purple-500/50"
                          >
                            Enroll Now →
                          </motion.a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
              </div>
            </section>
          </>
        )}
      </section>
    </div>
  );
};

export default Search;
