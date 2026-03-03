import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Breadcrumb from "../../components/common/Breadcrumb";
import ListenFromClients from "../../components/home/ListenFromClients";
import PageMotion, { fadeUp, scaleUp, staggerContainer } from "../../components/common/PageMotion";
import API_BASE_URL from "../../config/api";

const WhyUs = () => {
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPageData = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/api/pages/why-us`);
                if (!res.ok) throw new Error("Failed to fetch why-us data");
                const result = await res.json();
                setPageData(result);
            } catch (error) {
                console.error("Error fetching why-us page data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPageData();
    }, []);

    const getSection = (type) => pageData?.sections?.find(s => s.type === type)?.data || null;

    const heroData = getSection('why_us_hero');
    const statsData = getSection('why_us_stats');
    const reasonsData = getSection('why_us_reasons');
    const ctaData = getSection('why_us_cta');

    const defaultStats = [{ number: "5000+", label: "Projects Completed" }, { number: "200+", label: "Team Experts" }, { number: "98%", label: "Client Satisfaction" }, { number: "10+", label: "Years of Experience" }];
    const defaultReasons = [{ icon: "🏆", title: "Award-Winning Agency", desc: "Recognized as one of India's best SEO and digital marketing companies." }, { icon: "📊", title: "Data-Driven Approach", desc: "Every strategy is backed by deep data analysis, not guesswork." }, { icon: "👥", title: "Experienced Team", desc: "200+ certified digital marketing and web design professionals." }, { icon: "🚀", title: "Proven Track Record", desc: "5000+ successful projects delivered across 20+ industries." }, { icon: "💰", title: "Transparent Pricing", desc: "No hidden costs. Clear, upfront pricing for every service." }, { icon: "🔒", title: "100% Transparency", desc: "Regular reporting and real-time access to your campaign data." }, { icon: "🎯", title: "Results-Focused", desc: "We measure success by your business growth, not vanity metrics." }, { icon: "🌍", title: "Pan-India Presence", desc: "Serving clients across 100+ cities with local expertise." }];

    if (loading) {
        return (
            <div className="py-20 text-center text-gray-500 min-h-[50vh] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                <span className="ml-3 font-semibold text-lg">Loading Why Us...</span>
            </div>
        );
    }

    return (
        <PageMotion>
            <Breadcrumb currentPage="Why Afwan Tech" />

            {/* Hero Section */}
            <motion.section
                className="bg-gradient-to-r from-[#0b1f2d] to-[#1d3f54] text-white py-20 px-6 text-center"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
                {heroData?.badge && <span className="inline-block bg-blue-600 text-sm px-4 py-1 rounded-full mb-4">{heroData.badge}</span>}
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{heroData?.title || 'Why Afwan Tech?'}</h1>
                <div className="text-gray-300 max-w-2xl mx-auto text-lg" dangerouslySetInnerHTML={{ __html: heroData?.description || '' }} />
            </motion.section>

            {/* Stats Grid */}
            <motion.section
                className="bg-blue-600 text-white py-12 px-6"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            >
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {(statsData?.stats || defaultStats).map((stat, i) => (
                        <motion.div key={i} variants={scaleUp}>
                            <div className="text-4xl font-bold">{stat.number}</div>
                            <div className="text-blue-200 mt-1">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Reasons Grid */}
            <section className="py-16 px-6 max-w-6xl mx-auto">
                <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <h2 className="text-3xl font-bold text-gray-800">{reasonsData?.title || '8 Reasons Why Businesses Choose Us'}</h2>
                    <div className="text-gray-600 mt-3 max-w-xl mx-auto" dangerouslySetInnerHTML={{ __html: reasonsData?.description || '' }} />
                </motion.div>
                <motion.div
                    className="grid md:grid-cols-4 gap-6"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                >
                    {(reasonsData?.reasons || defaultReasons).map((reason, i) => (
                        <motion.div key={i} variants={scaleUp} whileHover={{ y: -5 }} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all text-center">
                            <div className="text-4xl mb-3">{reason.icon}</div>
                            <h3 className="font-bold text-gray-800 mb-2">{reason.title}</h3>
                            <p className="text-gray-500 text-sm">{reason.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Call to Action */}
            <motion.section
                className="bg-gray-50 py-16 px-6 text-center"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{ctaData?.title || 'Ready to Experience the Afwan Tech Difference?'}</h2>
                <div className="text-gray-600 mb-8 max-w-xl mx-auto" dangerouslySetInnerHTML={{ __html: ctaData?.description || '' }} />
                <a href={ctaData?.btnLink || "/contact"} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    {ctaData?.btnText || 'Get Free Consultation'}
                </a>
            </motion.section>

            <ListenFromClients />
        </PageMotion>
    );
};

export default WhyUs;
