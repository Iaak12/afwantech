import Breadcrumb from "../../components/common/Breadcrumb";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceTabs from "../../components/services/ServiceTabs";
import PlansPricing from "../../components/services/PlansPricing";
import ServiceKeyFeatures from "../../components/services/ServiceKeyFeatures";
import ServiceBenefits from "../../components/services/ServiceBenefits";
import ServiceOurWork from "../../components/services/ServiceOurWork";
import ListenFromClients from "../../components/home/ListenFromClients";

const PRAgency = () => {

    const plansSection = (
        <PlansPricing
            title="PR Agency Packages"
            description="Get your brand featured in top media publications and build credibility with strategic PR campaigns."
            plans={[
                {
                    title: "Starter PR",
                    subtitle: "For new brands seeking visibility.",
                    price: "9999",
                    oldPrice: "18000",
                    save: "44%",
                    features: [
                        "2 Press Releases/Month",
                        "Distribution to 50+ Media Outlets",
                        "Basic Media Outreach",
                        "Monthly PR Report",
                    ],
                },
                {
                    title: "Growth PR",
                    subtitle: "Scale your media presence.",
                    price: "19999",
                    oldPrice: "35000",
                    save: "43%",
                    recommended: true,
                    features: [
                        "4 Press Releases/Month",
                        "Distribution to 200+ Outlets",
                        "Journalist Relationship Building",
                        "Brand Story Crafting",
                        "Crisis Communication Plan",
                        "Bi-Weekly Reporting",
                    ],
                },
                {
                    title: "Authority PR",
                    subtitle: "For established brands.",
                    price: "34999",
                    oldPrice: "55000",
                    save: "36%",
                    features: [
                        "8 Press Releases/Month",
                        "TV & Radio Media Pitching",
                        "Thought Leadership Articles",
                        "Speaking Opportunity Pitching",
                        "National Media Coverage",
                        "Weekly Reviews",
                    ],
                },
                {
                    title: "Enterprise PR",
                    subtitle: "Full PR representation.",
                    price: "59999",
                    oldPrice: "95000",
                    save: "37%",
                    features: [
                        "Unlimited Press Releases",
                        "Dedicated PR Manager",
                        "National & International Coverage",
                        "Executive PR Strategy",
                        "Crisis Management Team",
                        "Priority Media Access",
                    ],
                },
            ]}
        />
    );

    const keyFeaturesSection = (
        <ServiceKeyFeatures
            title="Strategic PR Services That Build Brand Authority"
            description="From press releases to media placements, we craft PR strategies that get your brand noticed."
            features={[
                { icon: "/icons/pr.png", title: "Press Release Writing" },
                { icon: "/icons/media.png", title: "Media Distribution" },
                { icon: "/icons/journalist.png", title: "Journalist Outreach" },
                { icon: "/icons/story.png", title: "Brand Storytelling" },
                { icon: "/icons/crisis.png", title: "Crisis Communication" },
                { icon: "/icons/content.png", title: "Thought Leadership" },
                { icon: "/icons/tv.png", title: "TV & Radio Pitching" },
                { icon: "/icons/speaking.png", title: "Speaking Opportunities" },
                { icon: "/icons/monitoring.png", title: "Media Monitoring" },
                { icon: "/icons/analytics.png", title: "Coverage Analytics" },
                { icon: "/icons/branding.png", title: "Corporate Branding" },
                { icon: "/icons/support.png", title: "Dedicated PR Team" },
            ]}
        />
    );

    const benefitsSection = (
        <ServiceBenefits
            badge="Benefits"
            title="Get Featured. Build Credibility. Grow Your Brand."
            description="Strategic PR placements in top media outlets establish your brand as an industry authority and drive exponential brand awareness."
            image="/images/pr-agency.webp"
            points={[
                "Featured in Top Media Publications",
                "Massive Brand Awareness Boost",
                "Increased Credibility & Trust",
                "Better SEO with High-Authority Backlinks",
                "Crisis Protection & Reputation Management",
            ]}
            qualityTitle="Our PR Approach"
            qualityItems={[
                {
                    icon: "/icons/story.png",
                    title: "Compelling Story Crafting",
                    description: "We find your brand's unique story and make media pay attention.",
                },
                {
                    icon: "/icons/journalist.png",
                    title: "Media Relationship Network",
                    description: "Direct relationships with journalists across industries.",
                },
                {
                    icon: "/icons/strategy.png",
                    title: "Strategic Campaign Planning",
                    description: "Every PR campaign is planned to maximize media coverage.",
                },
                {
                    icon: "/icons/analytics.png",
                    title: "Coverage Tracking",
                    description: "Detailed reports on media placements and brand reach.",
                },
            ]}
        />
    );

    const ourWorkSection = (
        <ServiceOurWork
            title="PR Campaign Success Stories"
            description="See how we've helped brands get featured in major publications and build massive credibility."
            projects={[
                {
                    image: "/images/work1.webp",
                    name: "Tech Startup Launch PR",
                    category: "PR Campaign",
                    services: ["Press Release Writing", "100+ Media Placements", "Brand Authority Building"],
                },
                {
                    image: "/images/work2.webp",
                    name: "Healthcare Brand Media Coverage",
                    category: "Brand PR",
                    services: ["National Media Coverage", "Thought Leadership Articles", "Brand Credibility Boost"],
                },
            ]}
        />
    );

    return (
        <>
            <Breadcrumb currentPage="PR Agency" />

            <ServiceHero
                badge="PR Agency in India"
                title="Build Brand Authority with Strategic Public Relations Campaigns"
                description="Afwan Tech is your trusted PR partner — getting your brand featured in top media publications, building credibility, and driving massive brand awareness."
                image="/images/pr-agency.webp"
                features={[
                    "Press Release Writing & Distribution",
                    "Media & Journalist Outreach",
                    "Brand Story Crafting",
                    "Crisis Communication Planning",
                    "National & International Media Coverage",
                ]}
            />

            <ServiceContent
                introTitle="Your Brand Deserves to Be in the Spotlight"
                introDescription="Strategic public relations is the fastest way to build credibility and establish your brand as a market leader."
                smallTitle="PR Agency Services"
                mainTitle="India's Leading PR Agency for Startups, SMEs & Enterprises"
                description="We handle everything from crafting compelling press releases to securing placements in top-tier media outlets like Times of India, Hindustan Times, and industry-specific publications. Our PR strategies are designed to generate buzz and build long-term brand authority."
                image="/images/pr-agency.webp"
                secondTitle="Media Coverage That Builds Real Credibility"
                secondDescription="Getting featured in reputable media outlets not only boosts brand image but also provides powerful SEO backlinks and positions you as a trusted industry authority."
                secondImage="/images/pr-agency.webp"
                bullets={[
                    "Press Release Writing & Wide Distribution",
                    "National & Regional Media Placements",
                    "Journalist Relationship Management",
                    "Thought Leadership & Expert Articles",
                    "Crisis Communication & Reputation Protection",
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

export default PRAgency;

