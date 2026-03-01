import Breadcrumb from "../../components/common/Breadcrumb";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceTabs from "../../components/services/ServiceTabs";
import PlansPricing from "../../components/services/PlansPricing";
import ServiceKeyFeatures from "../../components/services/ServiceKeyFeatures";
import ServiceBenefits from "../../components/services/ServiceBenefits";
import ServiceOurWork from "../../components/services/ServiceOurWork";
import ListenFromClients from "../../components/home/ListenFromClients";

const BusinessWebsiteWithSEO = () => {

  /* ================= PLANS SECTION ================= */
  const plansSection = (
    <PlansPricing
      title="Business Website With SEO Packages"
      description="Choose powerful website packages integrated with advanced SEO strategies."

      plans={[
  {
    title: "Starter SEO",
    subtitle: "Perfect for small local businesses.",
    price: "2999",
    oldPrice: "45000",
    save: "35%",
    features: [
      "10 Web Pages",
      "On-Page SEO",
      "Basic Keyword Research",
      "Google Analytics Setup",
    ],
  },
  {
    title: "Growth SEO",
    subtitle: "Ideal for growing brands.",
    price: "4999",
    oldPrice: "65000",
    save: "28%",
    recommended: true,
    features: [
      "15 Web Pages",
      "Advanced On-Page SEO",
      "Technical SEO Optimization",
      "Monthly SEO Report",
    ],
  },
  {
    title: "Advanced SEO",
    subtitle: "Best for competitive industries.",
    price: "7999",
    oldPrice: "99000",
    save: "22%",
    features: [
      "25 Web Pages",
      "Complete SEO Strategy",
      "Competitor Analysis",
      "Lead Generation Focus",
    ],
  },
  {
    title: "Enterprise SEO",
    subtitle: "For large-scale & national brands.",
    price: "14999",
    oldPrice: "199000",
    save: "25%",
    features: [
      "Unlimited Web Pages Optimization",
      "Full Technical SEO Audit",
      "High-Authority Link Building",
      "Dedicated SEO Manager",
      "Advanced Analytics & Reporting",
      "Multi-Location SEO Strategy",
    ],
  },
]}

    />
  );

  /* ================= KEY FEATURES ================= */
  const keyFeaturesSection = (
    <ServiceKeyFeatures
      title="Business Website With SEO: Built to Rank & Convert"
      description="We develop high-performance business websites that are optimized for search engines and designed for maximum conversions."

      features={[
        { icon: "/icons/seo.png", title: "Built-in SEO Architecture" },
        { icon: "/icons/keyword.png", title: "Keyword Optimized Pages" },
        { icon: "/icons/mobile.png", title: "Mobile Responsive Design" },
        { icon: "/icons/speed.png", title: "High-Speed Performance" },
        { icon: "/icons/analytics.png", title: "Google Analytics Setup" },
        { icon: "/icons/meta.png", title: "Meta Tags Optimization" },
        { icon: "/icons/schema.png", title: "Schema Markup Integration" },
        { icon: "/icons/security.png", title: "Secure HTTPS Website" },
        { icon: "/icons/content.png", title: "SEO-Friendly Content Structure" },
        { icon: "/icons/report.png", title: "Performance Tracking Reports" },
      ]}
    />
  );

  /* ================= BENEFITS ================= */
  const benefitsSection = (
    <ServiceBenefits
      badge="Benefits"
      title="A Business Website That Drives Traffic & Sales"
      description="A website with SEO is not just a design — it's a growth engine that works 24/7 for your business."

      image="/images/business-seo.webp"

      points={[
        "Higher Google Rankings for Target Keywords",
        "Consistent Organic Traffic Growth",
        "Better Lead Generation & Conversions",
        "Improved Brand Authority & Trust",
        "Long-Term Sustainable Growth",
      ]}

      qualityTitle="The SEO Quality You'll Experience"

      qualityItems={[
        {
          icon: "/icons/research.png",
          title: "Advanced Keyword Research",
          description: "We identify high-converting keywords specific to your industry.",
        },
        {
          icon: "/icons/technical.png",
          title: "Technical SEO Optimization",
          description: "Optimized site speed, structure & indexing.",
        },
        {
          icon: "/icons/content.png",
          title: "SEO Content Strategy",
          description: "Content that ranks and converts visitors.",
        },
        {
          icon: "/icons/local.png",
          title: "Local SEO Integration",
          description: "Target customers in your city and service areas.",
        },
        {
          icon: "/icons/link.png",
          title: "Authority Link Building",
          description: "Build domain authority and trust.",
        },
        {
          icon: "/icons/growth.png",
          title: "Continuous Optimization",
          description: "Ongoing improvements to maintain rankings.",
        },
      ]}
    />
  );

  /* ================= OUR WORK ================= */
  const ourWorkSection = (
    <ServiceOurWork
      title="Our SEO Success Stories"
      description="See how our SEO-driven websites helped businesses grow and dominate search rankings."

      projects={[
        {
          image: "/images/work-seo1.webp",
          name: "Legal Advisory Firm",
          category: "Business Website + SEO",
          services: [
            "On-Page SEO",
            "Keyword Ranking Strategy",
            "Technical Optimization",
            "Lead Generation",
          ],
        },
        {
          image: "/images/work-seo2.webp",
          name: "Manufacturing Company",
          category: "SEO Optimized Website",
          services: [
            "Industry Keyword Targeting",
            "Content Optimization",
            "Schema Markup",
            "Traffic Growth Strategy",
          ],
        },
      ]}
    />
  );

  const happyClientsSection = <ListenFromClients />;

  return (
    <>
      <Breadcrumb currentPage="Business Website With SEO" />

      <ServiceHero
        badge="Business Website With SEO Company in India"
        title="Rank Higher & Grow Faster With SEO-Optimized Business Websites"
        description="Afwan Tech builds high-performing business websites integrated with powerful SEO strategies."
        image="/images/business-seo.webp"
        features={[
          "SEO Optimized Structure",
          "Mobile Responsive Design",
          "High-Speed Performance",
          "Conversion Focused Layout",
          "Google Ranking Strategy",
        ]}
      />

      <ServiceContent
        introTitle="Accelerate Your Business Growth with SEO-Driven Web Design"
        introDescription="Your website should not just look professional — it should rank on Google and generate leads."

        smallTitle="Business Website With SEO"
        mainTitle="Grow Online with a Powerful Business Website Integrated with SEO"
        description="We create business websites that are strategically optimized for search engines, ensuring maximum visibility and measurable growth."

        image="/images/business-seo.webp"

        secondTitle="SEO Strategies That Deliver Long-Term Results"
        secondDescription="Our approach combines technical SEO, content strategy, and user experience optimization to drive consistent growth."

        secondImage="/images/business-seo.webp"

        bullets={[
          "Advanced Keyword Targeting",
          "Technical SEO Optimization",
          "Mobile-First Responsive Design",
          "Conversion-Oriented Structure",
          "Long-Term Ranking Strategy",
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

export default BusinessWebsiteWithSEO;

