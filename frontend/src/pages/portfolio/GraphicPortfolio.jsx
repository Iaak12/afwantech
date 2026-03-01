import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Breadcrumb from "../../components/common/Breadcrumb";
import ListenFromClients from "../../components/home/ListenFromClients";
import PageMotion, { fadeUp, scaleUp, staggerContainer } from "../../components/common/PageMotion";

const GraphicPortfolio = () => {
    const categories = [
        { title: "Logo Design", icon: "🎨", count: "500+" },
        { title: "Brand Identity", icon: "✨", count: "300+" },
        { title: "Social Media", icon: "📱", count: "5000+" },
        { title: "Brochure Design", icon: "📄", count: "400+" },
        { title: "Packaging Design", icon: "📦", count: "200+" },
        { title: "Banner & Hoarding", icon: "🖼️", count: "800+" },
    ];

    const projects = [
        { name: "Fashion Brand Identity", category: "Brand Identity", desc: "Complete brand identity including logo, color palette, typography, and brand guidelines." },
        { name: "Restaurant Visual Package", category: "Print Design", desc: "Menu design, table cards, packaging, and social media template kit." },
        { name: "Tech Startup Logo", category: "Logo Design", desc: "Modern, minimal tech logo with full stationery set and brand guide." },
        { name: "Healthcare Brand Kit", category: "Brand Identity", desc: "Professional healthcare brand identity with clinic signage and print collateral." },
        { name: "Real Estate Brochure", category: "Print Design", desc: "Luxury property brochure with architectural photography and premium finishes." },
        { name: "E-commerce Social Media Pack", category: "Social Media", desc: "Monthly social media graphic package with product posts, stories, and reels templates." },
    ];

    return (
        <PageMotion>
            <Breadcrumb currentPage="Graphic Design Portfolio" />

            <motion.section
                className="bg-gradient-to-r from-[#0b1f2d] to-[#1d3f54] text-white py-20 px-6 text-center"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
                <span className="inline-block bg-pink-500 text-sm px-4 py-1 rounded-full mb-4">Creative Work</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Graphic Design Portfolio</h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                    Explore our creative graphic design work — from bold logos and brand identities to stunning print and digital designs.
                </p>
            </motion.section>

            <motion.section
                className="py-12 px-6 bg-gray-50"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            >
                <div className="max-w-5xl mx-auto grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
                    {categories.map((c, i) => (
                        <motion.div key={i} variants={scaleUp} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-3xl mb-1">{c.icon}</div>
                            <div className="font-semibold text-gray-700 text-sm">{c.title}</div>
                            <div className="text-blue-600 text-xs font-bold">{c.count}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <section className="py-16 px-6 max-w-6xl mx-auto">
                <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <h2 className="text-3xl font-bold text-gray-800">Featured Design Projects</h2>
                    <p className="text-gray-600 mt-3">Design that speaks, inspires, and converts.</p>
                </motion.div>
                <motion.div
                    className="grid md:grid-cols-3 gap-6"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                >
                    {projects.map((p, i) => (
                        <motion.div key={i} variants={scaleUp}>
                            <NavLink to="/contact" className="block bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer">
                                <div className="h-40 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center text-4xl relative overflow-hidden">
                                    🎨
                                    <div className="absolute inset-0 bg-[#0b1f2d] bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                                        <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity bg-pink-600 px-4 py-2 rounded-lg text-sm">
                                            Request Design →
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <span className="bg-pink-50 text-pink-600 text-xs px-2 py-1 rounded-full">{p.category}</span>
                                    <h3 className="font-bold text-gray-800 mt-2 mb-1 group-hover:text-pink-600 transition-colors">{p.name}</h3>
                                    <p className="text-gray-500 text-sm">{p.desc}</p>
                                    <div className="mt-3 text-pink-600 text-sm font-medium">Request Similar Design →</div>
                                </div>
                            </NavLink>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <ListenFromClients />
        </PageMotion>
    );
};

export default GraphicPortfolio;
