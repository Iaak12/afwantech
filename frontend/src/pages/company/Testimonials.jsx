import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Breadcrumb from "../../components/common/Breadcrumb";
import PageMotion, { fadeUp, scaleUp, staggerContainer } from "../../components/common/PageMotion";
import API_BASE_URL from "../../config/api";

const Testimonials = () => {
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPageData = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/api/pages/testimonials`);
                if (!res.ok) throw new Error("Failed to fetch testimonials data");
                const result = await res.json();
                setPageData(result);
            } catch (error) {
                console.error("Error fetching testimonials page data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPageData();
    }, []);

    const getSection = (type) => pageData?.sections?.find(s => s.type === type)?.data || null;

    const heroData = getSection('testimonials_hero');
    const statsData = getSection('testimonials_stats');
    const reviewData = getSection('testimonials_review');
    const ctaData = getSection('testimonials_cta');

    const defaultStats = [{ number: "5000+", label: "Happy Clients" }, { number: "98%", label: "Satisfaction Rate" }, { number: "4.9/5", label: "Average Rating" }, { number: "10+", label: "Years of Excellence" }];
    const defaultReviews = [{ name: "Rajesh Kumar", company: "DRH Sports", role: "CEO", rating: 5, review: "Afwan Tech completely transformed our online presence. Our website traffic increased by 300% and we now get 50+ leads per month through our website alone. Highly recommended!" }, { name: "Priya Sharma", company: "HealthFirst Clinic", role: "Director", rating: 5, review: "The team at Afwan Tech understood our healthcare brand perfectly. Our new website looks incredibly professional and our patient enquiries have doubled since the launch." }, { name: "Amit Patel", company: "Prime Real Estate", role: "Founder", rating: 5, review: "We ranked on Page 1 of Google for our top keywords within just 3 months. The SEO results are outstanding and the team is always responsive and helpful." }, { name: "Sunita Verma", company: "Fashion House", role: "Owner", rating: 5, review: "Our ecommerce store designed by Afwan Tech has been a game-changer. The design is beautiful, the loading speed is great, and our online sales have tripled!" }, { name: "Vikram Singh", company: "TechSpark Solutions", role: "Marketing Head", rating: 5, review: "Their digital marketing services are excellent. The team is data-driven, transparent, and genuinely cares about results. Our cost per lead has reduced by 60%." }, { name: "Meera Joshi", company: "EduLearn Academy", role: "Principal", rating: 5, review: "Afwan Tech created a stunning website and implemented SEO that helped us rank for local search terms. Student admissions have increased significantly." }];

    if (loading) {
        return (
            <div className="py-20 text-center text-gray-500 min-h-[50vh] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                <span className="ml-3 font-semibold text-lg">Loading Testimonials...</span>
            </div>
        );
    }

    return (
        <PageMotion>
            <Breadcrumb currentPage="Testimonials" />

            {/* Hero Section */}
            <motion.section
                className="bg-gradient-to-r from-[#0b1f2d] to-[#1d3f54] text-white py-20 px-6 text-center"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
                {heroData?.badge && <span className="inline-block bg-blue-600 text-sm px-4 py-1 rounded-full mb-4">{heroData.badge}</span>}
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{heroData?.title || 'What Our Clients Say'}</h1>
                <div className="text-gray-300 max-w-2xl mx-auto text-lg" dangerouslySetInnerHTML={{ __html: heroData?.description || '' }} />
            </motion.section>

            {/* Stats Section */}
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

            {/* Testimonials Grid */}
            <section className="py-16 px-6 max-w-6xl mx-auto">
                <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <h2 className="text-3xl font-bold text-gray-800">{reviewData?.title || 'Real Stories. Real Results.'}</h2>
                    <div className="text-gray-600 mt-3" dangerouslySetInnerHTML={{ __html: reviewData?.description || '' }} />
                </motion.div>
                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                >
                    {(reviewData?.testimonials || defaultReviews).map((t, i) => (
                        <motion.div
                            key={i}
                            variants={scaleUp}
                            whileHover={{ y: -5 }}
                            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col"
                        >
                            <div className="flex gap-1 mb-3">
                                {Array(t.rating || 5).fill(0).map((_, j) => (
                                    <span key={j} className="text-yellow-400 text-lg">★</span>
                                ))}
                            </div>
                            <div className="text-gray-600 leading-relaxed mb-5 italic flex-1" dangerouslySetInnerHTML={{ __html: `"${t.review}"` }} />
                            <div className="border-t pt-4 flex items-center gap-3 mt-auto">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold shrink-0">
                                    {t.name.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-800">{t.name}</div>
                                    <div className="text-gray-500 text-sm">{t.role}, {t.company}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* CTA Section */}
            <motion.section
                className="bg-blue-600 text-white py-16 px-6 text-center"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
                <h2 className="text-3xl font-bold mb-4">{ctaData?.title || 'Ready to Write Your Success Story?'}</h2>
                <div className="text-blue-200 mb-8 max-w-xl mx-auto" dangerouslySetInnerHTML={{ __html: ctaData?.description || '' }} />
                <a href={ctaData?.btnLink || "/contact"} className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                    {ctaData?.btnText || 'Get Started Today'}
                </a>
            </motion.section>
        </PageMotion>
    );
};

export default Testimonials;

