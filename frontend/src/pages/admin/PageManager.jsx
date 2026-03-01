import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../components/admin/AdminLayout';

const PageManager = () => {
    // Grouping the pages according to frontend header categories
    const [pageGroups] = useState([
        {
            category: 'Company & Main',
            pages: [
                { slug: 'home', title: 'Home Page' },
                { slug: 'about-us', title: 'About Us' },
                { slug: 'contact', title: 'Contact Us' }
            ]
        },
        {
            category: 'Website Solutions',
            pages: [
                { slug: 'small-business-website', title: 'Small Business Website' },
                { slug: 'business-website-with-seo', title: 'Business Website with SEO' },
                { slug: 'customised-website-designing', title: 'Customised Designing' },
                { slug: 'ecommerce-web-designing', title: 'Ecommerce Web Designing' },
                { slug: 'web-development', title: 'Web Development' },
                { slug: 'website-designing-by-industry', title: 'Website Design by Industry' },
                { slug: 'psd-to-html', title: 'PSD to HTML' },
                { slug: 'landing-page-designing', title: 'Landing Page Designing' },
            ]
        },
        {
            category: 'Digital Marketing',
            pages: [
                { slug: 'seo-services', title: 'SEO Services' },
                { slug: 'paid-ads-ppc', title: 'Paid Ads' },
                { slug: 'email-marketing', title: 'Email Marketing' },
                { slug: 'sms-marketing', title: 'SMS Marketing' },
                { slug: 'online-reputation-management', title: 'Online Rep Management' },
                { slug: 'pr-agency', title: 'PR Agency' },
                { slug: 'corporate-video-production', title: 'Corp Video Production' },
                { slug: 'graphic-designing', title: 'Graphic Designing' },
            ]
        },
        {
            category: 'Branding, PR & Packages',
            pages: [
                // Add related slugs here as they are created
            ]
        }
    ]);

    const navigate = useNavigate();
    const [newPageTitle, setNewPageTitle] = useState('');

    const handleCreatePage = (e) => {
        e.preventDefault();
        if (!newPageTitle.trim()) return;

        // Convert title to URL-friendly slug
        const slug = newPageTitle.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

        // Navigate to the editor for this new string; PageEditor will handle creating it if it doesn't exist
        navigate(`/admin/pages/${slug}`);
    };

    return (
        <AdminLayout>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <div>
                    <h1 className="text-4xl font-extrabold text-[#123447] tracking-tight">Manage Content</h1>
                    <p className="text-gray-500 font-medium mt-1 text-sm">Organize and edit your website pages with ease.</p>
                </div>

                {/* Create New Page Form */}
                <form onSubmit={handleCreatePage} className="flex w-full md:w-auto shadow-xl rounded-2xl overflow-hidden border border-[#123447]/10">
                    <input
                        type="text"
                        placeholder="Enter new page title..."
                        value={newPageTitle}
                        onChange={(e) => setNewPageTitle(e.target.value)}
                        className="px-6 py-4 bg-white focus:bg-gray-50 outline-none w-full md:w-72 font-medium"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-[#123447] text-white px-8 py-4 font-bold hover:bg-[#0a1e35] transition-all active:scale-95"
                    >
                        + Create
                    </button>
                </form>
            </div>

            <div className="space-y-12">
                {pageGroups.map((group, groupIdx) => (
                    group.pages.length > 0 && (
                        <div key={groupIdx} className="bg-white/40 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-10 opacity-[0.03] scale-[4] origin-top-right select-none pointer-events-none font-black text-[#123447]">
                                {group.category}
                            </div>

                            <h2 className="text-xl font-black text-[#123447] mb-8 flex items-center uppercase tracking-widest">
                                <span className="w-8 h-8 rounded-lg bg-[#fbbf24] flex items-center justify-center mr-3 text-[#123447] shadow-sm transform -rotate-3">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                                    </svg>
                                </span>
                                {group.category}
                                <span className="ml-4 px-3 py-1 bg-white text-[#123447]/50 rounded-full text-[10px] font-black border border-gray-100">{group.pages.length} PAGES</span>
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {group.pages.map((page) => (
                                    <div
                                        key={page.slug}
                                        className="bg-white p-5 rounded-2xl border border-gray-200 hover:border-[#fbbf24] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                                        onClick={() => navigate(`/admin/pages/${page.slug}`)}
                                    >
                                        <div className="flex justify-between items-start relative z-10">
                                            <div>
                                                <h3 className="font-bold text-gray-800 text-base mb-1 group-hover:text-[#123447] transition-colors">{page.title}</h3>
                                                <p className="text-blue-400 font-mono text-[10px] tracking-tighter uppercase font-bold opacity-60">/{page.slug}</p>
                                            </div>
                                            <div className="bg-[#fbbf24]/20 text-[#123447] p-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100">
                                                <svg className="w-5 h-5 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 right-0 w-12 h-12 bg-[#fbbf24] opacity-0 group-hover:opacity-[0.05] rounded-tl-3xl transition-opacity"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                ))}
            </div>
        </AdminLayout>
    );
};

export default PageManager;

