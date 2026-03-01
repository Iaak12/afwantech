import Breadcrumb from "../../components/common/Breadcrumb";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceTabs from "../../components/services/ServiceTabs";
import PlansPricing from "../../components/services/PlansPricing";
import ServiceKeyFeatures from "../../components/services/ServiceKeyFeatures";
import ServiceBenefits from "../../components/services/ServiceBenefits";
import ServiceOurWork from "../../components/services/ServiceOurWork";
import ListenFromClients from "../../components/home/ListenFromClients";

const DigitalMarketingByIndustry = () => {

    const plansSection = (
        <PlansPricing
            title="Industry-Specific Digital Marketing Packages"
            description="Tailored digital marketing solutions built for your specific industry vertical."
            plans={[
                {
                    title: "Starter",
                    subtitle: "For single industry niche.",
                    price: "6999",
                    oldPrice: "12000",
                    save: "42%",
                    features: [
                        "Industry Keyword Research",
                        "On-Page SEO",
                        "Social Media (2 Platforms)",
                        "Monthly Report",
                    ],
                },
                {
                    title: "Professional",
                    subtitle: "For competitive industries.",
                    price: "12999",
                    oldPrice: "22000",
                    save: "41%",
                    recommended: true,
                    features: [
                        "Advanced Competitor Analysis",
                        "Multi-Channel Strategy",
                        "PPC Campaign Management",
                        "Social Media (4 Platforms)",
                        "Lead Generation Funnels",
                        "Bi-Weekly Reporting",
                    ],
                },
                {
                    title: "Enterprise",
                    subtitle: "Full-scale industry domination.",
                    price: "24999",
                    oldPrice: "40000",
                    save: "37%",
                    features: [
                        "Dedicated Industry Strategist",
                        "Full-Funnel Campaign",
                        "SEO + PPC + Social",
                        "Content Marketing",
                        "Advanced Analytics",
                        "Weekly Reviews",
                    ],
                },
                {
                    title: "Custom",
                    subtitle: "For large enterprises.",
                    price: "39999",
                    oldPrice: "65000",
                    save: "38%",
                    features: [
                        "Custom Industry Strategy",
                        "Multi-Location Campaigns",
                        "Dedicated Account Manager",
                        "Full Marketing Audit",
                        "CRM Integration",
                        "Priority Support",
                    ],
                },
            ]}
        />
    );

    const keyFeaturesSection = (
        <ServiceKeyFeatures
            title="Digital Marketing Solutions for Every Industry"
            description="We understand that each industry has unique challenges. Our industry-specific approach delivers targeted results."
            features={[
                { icon: "/icons/industry.png", title: "Healthcare Marketing" },
                { icon: "/icons/ecommerce.png", title: "E-commerce Growth" },
                { icon: "/icons/real-estate.png", title: "Real Estate SEO" },
                { icon: "/icons/education.png", title: "Education Marketing" },
                { icon: "/icons/hospitality.png", title: "Hospitality & Travel" },
                { icon: "/icons/finance.png", title: "Finance & Legal" },
                { icon: "/icons/manufacturing.png", title: "Manufacturing" },
                { icon: "/icons/retail.png", title: "Retail & Fashion" },
                { icon: "/icons/technology.png", title: "Tech Startups" },
                { icon: "/icons/restaurant.png", title: "Food & Restaurant" },
                { icon: "/icons/fitness.png", title: "Fitness & Wellness" },
                { icon: "/icons/automotive.png", title: "Automotive Industry" },
            ]}
        />
    );

    const benefitsSection = (
        <ServiceBenefits
            badge="Benefits"
            title="Industry-Focused Marketing That Delivers Measurable Results"
            description="Generic marketing doesn't work anymore. Industry-specific strategies drive higher engagement and better ROI."
            image="/images/digital-marketing-industry.webp"
            points={[
                "Targeted Audience Reach in Your Industry",
                "Higher Conversion Rates with Niche Strategies",
                "Competitive Advantage in Your Sector",
                "Industry-Specific Keyword Domination",
                "Better ROI Compared to Generic Marketing",
            ]}
            qualityTitle="Our Industry Approach"
            qualityItems={[
                {
                    icon: "/icons/research.png",
                    title: "Deep Industry Research",
                    description: "We study your industry inside-out before crafting strategies.",
                },
                {
                    icon: "/icons/competitor.png",
                    title: "Competitor Analysis",
                    description: "Understand what's working for competitors and outperform them.",
                },
                {
                    icon: "/icons/funnel.png",
                    title: "Custom Funnels",
                    description: "Industry-tailored funnels that convert visitors into customers.",
                },
                {
                    icon: "/icons/analytics.png",
                    title: "Data-Driven Optimization",
                    description: "Continuous improvement based on industry benchmarks.",
                },
            ]}
        />
    );

    const ourWorkSection = (
        <ServiceOurWork
            title="Industry-Specific Campaign Success Stories"
            description="From healthcare to e-commerce, we've helped businesses in diverse industries grow online."
            projects={[
                {
                    image: "/images/work1.webp",
                    name: "Healthcare Clinic - Lead Growth",
                    category: "Healthcare Marketing",
                    services: ["Local SEO", "Google Ads", "Patient Lead Generation"],
                },
                {
                    image: "/images/work2.webp",
                    name: "Real Estate Developer",
                    category: "Real Estate Marketing",
                    services: ["Property SEO", "Facebook Ads", "Virtual Tour Campaigns"],
                },
            ]}
        />
    );

    return (
        <>
            <Breadcrumb currentPage="Digital Marketing By Industry" />

            <ServiceHero
                badge="Industry-Specific Digital Marketing Company in India"
                title="Targeted Digital Marketing Solutions Designed for Your Industry"
                description="Afwan Tech delivers industry-specific digital marketing strategies that understand your audience, outperform competitors, and drive real business growth."
                image="/images/digital-marketing-industry.webp"
                features={[
                    "Industry-Specific Strategy",
                    "Competitor Analysis",
                    "Niche Keyword Targeting",
                    "Multi-Channel Campaigns",
                    "Measurable ROI",
                ]}
            />

            <ServiceContent
                introTitle="Not All Industries Are the Same — Your Marketing Shouldn't Be Either"
                introDescription="We take a deep dive into your industry to build digital marketing strategies that truly resonate with your target audience."
                smallTitle="Digital Marketing By Industry"
                mainTitle="Industry-First Digital Marketing That Drives Qualified Leads"
                description="From healthcare and real estate to e-commerce and hospitality, we craft industry-specific campaigns using SEO, PPC, social media, and content that speak directly to your market."
                image="/images/digital-marketing-industry.webp"
                secondTitle="We Speak Your Industry's Language"
                secondDescription="Our team specializes in understanding industry pain points, consumer behavior, and competitive dynamics to create marketing strategies that work."
                secondImage="/images/digital-marketing-industry.webp"
                bullets={[
                    "Healthcare, Real Estate & Education Marketing",
                    "E-commerce & Retail Growth Campaigns",
                    "Hospitality, Travel & Restaurant Marketing",
                    "Finance, Legal & Professional Services",
                    "Manufacturing & B2B Lead Generation",
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

export default DigitalMarketingByIndustry;

