import Breadcrumb from "../../components/common/Breadcrumb";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceTabs from "../../components/services/ServiceTabs";
import PlansPricing from "../../components/services/PlansPricing";
import ServiceKeyFeatures from "../../components/services/ServiceKeyFeatures";
import ServiceBenefits from "../../components/services/ServiceBenefits";
import ServiceOurWork from "../../components/services/ServiceOurWork";
import ListenFromClients from "../../components/home/ListenFromClients";

const LandingPageDesigning = () => {

  const plansSection = (
    <PlansPricing
      title="Landing Page Design Packages"
      description="High-converting landing pages built to generate leads and sales."

      plans={[
        {
          title: "Basic Landing Page",
          subtitle: "Single campaign page.",
          price: "6999",
          oldPrice: "12000",
          save: "42%",
          features: [
            "Conversion Focused Layout",
            "Mobile Responsive",
            "Lead Capture Form",
            "Basic SEO Setup",
          ],
        },
        {
          title: "Advanced Landing Page",
          subtitle: "For ad campaigns.",
          price: "12999",
          oldPrice: "20000",
          save: "35%",
          recommended: true,
          features: [
            "Custom UI/UX",
            "Speed Optimization",
            "A/B Testing Ready",
            "Analytics Integration",
          ],
        },
      ]}
    />
  );

  const keyFeaturesSection = (
    <ServiceKeyFeatures
      title="Landing Pages That Convert Visitors Into Customers"
      description="Designed strategically to maximize conversions."

      features={[
        { icon: "/icons/conversion.png", title: "High Conversion Design" },
        { icon: "/icons/mobile.png", title: "Mobile Optimized" },
        { icon: "/icons/speed.png", title: "Fast Loading Speed" },
        { icon: "/icons/analytics.png", title: "Analytics Integrated" },
        { icon: "/icons/cta.png", title: "Strong Call-To-Action" },
      ]}
    />
  );

  const benefitsSection = (
    <ServiceBenefits
      badge="Benefits"
      title="Boost Your Campaign Performance"
      description="Landing pages are built for one goal — conversions."

      image="/images/landing.webp"

      points={[
        "Higher Conversion Rate",
        "Better Ad ROI",
        "Focused User Journey",
        "Clear Call-To-Action",
      ]}

      qualityTitle="Conversion Optimization Strategy"

      qualityItems={[
        {
          icon: "/icons/strategy.png",
          title: "Conversion Research",
          description: "Understanding user behavior before design.",
        },
        {
          icon: "/icons/design.png",
          title: "Psychology-Based Design",
          description: "Layout optimized for trust & urgency.",
        },
      ]}
    />
  );

  const ourWorkSection = (
    <ServiceOurWork
      title="Landing Page Projects"
      description="Explore our high-converting landing pages."

      projects={[
        {
          image: "/images/work-landing1.webp",
          name: "Digital Marketing Campaign",
          category: "Lead Generation Landing Page",
          services: ["UI Design", "Conversion Optimization", "Analytics Setup"],
        },
      ]}
    />
  );

  const happyClientsSection = <ListenFromClients />;

  return (
    <>
      <Breadcrumb currentPage="Landing Page Designing" />

      <ServiceHero
        badge="Landing Page Design Company in India"
        title="High-Converting Landing Pages for Maximum ROI"
        description="We design landing pages that turn visitors into customers."
        image="/images/landing.webp"
        features={[
          "Conversion Focused Layout",
          "Mobile Responsive",
          "Fast Loading",
          "Strong Call-To-Action",
        ]}
      />

      <ServiceContent
        introTitle="Landing Pages That Drive Results"
        introDescription="Designed to support marketing campaigns and boost conversions."

        smallTitle="Landing Page Designing"
        mainTitle="Build Campaign-Focused Landing Pages"
        description="Our landing pages are optimized for performance, speed, and user engagement."

        image="/images/landing.webp"

        secondTitle="Designed for Conversions"
        secondDescription="Every section is crafted to guide users toward your goal."

        secondImage="/images/landing.webp"

        bullets={[
          "Lead Capture Optimization",
          "Conversion Strategy",
          "Fast Loading Design",
          "Ad Campaign Ready",
        ]}
      />

      <ServiceTabs
        plansData={plansSection}
        featuresData={keyFeaturesSection}
        benefitsData={benefitsSection}
        workData={ourWorkSection}
        clientsData={happyClientsSection}
      />
    </>
  );
};

export default LandingPageDesigning;

