import Breadcrumb from "../../components/common/Breadcrumb";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceTabs from "../../components/services/ServiceTabs";
import PlansPricing from "../../components/services/PlansPricing";
import ServiceKeyFeatures from "../../components/services/ServiceKeyFeatures";
import ServiceBenefits from "../../components/services/ServiceBenefits";
import ServiceOurWork from "../../components/services/ServiceOurWork";
import ListenFromClients from "../../components/home/ListenFromClients";

const SmallBusinessWebsitePackage = () => {

    const plansSection = (
        <PlansPricing
            title="Small Business Website Packages"
            description="Affordable, feature-rich website packages designed specifically for small businesses and startups."
            plans={[
                {
                    title: "Bronze",
                    subtitle: "Perfect for first-time businesses.",
                    price: "1666",
                    oldPrice: "29000",
                    save: "45%",
                    features: [
                        "5 Web Pages",
                        "Template Based Design",
                        "Admin Panel",
                        "Enquiry Form",
                        "Mobile Responsive",
                        "1 Year Free Hosting",
                    ],
                },
                {
                    title: "Silver",
                    subtitle: "Ideal for growing startups.",
                    price: "2499",
                    oldPrice: "39000",
                    save: "36%",
                    recommended: true,
                    features: [
                        "10 Web Pages",
                        "Template Based Design",
                        "Admin Panel",
                        "Enquiry Form",
                        "Mobile Responsive",
                        "WhatsApp Chat Integration",
                        "Basic SEO Setup",
                    ],
                },
                {
                    title: "Gold",
                    subtitle: "Optimized for online visibility.",
                    price: "3333",
                    oldPrice: "49000",
                    save: "32%",
                    features: [
                        "20 Web Pages",
                        "SEO Ready Design",
                        "Admin Panel",
                        "Enquiry Form",
                        "Google Analytics Setup",
                        "Social Media Integration",
                        "1 Year Free SSL",
                    ],
                },
                {
                    title: "Diamond",
                    subtitle: "Complete digital business setup.",
                    price: "5833",
                    oldPrice: "79000",
                    save: "26%",
                    features: [
                        "50 Web Pages",
                        "SEO Optimized Design",
                        "Admin Panel",
                        "Advanced Enquiry Forms",
                        "Google Analytics + Search Console",
                        "Speed Optimization",
                        "2 Years Free Hosting",
                    ],
                },
            ]}
        />
    );

    const keyFeaturesSection = (
        <ServiceKeyFeatures
            title="Everything Your Small Business Needs in One Website Package"
            description="Our small business website packages are designed to give you maximum value at an affordable price point."
            features={[
                { icon: "/icons/template.png", title: "Professional Templates" },
                { icon: "/icons/mobile.png", title: "Mobile Responsive" },
                { icon: "/icons/admin.png", title: "Admin Panel" },
                { icon: "/icons/form.png", title: "Contact Forms" },
                { icon: "/icons/whatsapp.png", title: "WhatsApp Integration" },
                { icon: "/icons/seo.png", title: "Basic SEO Setup" },
                { icon: "/icons/analytics.png", title: "Google Analytics" },
                { icon: "/icons/hosting.png", title: "Free Hosting" },
                { icon: "/icons/ssl.png", title: "SSL Security" },
                { icon: "/icons/speed.png", title: "Fast Load Speed" },
                { icon: "/icons/domain.png", title: "Domain Setup" },
                { icon: "/icons/support.png", title: "After-Launch Support" },
            ]}
        />
    );

    const benefitsSection = (
        <ServiceBenefits
            badge="Benefits"
            title="Launch Your Small Business Online Without Breaking the Bank"
            description="Our affordable website packages give small businesses a professional online presence that competes with the big players."
            image="/images/small-business.webp"
            points={[
                "Professional Online Presence from Day 1",
                "Mobile-Friendly Across All Devices",
                "Built for Search Engine Visibility",
                "Easy to Manage with Admin Panel",
                "Affordable Pricing with Maximum Value",
            ]}
            qualityTitle="Why Choose Our Website Packages"
            qualityItems={[
                {
                    icon: "/icons/cost.png",
                    title: "Best-in-Class Affordability",
                    description: "Get a professional website at a fraction of the market price.",
                },
                {
                    icon: "/icons/template.png",
                    title: "Proven Design Templates",
                    description: "Industry-tested designs that look great and convert well.",
                },
                {
                    icon: "/icons/support.png",
                    title: "Dedicated Support",
                    description: "Post-launch support to keep your website running smoothly.",
                },
                {
                    icon: "/icons/launch.png",
                    title: "Quick Launch",
                    description: "Your website will be live within the promised timeline.",
                },
            ]}
        />
    );

    const ourWorkSection = (
        <ServiceOurWork
            title="Small Business Websites We've Built"
            description="We've helped hundreds of small businesses establish a powerful online presence."
            projects={[
                {
                    image: "/images/work1.webp",
                    name: "Local Bakery Website",
                    category: "Small Business Website",
                    services: ["Professional Design", "Menu & Gallery", "Contact Form", "Google Maps Integration"],
                },
                {
                    image: "/images/work2.webp",
                    name: "Fitness Studio Website",
                    category: "Small Business Website",
                    services: ["Class Schedule", "Booking Form", "Mobile Responsive", "SEO Setup"],
                },
            ]}
        />
    );

    return (
        <>
            <Breadcrumb currentPage="Small Business Website Package" />

            <ServiceHero
                badge="Best Small Business Website Packages in India"
                title="Affordable Small Business Website Packages with Everything You Need"
                description="Launch your small business online with Afwan Tech's professionally designed, mobile-friendly, and SEO-ready website packages — at prices that work for every budget."
                image="/images/small-business.webp"
                features={[
                    "Professional Template-Based Design",
                    "Mobile Responsive & SEO Ready",
                    "Admin Panel for Easy Management",
                    "Free Hosting & SSL Certificate",
                    "Quick 7-15 Day Launch",
                ]}
            />

            <ServiceContent
                introTitle="Your Small Business Deserves a Professional Website"
                introDescription="A professional website is the cornerstone of your digital presence. Our packages make it accessible, affordable, and effective for every small business."
                smallTitle="Small Business Website Package"
                mainTitle="Complete Website Solutions Designed for Small Business Success"
                description="Our small business website packages are crafted to deliver maximum impact at minimal investment. Whether you're a local shop, service provider, or startup, we have a package that fits your needs perfectly."
                image="/images/small-business.webp"
                secondTitle="Everything Included, No Hidden Costs"
                secondDescription="From design and development to hosting and SEO setup — everything is included in our transparent pricing packages."
                secondImage="/images/small-business.webp"
                bullets={[
                    "Professional Website Design with Your Brand Colors",
                    "Mobile-First Responsive Development",
                    "Admin Panel for Easy Content Updates",
                    "Contact Forms, WhatsApp & Social Integration",
                    "Free Domain, Hosting & SSL for 1 Year",
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

export default SmallBusinessWebsitePackage;

