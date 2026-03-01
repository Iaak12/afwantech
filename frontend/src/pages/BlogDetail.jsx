import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import PageMotion, { fadeUp } from "../components/common/PageMotion";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5005/api/blogs/slug/${slug}`)
      .then(res => res.json())
      .then(data => {
        setBlog(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div className="min-h-screen pt-20 text-center">Loading Article...</div>;

  if (!blog) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <div className="text-6xl mb-4">😕</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Article Not Found</h2>
        <p className="text-gray-600 mb-6 max-w-sm">
          The article you're looking for may have been moved or updated.
        </p>
        <NavLink
          to="/blogs"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          ← Back to All Articles
        </NavLink>
      </div>
    );
  }

  return (
    <PageMotion>
      {/* HERO */}
      <motion.section
        className="bg-gradient-to-r from-[#0b1f2d] to-[#1d3f54] py-24 text-white"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
      >
        <div className="max-w-4xl mx-auto px-6">
          <NavLink
            to="/blogs"
            className="inline-flex items-center gap-2 text-blue-300 hover:text-white mb-6 text-sm transition-colors"
          >
            ← Back to Blog
          </NavLink>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">{blog.category || 'Digital Marketing'}</span>
            <span className="text-gray-400 text-sm">{blog.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            {blog.title}
          </h1>
          <p className="mt-4 text-gray-300 text-lg leading-relaxed max-w-2xl">
            {blog.excerpt}
          </p>

          <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white">
                A
              </div>
              <div>
                <div className="font-semibold text-white text-sm">Afwan Tech Team</div>
                <div className="text-gray-400 text-xs">Digital Marketing Expert</div>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-gray-400 text-sm">Share:</span>
              {["Facebook", "Twitter", "LinkedIn"].map((s) => (
                <a key={s} href="#" className="text-xs text-blue-300 hover:text-white transition-colors font-medium">{s}</a>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* CONTENT WRAPPER */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* MAIN CONTENT */}
          <motion.main
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-2xl mb-8 overflow-hidden bg-gray-100">
              {blog.image ? (
                <img src={blog.image} className="w-full h-auto object-cover" alt={blog.title} />
              ) : (
                <div className="h-56 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">📰</div>
                    <p className="text-blue-400 text-sm font-medium">Afwan Tech — Digital Growth Blog</p>
                  </div>
                </div>
              )}
            </div>

            <article
              className="prose prose-lg max-w-none
                prose-headings:text-gray-800 prose-headings:font-bold
                prose-p:text-gray-600 prose-p:leading-relaxed
                prose-li:text-gray-600
                prose-strong:text-gray-800
                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-2xl prose-img:shadow-md
              "
            >
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </article>

            <motion.div
              className="mt-12 bg-gradient-to-r from-[#0b1f2d] to-[#1d3f54] rounded-2xl p-8 text-white text-center"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
              <h3 className="text-2xl font-bold mb-3">Ready to Grow Your Business Online?</h3>
              <p className="text-gray-300 mb-6">Let Afwan Tech's experts build a tailored digital marketing strategy for you.</p>
              <NavLink
                to="/contact"
                className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors inline-block"
              >
                Get Free Consultation
              </NavLink>
            </motion.div>

            <div className="mt-10">
              <NavLink
                to="/blogs"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
              >
                ← Back to All Articles
              </NavLink>
            </div>
          </motion.main>

          {/* SIDEBAR */}
          <motion.aside
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-[#0b1f2d] to-[#1d3f54] text-white rounded-2xl p-6">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="font-bold text-lg mb-2">Afwan Tech</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                India's award-winning digital marketing & web design agency. 5000+ clients | 10+ years of expertise.
              </p>
              <NavLink
                to="/contact"
                className="mt-4 inline-block bg-blue-500 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-400 transition-colors"
              >
                Contact Us
              </NavLink>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-4">Our Services</h3>
              <ul className="space-y-2">
                {[
                  { label: "Website Design", href: "/small-business-website" },
                  { label: "SEO Services", href: "/seo-services" },
                  { label: "Digital Marketing", href: "/paid-ads-ppc" },
                  { label: "Content Marketing", href: "/content-marketing" },
                  { label: "Graphic Designing", href: "/graphic-designing" },
                ].map((s, i) => (
                  <li key={i}>
                    <NavLink
                      to={s.href}
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 text-sm transition-colors py-1"
                    >
                      <span className="text-blue-500">→</span> {s.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Removed otherBlogs for now to simplify; can be added back by fetching all blogs if desired */}
          </motion.aside>
        </div>
      </div>
    </PageMotion>
  );
};

export default BlogDetail;
