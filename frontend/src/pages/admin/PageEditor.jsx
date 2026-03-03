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

    const PAGE_TABS = {
        'home': [
            { id: 'hero', label: 'Hero Section', icon: '🎯', activeCls: 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-transparent shadow-lg' },
            { id: 'trusted', label: 'Trusted By', icon: '🤝', activeCls: 'bg-gradient-to-r from-indigo-400 to-blue-600 text-white border-transparent shadow-lg' },
            { id: 'why', label: 'Why Us', icon: '💡', activeCls: 'bg-gradient-to-r from-amber-400 to-orange-500 text-white border-transparent shadow-lg' },
            { id: 'unlock', label: 'Unlock Growth', icon: '🔓', activeCls: 'bg-gradient-to-r from-rose-400 to-red-500 text-white border-transparent shadow-lg' },
            { id: 'case_studies', label: 'Case Studies', icon: '📋', activeCls: 'bg-gradient-to-r from-fuchsia-400 to-purple-600 text-white border-transparent shadow-lg' },
            { id: 'webinar', label: 'Webinar', icon: '📹', activeCls: 'bg-gradient-to-r from-blue-400 to-indigo-500 text-white border-transparent shadow-lg' },
            { id: 'clients', label: 'Client Videos', icon: '👥', activeCls: 'bg-gradient-to-r from-red-400 to-pink-600 text-white border-transparent shadow-lg' },
            { id: 'business_serve', label: 'Business Serve', icon: '🏢', activeCls: 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white border-transparent shadow-lg' },
            { id: 'brands', label: 'Build Brands', icon: '✨', activeCls: 'bg-gradient-to-r from-yellow-400 to-amber-600 text-white border-transparent shadow-lg' },
            { id: 'tabs', label: 'Marketing Tabs', icon: '📑', activeCls: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent shadow-lg' },
            { id: 'industries', label: 'Industries', icon: '🏬', activeCls: 'bg-gradient-to-r from-violet-400 to-purple-500 text-white border-transparent shadow-lg' },
            { id: 'technology', label: 'Tech Stack', icon: '💻', activeCls: 'bg-gradient-to-r from-slate-600 to-gray-800 text-white border-transparent shadow-lg' },
            { id: 'stats', label: 'Stats/Counters', icon: '📊', activeCls: 'bg-gradient-to-r from-sky-400 to-blue-500 text-white border-transparent shadow-lg' },
            { id: 'news', label: 'News & Media', icon: '📰', activeCls: 'bg-gradient-to-r from-gray-400 to-gray-600 text-white border-transparent shadow-lg' },
            { id: 'life', label: 'Life at Afwan', icon: '🌟', activeCls: 'bg-gradient-to-r from-orange-300 to-amber-500 text-white border-transparent shadow-lg' },
            { id: 'seo', label: 'SEO Settings', icon: '🔍', activeCls: 'bg-gray-800 text-white border-transparent shadow-lg' }
        ],
        'about-us': [
            { id: 'about_hero', label: 'Hero Section', icon: '🎯', activeCls: 'bg-gradient-to-r from-blue-400 to-indigo-500 text-white border-transparent shadow-lg' },
            { id: 'about_intro', label: 'Who We Are', icon: '👋', activeCls: 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-transparent shadow-lg' },
            { id: 'about_why', label: 'Why Trust Us', icon: '💡', activeCls: 'bg-gradient-to-r from-amber-400 to-orange-500 text-white border-transparent shadow-lg' },
            { id: 'about_team', label: 'Meet Experts', icon: '👥', activeCls: 'bg-gradient-to-r from-rose-400 to-red-500 text-white border-transparent shadow-lg' },
            { id: 'about_process', label: 'Growth Blueprint', icon: '⚙️', activeCls: 'bg-gradient-to-r from-indigo-400 to-blue-600 text-white border-transparent shadow-lg' },
            { id: 'about_stats', label: 'Stats', icon: '📊', activeCls: 'bg-gradient-to-r from-sky-400 to-blue-500 text-white border-transparent shadow-lg' },
            { id: 'about_cta', label: 'Call to Action', icon: '🚀', activeCls: 'bg-gradient-to-r from-fuchsia-400 to-purple-600 text-white border-transparent shadow-lg' },
            { id: 'seo', label: 'SEO Settings', icon: '🔍', activeCls: 'bg-gray-800 text-white border-transparent shadow-lg' }
        ],
        'contact': [
            { id: 'contact_section', label: 'Contact Details', icon: '📞', activeCls: 'bg-gradient-to-r from-blue-400 to-indigo-500 text-white border-transparent shadow-lg' },
            { id: 'faq_section', label: 'FAQ Section', icon: '❓', activeCls: 'bg-gradient-to-r from-teal-400 to-emerald-500 text-white border-transparent shadow-lg' },
            { id: 'seo', label: 'SEO Settings', icon: '🔍', activeCls: 'bg-gray-800 text-white border-transparent shadow-lg' }
        ],
        'mission': [
            { id: 'mission_details', label: 'Mission Details', icon: '🎯', activeCls: 'bg-gradient-to-r from-blue-400 to-indigo-500 text-white border-transparent shadow-lg' },
            { id: 'seo', label: 'SEO Settings', icon: '🔍', activeCls: 'bg-gray-800 text-white border-transparent shadow-lg' }
        ],
        'why-us': [
            { id: 'why_us_hero', label: 'Hero Section', icon: '🎯', activeCls: 'bg-gradient-to-r from-blue-400 to-indigo-500 text-white border-transparent shadow-lg' },
            { id: 'why_us_stats', label: 'Stats Grid', icon: '📊', activeCls: 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-transparent shadow-lg' },
            { id: 'why_us_reasons', label: 'Why Choose Us', icon: '💡', activeCls: 'bg-gradient-to-r from-amber-400 to-orange-500 text-white border-transparent shadow-lg' },
            { id: 'why_us_cta', label: 'Call to Action', icon: '🚀', activeCls: 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white border-transparent shadow-lg' },
            { id: 'seo', label: 'SEO Settings', icon: '🔍', activeCls: 'bg-gray-800 text-white border-transparent shadow-lg' }
        ],
        'clients': [
            { id: 'clients_hero', label: 'Hero Section', icon: '🎯', activeCls: 'bg-gradient-to-r from-blue-400 to-indigo-500 text-white border-transparent shadow-lg' },
            { id: 'clients_stats', label: 'Stats Grid', icon: '📊', activeCls: 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-transparent shadow-lg' },
            { id: 'clients_brands', label: 'Trusted Brands', icon: '🏢', activeCls: 'bg-gradient-to-r from-amber-400 to-orange-500 text-white border-transparent shadow-lg' },
            { id: 'clients_industries', label: 'Industries Served', icon: '🏭', activeCls: 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white border-transparent shadow-lg' },
            { id: 'seo', label: 'SEO Settings', icon: '🔍', activeCls: 'bg-gray-800 text-white border-transparent shadow-lg' }
        ],
        'testimonials': [
            { id: 'testimonials_hero', label: 'Hero Section', icon: '🎯', activeCls: 'bg-gradient-to-r from-blue-400 to-indigo-500 text-white border-transparent shadow-lg' },
            { id: 'testimonials_stats', label: 'Stats Grid', icon: '📊', activeCls: 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-transparent shadow-lg' },
            { id: 'testimonials_review', label: 'Reviews Grid', icon: '⭐', activeCls: 'bg-gradient-to-r from-amber-400 to-orange-500 text-white border-transparent shadow-lg' },
            { id: 'testimonials_cta', label: 'Call to Action', icon: '🚀', activeCls: 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white border-transparent shadow-lg' },
            { id: 'seo', label: 'SEO Settings', icon: '🔍', activeCls: 'bg-gray-800 text-white border-transparent shadow-lg' }
        ],
        'awards': [
            { id: 'awards_hero', label: 'Hero Section', icon: '🎯', activeCls: 'bg-gradient-to-r from-blue-400 to-indigo-500 text-white border-transparent shadow-lg' },
            { id: 'awards_grid', label: 'Awards Grid', icon: '🏆', activeCls: 'bg-gradient-to-r from-amber-400 to-orange-500 text-white border-transparent shadow-lg' },
            { id: 'awards_milestones', label: 'Milestones Grid', icon: '📈', activeCls: 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-transparent shadow-lg' },
            { id: 'seo', label: 'SEO Settings', icon: '🔍', activeCls: 'bg-gray-800 text-white border-transparent shadow-lg' }
        ],
        'news': [
            { id: 'news_hero', label: 'Hero Section', icon: '🎯', activeCls: 'bg-gradient-to-r from-blue-400 to-indigo-500 text-white border-transparent shadow-lg' },
            { id: 'news_grid', label: 'News & Events', icon: '📰', activeCls: 'bg-gradient-to-r from-teal-400 to-emerald-500 text-white border-transparent shadow-lg' },
            { id: 'news_subscribe', label: 'Subscription CTA', icon: '✉️', activeCls: 'bg-gradient-to-r from-purple-400 to-fuchsia-500 text-white border-transparent shadow-lg' },
            { id: 'seo', label: 'SEO Settings', icon: '🔍', activeCls: 'bg-gray-800 text-white border-transparent shadow-lg' }
        ]
    };

    const SERVICE_PAGE_TABS = [
        { id: 'service_hero', label: 'Hero Section', icon: '🎯', activeCls: 'bg-gradient-to-r from-blue-400 to-indigo-500 text-white border-transparent shadow-lg' },
        { id: 'service_content', label: 'Content Section', icon: '📝', activeCls: 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-transparent shadow-lg' },
        { id: 'service_plans', label: 'Plans & Pricing', icon: '💰', activeCls: 'bg-gradient-to-r from-amber-400 to-orange-500 text-white border-transparent shadow-lg' },
        { id: 'service_features', label: 'Key Features', icon: '✨', activeCls: 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white border-transparent shadow-lg' },
        { id: 'service_benefits', label: 'Benefits', icon: '📈', activeCls: 'bg-gradient-to-r from-rose-400 to-red-500 text-white border-transparent shadow-lg' },
        { id: 'service_our_work', label: 'Our Work', icon: '💼', activeCls: 'bg-gradient-to-r from-sky-400 to-blue-500 text-white border-transparent shadow-lg' },
        { id: 'seo', label: 'SEO Settings', icon: '🔍', activeCls: 'bg-gray-800 text-white border-transparent shadow-lg' }
    ];

    const PORTFOLIO_PAGE_TABS = [
        { id: 'portfolio_hero', label: 'Hero Section', icon: '🎯', activeCls: 'bg-gradient-to-r from-blue-400 to-indigo-500 text-white border-transparent shadow-lg' },
        { id: 'portfolio_stats', label: 'Stats Grid', icon: '📊', activeCls: 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-transparent shadow-lg' },
        { id: 'portfolio_grid', label: 'Portfolio Grid', icon: '🖼️', activeCls: 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white border-transparent shadow-lg' },
        { id: 'seo', label: 'SEO Settings', icon: '🔍', activeCls: 'bg-gray-800 text-white border-transparent shadow-lg' }
    ];

    const isPortfolioPage = slug.includes('-portfolio');
    const currentTabs = PAGE_TABS[slug] || (isPortfolioPage ? PORTFOLIO_PAGE_TABS : SERVICE_PAGE_TABS);
    const [activeTab, setActiveTab] = useState(currentTabs[0].id);

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/pages/${slug}`)
            .then(res => res.json())
            .then(data => {
                let initialData = { ...data };
                if (!initialData.slug) {
                    initialData = {
                        slug,
                        title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
                        description: '',
                        metaTitle: '',
                        metaDescription: '',
                        keywords: '',
                        sections: []
                    };
                }

                // --- DEFAULTS DEFINITIONS ---
                const missionDetailsDefault = {
                    hero: { badge: "12+ YEARS OF EXCELLENCE", title: "Mission, Vision & Goals", description: "We help high-growth businesses thrive in the digital landscape with unparalleled expertise and measurable outcomes." },
                    mission: { badge: "Our Mission", title: "Empowering Businesses Through Digital Innovation", description: "<p>We aim to completely revolutionize the digital transformation ecosystem by delivering robust, high-performance web applications that provide real ROI to our clients.</p>", points: ["To innovate and deliver customized digital solutions that drive rapid business growth.", "To empower brands with state-of-the-art web technologies and marketing strategies.", "To maintain an uncompromising focus on quality, transparency, and ROI.", "To build long-term, mutually beneficial partnerships with our clients globally."] },
                    vision: { badge: "Our Vision", title: "To Be India's Most Trusted Digital Growth Partner", description: "<p>We envision a future where every MSME has access to world-class digital marketing tools and web infrastructure, bridging the gap between local enterprise and global scale.</p>", points: ["To be globally recognized as the most innovative and reliable digital transformation agency.", "To continually evolve with technology and set new industry standards.", "To cultivate an inspiring workplace where creative minds build the future of the web.", "To make high-quality digital marketing accessible to businesses of all sizes."] },
                    goalsSection: { badge: 'Our Goals', title: 'Strategic Goals Driving Our Growth', description: 'Every goal we set is backed by a clear strategy and measured by real results.', goals: [{ title: "Client Success", desc: "Deliver measurable ROI for every client through data-driven strategies.", color: "bg-blue-100 border-blue-400" }, { title: "Team Excellence", desc: "Build a team of passionate digital experts committed to continuous learning.", color: "bg-green-100 border-green-400" }, { title: "Innovation", desc: "Continuously adopt emerging technologies for next-generation solutions.", color: "bg-purple-100 border-purple-400" }, { title: "Expansion", desc: "Expand to 50+ cities through our franchise network by 2026.", color: "bg-orange-100 border-orange-400" }, { title: "Trust", desc: "Maintain a 95%+ client satisfaction rate through transparent service.", color: "bg-pink-100 border-pink-400" }, { title: "Impact", desc: "Create a lasting positive impact on Indian businesses through digital empowerment.", color: "bg-teal-100 border-teal-400" }] }
                };

                const whyUsHeroDefault = { badge: 'Why Choose Us', title: 'Why Afwan Tech?', description: "We don't just deliver services — we deliver results. Discover why 5000+ businesses trust Afwan Tech as their digital growth partner." };
                const whyUsStatsDefault = { stats: [{ number: "5000+", label: "Projects Completed" }, { number: "200+", label: "Team Experts" }, { number: "98%", label: "Client Satisfaction" }, { number: "10+", label: "Years of Experience" }] };
                const whyUsReasonsDefault = { title: "8 Reasons Why Businesses Choose Us", description: "From award-winning expertise to transparent communication — here's what sets us apart.", reasons: [{ icon: "🏆", title: "Award-Winning Agency", desc: "Recognized as one of India's best SEO and digital marketing companies." }, { icon: "📊", title: "Data-Driven Approach", desc: "Every strategy is backed by deep data analysis, not guesswork." }, { icon: "👥", title: "Experienced Team", desc: "200+ certified digital marketing and web design professionals." }, { icon: "🚀", title: "Proven Track Record", desc: "5000+ successful projects delivered across 20+ industries." }, { icon: "💰", title: "Transparent Pricing", desc: "No hidden costs. Clear, upfront pricing for every service." }, { icon: "🔒", title: "100% Transparency", desc: "Regular reporting and real-time access to your campaign data." }, { icon: "🎯", title: "Results-Focused", desc: "We measure success by your business growth, not vanity metrics." }, { icon: "🌍", title: "Pan-India Presence", desc: "Serving clients across 100+ cities with local expertise." }] };
                const whyUsCTADefault = { title: "Ready to Experience the Afwan Tech Difference?", description: "Join 5000+ businesses already growing with us.", btnText: "Get Free Consultation", btnLink: "/contact" };

                const clientsHeroDefault = { badge: 'Trusted By', title: 'Our Clients', description: "5000+ businesses across India trust Afwan Tech to power their digital growth." };
                const clientsStatsDefault = { stats: [{ number: "5000+", label: "Happy Clients" }, { number: "100+", label: "Cities Served" }, { number: "20+", label: "Industries" }, { number: "98%", label: "Client Retention" }] };
                const clientsBrandsDefault = { title: "Brands That Trust Afwan Tech", description: "From startups to enterprises across every industry.", clients: [{ name: "DRH Sports", industry: "Sports Manufacturer" }, { name: "MilkMan Dairy", industry: "Dairy Equipment" }, { name: "Green Valley Farms", industry: "Agriculture" }, { name: "TechSpark Solutions", industry: "IT Company" }, { name: "Prime Real Estate", industry: "Real Estate" }, { name: "HealthFirst Clinic", industry: "Healthcare" }, { name: "Fashion House", industry: "Retail & Fashion" }, { name: "EduLearn Academy", industry: "Education" }, { name: "AutoZone Motors", industry: "Automotive" }, { name: "Spice Garden Restaurant", industry: "Food & Beverage" }, { name: "Build Smart Infra", industry: "Construction" }, { name: "CloudNet Technologies", industry: "SaaS & Technology" }] };
                const clientsIndustriesDefault = { title: "Industries We Serve", description: "Deep expertise across 20+ industry verticals.", industries: ["Healthcare", "Real Estate", "Education", "E-commerce", "Manufacturing", "Finance & Legal", "Restaurant & Food", "Automotive", "Fashion & Retail", "IT & Technology", "Construction", "Travel & Hospitality", "Fitness & Wellness", "Agriculture", "Professional Services"] };

                const testimonialsHeroDefault = { badge: 'Client Stories', title: 'What Our Clients Say', description: "Don't just take our word for it — hear directly from the businesses we've helped grow." };
                const testimonialsStatsDefault = { stats: [{ number: "5000+", label: "Happy Clients" }, { number: "98%", label: "Satisfaction Rate" }, { number: "4.9/5", label: "Average Rating" }, { number: "10+", label: "Years of Excellence" }] };
                const testimonialsReviewDefault = { title: "Real Stories. Real Results.", description: "Over 5000 businesses have experienced growth with Afwan Tech.", testimonials: [{ name: "Rajesh Kumar", company: "DRH Sports", role: "CEO", rating: 5, review: "Afwan Tech completely transformed our online presence. Our website traffic increased by 300% and we now get 50+ leads per month through our website alone. Highly recommended!" }, { name: "Priya Sharma", company: "HealthFirst Clinic", role: "Director", rating: 5, review: "The team at Afwan Tech understood our healthcare brand perfectly. Our new website looks incredibly professional and our patient enquiries have doubled since the launch." }, { name: "Amit Patel", company: "Prime Real Estate", role: "Founder", rating: 5, review: "We ranked on Page 1 of Google for our top keywords within just 3 months. The SEO results are outstanding and the team is always responsive and helpful." }, { name: "Sunita Verma", company: "Fashion House", role: "Owner", rating: 5, review: "Our ecommerce store designed by Afwan Tech has been a game-changer. The design is beautiful, the loading speed is great, and our online sales have tripled!" }, { name: "Vikram Singh", company: "TechSpark Solutions", role: "Marketing Head", rating: 5, review: "Their digital marketing services are excellent. The team is data-driven, transparent, and genuinely cares about results. Our cost per lead has reduced by 60%." }, { name: "Meera Joshi", company: "EduLearn Academy", role: "Principal", rating: 5, review: "Afwan Tech created a stunning website and implemented SEO that helped us rank for local search terms. Student admissions have increased significantly." }] };
                const testimonialsCTADefault = { title: "Ready to Write Your Success Story?", description: "Join thousands of businesses achieving their digital goals with Afwan Tech.", btnText: "Get Started Today", btnLink: "/contact" };

                const awardsHeroDefault = { badge: '🏆 Recognized Excellence', title: 'Awards & Achievements', description: "Our commitment to excellence has been recognized by top industry bodies across India." };
                const awardsGridDefault = { title: "Our Recognition & Milestones", description: "Awards that reflect our dedication to delivering world-class digital services.", awards: [{ year: "2024", title: "Best SEO Company of the Year", org: "Digital Excellence Awards", desc: "Recognized for delivering exceptional SEO results and organic growth for clients across India.", color: "border-yellow-400 bg-yellow-50" }, { year: "2023", title: "Top Digital Marketing Agency — India", org: "Business World Awards", desc: "Awarded for outstanding performance in multi-channel digital marketing campaigns.", color: "border-blue-400 bg-blue-50" }, { year: "2023", title: "Best Web Design Company", org: "Design India Summit", desc: "Honored for creating visually stunning, user-centric, and high-converting website designs.", color: "border-purple-400 bg-purple-50" }, { year: "2022", title: "Fastest Growing Digital Agency", org: "StartupIndia Recognition", desc: "Recognized for unprecedented growth and creating significant employment in the digital sector.", color: "border-green-400 bg-green-50" }, { year: "2022", title: "Best SME Digital Partner", org: "MSME Excellence Awards", desc: "Awarded for exceptional contribution to helping small and medium enterprises grow digitally.", color: "border-orange-400 bg-orange-50" }, { year: "2021", title: "Excellence in Customer Service", org: "Customer Experience Forum", desc: "Recognized for our 98% client satisfaction rate and outstanding post-delivery support.", color: "border-pink-400 bg-pink-50" }] };
                const awardsMilestonesDefault = { title: "Company Milestones", milestones: [{ number: "10+", label: "Years in Business" }, { number: "5000+", label: "Projects Delivered" }, { number: "200+", label: "Team Members" }, { number: "15+", label: "National Awards" }] };

                const newsHeroDefault = { badge: 'Latest Updates', title: 'News & Events', description: "Stay updated with the latest news, announcements, milestones, and events from Afwan Tech." };
                const newsGridDefault = { news: [{ date: "Feb 2026", category: "Award", title: "Afwan Tech Named Best SEO Company of the Year 2025", desc: "We are thrilled to announce that Afwan Tech has been honored with the prestigious 'Best SEO Company of the Year' award at the Digital Excellence Awards 2025.", tag: "bg-yellow-100 text-yellow-800" }, { date: "Jan 2026", category: "Expansion", title: "Afwan Tech Launches Franchise Program Across India", desc: "Afwan Tech announces the launch of its nationwide franchise program, opening opportunities for entrepreneurs across tier-2 and tier-3 cities in India.", tag: "bg-green-100 text-green-800" }, { date: "Dec 2025", category: "Milestone", title: "5000 Clients Served — A Major Milestone for Afwan Tech", desc: "We proudly celebrate serving over 5000 businesses across India. This milestone reflects our commitment to delivering exceptional digital services.", tag: "bg-blue-100 text-blue-800" }, { date: "Nov 2025", category: "Event", title: "Afwan Tech at Digital Marketing Summit 2025", desc: "Our CEO delivered a keynote speech at the Digital Marketing Summit 2025, sharing insights on the future of AI-driven marketing and organic growth strategies.", tag: "bg-purple-100 text-purple-800" }, { date: "Oct 2025", category: "Launch", title: "Introducing AI-Powered SEO Analytics Dashboard", desc: "Afwan Tech launches its proprietary AI-powered SEO analytics dashboard, offering clients real-time insights into their search performance.", tag: "bg-pink-100 text-pink-800" }, { date: "Sep 2025", category: "Partnership", title: "Strategic Partnership with Google Premier Partner Network", desc: "Afwan Tech joins the Google Premier Partner Network, reinforcing our commitment to delivering best-in-class digital advertising results.", tag: "bg-red-100 text-red-800" }] };
                const newsSubscribeDefault = { title: "Stay Updated with Afwan Tech", description: "Subscribe to get the latest news and digital marketing insights.", btnText: "Subscribe", btnColor: "bg-yellow-400 text-black hover:bg-yellow-300" };

                const aboutHeroDefault = { title: "About <span class='text-yellow-400'>Afwan Tech</span>", description: "Awarded Best SEO Company of the Year and rated No.1 Digital Marketing Agency. We are a passionate team of digital strategists, designers, and developers dedicated to driving exceptional growth for businesses worldwide." };
                const aboutIntroDefault = { badge: "Who We Are", title: "Empowering Your Digital Journey", description: "<p>Afwan Tech is a premier IT and Digital Marketing agency committed to helping startups, enterprises, and established brands dominate the digital landscape. We blend cutting-edge technology with data-driven marketing to deliver measurable ROI.</p><p>From Custom Website Designing and eCommerce Development to advanced SEO, Paid Ads, and Online Reputation Management, we provide 360-degree digital solutions tailored to your unique business goals.</p>", quote: "Our mission is to turn your business vision into a profound digital reality.", listTitle: "Why Choose Afwan Tech?", listItems: ["Award-Winning Digital Marketing & SEO Experts", "Custom Web Development & E-Commerce Solutions", "Ethical, Transparent, and Data-Driven Approach", "Dedicated Account Managers & Round-the-Clock Support", "Proven Track Record of Scaling Businesses Globally"] };
                const aboutWhyDefault = { title: "Why Clients Trust <span class='text-blue-600'>Afwan Tech</span>", cards: [{ title: "Expert Digital Strategists", text: "A team of seasoned marketers, SEO experts, and developers delivering innovative and high-performing digital solutions." }, { title: "Transparent & Ethical Approach", text: "No hidden fees or black-hat strategies. We believe in sheer transparency, clear reporting, and strict adherence to industry standards." }, { title: "ROI-Focused Growth Driven", text: "We don't just build websites or run ads; we build measurable, growth-oriented digital engines tailored for your success." }] };
                const aboutTeamDefault = {
                    badge: "Meet Our Experts", title: "The Visionaries Behind Our Success", description: "Our team comprises passionate digital strategists, brilliant developers, and creative marketers dedicated to elevating your brand's digital presence.", members: [
                        { name: "Rahul Ranjan Singh", role: "Founder & CEO", desc: "Awarded Best Business Growth Coach in India, Rahul leads the vision and strategy for Afwan Tech's global expansion.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a", linkedin: "#", twitter: "#", email: "#" },
                        { name: "Priya Sharma", role: "Head of Marketing", desc: "An expert in driving organic growth and managing top-tier digital campaigns that deliver measurable ROI.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2", linkedin: "#", twitter: "#", email: "#" },
                        { name: "Amit Desai", role: "Technical Director", desc: "Oversees all technological architecture, ensuring high-performance web solutions and innovative software development.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7", linkedin: "#", twitter: "#", email: "#" }
                    ]
                };
                const aboutProcessDefault = { title: "Our Proven <span class='text-blue-600'>Growth Blueprint</span>", description: "We follow a data-driven, systematic approach to ensure every project we touch turns into a digital success story.", steps: [{ title: "Discover & Strategy", desc: "In-depth research and strategic roadmapping." }, { title: "Design & Development", desc: "Building aesthetics matched with robust technical architecture." }, { title: "Marketing Execution", desc: "Deploying multi-channel campaigns for max reach." }, { title: "Analyze & Scale", desc: "Data measurement and continuous ROI optimization." }] };
                const aboutStatsDefault = { stats: [{ value: "10+", label: "Years of Digital Excellence" }, { value: "500+", label: "Global Clients Served" }, { value: "5K+", label: "Digital Campaigns Executed" }, { value: "100%", label: "Client Satisfaction Rate" }] };
                const aboutCTADefault = { title: "Ready to Supercharge Your Business Growth?", description: "Connect with our digital experts to scale your brand with proven marketing strategies, stunning websites, and cutting-edge technology.", btnText: "Get Your Free Consultation", btnLink: "/contact" };

                const portfolioHeroDefault = { badge: 'Our Work', title: initialData.title, description: `Explore our collection of professionally designed ${slug.replace('-portfolio', '')} projects — each built to convert visitors into customers.` };
                const portfolioStatsDefault = { stats: [{ number: "2000+", label: "Projects Delivered" }, { number: "20+", label: "Industries" }, { number: "98%", label: "Client Satisfaction" }, { number: "5★", label: "Average Rating" }] };

                const getPortfolioProjects = () => {
                    let type = slug.replace('-portfolio', '');
                    // Standardize types
                    if (type === 'web-designing') type = 'web';
                    if (type === 'graphic-designing' || type === 'graphic-design') type = 'graphic';
                    if (type === 'video-production') type = 'video';

                    if (type === 'web') return [
                        { name: "E-commerce Platform", category: "Web Design", tech: "React & Node.js", desc: "A high-performance online store with seamless checkout.", image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800" },
                        { name: "Corporate Website", category: "Web Design", tech: "Modern UI/UX", desc: "Clean and professional branding for a global enterprise.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
                        { name: "Portfolio Hub", category: "Web Design", tech: "Minimalist", desc: "Showcase site for a creative agency.", image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800" },
                        { name: "SaaS Dashboard", category: "Web Development", tech: "Full Stack", desc: "Real-time data visualization platform.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" }
                    ];
                    if (type === 'seo') return [
                        { name: "Retail SEO Growth", category: "SEO", tech: "Ranked #1", desc: "300% increase in organic traffic for a fashion brand.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
                        { name: "Local SEO Success", category: "SEO", tech: "Google My Business", desc: "Dominated local search for a multi-city clinic network.", image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=800" },
                        { name: "B2B Lead Gen", category: "SEO", tech: "Content Strategy", desc: "Secured top rankings for high-intent industry keywords.", image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c20a?auto=format&fit=crop&q=80&w=800" },
                        { name: "Mobile App SEO", category: "SEO", tech: "App Store Optimization", desc: "Boosted visibility and downloads for a health app.", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" }
                    ];
                    if (type === 'graphic') return [
                        { name: "Brand Identity Design", category: "Graphic Design", tech: "Logos & Branding", desc: "Created a modern visual brand for a startup.", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800" },
                        { name: "Social Media Campaign", category: "Graphic Design", tech: "Visual Content", desc: "Compelling graphics that boosted engagement by 200%.", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800" },
                        { name: "Product Packaging", category: "Graphic Design", tech: "Print Ready", desc: "Premium packaging design for an organic food brand.", image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800" },
                        { name: "Infographic Series", category: "Graphic Design", tech: "Data Illustration", desc: "Simplified complex data for an annual business report.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" }
                    ];
                    if (type === 'video') return [
                        { name: "Corporate Film", category: "Video Production", tech: "4K Cinematic", desc: "Professional brand story for an international firm.", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800" },
                        { name: "Product Promo", category: "Video Production", tech: "Motion Graphics", desc: "Dynamic video showcasing app features and benefits.", image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800" },
                        { name: "Customer Testimonial", category: "Video Production", tech: "Interview Style", desc: "High-impact video featuring real user experiences.", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800" },
                        { name: "Animated Explainers", category: "Video Production", tech: "2D Animation", desc: "Engaging animation explaining complex service workflows.", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800" }
                    ];
                    return [{ name: "Project Alpha", category: "Technology", tech: "Custom", desc: "A great project.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" }];
                };

                const portfolioGridDefault = { title: "Featured Projects", description: "Every project is crafted with purpose, precision, and passion.", projects: getPortfolioProjects() };

                // Service defaults (Universal)
                const defaultServiceHero = { badge: "Best Service Agency", title: `Transform Your Business with our ${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Services`, description: "We create visually stunning, functional solutions that help you stand out and connect with your audience.", image: "/images/small-business.webp", features: ["User-Friendly Solutions for Maximum Engagement", "Mobile-Optimized for Modern Users", "Customized Strategies for Unique Brands", "Fast Execution for Better User Experience", "SEO-Friendly Structure for Organic Growth"] };
                const defaultServiceContent = { introTitle: "Accelerate Your Business Growth", introDescription: "Your digital presence is your growth engine. We design innovative, user-focused solutions that captivate audiences and drive measurable results.", smallTitle: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '), mainTitle: "Drive Success with Top Tier Services", description: "A well-executed strategy forms the core of success for your business online.", image: "/images/small-business.webp", secondTitle: "Exceptional Services You Can Count On", secondDescription: "We carefully craft strategies that represent your brand and generate measurable success.", secondImage: "/images/small-business.webp", bullets: ["Custom Designs tailored to your brand identity", "Results-focused approach for better engagement", "User-Centric strategy", "Mobile-Friendly Solutions", "SEO-Optimized for higher rankings"] };
                const defaultServicePlans = { title: "Affordable Pricing Packages", description: "Choose cost-effective packages tailored for startups and growing businesses.", plans: [{ title: "Bronze", price: "1666", features: ["Basic feature 1"] }, { title: "Silver", price: "2499", recommended: true, features: ["Standard feature 1"] }, { title: "Gold", price: "3333", features: ["Premium feature 1"] }, { title: "Diamond", price: "5833", features: ["Enterprise feature 1"] }] };
                const defaultServiceFeatures = { title: "Professional & Built for Growth", description: "Every business deserves a professional online presence.", features: [{ icon: "/icons/template.png", title: "Professional Templates" }, { icon: "/icons/cost.png", title: "Cost-Effective" }, { icon: "/icons/mobile.png", title: "Mobile Responsive" }, { icon: "/icons/speed.png", title: "Fast Load Speeds" }] };
                const defaultServiceBenefits = { badge: "Benefits", title: "Solutions That Deliver Results", description: "A solution that looks great but also delivers measurable results.", points: ["Attractively Designed", "User-Centric Experiences", "Mobile Responsiveness", "SEO Optimization"], qualityTitle: "The Quality You'll Experience", qualityItems: [{ icon: "/icons/community.png", title: "Local Outreach" }, { icon: "/icons/seo.png", title: "SEO Ranking" }] };
                const defaultServiceOurWork = { title: "Case Studies", description: "Explore how we transform businesses.", projects: [{ image: "/images/work1.webp", name: "Example Project", category: "Industry", services: ["Service 1"] }] };

                // Home page defaults
                const homeHeroDefault = { badge: "12+ YEARS OF EXCELLENCE", title: "Building Organic Presence\nFor Businesses Worldwide", description: "We help high-growth businesses thrive in the digital landscape.", btn1Text: "Calculate Your ROI", btn1Link: "#", btn2Text: "Our Capabilities", btn2Link: "#", typingText: "Increase Organic Traffic, Quality Leads" };
                const homeWhyDefault = { title: "What makes us #1 Agency", description: "We drive real results.", features: [{ title: "Experience", description: "Since 2011" }], ratings: [{ platform: "Google", score: "4.9 / 5", stars: 5 }] };
                const homeTabsDefault = { title: "Services We Offer", tabsData: [{ tabName: "SEO", title: "SEO Services", description: "Expert SEO services.", btnText: "Know More", btnLink: "#" }] };

                // --- LOGIC START ---
                const requiredSections = currentTabs.filter(t => t.id !== 'seo').map(t => t.id);
                const currentSectionsMap = {};
                if (initialData.sections) {
                    initialData.sections.forEach(s => currentSectionsMap[s.type] = s);
                }

                // Title adjustments for new pages
                if (!data.slug) {
                    if (slug === 'mission') initialData.title = "Mission, Vision & Goals";
                    if (slug === 'why-us') initialData.title = "Why Afwan Tech";
                    if (slug === 'clients') initialData.title = "Our Clients";
                    if (slug === 'testimonials') initialData.title = "Testimonials";
                    if (slug === 'awards') initialData.title = "Awards & Achievements";
                    if (slug === 'news') initialData.title = "News & Events";
                    if (slug === 'about-us') initialData.title = "About Us";
                }

                const finalSections = requiredSections.map(type => {
                    let d = {};
                    if (slug === 'mission') { if (type === 'mission_details') d = missionDetailsDefault; }
                    else if (slug === 'why-us') { if (type === 'why_us_hero') d = whyUsHeroDefault; if (type === 'why_us_stats') d = whyUsStatsDefault; if (type === 'why_us_reasons') d = whyUsReasonsDefault; if (type === 'why_us_cta') d = whyUsCTADefault; }
                    else if (slug === 'clients') { if (type === 'clients_hero') d = clientsHeroDefault; if (type === 'clients_stats') d = clientsStatsDefault; if (type === 'clients_brands') d = clientsBrandsDefault; if (type === 'clients_industries') d = clientsIndustriesDefault; }
                    else if (slug === 'testimonials') { if (type === 'testimonials_hero') d = testimonialsHeroDefault; if (type === 'testimonials_stats') d = testimonialsStatsDefault; if (type === 'testimonials_review') d = testimonialsReviewDefault; if (type === 'testimonials_cta') d = testimonialsCTADefault; }
                    else if (slug === 'awards') { if (type === 'awards_hero') d = awardsHeroDefault; if (type === 'awards_grid') d = awardsGridDefault; if (type === 'awards_milestones') d = awardsMilestonesDefault; }
                    else if (slug === 'news') { if (type === 'news_hero') d = newsHeroDefault; if (type === 'news_grid') d = newsGridDefault; if (type === 'news_subscribe') d = newsSubscribeDefault; }
                    else if (slug === 'about-us') {
                        if (type === 'about_hero') d = aboutHeroDefault;
                        if (type === 'about_intro') d = aboutIntroDefault;
                        if (type === 'about_why') d = aboutWhyDefault;
                        if (type === 'about_team') d = aboutTeamDefault;
                        if (type === 'about_process') d = aboutProcessDefault;
                        if (type === 'about_stats') d = aboutStatsDefault;
                        if (type === 'about_cta') d = aboutCTADefault;
                    }
                    else if (slug === 'home') {
                        if (type === 'hero') d = {
                            badge: "12+ YEARS OF EXCELLENCE",
                            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
                            title: "Best Digital Marketing Agency in India",
                            description: "Drive genuine buyers' traffic from your target locations, with our City Wise SEO. Crush your competitors & grow your business fast!",
                            btn1Text: "See How",
                            btn1Link: "/contact",
                            btn2Text: "See Our Work",
                            btn2Link: "/our-work",
                            typingText: "Rank on Google #1 Page, Increase Organic Traffic, Boost Your Online Sales"
                        };
                        if (type === 'trusted') d = {
                            title: "Trusted by 3000+ High-Growth MSMEs/ Clients",
                            logos: Array.from({ length: 12 }).map(() => "https://via.placeholder.com/120x50?text=Logo")
                        };
                        if (type === 'why') d = {
                            title: "What Makes Afwan Tech #1 Digital Marketing SEO Agency",
                            description: "Don't let traditional internet marketing strategies slow down your Business Growth. Our unique strategy of website development with SEO Service in multiple locations will help you lead on Google.",
                            mainImage: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321651/webtechsathi/hi4rp8stiudaqivd6tb4.jpg",
                            btnText: "Connect with Expert →",
                            btnLink: "/contact",
                            features: [
                                { title: "Experience: Over A Decade in Business", description: "With more than a decade of hands-on experience, we have successfully managed countless digital marketing campaigns delivering measurable results." },
                                { title: "Expertise: 3000+ Businesses Empowered", description: "Our team delivers web development, SEO Service, PPC, and content creation across multiple industries at the fastest speed." },
                                { title: "Authority: 100+ Experts with Award Winning Status", description: "Award-winning teams involve well-motivated, smart, and creative professionals who help brands grow online." },
                                { title: "Trustworthiness: See Real Results, Honest Testimonials", description: "We build trust through transparency and consistent results. Our clients rely on us for honest advice and measurable success." }
                            ],
                            ratings: [
                                { platform: "Google", score: "4.8 / 5" },
                                { platform: "Justdial", score: "4.9 / 5" },
                                { platform: "Facebook", score: "4.8 / 5" }
                            ]
                        };
                        if (type === 'unlock') d = {
                            title: "Unlock 10x Growth with Our Unique Digital Marketing Techniques",
                            description: "Following services have been developed after years of research & applied for thousands of small & medium businesses.",
                            cards: [
                                { number: "1", title: "Website with SEO in Multiple Locations", image: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321634/webtechsathi/jypsl7vzmnikxkbcysqq.jpg", bulletPoints: "<ul><li>Local SEO</li><li>City Wise SEO</li><li>State Wise SEO</li><li>National SEO</li></ul>" },
                                { number: "2", title: "Off Page SEO for Link-building", image: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321635/webtechsathi/eycpiidxhngwa5lzbizr.jpg", bulletPoints: "<ul><li>Link Building</li><li>Domain Authority</li><li>Technical SEO</li><li>Content Marketing</li></ul>" },
                                { number: "3", title: "Brand Image Building", image: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321637/webtechsathi/xxkkynjh6aszfsn2yjn5.jpg", bulletPoints: "<ul><li>PR Distribution</li><li>Media Coverage</li><li>Online Branding</li><li>Press Releases</li></ul>" },
                                { number: "4", title: "SEO of Google My Business Listing", image: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321639/webtechsathi/fjpfhl0rnlgjb4jwvzzq.jpg", bulletPoints: "<ul><li>GMB Optimization</li><li>Review Management</li><li>Local Ranking</li><li>Maps SEO</li></ul>" },
                                { number: "5", title: "Digital Marketing", image: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321640/webtechsathi/hgovnrdsfpdbarjh5c5c.jpg", bulletPoints: "<ul><li>Social Media</li><li>Performance Ads</li><li>Lead Generation</li><li>Content Strategy</li></ul>" }
                            ]
                        };
                        if (type === 'case_studies') d = {
                            title: "Case Studies: Our Real Success Stories",
                            description: "Every project tells a story of dedication, strategy, and measurable results. Dive into our success stories to see how we turn challenges into achievements.",
                            caseStudies: [
                                { title: "Shelley Enterprises", subtitle: "Magnetic Jewellery in USA", image: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321611/webtechsathi/mlpbbcrmdgemibppqmrw.jpg", highlightImage: "https://images.unsplash.com/photo-1581090700227-1e8a0b61e8f1", listHeading: "Services Offered", services: ["Website with SEO in Multiple Locations", "Off Page SEO for Link-building", "Brand Image Building", "SEO of Google My Business Listing"], btnText: "View Case Study", btnLink: "/contact" },
                                { title: "Care Zindagi", subtitle: "Home Nursing Services in Jharkhand", image: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321612/webtechsathi/xlh3es3akiqw2xcnltze.jpg", highlightImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0", listHeading: "Services Offered", services: ["Website with SEO in Multiple Locations", "Off Page SEO for Link-building", "GMB Optimization"], btnText: "View Case Study", btnLink: "/contact" },
                                { title: "Astro Meenakshi", subtitle: "Positive Vashikaran in Delhi", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c", highlightImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df", listHeading: "Services Offered", services: ["Website with SEO in Multiple Locations", "Brand Image Building", "National TV & Media Websites"], btnText: "View Case Study", btnLink: "/contact" }
                            ]
                        };
                        if (type === 'webinar') d = {
                            title: "Business Growth Formula Webinar",
                            subtitle: "Free Webinar for Entrepreneurs",
                            datetime: "Every Tuesday | 11am to 12 Noon | On Zoom",
                            points: ["Establish a strong online presence", "Generate genuine B2B leads", "Enhance your online reputation", "Drive more website traffic", "Boost sales and turnover", "Build personal brand image"],
                            coachName: "Rahul Ranjan Singh",
                            coachTitle: "Awarded Best Business Growth Coach in India",
                            mainImage: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321648/webtechsathi/j6eqfpatinfkfiujltia.jpg",
                            images: [
                                "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321642/webtechsathi/u0q5v1v81fjvzfggrncz.jpg",
                                "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321643/webtechsathi/lk4gcnbrdm3fpxgpey9k.jpg",
                                "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321645/webtechsathi/a08gcydwujdqabyctbim.jpg",
                                "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321646/webtechsathi/qghh0ob4cbbzgryxyczg.jpg",
                                "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321647/webtechsathi/rtxbtzuogkitcw4xqcwi.jpg"
                            ],
                            btn1Text: "Book Your Slot Now →",
                            btn2Text: "Read Story →"
                        };
                        if (type === 'clients') d = {
                            title: "Listen From Our Clients",
                            description: "Behind every success story is a partnership built on trust and collaboration.",
                            testimonials: [
                                { thumbnail: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321627/webtechsathi/q3rzcugot08ajyq5ryok.jpg", youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", caption: "Winntus Formwork Private Limited", description: "How Webpulse Digital Marketing Helped Winntus Grow Online" },
                                { thumbnail: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321628/webtechsathi/g1ezaytgau790ibx4kvp.jpg", youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", caption: "Advocate Gaurav", description: "Website Design for Legal Services | Testimonial by Adv Gaurav" }
                            ],
                            btnText: "View More Reviews →"
                        };
                        if (type === 'business_serve') d = {
                            title: "Businesses We SERVE",
                            description: "Webpulse has worked with businesses from a wide range of industries, delivering Website Designing, SEO Services, Digital Marketing, and PR Services.",
                            btnText: "Send Enquiry",
                            btnLink: "/contact",
                            businesses: [
                                { name: "B2B", iconUrl: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321640/webtechsathi/hgovnrdsfpdbarjh5c5c.jpg" },
                                { name: "Manufacturers", iconUrl: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321640/webtechsathi/hgovnrdsfpdbarjh5c5c.jpg" }
                            ]
                        };
                        if (type === 'brands') d = {
                            title: "We Build Brands",
                            bgImage: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321649/webtechsathi/emmraulqaohppcs5p0gn.jpg",
                            centerText: "W",
                            nodes: [
                                { title: "Web Designing", description: "We specialize in building visually stunning websites.", icon: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321614/webtechsathi/s1wvegrvfzvfldh5i1he.jpg" },
                                { title: "Lead Generation", description: "City-wise SEO to generate targeted leads.", icon: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321614/webtechsathi/s1wvegrvfzvfldh5i1he.jpg" }
                            ]
                        };
                        if (type === 'tabs') d = {
                            title: "Digital Marketing Services Our Agency Offers",
                            tabsData: [
                                { tabName: "SEO", title: "Search Engine Optimization", description: "We provide professional Google SEO services to improve rankings and generate organic traffic.", image: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321614/webtechsathi/s1wvegrvfzvfldh5i1he.jpg", btnText: "Know More", btnLink: "/seo" },
                                { tabName: "Digital Marketing", title: "Comprehensive Digital Marketing", description: "We deliver customized digital marketing strategies focused on growth.", image: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321619/webtechsathi/xqu4si4hkdh7nogcony2.jpg", btnText: "View Service", btnLink: "/digital-marketing" }
                            ]
                        };
                        if (type === 'industries') d = {
                            title: "Industries We Serve",
                            description: "At Webpulse Solution Pvt. Ltd., we proudly serve a wide range of industries. Our tailored digital solutions are crafted to drive real results and sustainable growth for our clients.",
                            productTitle: "Products Based Industries",
                            serviceTitle: "Services Based Industries",
                            productIndustries: ["Drugs & Pharmaceuticals", "Food & Beverages", "Building & Construction", "Chemicals, Dyes & Solvents", "Furniture & Supplies", "Housewares & Supplies", "Handicrafts & Decoratives", "Books & Stationery", "Engineering Services", "Fashion Accessories & Gear", "Sports Goods, Toys & Games", "Bags, Belts & Wallets", "Apparel & Garments", "Industrial Plants & Machinery", "Electronics & Electrical", "Mechanical Parts & Spares", "Automobile, Parts & Spares", "Metals, Alloys & Minerals", "Kitchen Utensils & Appliances", "Cosmetics & Personal Care", "Gems, Jewelry & Astrology", "Herbal & Ayurvedic Product", "Telecom Equipment & Goods", "Media, PR & Publishing", "Hospital & Diagnostics", "Industrial Supplies", "Packaging Machines & Goods", "Lab Instruments & Supplies", "Agriculture & Farming", "Hand & Machine Tools", "Textiles, Yarn & Fabrics", "Home Textile & Furnishing", "Computer & IT Solutions", "Security Systems & Services", "Paper & Paper Products", "Marble, Granite & Stones"],
                            serviceIndustries: ["Event Planner & Organizer", "Transportation & Logistics", "Education & Training", "Bicycle, Rickshaw & Spares", "HR Planning & Recruitment", "Contractors & Freelancers", "Hospital, Clinic & Consultation", "IT & Telecom Services", "Taxes, Audit & Advisory", "Travel, Tourism & Hotels", "R&D and Testing Labs", "House Keeping Services", "Electronics Components", "Product Rental & Leasing", "Financial & Legal Services", "Call Center & BPO Services", "Architecture & Interiors", "Leather Products", "Electrical Equipment"],
                            btnText: "Connect with Expert",
                            btnLink: "/contact"
                        };
                        if (type === 'technology') d = {
                            title: "Technology and Tools we use",
                            description: "At Webpulse Solution Pvt. Ltd., we harness the latest technologies and tools to deliver exceptional results for our clients.",
                            tools: [
                                { name: "Ubersuggest" }, { name: "PHP" }, { name: "Google Analytics" }, { name: "CodeIgniter" },
                                { name: "Meta Business Partner" }, { name: "JavaScript + jQuery" }, { name: "Google Partner" }, { name: "Linux" }
                            ]
                        };
                        if (type === 'stats') d = {
                            stats: [
                                { number: "2011", suffix: "", title: "Established" },
                                { number: "3000", suffix: "+", title: "Clients Trust Us" },
                                { number: "4", suffix: "", title: "Branch Locations" },
                                { number: "10", suffix: "+", title: "Award Wins" }
                            ]
                        };
                        if (type === 'news') d = {
                            title: "Afwan Tech in News & Media",
                            mediaLogos: ["Press Trust of India", "India Today", "Business Today"]
                        };
                        if (type === 'life') d = {
                            title: "Life At Afwan Tech",
                            description: "Life at Afwan Tech is all about collaboration, innovation, and growth.",
                            slides: [
                                { image: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321622/webtechsathi/qhimok3me2gcxv805jru.jpg", caption: "Unleashing Fun With the Team" },
                                { image: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321623/webtechsathi/s4f0cloh8nzu0iwih60x.jpg", caption: "Diwali Celebration" }
                            ]
                        };
                    }
                    else if (isPortfolioPage) { if (type === 'portfolio_hero') d = portfolioHeroDefault; if (type === 'portfolio_stats') d = portfolioStatsDefault; if (type === 'portfolio_grid') d = portfolioGridDefault; }
                    else {
                        if (type === 'service_hero') d = defaultServiceHero;
                        if (type === 'service_content') d = defaultServiceContent;
                        if (type === 'service_plans') d = defaultServicePlans;
                        if (type === 'service_features') d = defaultServiceFeatures;
                        if (type === 'service_benefits') d = defaultServiceBenefits;
                        if (type === 'service_our_work') d = defaultServiceOurWork;
                        if (type === 'service_clients') d = { hideEditor: true };
                        if (type === 'faq_section') d = { title: "Frequently Asked Questions", description: "Find answers to common questions about our services and process." };
                    }
                    const section = currentSectionsMap[type];
                    // MERGE LOGIC: Start with defaults (d), then overwrite with existing database data (section.data)
                    const mergedData = { ...d, ...(section?.data || {}) };

                    // List of complex fields (arrays) that should definitely come from defaults if empty or missing in DB
                    const arrayFields = [
                        'cards', 'caseStudies', 'points', 'images', 'testimonials',
                        'businesses', 'nodes', 'tabsData', 'productIndustries',
                        'serviceIndustries', 'tools', 'stats', 'mediaLogos', 'slides'
                    ];

                    arrayFields.forEach(f => {
                        // If default d has the field and it's missing or empty in mergedData, use d's value
                        if (d[f] && (!mergedData[f] || mergedData[f].length === 0)) {
                            mergedData[f] = d[f];
                        }
                    });

                    // Special case for portfolio_grid placeholders
                    if (isPortfolioPage && type === 'portfolio_grid') {
                        const projects = section?.data?.projects || [];
                        const hasOnlyPlaceholder = projects.length === 1 && (projects[0].name === "Project Alpha" || !projects[0].image);
                        if (projects.length === 0 || hasOnlyPlaceholder) {
                            mergedData.projects = d.projects;
                        }
                    }

                    return {
                        type,
                        order: requiredSections.indexOf(type),
                        data: mergedData,
                        _id: section?._id // Keep MongoDB ID to ensure updates work correctly
                    };
                });

                setPageData({ ...initialData, sections: finalSections });
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [slug]);

    const handleSave = () => {
        const btn = document.getElementById('saveBtn');
        if (btn) btn.innerText = 'Saving...';
        fetch(`${API_BASE_URL}/api/pages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
            },
            body: JSON.stringify(pageData)
        })
            .then(res => {
                if (!res.ok) {
                    if (res.status === 401) throw new Error('SESSION_EXPIRED');
                    return res.json().then(errData => { throw new Error(errData.message || 'Save failed'); });
                }
                return res.json();
            })
            .then(() => {
                if (btn) btn.innerText = '✓ Save All Changes';
                alert('Page saved successfully!');
            })
            .catch(err => {
                if (btn) btn.innerText = '✓ Save All Changes';
                if (err.message === 'SESSION_EXPIRED') {
                    alert('Session expired. Please login again.');
                    localStorage.removeItem('adminToken');
                    navigate('/admin/login');
                } else {
                    alert('Error saving page: ' + err.message);
                }
            });
    };

    const updateSection = (type, updatedData) => {
        const newSections = pageData.sections.map(s =>
            s.type === type ? { ...s, data: updatedData } : s
        );
        setPageData({ ...pageData, sections: newSections });
    };

    if (loading) return <div className="p-20 text-center font-bold text-gray-400">Loading High-Performance Editor...</div>;

    const activeSection = pageData.sections.find(s => s.type === activeTab);

    return (
        <AdminLayout>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
                <div>
                    <h1 className="text-[28px] font-bold text-[#111827] capitalize">{slug.replace('-', ' ')} Page</h1>
                    <p className="text-gray-500 text-sm mt-1">Manage your content with ease</p>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-100 p-6 md:p-8 mb-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 pb-2 border-b border-white">
                    <div>
                        <h2 className="text-xl font-bold text-[#111827]">Manage {slug.replace('-', ' ')} Page</h2>
                        <p className="text-gray-500 text-sm mt-1">Edit the main sections of your {slug.replace('-', ' ')} page</p>
                    </div>
                    <button
                        id="saveBtn"
                        onClick={handleSave}
                        className="bg-[#8b5cf6] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#7c3aed] transition-all flex items-center shrink-0 shadow-sm"
                    >
                        ✓ Save All Changes
                    </button>
                </div>

                {/* TABS GRID */}
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
                    {currentTabs.map(tab => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex flex-col items-center justify-center p-5 rounded-xl transition-all border ${isActive
                                    ? tab.activeCls
                                    : 'bg-white border-gray-100 text-[#111827] hover:border-gray-200 hover:shadow-sm'
                                    }`}
                            >
                                <span className={`text-2xl mb-2 ${!isActive && 'opacity-70'}`}>{tab.icon}</span>
                                <span className="text-[13px] font-semibold">{tab.label}</span>
                            </button>
                        );
                    })}
                </div>

                <div className="bg-white rounded-xl">
                    {activeTab === 'seo' ? (
                        <div className="p-8 border border-gray-100 rounded-xl shadow-sm">
                            <div className="flex items-center mb-6">
                                <span className="text-xl mr-3">🔍</span>
                                <h3 className="text-lg font-bold text-[#111827]">SEO Settings</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Display Title (Admin Only)</label>
                                    <input
                                        type="text"
                                        value={pageData.title}
                                        onChange={(e) => setPageData({ ...pageData, title: e.target.value })}
                                        className="w-full bg-white border border-gray-200 rounded-lg p-3 text-gray-700 outline-none focus:border-blue-500 transition-all text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Meta Title (SEO)</label>
                                    <input
                                        type="text"
                                        value={pageData.metaTitle || ''}
                                        onChange={(e) => setPageData({ ...pageData, metaTitle: e.target.value })}
                                        className="w-full bg-white border border-gray-200 rounded-lg p-3 text-gray-700 outline-none focus:border-blue-500 transition-all text-sm"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">SEO Keywords</label>
                                    <input
                                        type="text"
                                        value={pageData.keywords || ''}
                                        onChange={(e) => setPageData({ ...pageData, keywords: e.target.value })}
                                        className="w-full bg-white border border-gray-200 rounded-lg p-3 text-gray-700 outline-none focus:border-blue-500 transition-all text-sm"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Meta Description</label>
                                    <textarea
                                        rows="4"
                                        value={pageData.metaDescription || ''}
                                        onChange={(e) => setPageData({ ...pageData, metaDescription: e.target.value })}
                                        className="w-full bg-white border border-gray-200 rounded-lg p-3 text-gray-700 outline-none focus:border-blue-500 transition-all text-sm resize-none"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    ) : activeSection && activeSection.data?.hideEditor ? (
                        <div className="p-8 border border-gray-100 rounded-xl shadow-sm bg-gray-50 text-center">
                            <h3 className="text-lg font-bold text-gray-700 mb-2">Editor Component Not Required</h3>
                            <p className="text-gray-500">This section ({activeTab}) pulls data globally and does not require page-specific editing here.</p>
                        </div>
                    ) : activeSection ? (
                        <div className="border border-gray-100 rounded-xl shadow-sm">
                            <SectionEditor
                                section={activeSection}
                                onChange={(updatedData) => updateSection(activeTab, updatedData)}
                            />
                        </div>
                    ) : null}
                </div>
            </div>
        </AdminLayout>
    );
};

export default PageEditor;
