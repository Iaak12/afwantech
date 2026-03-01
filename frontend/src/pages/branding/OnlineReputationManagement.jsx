import Breadcrumb from "../../components/common/Breadcrumb";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceTabs from "../../components/services/ServiceTabs";
import PlansPricing from "../../components/services/PlansPricing";
import ServiceKeyFeatures from "../../components/services/ServiceKeyFeatures";
import ServiceBenefits from "../../components/services/ServiceBenefits";
import ServiceOurWork from "../../components/services/ServiceOurWork";
import ListenFromClients from "../../components/home/ListenFromClients";

const OnlineReputationManagement = () => {

    const plansSection = (
        <PlansPricing
            title="Online Reputation Management Packages"
            description="Protect and enhance your brand's image across the web with our proven ORM strategies."
            plans={[
                {
                    title: "Basic ORM",
                    subtitle: "Monitor & protect your brand.",
                    price: "7999",
                    oldPrice: "14000",
                    save: "43%",
                    features: [
                        "Brand Monitoring Setup",
                        "Google Review Management",
                        "Negative Content Suppression",
                        "Monthly ORM Report",
                    ],
                },
                {
                    title: "Standard ORM",
                    subtitle: "For growing businesses.",
                    price: "14999",
                    oldPrice: "25000",
                    save: "40%",
                    recommended: true,
                    features: [
                        "Advanced Brand Monitoring",
                        "Review Generation Strategy",
                        "Social Media Sentiment Analysis",
                        "Crisis Response Management",
                        "Positive Content Publishing",
                        "Bi-Weekly Reporting",
                    ],
                },
                {
                    title: "Premium ORM",
                    subtitle: "Full reputation shield.",
                    price: "24999",
                    oldPrice: "40000",
                    save: "37%",
                    features: [
                        "24/7 Brand Monitoring",
                        "Negative Link Removal",
                        "PR Article Publishing",
                        "Wikipedia & Knowledge Panel",
                        "Social Profile Optimization",
                        "Weekly Reporting",
                    ],
                },
                {
                    title: "Enterprise ORM",
                    subtitle: "For large brands & executives.",
                    price: "49999",
                    oldPrice: "80000",
                    save: "37%",
                    features: [
                        "Executive Reputation Management",
                        "Multi-Platform Monitoring",
                        "Legal Reputation Support",
                        "Full Crisis Management Plan",
                        "Brand Authority Building",
                        "Priority Dedicated Team",
                    ],
                },
            ]}
        />
    );

    const keyFeaturesSection = (
        <ServiceKeyFeatures
            title="Complete Online Reputation Management Solutions"
            description="Build, protect, and restore your brand reputation across Google, social media, and review platforms."
            features={[
                { icon: "/icons/monitoring.png", title: "Brand Monitoring" },
                { icon: "/icons/review.png", title: "Review Management" },
                { icon: "/icons/suppress.png", title: "Negative Suppression" },
                { icon: "/icons/crisis.png", title: "Crisis Management" },
                { icon: "/icons/pr.png", title: "PR Publishing" },
                { icon: "/icons/social.png", title: "Social Sentiment Analysis" },
                { icon: "/icons/google.png", title: "Google Panel Optimization" },
                { icon: "/icons/content.png", title: "Positive Content Creation" },
                { icon: "/icons/link.png", title: "Negative Link Removal" },
                { icon: "/icons/report.png", title: "Reputation Reports" },
                { icon: "/icons/strategy.png", title: "Brand Strategy" },
                { icon: "/icons/support.png", title: "24/7 Support" },
            ]}
        />
    );

    const benefitsSection = (
        <ServiceBenefits
            badge="Benefits"
            title="Protect Your Brand. Build Trust. Drive Growth."
            description="Your online reputation directly impacts customer decisions. A single negative review can cost you significantly — our ORM services ensure your brand stays strong."
            image="/images/orm.webp"
            points={[
                "Suppress Negative Search Results",
                "Generate & Manage Positive Reviews",
                "Protect Brand During Crisis",
                "Build Long-Term Brand Authority",
                "Improve Customer Trust & Perception",
            ]}
            qualityTitle="Our ORM Methodology"
            qualityItems={[
                {
                    icon: "/icons/monitoring.png",
                    title: "Continuous Monitoring",
                    description: "We track every mention of your brand across the web in real time.",
                },
                {
                    icon: "/icons/strategy.png",
                    title: "Strategic Response",
                    description: "Professional responses to negative reviews and comments.",
                },
                {
                    icon: "/icons/content.png",
                    title: "Positive Content Push",
                    description: "Publishing positive, high-authority content to push down negatives.",
                },
                {
                    icon: "/icons/analytics.png",
                    title: "Progress Tracking",
                    description: "Transparent reporting on reputation score improvements.",
                },
            ]}
        />
    );

    const ourWorkSection = (
        <ServiceOurWork
            title="ORM Success Stories"
            description="We've helped businesses recover from reputation crises and build unshakeable online authority."
            projects={[
                {
                    image: "/images/work1.webp",
                    name: "Restaurant Chain Reputation Recovery",
                    category: "ORM Campaign",
                    services: ["Negative Review Suppression", "Positive Content Strategy", "Rating Improvement"],
                },
                {
                    image: "/images/work2.webp",
                    name: "Healthcare Clinic Brand Building",
                    category: "Brand Reputation",
                    services: ["Google Review Management", "PR Article Publishing", "Trust Score Boost"],
                },
            ]}
        />
    );

    return (
        <>
            <Breadcrumb currentPage="Online Reputation Management" />

            <ServiceHero
                badge="ORM Company in India"
                title="Protect & Strengthen Your Brand with Expert Online Reputation Management"
                description="Afwan Tech helps businesses monitor, manage, and improve their online reputation to build lasting trust with customers."
                image="/images/orm.webp"
                features={[
                    "Brand Monitoring & Alerts",
                    "Negative Review Management",
                    "Crisis Response Strategy",
                    "Positive Content Publishing",
                    "Google Knowledge Panel Optimization",
                ]}
            />

            <ServiceContent
                introTitle="Your Reputation Is Your Most Valuable Business Asset"
                introDescription="In the age of digital reviews and social media, your online reputation can make or break your business. We protect and build it proactively."
                smallTitle="Online Reputation Management"
                mainTitle="India's Trusted ORM Agency for Brands, Businesses & Executives"
                description="Our comprehensive ORM services cover everything from Google review management and negative content suppression to crisis management and brand authority building. We ensure your brand is always represented positively online."
                image="/images/orm.webp"
                secondTitle="From Damage Control to Brand Building"
                secondDescription="Whether you're dealing with a reputation crisis or want to proactively build your brand image, our ORM experts have the tools and strategies to deliver results."
                secondImage="/images/orm.webp"
                bullets={[
                    "Suppress Negative Google Search Results",
                    "Generate & Respond to Customer Reviews",
                    "Social Media Reputation Management",
                    "PR Article & Positive Content Publishing",
                    "Corporate & Executive Reputation Building",
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

export default OnlineReputationManagement;

