import { motion } from "framer-motion";
import Breadcrumb from "../../components/common/Breadcrumb";
import ListenFromClients from "../../components/home/ListenFromClients";
import PageMotion, { fadeUp, scaleUp, staggerContainer } from "../../components/common/PageMotion";

const WhyUs = () => {
    const reasons = [
        { icon: "🏆", title: "Award-Winning Agency", desc: "Recognized as one of India's best SEO and digital marketing companies." },
        { icon: "📊", title: "Data-Driven Approach", desc: "Every strategy is backed by deep data analysis, not guesswork." },
        { icon: "👥", title: "Experienced Team", desc: "200+ certified digital marketing and web design professionals." },
        { icon: "🚀", title: "Proven Track Record", desc: "5000+ successful projects delivered across 20+ industries." },
        { icon: "💰", title: "Transparent Pricing", desc: "No hidden costs. Clear, upfront pricing for every service." },
        { icon: "🔒", title: "100% Transparency", desc: "Regular reporting and real-time access to your campaign data." },
        { icon: "🎯", title: "Results-Focused", desc: "We measure success by your business growth, not vanity metrics." },
        { icon: "🌍", title: "Pan-India Presence", desc: "Serving clients across 100+ cities with local expertise." },
    ];

    const stats = [
        { number: "5000+", label: "Projects Completed" },
        { number: "200+", label: "Team Experts" },
        { number: "98%", label: "Client Satisfaction" },
        { number: "10+", label: "Years of Experience" },
    ];

    return (
        <PageMotion>
            <Breadcrumb currentPage="Why Afwan Tech" />

            <motion.section
                className="bg-gradient-to-r from-[#0b1f2d] to-[#1d3f54] text-white py-20 px-6 text-center"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
                <span className="inline-block bg-blue-600 text-sm px-4 py-1 rounded-full mb-4">Why Choose Us</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Why Afwan Tech?</h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                    We don't just deliver services — we deliver results. Discover why 5000+ businesses trust Afwan Tech as their digital growth partner.
                </p>
            </motion.section>

            <motion.section
                className="bg-blue-600 text-white py-12 px-6"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            >
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, i) => (
                        <motion.div key={i} variants={scaleUp}>
                            <div className="text-4xl font-bold">{stat.number}</div>
                            <div className="text-blue-200 mt-1">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <section className="py-16 px-6 max-w-6xl mx-auto">
                <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <h2 className="text-3xl font-bold text-gray-800">8 Reasons Why Businesses Choose Us</h2>
                    <p className="text-gray-600 mt-3 max-w-xl mx-auto">From award-winning expertise to transparent communication — here's what sets us apart.</p>
                </motion.div>
                <motion.div
                    className="grid md:grid-cols-4 gap-6"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                >
                    {reasons.map((reason, i) => (
                        <motion.div key={i} variants={scaleUp} whileHover={{ y: -5 }} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all text-center">
                            <div className="text-4xl mb-3">{reason.icon}</div>
                            <h3 className="font-bold text-gray-800 mb-2">{reason.title}</h3>
                            <p className="text-gray-500 text-sm">{reason.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <motion.section
                className="bg-gray-50 py-16 px-6 text-center"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Experience the Afwan Tech Difference?</h2>
                <p className="text-gray-600 mb-8 max-w-xl mx-auto">Join 5000+ businesses already growing with us.</p>
                <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Get Free Consultation
                </a>
            </motion.section>

            <ListenFromClients />
        </PageMotion>
    );
};

export default WhyUs;
