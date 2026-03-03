import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Breadcrumb from "../../components/common/Breadcrumb";
import ListenFromClients from "../../components/home/ListenFromClients";
import PageMotion, { fadeUp, slideLeft, slideRight, scaleUp, staggerContainer } from "../../components/common/PageMotion";
import API_BASE_URL from "../../config/api";

const Mission = () => {
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPageData = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/api/pages/mission`);
                if (!res.ok) throw new Error("Failed to fetch mission data");
                const result = await res.json();
                setPageData(result);
            } catch (error) {
                console.error("Error fetching mission page data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPageData();
    }, []);

    const getSection = (type) => pageData?.sections?.find(s => s.type === type)?.data || null;

    const details = getSection('mission_details') || {};
    const heroData = details.hero || {};
    const missionData = details.mission || {};
    const visionData = details.vision || {};
    const goalsData = details.goalsSection || {};

    if (loading) {
        return (
            <div className="py-20 text-center text-gray-500 min-h-[50vh] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                <span className="ml-3 font-semibold text-lg">Loading Mission...</span>
            </div>
        );
    }

    return (
        <PageMotion>
            <Breadcrumb currentPage="Mission, Vision & Goals" />

            <motion.section
                className="bg-gradient-to-r from-[#0b1f2d] to-[#1d3f54] text-white py-20 px-6 text-center"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
                {heroData?.badge && <span className="inline-block bg-blue-600 text-sm px-4 py-1 rounded-full mb-4">{heroData.badge}</span>}
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{heroData?.title || 'Mission, Vision & Goals'}</h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg" dangerouslySetInnerHTML={{ __html: heroData?.description || '' }} />
            </motion.section>

            {/* Mission */}
            <section className="py-16 px-6 max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideLeft}>
                        {missionData?.badge && <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">{missionData.badge}</span>}
                        <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-800">{missionData?.title || 'Empowering Businesses Through Digital Innovation'}</h2>
                        <div className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: missionData?.description || '' }} />
                    </motion.div>
                    <motion.div className="bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-600" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideRight}>
                        <ul className="space-y-4 text-gray-700">
                            {(missionData?.points || [
                                "To innovate and deliver customized digital solutions that drive rapid business growth.",
                                "To empower brands with state-of-the-art web technologies and marketing strategies.",
                                "To maintain an uncompromising focus on quality, transparency, and ROI.",
                                "To build long-term, mutually beneficial partnerships with our clients globally."
                            ]).map((item, i) => (
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
                                {(visionData?.points || [
                                    "To be globally recognized as the most innovative and reliable digital transformation agency.",
                                    "To continually evolve with technology and set new industry standards.",
                                    "To cultivate an inspiring workplace where creative minds build the future of the web.",
                                    "To make high-quality digital marketing accessible to businesses of all sizes."
                                ]).map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="text-green-600 font-bold mt-1">★</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideRight}>
                            {visionData?.badge && <span className="text-green-600 font-semibold uppercase tracking-wider text-sm">{visionData.badge}</span>}
                            <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-800">{visionData?.title || "To Be India's Most Trusted Digital Growth Partner"}</h2>
                            <div className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: visionData?.description || '' }} />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Goals */}
            <section className="py-16 px-6 max-w-5xl mx-auto">
                <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    {goalsData?.badge && <span className="text-purple-600 font-semibold uppercase tracking-wider text-sm">{goalsData.badge}</span>}
                    <h2 className="text-3xl font-bold mt-2 text-gray-800">{goalsData?.title || 'Strategic Goals Driving Our Growth'}</h2>
                    <div className="text-gray-600 mt-3 max-w-xl mx-auto" dangerouslySetInnerHTML={{ __html: goalsData?.description || '' }} />
                </motion.div>
                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                >
                    {(goalsData?.goals || [
                        { title: "Client Success", desc: "Deliver measurable ROI for every client through data-driven strategies.", color: "bg-blue-100 border-blue-400" },
                        { title: "Team Excellence", desc: "Build a team of passionate digital experts committed to continuous learning.", color: "bg-green-100 border-green-400" },
                        { title: "Innovation", desc: "Continuously adopt emerging technologies for next-generation solutions.", color: "bg-purple-100 border-purple-400" },
                        { title: "Expansion", desc: "Expand to 50+ cities through our franchise network by 2026.", color: "bg-orange-100 border-orange-400" },
                        { title: "Trust", desc: "Maintain a 95%+ client satisfaction rate through transparent service.", color: "bg-pink-100 border-pink-400" },
                        { title: "Impact", desc: "Create a lasting positive impact on Indian businesses through digital empowerment.", color: "bg-teal-100 border-teal-400" }
                    ]).map((goal, i) => (
                        <motion.div key={i} variants={scaleUp} className={`${goal.color || 'bg-blue-100 border-blue-400'} border-l-4 rounded-xl p-6`}>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">{goal.title}</h3>
                            <p className="text-gray-600 text-sm">{goal.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

        </PageMotion>
    );
};

export default Mission;
