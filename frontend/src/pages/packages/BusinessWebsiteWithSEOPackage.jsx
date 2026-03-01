import Breadcrumb from "../../components/common/Breadcrumb";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceTabs from "../../components/services/ServiceTabs";
import PlansPricing from "../../components/services/PlansPricing";
import ServiceKeyFeatures from "../../components/services/ServiceKeyFeatures";
import ServiceBenefits from "../../components/services/ServiceBenefits";
import ServiceOurWork from "../../components/services/ServiceOurWork";
import ListenFromClients from "../../components/home/ListenFromClients";

const BusinessWebsiteWithSEOPackage = () => {

    const plansSection = (
        <PlansPricing
            title="Business Website With SEO Packages"
            description="Get a professionally designed website combined with a powerful SEO strategy to rank on Google and attract consistent organic traffic."
            plans={[
                {
                    title: "Starter",
                    subtitle: "Website + basic SEO.",
                    price: "4999",
                    oldPrice: "9000",
                    save: "44%",
                    features: [
                        "10 Web Pages",
                        "On-Page SEO (10 Keywords)",
                        "Google Analytics & Search Console",
                        "Mobile Responsive",
                        "Monthly SEO Report",
                    ],
                },
                {
                    title: "Professional",
                    subtitle: "Complete website + SEO package.",
                    price: "8999",
                    oldPrice: "16000",
                    save: "44%",
                    recommended: true,
                    features: [
                        "20 Web Pages",
                        "On-Page SEO (25 Keywords)",
                        "Technical SEO",
                        "4 Blog Posts/Month",
                        "Local SEO Setup",
                        "Bi-Monthly SEO Report",
                    ],
                },
                {
                    title: "Growth",
                    subtitle: "Scale your organic traffic.",
                    price: "14999",
                    oldPrice: "27000",
                    save: "44%",
                    features: [
                        "50 Web Pages",
                        "Advanced SEO (50 Keywords)",
                        "Off-Page SEO & Link Building",
                        "8 Blog Posts/Month",
                        "Google My Business Optimization",
                        "Monthly Competitor Analysis",
                    ],
                },
                {
                    title: "Enterprise",
                    subtitle: "Dominate your market.",
                    price: "24999",
                    oldPrice: "45000",
                    save: "44%",
                    features: [
                        "Unlimited Web Pages",
                        "Full SEO Strategy",
                        "Content Marketing",
                        "Authority Link Building",
                        "Dedicated SEO Strategist",
                        "Weekly Performance Reviews",
                    ],
                },
            ]}
        />
    );

    const keyFeaturesSection = (
        <ServiceKeyFeatures
            title="Website + SEO: The Complete Digital Growth Package"
            description="Our business website with SEO packages give you a professional website that not only looks great but also ranks high on Google."
            features={[
                { icon: "/icons/design.png", title: "Professional Design" },
                { icon: "/icons/seo.png", title: "On-Page SEO" },
                { icon: "/icons/technical.png", title: "Technical SEO" },
                { icon: "/icons/keyword.png", title: "Keyword Research" },
                { icon: "/icons/content.png", title: "Blog Content" },
                { icon: "/icons/link.png", title: "Link Building" },
                { icon: "/icons/local.png", title: "Local SEO" },
                { icon: "/icons/gmb.png", title: "Google My Business" },
                { icon: "/icons/analytics.png", title: "Analytics Setup" },
                { icon: "/icons/speed.png", title: "Page Speed Optimization" },
                { icon: "/icons/mobile.png", title: "Mobile Responsive" },
                { icon: "/icons/report.png", title: "Monthly SEO Reports" },
            ]}
        />
    );

    const benefitsSection = (
        <ServiceBenefits
            badge="Benefits"
            title="Website That Gets Seen on Google & Converts Visitors into Customers"
            description="A beautiful website alone is not enough. Combined with strategic SEO, your website becomes a lead-generating machine."
            image="/images/seo.webp"
            points={[
                "Rank Higher on Google for Target Keywords",
                "Consistent Organic Traffic Without Paid Ads",
                "Professional Website That Builds Trust",
                "More Leads & Conversions",
                "Long-Term Sustainable Growth",
            ]}
            qualityTitle="Our Integrated Website + SEO Approach"
            qualityItems={[
                {
                    icon: "/icons/strategy.png",
                    title: "SEO-First Website Architecture",
                    description: "Every page is built with SEO best practices from the ground up.",
                },
                {
                    icon: "/icons/content.png",
                    title: "Keyword-Rich Content",
                    description: "Compelling content optimized for search engines and human readers.",
                },
                {
                    icon: "/icons/technical.png",
                    title: "Technical SEO Foundation",
                    description: "Site speed, schema markup, and crawlability optimized from day one.",
                },
                {
                    icon: "/icons/analytics.png",
                    title: "Transparent Reporting",
                    description: "Monthly reports showing keyword rankings, traffic, and growth.",
                },
            ]}
        />
    );

    const ourWorkSection = (
        <ServiceOurWork
            title="Website + SEO Success Stories"
            description="See how our combined website and SEO packages have helped businesses rank and grow."
            projects={[
                {
                    image: "/images/work1.webp",
                    name: "CA Firm - Page 1 Rankings",
                    category: "Website + SEO",
                    services: ["Professional Website", "Local SEO", "Top 3 Google Rankings", "Lead Generation"],
                },
                {
                    image: "/images/work2.webp",
                    name: "Manufacturer B2B Website",
                    category: "Business Website + SEO",
                    services: ["Industrial Website Design", "B2B Keyword Strategy", "Authority Building", "Enquiry Growth"],
                },
            ]}
        />
    );

    return (
        <>
            <Breadcrumb currentPage="Business Website With SEO Package" />

            <ServiceHero
                badge="Website + SEO Packages in India"
                title="Business Website With SEO — The Complete Digital Growth Solution"
                description="Afwan Tech combines professional website design with proven SEO strategies to help your business get found on Google, attract qualified leads, and grow consistently."
                image="/images/seo.webp"
                features={[
                    "Professional Business Website Design",
                    "On-Page & Technical SEO",
                    "Keyword Research & Strategy",
                    "Local SEO & Google My Business",
                    "Monthly Performance Reports",
                ]}
            />

            <ServiceContent
                introTitle="Your Website Should Work as Hard as You Do"
                introDescription="Combine a stunning website with a high-performance SEO strategy to attract more customers and drive consistent business growth."
                smallTitle="Business Website With SEO Package"
                mainTitle="Integrated Website + SEO Packages That Deliver Real Results"
                description="Our business website with SEO packages are the most popular choice for businesses serious about online growth. You get a professionally designed, mobile-responsive website fully optimized for search engines from day one."
                image="/images/seo.webp"
                secondTitle="From Design to Rankings — We Handle Everything"
                secondDescription="Our integrated approach means your website and SEO strategy work together seamlessly, delivering faster results and better long-term performance."
                secondImage="/images/seo.webp"
                bullets={[
                    "SEO-Optimized Website Architecture",
                    "Keyword Research & On-Page Optimization",
                    "Technical SEO — Speed, Schema & Crawlability",
                    "Regular Blog Content for Organic Traffic",
                    "Local SEO & Google My Business Setup",
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

export default BusinessWebsiteWithSEOPackage;

