import Breadcrumb from "../../components/common/Breadcrumb";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceTabs from "../../components/services/ServiceTabs";
import PlansPricing from "../../components/services/PlansPricing";
import ServiceKeyFeatures from "../../components/services/ServiceKeyFeatures";
import ServiceBenefits from "../../components/services/ServiceBenefits";
import ServiceOurWork from "../../components/services/ServiceOurWork";
import ListenFromClients from "../../components/home/ListenFromClients";

const PaidAds = () => {

  /* ================= PLANS ================= */

  const plansSection = (
    <PlansPricing
      title="Paid Ads / PPC Packages"
      description="Strategic paid advertising campaigns designed to generate instant traffic, leads, and sales."

      plans={[
        {
          title: "Starter PPC",
          subtitle: "Perfect for small businesses.",
          price: "6999",
          oldPrice: "12000",
          save: "42%",
          features: [
            "1 Ad Platform (Google or Meta)",
            "Campaign Setup",
            "Basic Keyword Research",
            "Ad Copy Creation",
            "Conversion Tracking Setup",
            "Monthly Performance Report",
          ],
        },
        {
          title: "Growth PPC",
          subtitle: "For scaling businesses.",
          price: "14999",
          oldPrice: "22000",
          save: "32%",
          recommended: true,
          features: [
            "2 Ad Platforms (Google + Meta)",
            "Advanced Audience Targeting",
            "A/B Ad Testing",
            "Conversion Optimization",
            "Remarketing Campaign Setup",
            "Landing Page Recommendations",
            "Bi-Weekly Reports",
          ],
        },
        {
          title: "Advanced PPC",
          subtitle: "Best for competitive industries.",
          price: "24999",
          oldPrice: "35000",
          save: "29%",
          features: [
            "Google + Meta + YouTube Ads",
            "Advanced Funnel Strategy",
            "Retargeting Campaigns",
            "Creative Ad Design Support",
            "Budget Optimization Strategy",
            "Lead Quality Optimization",
            "Weekly Performance Review",
          ],
        },
        {
          title: "Enterprise PPC",
          subtitle: "For high-budget campaigns.",
          price: "39999",
          oldPrice: "55000",
          save: "27%",
          features: [
            "Multi-Platform Advertising",
            "Dedicated Campaign Manager",
            "Full Funnel Ad Strategy",
            "Advanced Analytics & Attribution",
            "High-Level Conversion Optimization",
            "Competitor Ad Strategy Analysis",
            "Daily Monitoring & Optimization",
            "Weekly Detailed Reporting",
          ],
        },
      ]}
    />
  );

  /* ================= KEY FEATURES ================= */

  const keyFeaturesSection = (
    <ServiceKeyFeatures
      title="Performance-Driven Paid Advertising"
      description="We create targeted ad campaigns that maximize ROI and minimize wasted spend."

      features={[
        { icon: "/icons/google.png", title: "Google Ads Campaigns" },
        { icon: "/icons/meta.png", title: "Facebook & Instagram Ads" },
        { icon: "/icons/youtube.png", title: "YouTube Advertising" },
        { icon: "/icons/retarget.png", title: "Retargeting Campaigns" },
        { icon: "/icons/analytics.png", title: "Conversion Tracking" },
        { icon: "/icons/optimization.png", title: "Continuous Optimization" },
      ]}
    />
  );

  /* ================= BENEFITS ================= */

  const benefitsSection = (
    <ServiceBenefits
      badge="Benefits"
      title="Generate Instant Traffic & Qualified Leads"
      description="Paid ads allow your business to reach targeted audiences instantly."

      image="/images/ppc.webp"

      points={[
        "Instant Website Traffic",
        "Highly Targeted Audience Reach",
        "Better ROI on Marketing Budget",
        "Faster Lead Generation",
        "Scalable Growth Strategy",
      ]}

      qualityTitle="Our PPC Optimization Approach"

      qualityItems={[
        {
          icon: "/icons/research.png",
          title: "Advanced Audience Research",
          description: "We identify the highest converting audience segments.",
        },
        {
          icon: "/icons/creative.png",
          title: "High-Converting Ad Creatives",
          description: "Ad copies and creatives designed for engagement.",
        },
        {
          icon: "/icons/funnel.png",
          title: "Funnel-Based Campaign Structure",
          description: "Structured ads for awareness, consideration & conversion.",
        },
        {
          icon: "/icons/report.png",
          title: "Transparent Reporting",
          description: "Clear performance metrics and ROI tracking.",
        },
      ]}
    />
  );

  /* ================= OUR WORK ================= */

  const ourWorkSection = (
    <ServiceOurWork
      title="Paid Ads Success Stories"
      description="See how our PPC campaigns generated measurable growth."

      projects={[
        {
          image: "/images/work-ppc1.webp",
          name: "Real Estate Lead Campaign",
          category: "Google Ads",
          services: [
            "Search Ads Campaign",
            "Lead Generation Funnel",
            "Conversion Optimization",
          ],
        },
        {
          image: "/images/work-ppc2.webp",
          name: "Ecommerce Brand Growth",
          category: "Meta Ads Campaign",
          services: [
            "Remarketing Ads",
            "Audience Targeting",
            "Sales Funnel Strategy",
          ],
        },
      ]}
    />
  );

  const happyClientsSection = <ListenFromClients />;

  return (
    <>
      <Breadcrumb currentPage="Paid Ads / PPC" />

      <ServiceHero
        badge="PPC & Paid Ads Agency in India"
        title="Run High-Performance Paid Advertising Campaigns"
        description="Afwan Tech helps businesses generate leads and sales through strategic paid advertising."
        image="/images/ppc.webp"
        features={[
          "Google Ads Campaigns",
          "Meta Ads Management",
          "Retargeting Strategy",
          "Conversion Tracking",
          "ROI Optimization",
        ]}
      />

      <ServiceContent
        introTitle="Accelerate Growth with Paid Advertising"
        introDescription="Reach your ideal customers instantly with data-driven ad campaigns."

        smallTitle="Paid Ads / PPC Services"
        mainTitle="Targeted Advertising That Delivers Measurable Results"
        description="Our PPC experts design, launch, and optimize campaigns that maximize conversions and minimize wasted ad spend."

        image="/images/ppc.webp"

        secondTitle="Strategy + Optimization = Higher ROI"
        secondDescription="We continuously monitor, test, and refine campaigns to improve performance."

        secondImage="/images/ppc.webp"

        bullets={[
          "Search & Display Advertising",
          "Social Media Ads Management",
          "Conversion Rate Optimization",
          "Advanced Retargeting Strategy",
          "Budget & ROI Optimization",
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

export default PaidAds;

