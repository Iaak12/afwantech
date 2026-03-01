import { motion } from "framer-motion";
import Breadcrumb from "../components/common/Breadcrumb";
import PageMotion, { fadeUp, scaleUp, staggerContainer, slideLeft } from "../components/common/PageMotion";

const Careers = () => {
    const openings = [
        { title: "Senior SEO Executive", type: "Full-Time", location: "Noida / Remote", exp: "2-4 Years" },
        { title: "Web Designer (WordPress)", type: "Full-Time", location: "Noida", exp: "1-3 Years" },
        { title: "Content Writer", type: "Full-Time / Remote", location: "Remote", exp: "1-2 Years" },
        { title: "Digital Marketing Manager", type: "Full-Time", location: "Noida", exp: "3-5 Years" },
        { title: "Social Media Executive", type: "Full-Time", location: "Noida", exp: "1-2 Years" },
        { title: "Business Development Executive", type: "Full-Time", location: "Multiple Cities", exp: "1-3 Years" },
    ];

    const perks = [
        { icon: "💰", title: "Competitive Salary", desc: "Market-leading compensation with performance bonuses." },
        { icon: "📈", title: "Growth Opportunities", desc: "Clear career progression and skill development programs." },
        { icon: "🏠", title: "Work From Home", desc: "Flexible remote work options for select roles." },
        { icon: "🎓", title: "Training & Certifications", desc: "Funded training and professional certifications." },
        { icon: "🤝", title: "Great Culture", desc: "Young, energetic, and collaborative team environment." },
        { icon: "🏥", title: "Health Benefits", desc: "Health insurance coverage for you and your family." },
    ];

    return (
        <PageMotion>
            <Breadcrumb currentPage="Careers — We Are Hiring" />

            <motion.section
                className="bg-gradient-to-r from-[#0b1f2d] to-[#1d3f54] text-white py-20 px-6 text-center"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
                <motion.span
                    className="inline-block bg-yellow-400 text-black text-sm px-4 py-1 rounded-full mb-4 font-bold"
                    animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2 }}
                >
                    🔥 WE ARE HIRING
                </motion.span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Join the Afwan Tech Team</h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                    Be part of India's fastest-growing digital agency. We're always looking for passionate, talented individuals.
                </p>
                <a href="#openings" className="inline-block mt-8 bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors">
                    View Open Positions
                </a>
            </motion.section>

            <section className="py-16 px-6 max-w-5xl mx-auto">
                <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <h2 className="text-3xl font-bold text-gray-800">Why Work with Us?</h2>
                    <p className="text-gray-600 mt-3">We invest in our people because they are our greatest asset.</p>
                </motion.div>
                <motion.div
                    className="grid md:grid-cols-3 gap-6"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                >
                    {perks.map((p, i) => (
                        <motion.div key={i} variants={scaleUp} whileHover={{ y: -5 }} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all text-center">
                            <div className="text-4xl mb-3">{p.icon}</div>
                            <h3 className="font-bold text-gray-800 mb-2">{p.title}</h3>
                            <p className="text-gray-500 text-sm">{p.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <section id="openings" className="bg-gray-50 py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <h2 className="text-3xl font-bold text-gray-800">Current Openings</h2>
                        <p className="text-gray-600 mt-3">Find the role that's right for you and apply today.</p>
                    </motion.div>
                    <motion.div
                        className="space-y-4"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                    >
                        {openings.map((job, i) => (
                            <motion.div key={i} variants={slideLeft} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow">
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg">{job.title}</h3>
                                    <div className="flex flex-wrap gap-3 mt-2">
                                        <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">{job.type}</span>
                                        <span className="bg-green-50 text-green-600 text-xs px-3 py-1 rounded-full">📍 {job.location}</span>
                                        <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">⏱️ {job.exp}</span>
                                    </div>
                                </div>
                                <motion.a
                                    href="mailto:hr@afwantech.com"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
                                >
                                    Apply Now
                                </motion.a>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <motion.section
                className="py-16 px-6 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
                <h2 className="text-3xl font-bold mb-3">Don't See Your Role?</h2>
                <p className="text-blue-200 mb-8 max-w-xl mx-auto">
                    We're always growing and open to talented individuals. Send us your resume and we'll reach out when a suitable position opens up.
                </p>
                <motion.a
                    href="mailto:hr@afwantech.com"
                    whileHover={{ scale: 1.05 }}
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
                >
                    Send Your Resume
                </motion.a>
            </motion.section>
        </PageMotion>
    );
};

export default Careers;
