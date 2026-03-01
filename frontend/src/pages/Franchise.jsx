import { motion } from "framer-motion";
import Breadcrumb from "../components/common/Breadcrumb";
import PageMotion, { fadeUp, scaleUp, staggerContainer, slideLeft } from "../components/common/PageMotion";

const Franchise = () => {
    const benefits = [
        { icon: "🏆", title: "Established Brand", desc: "Operate under India's award-winning digital agency brand." },
        { icon: "📚", title: "Full Training", desc: "Comprehensive training on all services, tools, and processes." },
        { icon: "💼", title: "Ready-Made Business", desc: "Complete business setup — sales kit, CRM, and support systems." },
        { icon: "🚀", title: "Marketing Support", desc: "National-level marketing support to attract local clients." },
        { icon: "💰", title: "High ROI", desc: "Average franchise partner breaks even within 3-6 months." },
        { icon: "🌍", title: "Exclusive Territory", desc: "Guaranteed exclusive territory rights in your city or region." },
    ];

    const steps = [
        { step: "01", title: "Apply Online", desc: "Fill the franchise inquiry form with your basic details." },
        { step: "02", title: "Consultation Call", desc: "Our franchise team will schedule a detailed discovery call." },
        { step: "03", title: "Agreement & Setup", desc: "Sign the franchise agreement and complete onboarding." },
        { step: "04", title: "Training", desc: "Attend our comprehensive 30-day franchise training program." },
        { step: "05", title: "Launch", desc: "Launch your Afwan Tech franchise with full support from day one." },
    ];

    return (
        <PageMotion>
            <Breadcrumb currentPage="Franchise Opportunity" />

            <motion.section
                className="bg-gradient-to-r from-[#0b1f2d] to-[#1d3f54] text-white py-20 px-6 text-center"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
                <motion.span
                    className="inline-block bg-yellow-400 text-black text-sm px-4 py-1 rounded-full mb-4 font-semibold"
                    animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2 }}
                >
                    🚀 Business Opportunity
                </motion.span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Franchise Opportunity</h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                    Own your digital agency business under India's award-winning Afwan Tech brand. Low investment, high returns, and full support.
                </p>
                <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-block mt-8 bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
                >
                    Apply for Franchise
                </motion.a>
            </motion.section>

            <motion.section
                className="bg-blue-600 text-white py-12 px-6"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            >
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { number: "50+", label: "Active Franchises" },
                        { number: "₹3-5L", label: "Investment Required" },
                        { number: "3-6M", label: "Avg Break-Even" },
                        { number: "₹30L+", label: "Annual Revenue Potential" },
                    ].map((s, i) => (
                        <motion.div key={i} variants={scaleUp}>
                            <div className="text-3xl font-bold">{s.number}</div>
                            <div className="text-blue-200 mt-1 text-sm">{s.label}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <section className="py-16 px-6 max-w-6xl mx-auto">
                <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <h2 className="text-3xl font-bold text-gray-800">Why Join the Afwan Tech Franchise Network?</h2>
                    <p className="text-gray-600 mt-3">Everything you need to build a successful digital agency business.</p>
                </motion.div>
                <motion.div
                    className="grid md:grid-cols-3 gap-6"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                >
                    {benefits.map((b, i) => (
                        <motion.div key={i} variants={scaleUp} whileHover={{ y: -6 }} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all text-center">
                            <div className="text-4xl mb-3">{b.icon}</div>
                            <h3 className="font-bold text-gray-800 mb-2">{b.title}</h3>
                            <p className="text-gray-500 text-sm">{b.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <section className="bg-gray-50 py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <h2 className="text-3xl font-bold text-gray-800">How to Get Started</h2>
                        <p className="text-gray-600 mt-3">Starting your Afwan Tech franchise is simple and fast.</p>
                    </motion.div>
                    <motion.div
                        className="space-y-6"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                    >
                        {steps.map((s, i) => (
                            <motion.div key={i} variants={slideLeft} className="flex items-start gap-6 bg-white rounded-xl p-6 shadow-sm">
                                <div className="bg-blue-600 text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                    {s.step}
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">{s.title}</h3>
                                    <p className="text-gray-600 text-sm">{s.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <motion.section
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6 text-center"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
                <h2 className="text-3xl font-bold mb-4">Ready to Build Your Digital Empire?</h2>
                <p className="text-blue-200 mb-8 max-w-xl mx-auto">Limited franchise slots available in select cities. Apply now to secure your exclusive territory.</p>
                <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors inline-block"
                >
                    Apply for Franchise Today
                </motion.a>
            </motion.section>
        </PageMotion>
    );
};

export default Franchise;
