import React, { useState, useEffect } from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceTabs from "../../components/services/ServiceTabs";
import PlansPricing from "../../components/services/PlansPricing";
import ServiceKeyFeatures from "../../components/services/ServiceKeyFeatures";
import ServiceBenefits from "../../components/services/ServiceBenefits";
import ServiceOurWork from "../../components/services/ServiceOurWork";
import ListenFromClients from "../../components/home/ListenFromClients";
import API_BASE_URL from "../../config/api";

const UniversalServiceWrapper = ({ slug, pageName }) => {
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPageData = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/api/pages/${slug}`);
                if (!res.ok) throw new Error("Failed to fetch page data");
                const result = await res.json();
                setPageData(result);
            } catch (error) {
                console.error("Error fetching page data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPageData();
    }, [slug]);

    if (loading) {
        return (
            <div className="py-20 text-center text-gray-500 min-h-[50vh] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                <span className="ml-3 font-semibold text-lg">Loading {pageName}...</span>
            </div>
        );
    }

    // Extractor helper
    const getSection = (type) => pageData?.sections?.find(s => s.type === type)?.data || null;

    const heroData = getSection('service_hero');
    const contentData = getSection('service_content');
    const plansData = getSection('service_plans');
    const featuresData = getSection('service_features');
    const benefitsData = getSection('service_benefits');
    const workData = getSection('service_our_work');

    // Universal Fallbacks
    const defaultHero = { badge: "Best Service Agency", title: `Transform Your Business with our ${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Services`, description: "We create visually stunning, functional solutions that help you stand out and connect with your audience.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f", features: ["User-Friendly Solutions", "Mobile-Optimized", "Customized Strategies", "Fast Execution", "SEO-Friendly Structure"] };
    const defaultContent = { introTitle: "Accelerate Your Business Growth", introDescription: "Your digital presence is your growth engine.", smallTitle: pageName, mainTitle: "Drive Success with Top Tier Services", description: "A well-executed strategy forms the core of success.", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", bullets: ["Custom Designs", "Results-focused approach", "User-Centric strategy", "Mobile-Friendly", "SEO-Optimized"] };
    const defaultPlans = { title: "Affordable Pricing Packages", description: "Tailored for your business.", plans: [{ title: "Bronze", price: "1666", oldPrice: "2999", save: "45%", features: ["Feature 1", "Feature 2"] }, { title: "Silver", price: "2499", oldPrice: "4500", save: "44%", recommended: true, features: ["Feature 1", "Feature 2"] }, { title: "Gold", price: "3333", oldPrice: "6000", save: "45%", features: ["Feature 1", "Feature 2"] }] };
    const defaultFeatures = { title: "Professional & Built for Growth", description: "Experience the difference with our high-end features.", features: [{ icon: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png", title: "Professional Templates" }, { icon: "https://cdn-icons-png.flaticon.com/512/1055/1055683.png", title: "Mobile Responsive" }, { icon: "https://cdn-icons-png.flaticon.com/512/1055/1055691.png", title: "SEO Optimized" }] };
    const defaultBenefits = { title: "Solutions That Deliver Results", description: "Our approach ensures you get the most out of your investment.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978", points: ["Attractively Designed", "User-Centric", "Mobile Responsiveness", "SEO Optimization"] };
    const defaultWork = { title: "Case Studies", description: "Take a look at some of our successful collaborations.", projects: [{ image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d", name: "Featured Project", category: "Digital Marketing", services: ["Web Design", "SEO Strategy", "Market Analysis"] }] };

    return (
        <div className="bg-white">
            <Breadcrumb currentPage={pageName} />

            <ServiceHero {...(heroData || defaultHero)} />
            <ServiceContent {...(contentData || defaultContent)} />

            <ServiceTabs
                plansData={<PlansPricing {...(plansData || defaultPlans)} />}
                featuresData={<ServiceKeyFeatures {...(featuresData || defaultFeatures)} />}
                benefitsData={<ServiceBenefits {...(benefitsData || defaultBenefits)} />}
                workData={<ServiceOurWork {...(workData || defaultWork)} />}
            />
        </div>
    );
};

export default UniversalServiceWrapper;
