import Breadcrumb from "../../components/common/Breadcrumb";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceTabs from "../../components/services/ServiceTabs";
import PlansPricing from "../../components/services/PlansPricing";
import ServiceKeyFeatures from "../../components/services/ServiceKeyFeatures";
import ServiceBenefits from "../../components/services/ServiceBenefits";
import ServiceOurWork from "../../components/services/ServiceOurWork";
import ListenFromClients from "../../components/home/ListenFromClients";

const CorporateVideoProduction = () => {

    const plansSection = (
        <PlansPricing
            title="Corporate Video Production Packages"
            description="Professional video production services that tell your brand story and engage your audience."
            plans={[
                {
                    title: "Basic Video",
                    subtitle: "For brand introductions.",
                    price: "14999",
                    oldPrice: "25000",
                    save: "40%",
                    features: [
                        "1 Corporate Video (2-3 min)",
                        "Script Writing",
                        "Basic Editing & Color Grading",
                        "HD Delivery",
                    ],
                },
                {
                    title: "Professional",
                    subtitle: "For marketing campaigns.",
                    price: "29999",
                    oldPrice: "50000",
                    save: "40%",
                    recommended: true,
                    features: [
                        "2 Corporate Videos",
                        "Script Writing & Storyboard",
                        "Professional Voiceover",
                        "Motion Graphics & Animation",
                        "4K Delivery",
                        "Social Media Versions",
                    ],
                },
                {
                    title: "Premium",
                    subtitle: "For high-impact productions.",
                    price: "59999",
                    oldPrice: "95000",
                    save: "37%",
                    features: [
                        "5 Corporate Videos",
                        "Full Production Crew",
                        "Aerial Drone Shots",
                        "Multi-location Shoots",
                        "Advanced VFX & Animation",
                        "Full Social Media Package",
                    ],
                },
                {
                    title: "Enterprise",
                    subtitle: "Complete video marketing.",
                    price: "99999",
                    oldPrice: "160000",
                    save: "38%",
                    features: [
                        "Unlimited Videos",
                        "Dedicated Production Team",
                        "Brand Video Strategy",
                        "Documentary-Style Films",
                        "YouTube Channel Management",
                        "Priority Delivery",
                    ],
                },
            ]}
        />
    );

    const keyFeaturesSection = (
        <ServiceKeyFeatures
            title="Cinematic Corporate Video Production Services"
            description="We create compelling video content that tells your brand story, engages your audience, and drives conversions."
            features={[
                { icon: "/icons/video.png", title: "Corporate Films" },
                { icon: "/icons/animation.png", title: "Motion Graphics" },
                { icon: "/icons/drone.png", title: "Aerial Drone Shoots" },
                { icon: "/icons/script.png", title: "Script Writing" },
                { icon: "/icons/voiceover.png", title: "Professional Voiceover" },
                { icon: "/icons/editing.png", title: "Post-Production Editing" },
                { icon: "/icons/4k.png", title: "4K Ultra HD Quality" },
                { icon: "/icons/social.png", title: "Social Media Cuts" },
                { icon: "/icons/explainer.png", title: "Explainer Videos" },
                { icon: "/icons/testimonial.png", title: "Testimonial Videos" },
                { icon: "/icons/product.png", title: "Product Demo Videos" },
                { icon: "/icons/support.png", title: "End-to-End Production" },
            ]}
        />
    );

    const benefitsSection = (
        <ServiceBenefits
            badge="Benefits"
            title="Video Content That Captivates, Converts & Builds Brand Identity"
            description="Video is the most powerful medium for brand storytelling. Professional corporate videos build trust, increase engagement, and drive conversions."
            image="/images/video-production.webp"
            points={[
                "Higher Audience Engagement & Retention",
                "Build Stronger Brand Identity",
                "Increase Conversion Rates by 80%",
                "Perfect for Social Media & YouTube",
                "Professional Cinematic Quality",
            ]}
            qualityTitle="Our Video Production Process"
            qualityItems={[
                {
                    icon: "/icons/script.png",
                    title: "Pre-Production Planning",
                    description: "Script writing, storyboarding, and concept development.",
                },
                {
                    icon: "/icons/video.png",
                    title: "Professional Filming",
                    description: "High-quality filming with professional equipment and crew.",
                },
                {
                    icon: "/icons/editing.png",
                    title: "Expert Post-Production",
                    description: "Color grading, VFX, motion graphics, and professional editing.",
                },
                {
                    icon: "/icons/delivery.png",
                    title: "Final Delivery & Distribution",
                    description: "Delivered in all required formats for every platform.",
                },
            ]}
        />
    );

    const ourWorkSection = (
        <ServiceOurWork
            title="Video Production Portfolio"
            description="From corporate films to explainer videos, see the quality we deliver for our clients."
            projects={[
                {
                    image: "/images/work1.webp",
                    name: "Manufacturing Company Corporate Film",
                    category: "Corporate Video",
                    services: ["Script Writing", "Factory Shoot", "Professional Editing", "4K Delivery"],
                },
                {
                    image: "/images/work2.webp",
                    name: "Real Estate Aerial Showcase",
                    category: "Property Video",
                    services: ["Drone Aerial Shots", "Interior Walkthrough", "Property Showcase Video"],
                },
            ]}
        />
    );

    return (
        <>
            <Breadcrumb currentPage="Corporate Video Production" />

            <ServiceHero
                badge="Video Production Company in India"
                title="Cinematic Corporate Video Production That Tells Your Brand Story"
                description="Afwan Tech creates professional corporate videos that captivate your audience, build brand trust, and drive business growth."
                image="/images/video-production.webp"
                features={[
                    "Corporate & Brand Films",
                    "Explainer & Product Videos",
                    "Aerial Drone Photography",
                    "Motion Graphics & Animation",
                    "4K Ultra HD Production",
                ]}
            />

            <ServiceContent
                introTitle="Video Is the Most Powerful Way to Tell Your Brand Story"
                introDescription="In today's digital landscape, video content drives the highest engagement across all platforms. A professionally crafted corporate video builds instant trust and credibility."
                smallTitle="Corporate Video Production"
                mainTitle="Professional Video Production Services for Every Business Need"
                description="From corporate brand films and product demonstrations to explainer videos and testimonial campaigns, we offer end-to-end video production services. Our team handles scripting, filming, editing, and delivery for every project."
                image="/images/video-production.webp"
                secondTitle="Every Frame Tells Your Story"
                secondDescription="Our experienced production team uses state-of-the-art equipment to create cinematic videos that leave a lasting impression on your audience."
                secondImage="/images/video-production.webp"
                bullets={[
                    "Corporate Brand Films & Company Profiles",
                    "Product Demo & Explainer Videos",
                    "Testimonial & Case Study Videos",
                    "Aerial Drone Photography & Videography",
                    "Social Media Short-Form Video Content",
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

export default CorporateVideoProduction;

