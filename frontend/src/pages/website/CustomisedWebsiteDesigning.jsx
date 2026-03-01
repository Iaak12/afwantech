import Breadcrumb from "../../components/common/Breadcrumb";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceTabs from "../../components/services/ServiceTabs";
import PlansPricing from "../../components/services/PlansPricing";
import ServiceKeyFeatures from "../../components/services/ServiceKeyFeatures";
import ServiceBenefits from "../../components/services/ServiceBenefits";
import ServiceOurWork from "../../components/services/ServiceOurWork";
import ListenFromClients from "../../components/home/ListenFromClients";

const CustomisedWebsiteDesigning = () => {

  /* ================= PLANS SECTION ================= */
  const plansSection = (
    <PlansPricing
      title="Customised Website Designing Packages"
      description="Tailor-made website solutions built to reflect your brand identity and business goals."
      plans={[
        {
          title: "Basic Custom",
          subtitle: "Perfect for startups.",
          price: "3999",
          oldPrice: "55000",
          save: "30%",
          features: [
            "Custom Homepage Design",
            "Up to 10 Pages",
            "Responsive Layout",
            "Basic SEO Setup",
          ],
        },
        {
          title: "Professional Custom",
          subtitle: "Best for growing brands.",
          price: "6999",
          oldPrice: "85000",
          save: "25%",
          recommended: true,
          features: [
            "Fully Custom UI/UX",
            "15–20 Pages",
            "Advanced SEO Setup",
            "Speed Optimization",
          ],
        },
        {
          title: "Premium Custom",
          subtitle: "Ideal for high-end brands.",
          price: "11999",
          oldPrice: "145000",
          save: "20%",
          features: [
            "Unique Brand-Focused Design",
            "Unlimited Design Revisions",
            "Advanced Animations",
            "Conversion Optimization",
          ],
        },
        {
          title: "Enterprise Custom",
          subtitle: "For large-scale businesses.",
          price: "19999",
          oldPrice: "250000",
          save: "18%",
          features: [
            "Enterprise UI/UX Strategy",
            "Custom Web Applications",
            "Dedicated Project Manager",
            "Performance & Security Optimization",
          ],
        },
      ]}
    />
  );

  /* ================= KEY FEATURES ================= */
  const keyFeaturesSection = (
    <ServiceKeyFeatures
      title="Custom Website Design Built Around Your Brand"
      description="We create visually stunning and strategically structured websites tailored to your brand identity and business goals."

      features={[
        { icon: "/icons/design.png", title: "Unique Brand-Focused Design" },
        { icon: "/icons/ui.png", title: "Custom UI/UX Strategy" },
        { icon: "/icons/mobile.png", title: "Fully Responsive Layout" },
        { icon: "/icons/speed.png", title: "Performance Optimized" },
        { icon: "/icons/seo.png", title: "SEO-Friendly Structure" },
        { icon: "/icons/security.png", title: "Secure Architecture" },
        { icon: "/icons/animation.png", title: "Modern Animations" },
        { icon: "/icons/scalable.png", title: "Scalable Development" },
        { icon: "/icons/support.png", title: "Technical Support" },
      ]}
    />
  );

  /* ================= BENEFITS ================= */
  const benefitsSection = (
    <ServiceBenefits
      badge="Benefits"
      title="Why Choose Customised Website Designing?"
      description="A custom website helps you stand out in a competitive market while delivering superior user experience and better conversion rates."

      image="/images/custom-website.webp"

      points={[
        "Unique Design That Reflects Your Brand",
        "Higher Conversion Rates",
        "Better SEO Performance",
        "Improved User Engagement",
        "Future-Proof & Scalable Structure",
      ]}

      qualityTitle="The Quality You'll Experience"

      qualityItems={[
        {
          icon: "/icons/brand.png",
          title: "Stronger Brand Identity",
          description: "Design aligned with your company's vision and personality.",
        },
        {
          icon: "/icons/ux.png",
          title: "Enhanced User Experience",
          description: "Intuitive navigation and engaging layout.",
        },
        {
          icon: "/icons/performance.png",
          title: "Optimized Performance",
          description: "Fast loading and optimized backend architecture.",
        },
        {
          icon: "/icons/seo.png",
          title: "SEO-Ready Framework",
          description: "Built with ranking factors in mind.",
        },
        {
          icon: "/icons/lead.png",
          title: "Lead Generation Focus",
          description: "Designed to convert visitors into customers.",
        },
        {
          icon: "/icons/support.png",
          title: "Long-Term Support",
          description: "Ongoing updates and maintenance services.",
        },
      ]}
    />
  );

  /* ================= OUR WORK ================= */
  const ourWorkSection = (
    <ServiceOurWork
      title="Our Custom Website Design Success Stories"
      description="See how our custom-designed websites helped brands establish authority and increase conversions."

      projects={[
        {
          image: "/images/work-custom1.webp",
          name: "Luxury Interior Studio",
          category: "Custom Website Development",
          services: [
            "Custom UI/UX Design",
            "SEO Optimization",
            "Brand Identity Development",
            "Lead Conversion Strategy",
          ],
        },
        {
          image: "/images/work-custom2.webp",
          name: "Tech Startup Platform",
          category: "Web Application Development",
          services: [
            "Custom Dashboard UI",
            "Advanced Backend Development",
            "Performance Optimization",
            "Scalable Architecture",
          ],
        },
      ]}
    />
  );

  const happyClientsSection = <ListenFromClients />;

  return (
    <>
      <Breadcrumb currentPage="Customised Website Designing" />

      <ServiceHero
        badge="Customised Website Designing Company in India"
        title="Create a Unique Digital Identity with Custom Website Designing"
        description="We design fully customised websites tailored to your business goals, ensuring strong branding, better engagement, and higher conversions."
        image="/images/custom-website.webp"
        features={[
          "100% Unique Design",
          "Brand-Focused UI/UX",
          "Mobile Responsive",
          "SEO-Optimized Structure",
          "Conversion-Oriented Layout",
        ]}
      />

      <ServiceContent
        introTitle="Stand Out with a Website Designed Exclusively for You"
        introDescription="Your business deserves more than a template. We craft custom-built websites that reflect your brand personality and deliver measurable business growth."

        smallTitle="Customised Website Designing"
        mainTitle="Professional Custom Web Designing Services for Modern Businesses"
        description="A customised website gives your brand a unique digital identity and ensures better user engagement."

        image="/images/custom-website.webp"

        secondTitle="Tailor-Made Solutions for Every Industry"
        secondDescription="We design websites aligned with your industry needs and target audience."

        secondImage="/images/custom-website.webp"

        bullets={[
          "Unique Layout and Branding",
          "User-Centric Design Approach",
          "SEO-Ready Development",
          "Performance Optimized",
          "Future Scalability",
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

export default CustomisedWebsiteDesigning;

