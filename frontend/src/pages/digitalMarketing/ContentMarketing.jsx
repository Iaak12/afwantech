import Breadcrumb from "../../components/common/Breadcrumb";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceTabs from "../../components/services/ServiceTabs";
import PlansPricing from "../../components/services/PlansPricing";
import ServiceKeyFeatures from "../../components/services/ServiceKeyFeatures";
import ServiceBenefits from "../../components/services/ServiceBenefits";
import ServiceOurWork from "../../components/services/ServiceOurWork";
import ListenFromClients from "../../components/home/ListenFromClients";

const ContentMarketing = () => {

    const plansSection = (
        <PlansPricing
            title="Content Marketing Packages"
            description="Build authority, drive traffic, and convert readers into customers with strategic content."
            plans={[
                {
                    title: "Starter",
                    subtitle: "Great for new brands.",
                    price: "4999",
                    oldPrice: "9000",
                    save: "44%",
                    features: [
                        "4 Blog Posts/Month",
                        "SEO Keyword Research",
                        "Basic Social Media Content",
                        "Monthly Report",
                    ],
                },
                {
                    title: "Growth",
                    subtitle: "For scaling businesses.",
                    price: "9999",
                    oldPrice: "18000",
                    save: "44%",
                    recommended: true,
                    features: [
                        "8 Blog Posts/Month",
                        "Advanced SEO Strategy",
                        "Email Newsletter",
                        "Social Media Content (3 Platforms)",
                        "Content Calendar",
                        "Bi-Weekly Reporting",
                    ],
                },
                {
                    title: "Authority",
                    subtitle: "Dominate your industry.",
                    price: "18999",
                    oldPrice: "30000",
                    save: "37%",
                    features: [
                        "16 Blog Posts/Month",
                        "Long-Form Articles & Guides",
                        "Video Script Writing",
                        "Press Releases",
                        "Infographic Content",
                        "Full Social Media Management",
                        "Weekly Reporting",
                    ],
                },
                {
                    title: "Enterprise",
                    subtitle: "For large-scale content needs.",
                    price: "29999",
                    oldPrice: "45000",
                    save: "33%",
                    features: [
                        "Unlimited Content Pieces",
                        "Dedicated Content Strategist",
                        "Multi-Platform Distribution",
                        "Full Funnel Content Strategy",
                        "CRO-Focused Content",
                        "Analytics Dashboard",
                        "Priority Support",
                    ],
                },
            ]}
        />
    );

    const keyFeaturesSection = (
        <ServiceKeyFeatures
            title="Content Marketing That Builds Authority & Drives Revenue"
            description="We create content that attracts, engages, and converts your target audience at every stage of the funnel."
            features={[
                { icon: "/icons/content.png", title: "SEO Blog Writing" },
                { icon: "/icons/strategy.png", title: "Content Strategy" },
                { icon: "/icons/social.png", title: "Social Media Content" },
                { icon: "/icons/video.png", title: "Video Scripts" },
                { icon: "/icons/email.png", title: "Email Newsletters" },
                { icon: "/icons/analytics.png", title: "Performance Analytics" },
                { icon: "/icons/keyword.png", title: "Keyword Research" },
                { icon: "/icons/design.png", title: "Infographics" },
                { icon: "/icons/funnel.png", title: "Funnel Content" },
                { icon: "/icons/branding.png", title: "Brand Storytelling" },
                { icon: "/icons/report.png", title: "Monthly Reporting" },
                { icon: "/icons/support.png", title: "Dedicated Support" },
            ]}
        />
    );

    const benefitsSection = (
        <ServiceBenefits
            badge="Benefits"
            title="Content That Attracts, Engages & Converts"
            description="Quality content builds trust, drives organic traffic, and positions your brand as an industry leader."
            image="/images/content-marketing.webp"
            points={[
                "Higher Organic Search Rankings",
                "Increased Website Traffic",
                "Stronger Brand Authority",
                "More Qualified Lead Generation",
                "Better Customer Retention",
            ]}
            qualityTitle="Our Content Approach"
            qualityItems={[
                {
                    icon: "/icons/strategy.png",
                    title: "Research-Driven Strategy",
                    description: "Every piece of content is backed by data and insights.",
                },
                {
                    icon: "/icons/seo.png",
                    title: "SEO-Optimized Writing",
                    description: "Content crafted to rank higher and attract organic traffic.",
                },
                {
                    icon: "/icons/funnel.png",
                    title: "Full-Funnel Coverage",
                    description: "Content for awareness, consideration, and conversion stages.",
                },
                {
                    icon: "/icons/analytics.png",
                    title: "Performance Tracking",
                    description: "Detailed reports on traffic, engagement, and conversions.",
                },
            ]}
        />
    );

    const ourWorkSection = (
        <ServiceOurWork
            title="Content Marketing Success Stories"
            description="See how our content strategies helped brands build authority and grow their audience."
            projects={[
                {
                    image: "/images/work1.webp",
                    name: "Tech Startup Blog Growth",
                    category: "Content Strategy",
                    services: ["SEO Blog Writing", "Keyword Targeting", "Traffic Growth 300%"],
                },
                {
                    image: "/images/work2.webp",
                    name: "E-commerce Product Content",
                    category: "Product Content",
                    services: ["Product Descriptions", "Category Pages", "Conversion Rate Boost"],
                },
            ]}
        />
    );

    return (
        <>
            <Breadcrumb currentPage="Content Marketing" />

            <ServiceHero
                badge="Content Marketing Agency in India"
                title="Build Authority & Drive Organic Growth with Expert Content Marketing"
                description="Afwan Tech creates compelling, SEO-optimized content that attracts the right audience and converts them into loyal customers."
                image="/images/content-marketing.webp"
                features={[
                    "SEO Blog Writing",
                    "Social Media Content",
                    "Email Newsletters",
                    "Video Scripts & Infographics",
                    "Full-Funnel Strategy",
                ]}
            />

            <ServiceContent
                introTitle="Content Is the Foundation of Digital Growth"
                introDescription="Every successful digital marketing strategy begins with quality content. We craft content that speaks to your audience and drives results."
                smallTitle="Content Marketing Services"
                mainTitle="Strategic Content That Builds Authority and Drives Consistent Traffic"
                description="Our content marketing services go beyond blog posts. We create a full content ecosystem — from social media to email campaigns — that keeps your audience engaged and your brand top of mind."
                image="/images/content-marketing.webp"
                secondTitle="Every Piece of Content Has a Purpose"
                secondDescription="We align every content piece with your business goals, whether it's ranking on Google, capturing leads, or nurturing existing customers."
                secondImage="/images/content-marketing.webp"
                bullets={[
                    "SEO-Optimized Blog Posts & Articles",
                    "Social Media Content Strategy",
                    "Email Newsletter Campaigns",
                    "Video Scripts & Infographic Design",
                    "Lead Magnet & Landing Page Copy",
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

export default ContentMarketing;

