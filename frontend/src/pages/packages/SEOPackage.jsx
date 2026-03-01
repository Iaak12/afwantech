import Breadcrumb from "../../components/common/Breadcrumb";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceTabs from "../../components/services/ServiceTabs";
import PlansPricing from "../../components/services/PlansPricing";
import ServiceKeyFeatures from "../../components/services/ServiceKeyFeatures";
import ServiceBenefits from "../../components/services/ServiceBenefits";
import ServiceOurWork from "../../components/services/ServiceOurWork";
import ListenFromClients from "../../components/home/ListenFromClients";

const SEOPackage = () => {

    const plansSection = (
        <PlansPricing
            title="SEO Packages"
            description="Rank higher on Google and drive consistent organic traffic with our data-driven SEO packages."
            plans={[
                {
                    title: "Local SEO",
                    subtitle: "Perfect for local businesses.",
                    price: "4999",
                    oldPrice: "9000",
                    save: "44%",
                    features: [
                        "10 Target Keywords",
                        "On-Page Optimization",
                        "Google My Business Setup",
                        "Local Citation Building",
                        "Monthly SEO Report",
                    ],
                },
                {
                    title: "Growth SEO",
                    subtitle: "For expanding businesses.",
                    price: "9999",
                    oldPrice: "18000",
                    save: "44%",
                    recommended: true,
                    features: [
                        "25 Target Keywords",
                        "Technical SEO Audit & Fix",
                        "Content Optimization",
                        "Off-Page Link Building (10 Links)",
                        "Competitor Analysis",
                        "Bi-Monthly Reports",
                    ],
                },
                {
                    title: "Authority SEO",
                    subtitle: "Dominate your niche.",
                    price: "18999",
                    oldPrice: "34000",
                    save: "44%",
                    features: [
                        "50 Target Keywords",
                        "Advanced Technical SEO",
                        "Authority Link Building",
                        "4 SEO Blog Posts/Month",
                        "Schema Markup",
                        "Weekly Ranking Reports",
                    ],
                },
                {
                    title: "Enterprise SEO",
                    subtitle: "Full SEO domination.",
                    price: "34999",
                    oldPrice: "60000",
                    save: "42%",
                    features: [
                        "100+ Target Keywords",
                        "Dedicated SEO Strategist",
                        "Full Content Marketing",
                        "Enterprise Link Building",
                        "Multi-Location SEO",
                        "Real-Time Analytics Dashboard",
                    ],
                },
            ]}
        />
    );

    const keyFeaturesSection = (
        <ServiceKeyFeatures
            title="Comprehensive SEO Strategy for Sustainable Growth"
            description="Our SEO packages cover every aspect of search engine optimization to deliver long-term, sustainable organic growth."
            features={[
                { icon: "/icons/keyword.png", title: "Keyword Research" },
                { icon: "/icons/onpage.png", title: "On-Page SEO" },
                { icon: "/icons/technical.png", title: "Technical SEO" },
                { icon: "/icons/link.png", title: "Link Building" },
                { icon: "/icons/content.png", title: "Content Optimization" },
                { icon: "/icons/local.png", title: "Local SEO" },
                { icon: "/icons/gmb.png", title: "Google My Business" },
                { icon: "/icons/schema.png", title: "Schema Markup" },
                { icon: "/icons/competitor.png", title: "Competitor Analysis" },
                { icon: "/icons/analytics.png", title: "Analytics & Tracking" },
                { icon: "/icons/speed.png", title: "Page Speed Optimization" },
                { icon: "/icons/report.png", title: "Detailed Reports" },
            ]}
        />
    );

    const benefitsSection = (
        <ServiceBenefits
            badge="Benefits"
            title="Rank Higher. Get More Traffic. Grow Your Business."
            description="SEO is the most cost-effective long-term digital marketing strategy — and our packages are designed to deliver consistent, compounding results."
            image="/images/seo.webp"
            points={[
                "Higher Google Rankings for Target Keywords",
                "Consistent Organic Traffic Without Ad Spend",
                "More Qualified Leads & Enquiries",
                "Stronger Brand Authority & Online Presence",
                "Long-Term Growth That Compounds Over Time",
            ]}
            qualityTitle="What Sets Our SEO Apart"
            qualityItems={[
                {
                    icon: "/icons/research.png",
                    title: "Data-Driven Keyword Strategy",
                    description: "We target keywords your ideal customers are actually searching for.",
                },
                {
                    icon: "/icons/technical.png",
                    title: "Technical Excellence",
                    description: "Core web vitals, site structure, and crawlability all optimized.",
                },
                {
                    icon: "/icons/content.png",
                    title: "Content That Ranks",
                    description: "Expert-crafted content designed to rank and convert.",
                },
                {
                    icon: "/icons/link.png",
                    title: "White-Hat Link Building",
                    description: "High-quality backlinks from authoritative, relevant sources.",
                },
            ]}
        />
    );

    const ourWorkSection = (
        <ServiceOurWork
            title="SEO Success Stories"
            description="From local businesses to national brands, see how our SEO strategies have delivered remarkable results."
            projects={[
                {
                    image: "/images/work1.webp",
                    name: "Real Estate Company — Page 1 in 3 Months",
                    category: "SEO Campaign",
                    services: ["Local SEO", "Authority Link Building", "Content Strategy", "300% Traffic Growth"],
                },
                {
                    image: "/images/work2.webp",
                    name: "B2B Manufacturer — National Rankings",
                    category: "Enterprise SEO",
                    services: ["Technical SEO", "Industry Keywords", "Content Marketing", "Lead Generation"],
                },
            ]}
        />
    );

    return (
        <>
            <Breadcrumb currentPage="SEO Package" />

            <ServiceHero
                badge="Best SEO Company in India"
                title="Rank #1 on Google with Our Proven SEO Packages"
                description="Afwan Tech is India's award-winning SEO company. Our data-driven SEO strategies help businesses rank higher, attract more organic traffic, and generate consistent leads."
                image="/images/seo.webp"
                features={[
                    "Keyword Research & Strategy",
                    "On-Page & Technical SEO",
                    "Authority Link Building",
                    "Local SEO & Google My Business",
                    "Monthly Transparent Reports",
                ]}
            />

            <ServiceContent
                introTitle="SEO That Delivers Real, Measurable Results"
                introDescription="Stop paying for ads every month. Our SEO packages deliver compounding organic growth that brings leads 24/7 without ad spend."
                smallTitle="SEO Package — Search Engine Optimisation"
                mainTitle="India's Award-Winning SEO Company with Proven Results"
                description="Our comprehensive SEO packages cover every aspect of search optimization — from deep keyword research and technical audits to content creation, link building, and local SEO. We've helped hundreds of businesses achieve top rankings and consistent organic growth."
                image="/images/seo.webp"
                secondTitle="Transparent SEO — You Always Know What We're Doing"
                secondDescription="We believe in complete transparency. You'll receive detailed monthly reports showing keyword rankings, traffic growth, backlinks earned, and the specific actions taken by our team."
                secondImage="/images/seo.webp"
                bullets={[
                    "In-Depth Keyword Research & Competitor Analysis",
                    "Complete On-Page & Technical SEO Optimization",
                    "High-Authority White-Hat Link Building",
                    "SEO-Optimized Blog Content Creation",
                    "Local SEO & Google My Business Management",
                ]}
            />

            <ServiceTabs
                plansData={plansSection}
                featuresData={keyFeaturesSection}
                benefitsData={benefitsSection}
                workData={ourWorkSection}
                clientsData={<ListenFromClients />}
            />
        </>
    );
};

export default SEOPackage;

