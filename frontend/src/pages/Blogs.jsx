import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import PageMotion, { fadeUp, scaleUp, staggerContainer } from "../components/common/PageMotion";
import API_BASE_URL from "../config/api";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const INITIAL_COUNT = 9;
  const categories = ["All", "SEO", "Web Design", "Digital Marketing", "Branding", "Social Media"];

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/blogs`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setBlogs(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const visibleBlogs = Array.isArray(blogs)
    ? blogs.filter(blog => activeCategory === "All" || blog.category === activeCategory).slice(0, showAll ? undefined : INITIAL_COUNT)
    : [];

  return (
    <PageMotion>
      {/* HERO */}
      <motion.section
        className="bg-gradient-to-r from-[#0b1f2d] to-[#1d3f54] py-24 text-white"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.span
            className="inline-block bg-blue-600 text-sm px-4 py-1 rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            📝 Digital Marketing Insights
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Expert Tips, Guides & Strategies
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Stay ahead with actionable insights on SEO, web design, digital marketing, branding, and more — from India's award-winning digital agency.
          </p>
        </div>
      </motion.section>

      {/* STATS BAR */}
      <div className="bg-blue-600 text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 text-center text-sm">
          {[
            { number: "100+", label: "Expert Articles" },
            { number: "50K+", label: "Monthly Readers" },
            { number: "10+", label: "Years of Insights" },
            { number: "20+", label: "Topics Covered" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="font-bold text-lg">{s.number}</span>
              <span className="text-blue-200">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <motion.div
        className="max-w-7xl mx-auto px-6 mt-10 flex flex-wrap gap-3 justify-center"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${activeCategory === cat
              ? "bg-blue-600 text-white border-blue-600 shadow-md"
              : "bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-600"
              }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* BLOG GRID */}
      <div className="max-w-7xl mx-auto px-6 mt-10 pb-24">
        {loading ? (
          <div className="text-center py-20 text-gray-400 font-bold uppercase tracking-widest">Loading Insights...</div>
        ) : (
          <>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            >
              {visibleBlogs.map((blog) => (
                <motion.article
                  key={blog._id || blog.id}
                  variants={scaleUp}
                  whileHover={{ y: -6 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <NavLink to={`/blog/${blog.slug}`} className="block">
                    <div className="h-44 bg-gradient-to-br from-[#0b1f2d] to-[#1d3f54] flex items-center justify-center relative overflow-hidden">
                      {blog.image ? (
                        <img src={blog.image} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="" />
                      ) : (
                        <div className="text-5xl opacity-20 absolute">📝</div>
                      )}
                      <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-600 px-4 py-2 rounded-lg text-sm">
                          Read Article →
                        </span>
                      </div>
                    </div>
                  </NavLink>

                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full font-medium">
                        {blog.category || 'Digital Marketing'}
                      </span>
                      <span className="text-gray-400 text-xs">{blog.date}</span>
                    </div>

                    <NavLink to={`/blog/${blog.slug}`}>
                      <h3 className="text-base font-bold text-gray-800 mb-3 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                    </NavLink>

                    <p className="text-sm text-gray-500 leading-relaxed flex-grow line-clamp-3">
                      {blog.excerpt}
                    </p>

                    <NavLink
                      to={`/blog/${blog.slug}`}
                      className="mt-5 inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all"
                    >
                      Read Article <span>→</span>
                    </NavLink>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {blogs.length > INITIAL_COUNT && !showAll && (
              <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              >
                <button
                  onClick={() => setShowAll(true)}
                  className="px-10 py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-[#0b1f2d] to-[#1d3f54] hover:opacity-90 transition shadow-lg"
                >
                  Load More Articles
                </button>
              </motion.div>
            )}
          </>
        )}
      </div>

      {/* CTA BANNER */}
      <motion.section
        className="bg-gradient-to-r from-blue-600 to-[#1d3f54] text-white py-16 px-6 text-center"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
      >
        <h2 className="text-3xl font-bold mb-3">Want Digital Marketing Results Like These?</h2>
        <p className="text-blue-200 mb-8 max-w-xl mx-auto">Let our experts create a tailored strategy to grow your business online.</p>
        <NavLink
          to="/contact"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors inline-block"
        >
          Get Free Consultation
        </NavLink>
      </motion.section>
    </PageMotion>
  );
};

export default BlogsPage;
