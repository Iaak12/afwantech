import { motion } from "framer-motion";
import Breadcrumb from "../../components/common/Breadcrumb";
import ListenFromClients from "../../components/home/ListenFromClients";
import PageMotion, { fadeUp, scaleUp, staggerContainer } from "../../components/common/PageMotion";

const Clients = () => {
    const clients = [
        { name: "DRH Sports", industry: "Sports Manufacturer" },
        { name: "MilkMan Dairy", industry: "Dairy Equipment" },
        { name: "Green Valley Farms", industry: "Agriculture" },
        { name: "TechSpark Solutions", industry: "IT Company" },
        { name: "Prime Real Estate", industry: "Real Estate" },
        { name: "HealthFirst Clinic", industry: "Healthcare" },
        { name: "Fashion House", industry: "Retail & Fashion" },
        { name: "EduLearn Academy", industry: "Education" },
        { name: "AutoZone Motors", industry: "Automotive" },
        { name: "Spice Garden Restaurant", industry: "Food & Beverage" },
        { name: "Build Smart Infra", industry: "Construction" },
        { name: "CloudNet Technologies", industry: "SaaS & Technology" },
    ];

    const stats = [
        { number: "5000+", label: "Happy Clients" },
        { number: "100+", label: "Cities Served" },
        { number: "20+", label: "Industries" },
        { number: "98%", label: "Client Retention" },
    ];

    return (
        <PageMotion>
            <Breadcrumb currentPage="Our Clients" />

            <motion.section
                className="bg-gradient-to-r from-[#0b1f2d] to-[#1d3f54] text-white py-20 px-6 text-center"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
                <span className="inline-block bg-blue-600 text-sm px-4 py-1 rounded-full mb-4">Trusted By</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Clients</h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                    5000+ businesses across India trust Afwan Tech to power their digital growth.
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
                    <h2 className="text-3xl font-bold text-gray-800">Brands That Trust Afwan Tech</h2>
                    <p className="text-gray-600 mt-3">From startups to enterprises across every industry.</p>
                </motion.div>
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                >
                    {clients.map((client, i) => (
                        <motion.div key={i} variants={scaleUp} whileHover={{ y: -4 }} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all text-center">
                            <div className="w-16 h-16 bg-blue-50 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl font-bold text-blue-600">
                                {client.name.charAt(0)}
                            </div>
                            <h3 className="font-semibold text-gray-800 text-sm">{client.name}</h3>
                            <p className="text-gray-400 text-xs mt-1">{client.industry}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <motion.section
                className="bg-gray-50 py-16 px-6"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-3">Industries We Serve</h2>
                    <p className="text-gray-600 mb-10">Deep expertise across 20+ industry verticals.</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {["Healthcare", "Real Estate", "Education", "E-commerce", "Manufacturing", "Finance & Legal",
                            "Restaurant & Food", "Automotive", "Fashion & Retail", "IT & Technology", "Construction",
                            "Travel & Hospitality", "Fitness & Wellness", "Agriculture", "Professional Services"].map((industry, i) => (
                                <motion.span
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm shadow-sm cursor-default"
                                >
                                    {industry}
                                </motion.span>
                            ))}
                    </div>
                </div>
            </motion.section>

            <ListenFromClients />
        </PageMotion>
    );
};

export default Clients;

