import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Breadcrumb from "../../components/common/Breadcrumb";
import ListenFromClients from "../../components/home/ListenFromClients";
import PageMotion, { fadeUp, scaleUp, staggerContainer } from "../../components/common/PageMotion";

const VideoPortfolio = () => {
    const videos = [
        { name: "Manufacturing Company Corporate Film", category: "Corporate Video", duration: "3:45", views: "50K+" },
        { name: "Real Estate Aerial Showcase", category: "Property Video", duration: "2:30", views: "35K+" },
        { name: "Healthcare Brand Story", category: "Brand Film", duration: "4:00", views: "28K+" },
        { name: "Product Launch — Dairy Brand", category: "Product Video", duration: "1:30", views: "80K+" },
        { name: "E-commerce Fashion Reel", category: "Social Media", duration: "0:45", views: "150K+" },
        { name: "CEO Interview — Tech Startup", category: "Testimonial Video", duration: "5:00", views: "22K+" },
    ];

    return (
        <PageMotion>
            <Breadcrumb currentPage="Video Production Portfolio" />

            <motion.section
                className="bg-gradient-to-r from-[#0b1f2d] to-[#1d3f54] text-white py-20 px-6 text-center"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
                <span className="inline-block bg-red-500 text-sm px-4 py-1 rounded-full mb-4">🎬 Visual Storytelling</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Video Production Portfolio</h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                    Cinematic corporate videos, brand films, and social media content that captivate and convert.
                </p>
            </motion.section>

            <motion.section
                className="bg-red-600 text-white py-12 px-6"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { number: "500+", label: "Videos Produced" },
                        { number: "4K", label: "Ultra HD Quality" },
                        { number: "50M+", label: "Total Views" },
                        { number: "20+", label: "Industries Served" },
                    ].map((s, i) => (
                        <motion.div key={i} variants={scaleUp}>
                            <div className="text-4xl font-bold">{s.number}</div>
                            <div className="text-red-200 mt-1">{s.label}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <section className="py-16 px-6 max-w-6xl mx-auto">
                <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <h2 className="text-3xl font-bold text-gray-800">Featured Video Projects</h2>
                    <p className="text-gray-600 mt-3">Every frame tells a story. Every video drives results.</p>
                </motion.div>
                <motion.div
                    className="grid md:grid-cols-3 gap-6"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                >
                    {videos.map((v, i) => (
                        <motion.div key={i} variants={scaleUp}>
                            <NavLink to="/contact" className="block bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer">
                                <div className="h-44 bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center relative">
                                    <div className="text-6xl group-hover:scale-110 transition-transform">▶️</div>
                                    <div className="absolute bottom-2 right-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">{v.duration}</div>
                                    <div className="absolute inset-0 bg-[#0b1f2d] bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
                                        <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity bg-red-600 px-4 py-2 rounded-lg text-sm">
                                            Request Video →
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <span className="bg-red-50 text-red-600 text-xs px-2 py-1 rounded-full">{v.category}</span>
                                    <h3 className="font-bold text-gray-800 mt-2 mb-1 group-hover:text-red-600 transition-colors">{v.name}</h3>
                                    <div className="text-gray-400 text-sm">👁️ {v.views} views</div>
                                    <div className="mt-3 text-red-600 text-sm font-medium">Request Similar Video →</div>
                                </div>
                            </NavLink>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <motion.section
                className="bg-gray-900 text-white py-16 px-6 text-center"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
                <h2 className="text-3xl font-bold mb-4">Ready to Tell Your Brand Story?</h2>
                <p className="text-gray-400 mb-8">Let's create a video that captivates your audience and drives results.</p>
                <NavLink to="/contact" className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors inline-block">Start Your Project</NavLink>
            </motion.section>

            <ListenFromClients />
        </PageMotion>
    );
};

export default VideoPortfolio;
