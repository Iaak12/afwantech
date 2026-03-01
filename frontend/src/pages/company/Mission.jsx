import { motion } from "framer-motion";
import Breadcrumb from "../../components/common/Breadcrumb";
import ListenFromClients from "../../components/home/ListenFromClients";
import PageMotion, { fadeUp, slideLeft, slideRight, scaleUp, staggerContainer } from "../../components/common/PageMotion";

const Mission = () => {
    return (
        <PageMotion>
            <Breadcrumb currentPage="Mission, Vision & Goals" />

            <motion.section
                className="bg-gradient-to-r from-[#0b1f2d] to-[#1d3f54] text-white py-20 px-6 text-center"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
                <span className="inline-block bg-blue-600 text-sm px-4 py-1 rounded-full mb-4">Our Purpose</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Mission, Vision & Goals</h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                    Driven by purpose, guided by values — discover the vision that powers Afwan Tech's commitment to your digital success.
                </p>
            </motion.section>

            {/* Mission */}
            <section className="py-16 px-6 max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideLeft}>
                        <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Our Mission</span>
                        <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-800">Empowering Businesses Through Digital Innovation</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Our mission is to empower businesses of all sizes with cutting-edge digital solutions that drive real, measurable growth.
                            We believe every business — from local startups to large enterprises — deserves a powerful online presence.
                        </p>
                    </motion.div>
                    <motion.div className="bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-600" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideRight}>
                        <ul className="space-y-4 text-gray-700">
                            {[
                                "Deliver ROI-focused digital solutions",
                                "Make digital growth accessible for all businesses",
                                "Maintain transparency and integrity in every project",
                                "Build long-term partnerships based on trust",
                                "Stay ahead of industry trends and technologies",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-blue-600 font-bold mt-1">✔</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Vision */}
            <section className="bg-gray-50 py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div className="bg-green-50 rounded-2xl p-8 border-l-4 border-green-600" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideLeft}>
                            <ul className="space-y-4 text-gray-700">
                                {[
                                    "Be India's most trusted digital growth partner",
                                    "Serve 10,000+ businesses across India by 2027",
                                    "Expand digital marketing to tier-2 & tier-3 cities",
                                    "Build a nationwide franchise network",
                                    "Set new benchmarks in digital service quality",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="text-green-600 font-bold mt-1">★</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideRight}>
                            <span className="text-green-600 font-semibold uppercase tracking-wider text-sm">Our Vision</span>
                            <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-800">To Be India's Most Trusted Digital Growth Partner</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We envision a future where every Indian business — regardless of size or location — has access to
                                world-class digital marketing, web design, and branding services.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Goals */}
            <section className="py-16 px-6 max-w-5xl mx-auto">
                <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <span className="text-purple-600 font-semibold uppercase tracking-wider text-sm">Our Goals</span>
                    <h2 className="text-3xl font-bold mt-2 text-gray-800">Strategic Goals Driving Our Growth</h2>
                    <p className="text-gray-600 mt-3 max-w-xl mx-auto">Every goal we set is backed by a clear strategy and measured by real results.</p>
                </motion.div>
                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                >
                    {[
                        { title: "Client Success", desc: "Deliver measurable ROI for every client through data-driven strategies.", color: "bg-blue-100 border-blue-400" },
                        { title: "Team Excellence", desc: "Build a team of passionate digital experts committed to continuous learning.", color: "bg-green-100 border-green-400" },
                        { title: "Innovation", desc: "Continuously adopt emerging technologies for next-generation solutions.", color: "bg-purple-100 border-purple-400" },
                        { title: "Expansion", desc: "Expand to 50+ cities through our franchise network by 2026.", color: "bg-orange-100 border-orange-400" },
                        { title: "Trust", desc: "Maintain a 95%+ client satisfaction rate through transparent service.", color: "bg-pink-100 border-pink-400" },
                        { title: "Impact", desc: "Create a lasting positive impact on Indian businesses through digital empowerment.", color: "bg-teal-100 border-teal-400" },
                    ].map((goal, i) => (
                        <motion.div key={i} variants={scaleUp} className={`${goal.color} border-l-4 rounded-xl p-6`}>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">{goal.title}</h3>
                            <p className="text-gray-600 text-sm">{goal.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <ListenFromClients />
        </PageMotion>
    );
};

export default Mission;
