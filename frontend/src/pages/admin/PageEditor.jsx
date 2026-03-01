import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdminLayout from '../../components/admin/AdminLayout';
import SectionEditor from '../../components/admin/SectionEditor';
import API_BASE_URL from '../../config/api';

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
        fetch(`${API_BASE_URL}/api/auth/verify`)
            .then(res => res.json())
            .then(ver => console.log('Backend Version:', ver))
            .catch(err => console.error('Backend Diagnostic Warning:', err));

        fetch(`${API_BASE_URL}/api/pages/${slug}`)
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

    const [activeTab, setActiveTab] = useState('seo'); // Default to SEO or first section

    const handleSave = () => {
        fetch(`${API_BASE_URL}/api/pages`, {
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
        const updatedSections = [...pageData.sections, newSection];
        setPageData({
            ...pageData,
            sections: updatedSections
        });
        setActiveTab(updatedSections.length - 1);
    };

    const updateSection = (index, updatedSection) => {
        const newSections = [...pageData.sections];
        newSections[index] = updatedSection;
        setPageData({ ...pageData, sections: newSections });
    };

    const removeSection = (index) => {
        const newSections = pageData.sections.filter((_, i) => i !== index);
        setPageData({ ...pageData, sections: newSections });
        if (activeTab === index) {
            setActiveTab('seo');
        } else if (typeof activeTab === 'number' && activeTab > index) {
            setActiveTab(activeTab - 1);
        }
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

    const getIconForType = (type) => {
        switch (type) {
            case 'hero': return '🚀';
            case 'trusted': return '🤝';
            case 'why': return '💡';
            case 'unlock': return '🔓';
            case 'case_studies': return '📋';
            case 'webinar': return '📹';
            case 'clients': return '👥';
            case 'business_serve': return '🏢';
            case 'brands': return '✨';
            case 'tabs': return '📑';
            case 'industries': return '🏬';
            case 'technology': return '💻';
            case 'stats': return '📊';
            case 'news': return '📰';
            case 'life': return '🌟';
            case 'contact_section': return '📞';
            case 'content': return '📝';
            case 'seo': return '🔍';
            default: return '📦';
        }
    };

    if (loading) return <div className="p-20 text-center font-bold text-gray-400">Loading High-Performance Editor...</div>;

    return (
        <AdminLayout>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
                <div>
                    <button onClick={() => navigate('/admin/pages')} className="text-blue-500 font-bold mb-2 flex items-center hover:translate-x-1 transition-transform uppercase text-[10px] tracking-widest">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to List
                    </button>
                    <h1 className="text-3xl font-black text-[#123447]">{pageData.title} <span className="text-gray-300 font-normal text-lg ml-2">/ Page Editor</span></h1>
                </div>
                <div className="flex items-center space-x-3">
                    <div className="hidden lg:flex items-center bg-gray-100 rounded-2xl px-4 py-2 text-[10px] font-black text-gray-400 uppercase tracking-widest mr-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                        Live Editor Active
                    </div>
                    <button
                        onClick={handleSave}
                        className="bg-blue-600 text-white px-8 py-3.5 rounded-xl font-black hover:bg-blue-700 transition-all shadow-lg active:scale-95 flex items-center"
                    >
                        Save All Changes
                    </button>
                </div>
            </div>

            {/* TABBED NAVIGATION TILES */}
            <div className="mb-10 overflow-x-auto no-scrollbar pb-4 flex gap-4">
                {/* SEO TILE */}
                <button
                    onClick={() => setActiveTab('seo')}
                    className={`flex-shrink-0 flex flex-col items-center justify-center w-32 h-32 rounded-3xl transition-all border-2 ${activeTab === 'seo' ? 'bg-[#123447] border-[#123447] text-white shadow-xl scale-105' : 'bg-white border-gray-100 text-[#123447] hover:border-blue-200 hover:bg-blue-50'}`}
                >
                    <span className="text-3xl mb-2">{getIconForType('seo')}</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">SEO Settings</span>
                </button>

                {/* SECTION TILES */}
                {pageData.sections.map((section, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`flex-shrink-0 flex flex-col items-center justify-center w-32 h-32 rounded-3xl transition-all border-2 ${activeTab === index ? 'bg-[#123447] border-[#123447] text-white shadow-xl scale-105' : 'bg-white border-gray-100 text-[#123447] hover:border-blue-200 hover:bg-blue-50'}`}
                    >
                        <span className="text-3xl mb-2">{getIconForType(section.type)}</span>
                        <span className="text-[10px] font-black uppercase tracking-widest truncate w-full px-2">{section.type.replace('_', ' ')}</span>
                    </button>
                ))}

                {/* ADD SECTION TILE */}
                {unusedOptions.length > 0 && (
                    <div className="relative group flex-shrink-0">
                        <select
                            value=""
                            onChange={(e) => addSection(e.target.value)}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        >
                            <option value="" disabled>✚ NEW SECTION</option>
                            {unusedOptions.map(opt => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                        <div className="flex flex-col items-center justify-center w-32 h-32 rounded-3xl transition-all border-2 border-dashed border-gray-200 text-gray-400 group-hover:border-blue-400 group-hover:text-blue-500 bg-gray-50/50">
                            <span className="text-3xl mb-2">➕</span>
                            <span className="text-[10px] font-black uppercase tracking-widest">Add Section</span>
                        </div>
                    </div>
                )}
            </div>

            <div className="max-w-5xl mx-auto">
                {/* ACTIVE TAB CONTENT */}
                {activeTab === 'seo' ? (
                    <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100">
                        <div className="flex items-center mb-10">
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mr-4 text-2xl">🔍</div>
                            <div>
                                <h2 className="text-2xl font-black text-[#123447] uppercase tracking-tight">SEO & Meta Settings</h2>
                                <p className="text-gray-400 text-sm font-medium">Control how this page appears in search results.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 tracking-[0.2em]">Display Title (Admin Only)</label>
                                <input
                                    type="text"
                                    value={pageData.title}
                                    onChange={(e) => setPageData({ ...pageData, title: e.target.value })}
                                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-[#123447] font-bold outline-none focus:ring-4 focus:ring-blue-100 transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 tracking-[0.2em]">Meta Title (SEO)</label>
                                <input
                                    type="text"
                                    value={pageData.metaTitle || ''}
                                    onChange={(e) => setPageData({ ...pageData, metaTitle: e.target.value })}
                                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-[#123447] font-bold outline-none focus:ring-4 focus:ring-blue-100 transition-all"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 tracking-[0.2em]">SEO Keywords</label>
                                <input
                                    type="text"
                                    value={pageData.keywords || ''}
                                    onChange={(e) => setPageData({ ...pageData, keywords: e.target.value })}
                                    placeholder="e.g. web design, branding agency, digital marketing"
                                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-[#123447] font-bold outline-none focus:ring-4 focus:ring-blue-100 transition-all"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 tracking-[0.2em]">Meta Description</label>
                                <textarea
                                    rows="4"
                                    value={pageData.metaDescription || ''}
                                    onChange={(e) => setPageData({ ...pageData, metaDescription: e.target.value })}
                                    placeholder="Describe your page content for search engines..."
                                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-[#123447] font-medium outline-none focus:ring-4 focus:ring-blue-100 transition-all resize-none"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                ) : typeof activeTab === 'number' && pageData.sections[activeTab] ? (
                    <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden">
                        <SectionEditor
                            section={pageData.sections[activeTab]}
                            onChange={(updated) => updateSection(activeTab, updated)}
                            onRemove={() => removeSection(activeTab)}
                        />
                    </div>
                ) : (
                    <div className="text-center py-20 bg-gray-50 rounded-[3rem] border border-dashed border-gray-200">
                        <span className="text-6xl mb-4 block">👋</span>
                        <h3 className="text-xl font-black text-gray-400 uppercase">Select a section to start editing</h3>
                        <p className="text-gray-400 text-sm mt-2">Click on any tile above to edit your page content.</p>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
};

export default PageEditor;

        </AdminLayout >
    );
};

export default PageEditor;

