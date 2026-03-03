import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Breadcrumb from "../../components/common/Breadcrumb";
import ListenFromClients from "../../components/home/ListenFromClients";
import PageMotion, { fadeUp, scaleUp, staggerContainer } from "../../components/common/PageMotion";
import API_BASE_URL from "../../config/api";

const UniversalPortfolioWrapper = ({ slug }) => {
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`${API_BASE_URL}/api/pages/${slug}`)
            .then(res => res.json())
            .then(data => {
                if (data.slug) {
                    setPageData(data);
                } else {
                    setPageData(null);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching page data:", err);
                setLoading(false);
                setPageData(null);
            });
    }, [slug]);

    if (loading) return <div className="p-20 text-center text-gray-400">Loading Configuration...</div>;

    // Safely extract section data
    const getSection = (type) => {
        if (!pageData || !pageData.sections) return null;
        const section = pageData.sections.find(s => s.type === type);
        return section ? section.data : null;
    };

    // Calculate a nice fallback title
    const fallbackTitle = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    // --- UNIVERSAL FALLBACKS ---
    const getDefaults = () => {
        let type = slug.replace('-portfolio', '');
        // Standardize types
        if (type === 'web-designing') type = 'web';
        if (type === 'graphic-designing' || type === 'graphic-design') type = 'graphic';
        if (type === 'video-production') type = 'video';

        const defaults = {
            hero: { badge: 'Our Work', title: fallbackTitle, description: `Explore our collection of professionally designed ${type} projects — each built to convert visitors into customers.` },
            stats: { stats: [{ number: "2000+", label: "Projects Delivered" }, { number: "20+", label: "Industries" }, { number: "98%", label: "Client Satisfaction" }, { number: "5★", label: "Average Rating" }] },
            grid: { title: "Featured Projects", description: "Every project is crafted with purpose, precision, and passion.", projects: [] }
        };

        if (type === 'web') {
            defaults.grid.projects = [
                { name: "E-commerce Platform", category: "Web Design", tech: "React & Node.js", desc: "A high-performance online store with seamless checkout.", image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800" },
                { name: "Corporate Website", category: "Web Design", tech: "Modern UI/UX", desc: "Clean and professional branding for a global enterprise.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
                { name: "Portfolio Hub", category: "Web Design", tech: "Minimalist", desc: "Showcase site for a creative agency.", image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800" },
                { name: "SaaS Dashboard", category: "Web Development", tech: "Full Stack", desc: "Real-time data visualization platform.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" }
            ];
        } else if (type === 'seo') {
            defaults.grid.projects = [
                { name: "Retail SEO Growth", category: "SEO", tech: "Ranked #1", desc: "300% increase in organic traffic for a fashion brand.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
                { name: "Local SEO Success", category: "SEO", tech: "Google My Business", desc: "Dominated local search for a multi-city clinic network.", image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=800" },
                { name: "B2B Lead Gen", category: "SEO", tech: "Content Strategy", desc: "Secured top rankings for high-intent industry keywords.", image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c20a?auto=format&fit=crop&q=80&w=800" },
                { name: "Mobile App SEO", category: "SEO", tech: "App Store Optimization", desc: "Boosted visibility and downloads for a health app.", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" }
            ];
        } else if (type === 'graphic') {
            defaults.grid.projects = [
                { name: "Brand Identity Design", category: "Graphic Design", tech: "Logos & Branding", desc: "Created a modern visual brand for a startup.", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800" },
                { name: "Social Media Campaign", category: "Graphic Design", tech: "Visual Content", desc: "Compelling graphics that boosted engagement by 200%.", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800" },
                { name: "Product Packaging", category: "Graphic Design", tech: "Print Ready", desc: "Premium packaging design for an organic food brand.", image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800" },
                { name: "Infographic Series", category: "Graphic Design", tech: "Data Illustration", desc: "Simplified complex data for an annual business report.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" }
            ];
        } else if (type === 'video') {
            defaults.grid.projects = [
                { name: "Corporate Film", category: "Video Production", tech: "4K Cinematic", desc: "Professional brand story for an international firm.", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800" },
                { name: "Product Promo", category: "Video Production", tech: "Motion Graphics", desc: "Dynamic video showcasing app features and benefits.", image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800" },
                { name: "Customer Testimonial", category: "Video Production", tech: "Interview Style", desc: "High-impact video featuring real user experiences.", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800" },
                { name: "Animated Explainers", category: "Video Production", tech: "2D Animation", desc: "Engaging animation explaining complex service workflows.", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800" }
            ];
        } else {
            defaults.grid.projects = [
                { name: "Featured Project", category: "Digital Marketing", tech: "Full Case Study", desc: "A demonstration of our excellence in delivery.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
                { name: "Innovation Showcase", category: "Technology", tech: "Cutting Edge", desc: "Pushing the boundaries of digital transformation.", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800" }
            ];
        }
        return defaults;
    };

    const defaults = getDefaults();
    const heroData = getSection('portfolio_hero') || defaults.hero;
    const statsData = getSection('portfolio_stats') || defaults.stats;
    const gridData = getSection('portfolio_grid') || defaults.grid;
    // clients data uses the ListenFromClients component, which has its own independent data fetching.

    return (
        <PageMotion>
            <Breadcrumb currentPage={heroData?.title || fallbackTitle} />

            {/* Hero Section */}
            {heroData && (
                <motion.section
                    className="bg-gradient-to-r from-[#0b1f2d] to-[#1d3f54] text-white py-20 px-6 text-center"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                >
                    <span className="inline-block bg-blue-600 text-sm px-4 py-1 rounded-full mb-4">{heroData.badge}</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{heroData.title}</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg whitespace-pre-wrap">
                        {heroData.description}
                    </p>
                </motion.section>
            )}

            {/* Stats Section */}
            {statsData && statsData.stats && statsData.stats.length > 0 && (
                <motion.section
                    className="bg-blue-600 text-white py-12 px-6"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                >
                    <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {statsData.stats.map((s, i) => (
                            <motion.div key={i} variants={scaleUp}>
                                <div className="text-4xl font-bold">{s.number}</div>
                                <div className="text-blue-200 mt-1">{s.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            )}

            {/* Portfolio Grid Section */}
            {gridData && gridData.projects && gridData.projects.length > 0 && (
                <section className="py-16 px-6 max-w-6xl mx-auto">
                    <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <h2 className="text-3xl font-bold text-gray-800">{gridData.title}</h2>
                        <p className="text-gray-600 mt-3 whitespace-pre-wrap">{gridData.description}</p>
                    </motion.div>
                    <motion.div
                        className="grid md:grid-cols-2 gap-8"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                    >
                        {gridData.projects.map((p, i) => (
                            <motion.div key={i} variants={scaleUp}>
                                <NavLink to="/contact" className="block bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer h-full flex flex-col">
                                    <div className="h-64 bg-gradient-to-br flex-shrink-0 from-blue-50 to-indigo-100 flex items-center justify-center relative overflow-hidden group">
                                        {p.image ? (
                                            <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                        ) : (
                                            <div className="text-center p-4">
                                                <div className="text-5xl mb-2 opacity-20">🖼️</div>
                                                <div className="text-blue-400 font-semibold uppercase tracking-wider text-xs">{p.name}</div>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f2d] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                            <span className="text-white font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-blue-600 px-6 py-2.5 rounded-full text-sm shadow-xl">
                                                View Case Study →
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex-grow flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full font-medium">{p.category}</span>
                                                <span className="text-gray-400 text-xs text-right line-clamp-1">{p.tech}</span>
                                            </div>
                                            <h3 className="font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{p.name}</h3>
                                            <p className="text-gray-600 text-sm mb-4">{p.desc}</p>
                                        </div>
                                        <div className="mt-auto text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">Request Similar Project →</div>
                                    </div>
                                </NavLink>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            )}


        </PageMotion>
    );
};

export default UniversalPortfolioWrapper;
