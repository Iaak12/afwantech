import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Breadcrumb from "../../components/common/Breadcrumb";
import ListenFromClients from "../../components/home/ListenFromClients";
import PageMotion, { fadeUp, scaleUp, staggerContainer } from "../../components/common/PageMotion";

const WebPortfolio = () => {
    const projects = [
        { name: "DRH Sports", category: "Sports Manufacturer", tech: "WordPress + SEO", desc: "Multi-location business website with full SEO optimization and lead generation." },
        { name: "HealthFirst Clinic", category: "Healthcare", tech: "Custom Website", desc: "Professional clinic website with appointment booking and patient portal." },
        { name: "Prime Real Estate", category: "Real Estate", tech: "Custom Website + SEO", desc: "Property listing website with advanced search filters and lead capture." },
        { name: "Fashion House", category: "Ecommerce", tech: "WooCommerce", desc: "Full ecommerce store with 500+ products, payment gateway, and mobile app." },
        { name: "AutoZone Motors", category: "Automotive", tech: "Custom Website", desc: "Automotive dealership website with inventory management and test drive booking." },
        { name: "EduLearn Academy", category: "Education", tech: "Custom LMS", desc: "Online learning platform with course management, live classes, and student portal." },
        { name: "Spice Garden Restaurant", category: "Restaurant", tech: "Custom Website", desc: "Restaurant website with menu, online ordering, and table reservation system." },
        { name: "CloudNet Technologies", category: "Technology", tech: "Corporate Website", desc: "B2B technology company website with case studies and lead generation system." },
    ];

    return (
        <PageMotion>
            <Breadcrumb currentPage="Web Designing Portfolio" />

            {/* Hero */}
            <motion.section
                className="bg-gradient-to-r from-[#0b1f2d] to-[#1d3f54] text-white py-20 px-6 text-center"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
                <span className="inline-block bg-blue-600 text-sm px-4 py-1 rounded-full mb-4">Our Work</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Web Designing Portfolio</h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                    Explore our collection of professionally designed websites across industries — each built to convert visitors into customers.
                </p>
            </motion.section>

            {/* Stats */}
            <motion.section
                className="bg-blue-600 text-white py-12 px-6"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { number: "2000+", label: "Websites Built" },
                        { number: "20+", label: "Industries" },
                        { number: "98%", label: "Client Satisfaction" },
                        { number: "5★", label: "Average Rating" },
                    ].map((s, i) => (
                        <motion.div key={i} variants={scaleUp}>
                            <div className="text-4xl font-bold">{s.number}</div>
                            <div className="text-blue-200 mt-1">{s.label}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Portfolio Grid */}
            <section className="py-16 px-6 max-w-6xl mx-auto">
                <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <h2 className="text-3xl font-bold text-gray-800">Featured Website Projects</h2>
                    <p className="text-gray-600 mt-3">Every project is crafted with purpose, precision, and passion.</p>
                </motion.div>
                <motion.div
                    className="grid md:grid-cols-2 gap-8"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                >
                    {projects.map((p, i) => (
                        <motion.div key={i} variants={scaleUp}>
                            <NavLink to="/contact" className="block bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer">
                                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative overflow-hidden">
                                    <div className="text-center">
                                        <div className="text-4xl mb-2">🌐</div>
                                        <div className="text-blue-600 font-semibold">{p.name}</div>
                                    </div>
                                    <div className="absolute inset-0 bg-[#0b1f2d] bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                                        <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 px-4 py-2 rounded-lg text-sm">
                                            Get Similar Website →
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full font-medium">{p.category}</span>
                                        <span className="text-gray-400 text-xs">{p.tech}</span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{p.name}</h3>
                                    <p className="text-gray-600 text-sm">{p.desc}</p>
                                    <div className="mt-3 text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">Request Similar Project →</div>
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

export default WebPortfolio;

