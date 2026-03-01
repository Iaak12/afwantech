import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdminLayout from '../../components/admin/AdminLayout';

import SectionEditor from '../../components/admin/SectionEditor';

const PageEditor = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [pageData, setPageData] = useState({
        title: '',
        description: '',
        metaTitle: '',
        metaDescription: '',
        keywords: '',
        sections: []
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Diagnostic check to ensure backend is reachable and correctly versioned
        fetch('http://localhost:5005/api/auth/verify')
            .then(res => res.json())
            .then(ver => console.log('Backend Version:', ver))
            .catch(err => console.error('Backend Diagnostic Warning:', err));

        fetch(`http://localhost:5005/api/pages/${slug}`)
            .then(res => res.json())
            .then(data => {
                if (data.slug) {
                    setPageData(data);
                } else {
                    setPageData({
                        slug,
                        title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
                        description: '',
                        metaTitle: '',
                        metaDescription: '',
                        keywords: '',
                        sections: []
                    });
                }
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [slug]);

    const handleSave = () => {
        fetch('http://localhost:5005/api/pages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
            },
            body: JSON.stringify(pageData)
        })
            .then(res => res.json())
            .then(() => alert('Page saved successfully!'))
            .catch(err => alert('Error saving page: ' + err.message));
    };

    const getDefaultDataForType = (type) => {
        switch (type) {
            case 'hero': return { badge: 'Trending', title: 'Welcome to Afwan Tech', description: 'Your digital partner.', image: '', features: ['SEO', 'Digital Marketing'] };
            case 'trusted': return { title: 'Trusted By', logos: ['Logo 1', 'Logo 2'] };
            case 'why': return { title: 'Why Choose Us', subtitle: 'Our Expertise', description: 'We are the best in the industry.', features: [] };
            case 'unlock': return { title: 'Unlock Growth', description: 'Grow with us.', points: ['Point 1'], mainImage: '' };
            case 'case_studies': return { title: 'Our Case Studies', description: 'Real results from real clients.', caseStudies: [] };
            case 'webinar': return { title: 'Join our Webinar', description: 'Learn the secrets.', schedule: 'Every Monday', pointsLeft: ['Point 1'], pointsRight: ['Point A'], quote: 'Success is a journey.', coachName: 'Expert Coach', thumbnails: [], mainImage: '', btnPrimaryText: 'Register Now', btnSecondaryText: 'Read More' };
            case 'clients': return { title: 'Listen From Our Clients', description: 'Hear what they say.', footerText: 'Join them today.', btnText: 'View More Reviews', testimonials: [] };
            case 'business_serve': return { topSubtitle: 'Grow Fast', topTitle: 'We Serve', topDescription: 'Best services.', btnTopText: 'Get Quote', businesses: [], rightTitle: 'Industries', rightDescription1: 'Text 1', rightDescription2: 'Text 2', btnRightText: 'Send Enquiry' };
            case 'brands': return { title: 'We Build Brands', bgImage: '', cards: [] };
            case 'tabs': return { title: 'Marketing Services', tabsData: [] };
            case 'industries': return { title: 'Industries We Serve', description: 'Various domains we operate in.', productTitle: 'Products Based', serviceTitle: 'Services Based', productIndustries: ['Example Product Ind'], serviceIndustries: ['Example Service Ind'], btnText: 'Connect with Expert' };
            case 'technology': return { title: 'Technology Stack', description: 'We use the latest tools.', tools: [] };
            case 'stats': return { stats: [{ number: "10", suffix: "+", title: "Years of Experience" }] };
            case 'news': return { title: 'In the News', mediaLogos: [] };
            case 'life': return { title: 'Life at Afwan Tech', description: 'Great culture and team.', slides: [] };
            case 'contact_section': return { title: 'Get In Touch With Afwan Tech', description: 'We are here to help you grow your business digitally. Reach out to us anytime.', phone: '+91 98688 98788', email: 'info@afwantech.com', location: 'India' };
            case 'content': return { content: '<h3>Your Content Here</h3><p>Enter your details...</p>' };
            default: return {};
        }
    };

    const addSection = (type) => {
        if (!type) return;
        const newSection = {
            type,
            data: getDefaultDataForType(type)
        };
        setPageData({
            ...pageData,
            sections: [...pageData.sections, newSection]
        });

        setTimeout(() => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }, 150);
    };

    const updateSection = (index, updatedSection) => {
        const newSections = [...pageData.sections];
        newSections[index] = updatedSection;
        setPageData({ ...pageData, sections: newSections });
    };

    const removeSection = (index) => {
        const newSections = pageData.sections.filter((_, i) => i !== index);
        setPageData({ ...pageData, sections: newSections });
    };

    const availableSectionOptions = [
        { value: 'hero', label: 'Hero Section' },
        { value: 'trusted', label: 'Trusted Logos' },
        { value: 'why', label: 'Why Us' },
        { value: 'unlock', label: 'Unlock Details' },
        { value: 'case_studies', label: 'Case Studies' },
        { value: 'webinar', label: 'Webinar Hero' },
        { value: 'clients', label: 'Clients Grid' },
        { value: 'business_serve', label: 'Business Served' },
        { value: 'brands', label: 'We Build Brands' },
        { value: 'tabs', label: 'Digital Marketing Tabs' },
        { value: 'industries', label: 'Industries Grid' },
        { value: 'technology', label: 'Technology Stack' },
        { value: 'stats', label: 'Stats Counter' },
        { value: 'news', label: 'News & Media' },
        { value: 'life', label: 'Life at Afwan Tech' },
        { value: 'contact_section', label: 'Contact Section (Info + Form)' },
        { value: 'content', label: 'Generic Content' }
    ];

    const PAGE_SECTION_MAP = {
        'home': ['hero', 'trusted', 'why', 'unlock', 'case_studies', 'webinar', 'clients', 'business_serve', 'brands', 'tabs', 'industries', 'technology', 'stats', 'news', 'life'],
        'contact': ['contact_section', 'stats', 'content'],
        'about-us': ['hero', 'why', 'stats', 'life', 'content'],
        'careers': ['hero', 'life', 'stats', 'content'],
        'faq': ['hero', 'content'],
        'privacy-policy': ['content'],
        'terms-conditions': ['content'],
        'default': ['hero', 'content', 'stats']
    };

    const allowedSections = PAGE_SECTION_MAP[slug] || PAGE_SECTION_MAP['default'];

    const unusedOptions = availableSectionOptions.filter(
        opt => allowedSections.includes(opt.value) && !pageData.sections.find(s => s.type === opt.value)
    );

    if (loading) return <div className="p-20 text-center font-bold text-gray-400">Loading High-Performance Editor...</div>;

    return (
        <AdminLayout>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
                <div>
                    <button onClick={() => navigate('/admin/pages')} className="text-blue-500 font-bold mb-3 flex items-center hover:translate-x-1 transition-transform uppercase text-[10px] tracking-widest">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
                        </svg>
                        Exit to Page List
                    </button>
                    <h1 className="text-4xl font-black text-[#123447]">Editing <span className="text-[#fbbf24] uppercase">{pageData.title}</span></h1>
                </div>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={handleSave}
                        className="bg-[#123447] text-white px-10 py-4 rounded-2xl font-black hover:bg-[#fbbf24] hover:text-[#123447] transition-all shadow-2xl active:scale-95 flex items-center"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h-2v5.586l-1.293-1.293z" />
                        </svg>
                        Publish Changes
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Left Column: Sections */}
                <div className="xl:col-span-2 space-y-8">
                    <div className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden">
                        <div className="flex justify-between items-center mb-10">
                            <h2 className="text-2xl font-black text-[#123447] border-l-4 border-[#fbbf24] pl-5 uppercase tracking-tight">Content Blocks</h2>

                            {unusedOptions.length > 0 ? (
                                <div className="relative group">
                                    <select
                                        id="sectionSelect"
                                        value=""
                                        onChange={(e) => addSection(e.target.value)}
                                        className="bg-[#fbbf24] text-[#123447] font-black rounded-2xl px-6 py-3.5 text-xs focus:ring-4 focus:ring-[#fbbf24]/30 outline-none shadow-lg cursor-pointer appearance-none pr-12 transition-all hover:scale-105 active:scale-95"
                                    >
                                        <option value="" disabled>✚ NEW CONTENT BLOCK</option>
                                        {unusedOptions.map(opt => (
                                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#123447]">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-[10px] font-black text-green-600 bg-green-50 px-4 py-2 rounded-full border border-green-200 uppercase tracking-widest">
                                    ✓ Fully Built Page
                                </div>
                            )}
                        </div>

                        <div className="space-y-8">
                            {pageData.sections && pageData.sections.length > 0 ? pageData.sections.map((section, index) => (
                                <SectionEditor
                                    key={index}
                                    section={section}
                                    onChange={(updated) => updateSection(index, updated)}
                                    onRemove={() => removeSection(index)}
                                />
                            )) : (
                                <div className="border-4 border-dashed border-gray-100 rounded-[2rem] p-20 text-center text-gray-300">
                                    <svg className="w-20 h-20 mx-auto opacity-20 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                    <p className="font-bold text-lg uppercase tracking-widest opacity-40">Drop your first content block here</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right Column: Meta & SEO */}
                <div className="space-y-8">
                    <div className="bg-[#123447] p-8 md:p-10 rounded-[2.5rem] shadow-2xl sticky top-8 border-t-8 border-[#fbbf24]">
                        <h2 className="text-xl font-black text-white mb-8 border-b border-white/10 pb-4 flex items-center uppercase tracking-widest">
                            <svg className="w-5 h-5 mr-3 text-[#fbbf24]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.435.292-3.483.811a7.971 7.971 0 005.484 5.384c.236.85.343 1.745.343 2.656 0 2.21-1.343 4-3 4-1.657 0-3-1.79-3-4 0-.448.06-1.505.495-2.29C3.13 9.4 4.19 8.24 5.5 8c.348 0 .685.027 1.01.077Q6.505 8.525 6.5 9c0 2.21 1.79 4 4 4s4-1.79 4-4q-.005-.475-.01-1.01A7.968 7.968 0 0014.5 4c-1.255 0-2.435.292-3.483.811A7.971 7.971 0 005.533 10.205c-.236.85-.343 1.745-.343 2.656 0 2.21 1.343 4 3 4s3-1.79 3-4c0-.448-.06-1.505-.495-2.29C10.662 9.4 11.722 8.24 13.033 8c1.31.24 2.37.76 3.195 2.56.435.785.495 1.842.495 2.29 0 2.21-1.343 4-3 4-1.657 0-3-1.79-3-4q-.005-.475-.01-1.01z" />
                            </svg>
                            SEO Settings
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-[10px] font-black text-blue-300 uppercase mb-2 tracking-[0.2em]">Display Title</label>
                                <input
                                    type="text"
                                    value={pageData.title}
                                    onChange={(e) => setPageData({ ...pageData, title: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white font-bold outline-none focus:ring-2 focus:ring-[#fbbf24] transition-all shadow-inner"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-blue-300 uppercase mb-2 tracking-[0.2em]">Meta Title (SEO)</label>
                                <input
                                    type="text"
                                    value={pageData.metaTitle || ''}
                                    onChange={(e) => setPageData({ ...pageData, metaTitle: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white font-bold outline-none focus:ring-2 focus:ring-[#fbbf24] transition-all shadow-inner"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-blue-300 uppercase mb-2 tracking-[0.2em]">Keywords</label>
                                <input
                                    type="text"
                                    value={pageData.keywords || ''}
                                    onChange={(e) => setPageData({ ...pageData, keywords: e.target.value })}
                                    placeholder="seo, tech, agency..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white font-bold outline-none focus:ring-2 focus:ring-[#fbbf24] transition-all shadow-inner"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-blue-300 uppercase mb-2 tracking-[0.2em]">Meta Description</label>
                                <textarea
                                    rows="4"
                                    value={pageData.metaDescription || ''}
                                    onChange={(e) => setPageData({ ...pageData, metaDescription: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white font-medium outline-none focus:ring-2 focus:ring-[#fbbf24] transition-all shadow-inner resize-none"
                                ></textarea>
                            </div>
                        </div>

                        <div className="mt-10 p-5 bg-white/5 rounded-2xl border border-white/5 text-blue-200/40 text-[10px] leading-relaxed italic">
                            💡 Optimizing your Meta Title and Description increases your search engine visibility and click-through rates.
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default PageEditor;

