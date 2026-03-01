import { motion } from "framer-motion";
import Breadcrumb from "../../components/common/Breadcrumb";
import ListenFromClients from "../../components/home/ListenFromClients";
import PageMotion, { fadeUp, scaleUp, staggerContainer } from "../../components/common/PageMotion";

const Awards = () => {
    const awards = [
        { year: "2024", title: "Best SEO Company of the Year", org: "Digital Excellence Awards", desc: "Recognized for delivering exceptional SEO results and organic growth for clients across India.", color: "border-yellow-400 bg-yellow-50" },
        { year: "2023", title: "Top Digital Marketing Agency — India", org: "Business World Awards", desc: "Awarded for outstanding performance in multi-channel digital marketing campaigns.", color: "border-blue-400 bg-blue-50" },
        { year: "2023", title: "Best Web Design Company", org: "Design India Summit", desc: "Honored for creating visually stunning, user-centric, and high-converting website designs.", color: "border-purple-400 bg-purple-50" },
        { year: "2022", title: "Fastest Growing Digital Agency", org: "StartupIndia Recognition", desc: "Recognized for unprecedented growth and creating significant employment in the digital sector.", color: "border-green-400 bg-green-50" },
        { year: "2022", title: "Best SME Digital Partner", org: "MSME Excellence Awards", desc: "Awarded for exceptional contribution to helping small and medium enterprises grow digitally.", color: "border-orange-400 bg-orange-50" },
        { year: "2021", title: "Excellence in Customer Service", org: "Customer Experience Forum", desc: "Recognized for our 98% client satisfaction rate and outstanding post-delivery support.", color: "border-pink-400 bg-pink-50" },
    ];

    return (
        <PageMotion>
            <Breadcrumb currentPage="Awards & Achievements" />

            <motion.section
                className="bg-gradient-to-r from-[#0b1f2d] to-[#1d3f54] text-white py-20 px-6 text-center"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
                <span className="inline-block bg-yellow-500 text-black text-sm px-4 py-1 rounded-full mb-4 font-semibold">🏆 Recognized Excellence</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Awards & Achievements</h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                    Our commitment to excellence has been recognized by top industry bodies across India.
                </p>
            </motion.section>

            <section className="py-16 px-6 max-w-6xl mx-auto">
                <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <h2 className="text-3xl font-bold text-gray-800">Our Recognition & Milestones</h2>
                    <p className="text-gray-600 mt-3">Awards that reflect our dedication to delivering world-class digital services.</p>
                </motion.div>
                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                >
                    {awards.map((award, i) => (
                        <motion.div key={i} variants={scaleUp} whileHover={{ y: -5 }} className={`${award.color} border-l-4 rounded-2xl p-6 hover:shadow-md transition-all`}>
                            <div className="text-sm font-semibold text-gray-500 mb-2">{award.year}</div>
                            <div className="text-3xl mb-3">🏆</div>
                            <h3 className="text-lg font-bold text-gray-800 mb-1">{award.title}</h3>
                            <div className="text-sm font-medium text-gray-500 mb-3">{award.org}</div>
                            <p className="text-gray-600 text-sm">{award.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <motion.section
                className="bg-gray-50 py-16 px-6"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-10">Company Milestones</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: "10+", label: "Years in Business" },
                            { number: "5000+", label: "Projects Delivered" },
                            { number: "200+", label: "Team Members" },
                            { number: "15+", label: "National Awards" },
                        ].map((m, i) => (
                            <motion.div key={i} variants={scaleUp}>
                                <div className="text-4xl font-bold text-blue-600">{m.number}</div>
                                <div className="text-gray-600 mt-2">{m.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            <ListenFromClients />
        </PageMotion>
    );
};

export default Awards;
