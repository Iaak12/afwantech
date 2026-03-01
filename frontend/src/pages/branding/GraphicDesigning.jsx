import Breadcrumb from "../../components/common/Breadcrumb";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceTabs from "../../components/services/ServiceTabs";
import PlansPricing from "../../components/services/PlansPricing";
import ServiceKeyFeatures from "../../components/services/ServiceKeyFeatures";
import ServiceBenefits from "../../components/services/ServiceBenefits";
import ServiceOurWork from "../../components/services/ServiceOurWork";
import ListenFromClients from "../../components/home/ListenFromClients";

const GraphicDesigning = () => {

    const plansSection = (
        <PlansPricing
            title="Graphic Designing Packages"
            description="Creative, professional, and brand-consistent graphic design services for all your needs."
            plans={[
                {
                    title: "Starter",
                    subtitle: "Essential brand visuals.",
                    price: "3999",
                    oldPrice: "7000",
                    save: "43%",
                    features: [
                        "Logo Design (3 Concepts)",
                        "Business Card Design",
                        "Letterhead Design",
                        "5 Social Media Posts",
                    ],
                },
                {
                    title: "Growth",
                    subtitle: "Complete brand identity.",
                    price: "8999",
                    oldPrice: "15000",
                    save: "40%",
                    recommended: true,
                    features: [
                        "Logo + Brand Guide",
                        "Business Stationary Set",
                        "10 Social Media Posts/Month",
                        "Brochure Design (Bifold)",
                        "Banner & Poster Design",
                    ],
                },
                {
                    title: "Professional",
                    subtitle: "Full marketing collateral.",
                    price: "18999",
                    oldPrice: "30000",
                    save: "37%",
                    features: [
                        "Complete Brand Identity Package",
                        "20 Social Media Posts/Month",
                        "Catalogue Design",
                        "Packaging Design",
                        "Billboard & Hoarding Design",
                        "Animated Social Media Posts",
                    ],
                },
                {
                    title: "Enterprise",
                    subtitle: "Dedicated design partner.",
                    price: "29999",
                    oldPrice: "50000",
                    save: "40%",
                    features: [
                        "Unlimited Design Requests",
                        "Dedicated Designer",
                        "Brand Management",
                        "Full Marketing Collateral",
                        "Annual Brand Refresh",
                        "Priority Turnaround",
                    ],
                },
            ]}
        />
    );

    const keyFeaturesSection = (
        <ServiceKeyFeatures
            title="Creative Graphic Design Services That Make Your Brand Stand Out"
            description="From logos to complete brand identities, we create visually stunning designs that captivate and convert."
            features={[
                { icon: "/icons/logo.png", title: "Logo Design" },
                { icon: "/icons/branding.png", title: "Brand Identity" },
                { icon: "/icons/social.png", title: "Social Media Graphics" },
                { icon: "/icons/brochure.png", title: "Brochure & Catalogue" },
                { icon: "/icons/packaging.png", title: "Packaging Design" },
                { icon: "/icons/banner.png", title: "Banner & Hoardings" },
                { icon: "/icons/business-card.png", title: "Business Stationery" },
                { icon: "/icons/animation.png", title: "Animated Graphics" },
                { icon: "/icons/ui.png", title: "UI/UX Design" },
                { icon: "/icons/presentation.png", title: "Presentation Design" },
                { icon: "/icons/illustration.png", title: "Custom Illustrations" },
                { icon: "/icons/support.png", title: "Quick Turnaround" },
            ]}
        />
    );

    const benefitsSection = (
        <ServiceBenefits
            badge="Benefits"
            title="Design That Makes Your Brand Unforgettable"
            description="Great design is not just about aesthetics — it communicates your brand values, builds trust, and drives customer decisions."
            image="/images/graphic-design.webp"
            points={[
                "Professional Brand Identity That Stands Out",
                "Consistent Visual Language Across All Platforms",
                "Higher Engagement on Social Media",
                "Builds Instant Brand Credibility",
                "Drives More Conversions with Strategic Design",
            ]}
            qualityTitle="Our Design Philosophy"
            qualityItems={[
                {
                    icon: "/icons/research.png",
                    title: "Brand-First Approach",
                    description: "Every design decision is rooted in your brand strategy and goals.",
                },
                {
                    icon: "/icons/design.png",
                    title: "Creative Excellence",
                    description: "We combine creativity with strategic thinking to deliver remarkable results.",
                },
                {
                    icon: "/icons/revision.png",
                    title: "Unlimited Revisions",
                    description: "We refine until you're completely satisfied with the outcome.",
                },
                {
                    icon: "/icons/delivery.png",
                    title: "Fast Delivery",
                    description: "Quick turnaround without compromising on quality.",
                },
            ]}
        />
    );

    const ourWorkSection = (
        <ServiceOurWork
            title="Design Portfolio Highlights"
            description="From brand identities to social media campaigns, explore our creative design work."
            projects={[
                {
                    image: "/images/work1.webp",
                    name: "Fashion Brand Identity",
                    category: "Brand Identity Design",
                    services: ["Logo Design", "Brand Guide", "Packaging Design", "Social Media Templates"],
                },
                {
                    image: "/images/work2.webp",
                    name: "Restaurant Menu & Branding",
                    category: "Print & Digital Design",
                    services: ["Menu Design", "Social Media Posts", "Banner Design", "Loyalty Card"],
                },
            ]}
        />
    );

    return (
        <>
            <Breadcrumb currentPage="Graphic Designing" />

            <ServiceHero
                badge="Graphic Design Agency in India"
                title="Creative Graphic Design Services That Build Powerful Brand Identity"
                description="Afwan Tech delivers stunning graphic design solutions — from logos and brand identities to social media graphics, catalogues, and packaging — that make your brand visually unforgettable."
                image="/images/graphic-design.webp"
                features={[
                    "Logo & Brand Identity Design",
                    "Social Media Graphics",
                    "Brochure & Catalogue Design",
                    "Packaging & Product Design",
                    "UI/UX & Digital Creatives",
                ]}
            />

            <ServiceContent
                introTitle="Design Is How Your Brand Speaks Without Words"
                introDescription="In a world driven by visual content, exceptional graphic design is what separates memorable brands from forgotten ones."
                smallTitle="Graphic Designing Services"
                mainTitle="Award-Winning Graphic Design Agency for Startups to Enterprises"
                description="Our creative design team blends artistic excellence with strategic brand thinking to deliver designs that not only look beautiful but also drive business results. Whether you need a complete brand identity, marketing collateral, or social media visuals, we've got you covered."
                image="/images/graphic-design.webp"
                secondTitle="Every Design Tells a Story"
                secondDescription="We take time to understand your brand, audience, and goals before picking up the pencil. The result? Designs that truly represent who you are and what you stand for."
                secondImage="/images/graphic-design.webp"
                bullets={[
                    "Logo Design & Complete Brand Identity",
                    "Social Media & Digital Marketing Creatives",
                    "Brochure, Catalogue & Packaging Design",
                    "Billboard, Banner & Outdoor Advertising",
                    "Presentation, Infographic & Report Design",
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

export default GraphicDesigning;

