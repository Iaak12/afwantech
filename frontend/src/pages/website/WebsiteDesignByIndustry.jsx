import Breadcrumb from "../../components/common/Breadcrumb";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceTabs from "../../components/services/ServiceTabs";
import PlansPricing from "../../components/services/PlansPricing";
import ServiceKeyFeatures from "../../components/services/ServiceKeyFeatures";
import ServiceBenefits from "../../components/services/ServiceBenefits";
import ServiceOurWork from "../../components/services/ServiceOurWork";
import ListenFromClients from "../../components/home/ListenFromClients";

const WebsiteDesignByIndustry = () => {

  /* ================= PLANS SECTION ================= */
  const plansSection = (
    <PlansPricing
      title="Industry-Specific Website Packages"
      description="Custom-designed websites tailored to meet the unique needs of your industry."

      plans={[
        {
          title: "Starter Industry Website",
          subtitle: "Perfect for local businesses.",
          price: "12999",
          oldPrice: "22000",
          save: "40%",
          features: [
            "Up to 8 Pages",
            "Industry-Specific Design",
            "Mobile Responsive",
            "Basic SEO Setup",
          ],
        },
        {
          title: "Growth Industry Website",
          subtitle: "Ideal for growing companies.",
          price: "24999",
          oldPrice: "40000",
          save: "38%",
          recommended: true,
          features: [
            "Up to 15 Pages",
            "Custom UI/UX Design",
            "SEO Optimized Structure",
            "Lead Generation Forms",
            "Speed Optimization",
          ],
        },
        {
          title: "Enterprise Industry Website",
          subtitle: "For large & competitive industries.",
          price: "44999",
          oldPrice: "70000",
          save: "35%",
          features: [
            "Unlimited Pages",
            "Advanced SEO Setup",
            "Custom Functionalities",
            "CRM Integration",
            "Conversion Optimization",
          ],
        },
      ]}
    />
  );

  /* ================= KEY FEATURES ================= */
  const keyFeaturesSection = (
    <ServiceKeyFeatures
      title="Websites Designed for Your Industry's Success"
      description="We understand the unique requirements of different industries and design websites accordingly."

      features={[
        { icon: "/icons/hospital.png", title: "Hospital & Healthcare Websites" },
        { icon: "/icons/realestate.png", title: "Real Estate Websites" },
        { icon: "/icons/school.png", title: "School & Education Websites" },
        { icon: "/icons/restaurant.png", title: "Restaurant Websites" },
        { icon: "/icons/law.png", title: "Law Firm Websites" },
        { icon: "/icons/construction.png", title: "Construction Company Websites" },
        { icon: "/icons/ecommerce.png", title: "Retail & Ecommerce Stores" },
        { icon: "/icons/corporate.png", title: "Corporate Business Websites" },
      ]}
    />
  );

  /* ================= BENEFITS ================= */
  const benefitsSection = (
    <ServiceBenefits
      badge="Benefits"
      title="Industry-Focused Design That Drives Results"
      description="A generic website is not enough. Industry-specific design ensures better user trust and higher conversions."

      image="/images/industry-website.webp"

      points={[
        "Better Customer Targeting",
        "Higher Conversion Rates",
        "Industry-Relevant Features",
        "Improved Brand Authority",
        "Competitive Market Advantage",
      ]}

      qualityTitle="Why Industry-Based Websites Perform Better"

      qualityItems={[
        {
          icon: "/icons/strategy.png",
          title: "Targeted User Experience",
          description: "Designed based on your industry's customer behavior.",
        },
        {
          icon: "/icons/design.png",
          title: "Professional Industry Design",
          description: "Visual identity aligned with your sector.",
        },
        {
          icon: "/icons/seo.png",
          title: "Industry-Specific SEO",
          description: "Optimized for keywords relevant to your business niche.",
        },
        {
          icon: "/icons/conversion.png",
          title: "Lead Generation Focus",
          description: "Conversion-driven structure for better ROI.",
        },
      ]}
    />
  );

  /* ================= OUR WORK ================= */
  const ourWorkSection = (
    <ServiceOurWork
      title="Industry Projects We've Delivered"
      description="See how we helped different industries build powerful online presence."

      projects={[
        {
          image: "/images/work-industry1.webp",
          name: "City Hospital",
          category: "Healthcare Website",
          services: [
            "Appointment Booking",
            "Doctor Profiles",
            "SEO Optimization",
            "Mobile Responsive Design",
          ],
        },
        {
          image: "/images/work-industry2.webp",
          name: "Urban Real Estate",
          category: "Property Listing Website",
          services: [
            "Property Search Filter",
            "Lead Capture Forms",
            "CRM Integration",
            "Performance Optimization",
          ],
        },
      ]}
    />
  );

  const happyClientsSection = <ListenFromClients />;

  return (
    <>
      <Breadcrumb currentPage="Website Designing By Industry" />

      <ServiceHero
        badge="Industry-Specific Website Design Company in India"
        title="Custom Website Designing Solutions for Every Industry"
        description="Afwan Tech builds tailored websites for hospitals, real estate, education, restaurants, law firms, and more."
        image="/images/industry-website.webp"
        features={[
          "Industry-Focused Design",
          "Lead Generation Strategy",
          "SEO Optimized Structure",
          "Mobile Responsive Layout",
          "Conversion Driven Pages",
        ]}
      />

      <ServiceContent
        introTitle="Industry-Based Website Design That Converts"
        introDescription="Different industries require different website strategies. We design with your market in mind."

        smallTitle="Website Designing By Industry"
        mainTitle="Tailored Digital Solutions for Your Business Sector"
        description="From healthcare to real estate and education, we create websites that meet industry standards and customer expectations."

        image="/images/industry-website.webp"

        secondTitle="Designed to Match Your Industry Needs"
        secondDescription="We analyze your industry trends, competitors, and audience before crafting your website."

        secondImage="/images/industry-website.webp"

        bullets={[
          "Industry-Specific Layouts",
          "Optimized User Journey",
          "Custom Features & Integrations",
          "SEO Targeted Content",
          "High Conversion Strategy",
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

export default WebsiteDesignByIndustry;

