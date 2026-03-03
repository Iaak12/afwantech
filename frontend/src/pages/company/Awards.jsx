import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Breadcrumb from "../../components/common/Breadcrumb";
import ListenFromClients from "../../components/home/ListenFromClients";
import PageMotion, { fadeUp, scaleUp, staggerContainer } from "../../components/common/PageMotion";
import API_BASE_URL from "../../config/api";

const Awards = () => {
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPageData = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/api/pages/awards`);
                if (!res.ok) throw new Error("Failed to fetch awards data");
                const result = await res.json();
                setPageData(result);
            } catch (error) {
                console.error("Error fetching awards page data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPageData();
    }, []);

    const getSection = (type) => pageData?.sections?.find(s => s.type === type)?.data || null;

    const heroData = getSection('awards_hero');
    const gridData = getSection('awards_grid');
    const milestonesData = getSection('awards_milestones');

    const defaultAwards = [
        { year: "2024", title: "Best SEO Company of the Year", org: "Digital Excellence Awards", desc: "Recognized for delivering exceptional SEO results and organic growth for clients across India.", color: "border-yellow-400 bg-yellow-50" },
        { year: "2023", title: "Top Digital Marketing Agency — India", org: "Business World Awards", desc: "Awarded for outstanding performance in multi-channel digital marketing campaigns.", color: "border-blue-400 bg-blue-50" },
        { year: "2023", title: "Best Web Design Company", org: "Design India Summit", desc: "Honored for creating visually stunning, user-centric, and high-converting website designs.", color: "border-purple-400 bg-purple-50" },
        { year: "2022", title: "Fastest Growing Digital Agency", org: "StartupIndia Recognition", desc: "Recognized for unprecedented growth and creating significant employment in the digital sector.", color: "border-green-400 bg-green-50" },
        { year: "2022", title: "Best SME Digital Partner", org: "MSME Excellence Awards", desc: "Awarded for exceptional contribution to helping small and medium enterprises grow digitally.", color: "border-orange-400 bg-orange-50" },
        { year: "2021", title: "Excellence in Customer Service", org: "Customer Experience Forum", desc: "Recognized for our 98% client satisfaction rate and outstanding post-delivery support.", color: "border-pink-400 bg-pink-50" }
    ];

    const defaultMilestones = [
        { number: "10+", label: "Years in Business" },
        { number: "5000+", label: "Projects Delivered" },
        { number: "200+", label: "Team Members" },
        { number: "15+", label: "National Awards" }
    ];

    if (loading) {
        return (
            <div className="py-20 text-center text-gray-500 min-h-[50vh] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                <span className="ml-3 font-semibold text-lg">Loading Awards...</span>
            </div>
        );
    }

    return (
        <PageMotion>
            <Breadcrumb currentPage="Awards & Achievements" />

            {/* Hero Section */}
            <motion.section
                className="bg-gradient-to-r from-[#0b1f2d] to-[#1d3f54] text-white py-20 px-6 text-center"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
                {heroData?.badge && <span className="inline-block bg-yellow-500 text-black text-sm px-4 py-1 rounded-full mb-4 font-semibold">{heroData.badge}</span>}
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{heroData?.title || 'Awards & Achievements'}</h1>
                <div className="text-gray-300 max-w-2xl mx-auto text-lg" dangerouslySetInnerHTML={{ __html: heroData?.description || '' }} />
            </motion.section>

            {/* Awards Grid */}
            <section className="py-16 px-6 max-w-6xl mx-auto">
                <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <h2 className="text-3xl font-bold text-gray-800">{gridData?.title || 'Our Recognition & Milestones'}</h2>
                    <div className="text-gray-600 mt-3" dangerouslySetInnerHTML={{ __html: gridData?.description || '' }} />
                </motion.div>
                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                >
                    {(gridData?.awards || defaultAwards).map((award, i) => (
                        <motion.div key={i} variants={scaleUp} whileHover={{ y: -5 }} className={`${award.color || 'border-yellow-400 bg-yellow-50'} border-l-4 rounded-2xl p-6 hover:shadow-md transition-all`}>
                            <div className="text-sm font-semibold text-gray-500 mb-2">{award.year}</div>
                            <div className="text-3xl mb-3">🏆</div>
                            <h3 className="text-lg font-bold text-gray-800 mb-1">{award.title}</h3>
                            <div className="text-sm font-medium text-gray-500 mb-3">{award.org}</div>
                            <div className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: award.desc }} />
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Milestones */}
            <motion.section
                className="bg-gray-50 py-16 px-6"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-10">{milestonesData?.title || 'Company Milestones'}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {(milestonesData?.milestones || defaultMilestones).map((m, i) => (
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
