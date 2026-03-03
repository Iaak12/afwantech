import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Breadcrumb from "../../components/common/Breadcrumb";
import ListenFromClients from "../../components/home/ListenFromClients";
import PageMotion, { fadeUp, scaleUp, staggerContainer } from "../../components/common/PageMotion";
import API_BASE_URL from "../../config/api";

const Clients = () => {
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPageData = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/api/pages/clients`);
                if (!res.ok) throw new Error("Failed to fetch clients data");
                const result = await res.json();
                setPageData(result);
            } catch (error) {
                console.error("Error fetching clients page data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPageData();
    }, []);

    const getSection = (type) => pageData?.sections?.find(s => s.type === type)?.data || null;

    const heroData = getSection('clients_hero');
    const statsData = getSection('clients_stats');
    const brandsData = getSection('clients_brands');
    const industriesData = getSection('clients_industries');

    const defaultStats = [{ number: "5000+", label: "Happy Clients" }, { number: "100+", label: "Cities Served" }, { number: "20+", label: "Industries" }, { number: "98%", label: "Client Retention" }];
    const defaultBrands = [{ name: "DRH Sports", industry: "Sports Manufacturer" }, { name: "MilkMan Dairy", industry: "Dairy Equipment" }, { name: "Green Valley Farms", industry: "Agriculture" }, { name: "TechSpark Solutions", industry: "IT Company" }, { name: "Prime Real Estate", industry: "Real Estate" }, { name: "HealthFirst Clinic", industry: "Healthcare" }, { name: "Fashion House", industry: "Retail & Fashion" }, { name: "EduLearn Academy", industry: "Education" }, { name: "AutoZone Motors", industry: "Automotive" }, { name: "Spice Garden Restaurant", industry: "Food & Beverage" }, { name: "Build Smart Infra", industry: "Construction" }, { name: "CloudNet Technologies", industry: "SaaS & Technology" }];
    const defaultIndustries = ["Healthcare", "Real Estate", "Education", "E-commerce", "Manufacturing", "Finance & Legal", "Restaurant & Food", "Automotive", "Fashion & Retail", "IT & Technology", "Construction", "Travel & Hospitality", "Fitness & Wellness", "Agriculture", "Professional Services"];

    if (loading) {
        return (
            <div className="py-20 text-center text-gray-500 min-h-[50vh] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                <span className="ml-3 font-semibold text-lg">Loading Clients...</span>
            </div>
        );
    }

    return (
        <PageMotion>
            <Breadcrumb currentPage="Our Clients" />

            {/* Hero Section */}
            <motion.section
                className="bg-gradient-to-r from-[#0b1f2d] to-[#1d3f54] text-white py-20 px-6 text-center"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
                {heroData?.badge && <span className="inline-block bg-blue-600 text-sm px-4 py-1 rounded-full mb-4">{heroData.badge}</span>}
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{heroData?.title || 'Our Clients'}</h1>
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

            {/* Brands Grid */}
            <section className="py-16 px-6 max-w-6xl mx-auto">
                <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <h2 className="text-3xl font-bold text-gray-800">{brandsData?.title || 'Brands That Trust Afwan Tech'}</h2>
                    <div className="text-gray-600 mt-3" dangerouslySetInnerHTML={{ __html: brandsData?.description || '' }} />
                </motion.div>
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                >
                    {(brandsData?.clients || defaultBrands).map((client, i) => (
                        <motion.div key={i} variants={scaleUp} whileHover={{ y: -4 }} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all text-center">
                            <div className="w-16 h-16 bg-blue-50 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl font-bold text-blue-600">
                                {client.name.charAt(0).toUpperCase()}
                            </div>
                            <h3 className="font-semibold text-gray-800 text-sm">{client.name}</h3>
                            <p className="text-gray-400 text-xs mt-1">{client.industry}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Industries Serve */}
            <motion.section
                className="bg-gray-50 py-16 px-6"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-3">{industriesData?.title || 'Industries We Serve'}</h2>
                    <div className="text-gray-600 mb-10" dangerouslySetInnerHTML={{ __html: industriesData?.description || '' }} />
                    <div className="flex flex-wrap justify-center gap-3">
                        {(industriesData?.industries || defaultIndustries).map((industry, i) => (
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

