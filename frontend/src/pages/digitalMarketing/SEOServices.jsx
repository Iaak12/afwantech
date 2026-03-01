import Breadcrumb from "../../components/common/Breadcrumb";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceTabs from "../../components/services/ServiceTabs";
import PlansPricing from "../../components/services/PlansPricing";
import ServiceKeyFeatures from "../../components/services/ServiceKeyFeatures";
import ServiceBenefits from "../../components/services/ServiceBenefits";
import ServiceOurWork from "../../components/services/ServiceOurWork";
import ListenFromClients from "../../components/home/ListenFromClients";

const SEOServices = () => {

  const plansSection = (
    <PlansPricing
      title="SEO Packages"
      description="Improve your Google rankings and grow organic traffic."

      plans={[
        {
          title: "Starter SEO",
          subtitle: "Perfect for local businesses.",
          price: "4999",
          oldPrice: "9000",
          save: "45%",
          features: [
            "Keyword Research",
            "On-Page Optimization",
            "Google Analytics Setup",
            "Monthly Report",
          ],
        },
        {
          title: "Growth SEO",
          subtitle: "For growing businesses.",
          price: "9999",
          oldPrice: "16000",
          save: "38%",
          recommended: true,
          features: [
            "Advanced Keyword Strategy",
            "Technical SEO",
            "Content Optimization",
            "Backlink Strategy",
          ],
        },
      ]}
    />
  );

  const keyFeaturesSection = (
    <ServiceKeyFeatures
      title="Comprehensive SEO Strategy"
      description="Data-driven optimization for sustainable growth."

      features={[
        { icon: "/icons/keyword.png", title: "Keyword Research" },
        { icon: "/icons/technical.png", title: "Technical SEO" },
        { icon: "/icons/content.png", title: "Content Optimization" },
        { icon: "/icons/link.png", title: "Link Building" },
        { icon: "/icons/report.png", title: "Performance Reporting" },
      ]}
    />
  );

  const benefitsSection = (
    <ServiceBenefits
      badge="Benefits"
      title="Rank Higher. Grow Faster."
      description="SEO helps your business gain long-term visibility."

      image="/images/seo.webp"

      points={[
        "Higher Google Rankings",
        "Consistent Organic Traffic",
        "Better Lead Generation",
        "Increased Brand Authority",
      ]}
    />
  );

  const ourWorkSection = (
    <ServiceOurWork
      title="SEO Success Stories"
      description="Businesses that scaled with our SEO strategy."

      projects={[
        {
          image: "/images/work-seo1.webp",
          name: "Real Estate Company",
          category: "SEO Campaign",
          services: ["On-Page SEO", "Backlink Strategy", "Ranking Growth"],
        },
      ]}
    />
  );

  return (
    <>
      <Breadcrumb currentPage="SEO Services" />

      <ServiceHero
        badge="SEO Company in India"
        title="Boost Your Google Rankings & Organic Traffic"
        description="We help businesses dominate search results."
        image="/images/seo.webp"
        features={[
          "Keyword Research",
          "On-Page Optimization",
          "Technical SEO",
          "Monthly Reports",
        ]}
      />

      <ServiceContent
        introTitle="Professional SEO Services"
        introDescription="Get long-term organic growth."

        smallTitle="SEO Services"
        mainTitle="Search Engine Optimization That Drives Results"
        description="We optimize your website to rank higher and convert better."

        image="/images/seo.webp"

        bullets={[
          "Local SEO",
          "Technical SEO",
          "Content Optimization",
          "Backlink Strategy",
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

export default SEOServices;

