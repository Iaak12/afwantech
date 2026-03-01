import Breadcrumb from "../../components/common/Breadcrumb";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceTabs from "../../components/services/ServiceTabs";
import PlansPricing from "../../components/services/PlansPricing";
import ServiceKeyFeatures from "../../components/services/ServiceKeyFeatures";
import ServiceBenefits from "../../components/services/ServiceBenefits";
import ServiceOurWork from "../../components/services/ServiceOurWork";
import ListenFromClients from "../../components/home/ListenFromClients";

const WebDevelopment = () => {

  /* ================= PLANS SECTION ================= */
  const plansSection = (
    <PlansPricing
      title="Web Development Packages"
      description="Custom web development solutions tailored to your business goals."

      plans={[
        {
          title: "Starter Website",
          subtitle: "Perfect for startups & individuals.",
          price: "9999",
          oldPrice: "18000",
          save: "45%",
          features: [
            "Up to 5 Pages",
            "Responsive Design",
            "Basic SEO Setup",
            "Contact Form Integration",
          ],
        },
        {
          title: "Business Website",
          subtitle: "Ideal for growing businesses.",
          price: "19999",
          oldPrice: "32000",
          save: "38%",
          recommended: true,
          features: [
            "Up to 12 Pages",
            "Custom UI/UX Design",
            "SEO Optimized Structure",
            "Speed Optimization",
            "Admin Panel",
          ],
        },
        {
          title: "Advanced Web App",
          subtitle: "For dynamic & scalable platforms.",
          price: "39999",
          oldPrice: "65000",
          save: "35%",
          features: [
            "Custom Web Application",
            "API Integration",
            "User Authentication System",
            "Database Integration",
            "Advanced Security Setup",
          ],
        },
      ]}
    />
  );

  /* ================= KEY FEATURES ================= */
  const keyFeaturesSection = (
    <ServiceKeyFeatures
      title="Modern Web Development That Delivers Results"
      description="We build fast, secure, and scalable websites and web applications."

      features={[
        { icon: "/icons/code.png", title: "Clean & Scalable Code" },
        { icon: "/icons/mobile.png", title: "Fully Responsive Design" },
        { icon: "/icons/speed.png", title: "Optimized Performance" },
        { icon: "/icons/security.png", title: "Advanced Security" },
        { icon: "/icons/seo.png", title: "SEO Friendly Structure" },
        { icon: "/icons/api.png", title: "API Integration" },
        { icon: "/icons/database.png", title: "Database Architecture" },
        { icon: "/icons/support.png", title: "Ongoing Maintenance" },
      ]}
    />
  );

  /* ================= BENEFITS ================= */
  const benefitsSection = (
    <ServiceBenefits
      badge="Benefits"
      title="Web Development That Grows With Your Business"
      description="A professionally developed website builds trust, improves engagement, and drives conversions."

      image="/images/web-development.webp"

      points={[
        "Professional Online Presence",
        "Improved Customer Engagement",
        "Higher Conversion Rates",
        "Scalable Infrastructure",
        "Long-Term Business Growth",
      ]}

      qualityTitle="Why Choose Our Web Development Services?"

      qualityItems={[
        {
          icon: "/icons/strategy.png",
          title: "Strategic Planning",
          description: "We understand your business goals before development.",
        },
        {
          icon: "/icons/design.png",
          title: "Modern UI/UX",
          description: "Clean, conversion-focused design approach.",
        },
        {
          icon: "/icons/performance.png",
          title: "High Performance",
          description: "Optimized for speed & reliability.",
        },
        {
          icon: "/icons/support.png",
          title: "Dedicated Support",
          description: "Ongoing support after project delivery.",
        },
      ]}
    />
  );

  /* ================= OUR WORK ================= */
  const ourWorkSection = (
    <ServiceOurWork
      title="Our Web Development Projects"
      description="Explore some of the custom websites and applications we've built."

      projects={[
        {
          image: "/images/work-web1.webp",
          name: "Corporate Consulting Firm",
          category: "Business Website",
          services: [
            "Custom UI/UX",
            "SEO Optimization",
            "Performance Enhancement",
            "Lead Generation System",
          ],
        },
        {
          image: "/images/work-web2.webp",
          name: "Educational Platform",
          category: "Web Application",
          services: [
            "User Authentication",
            "Dashboard Development",
            "Database Integration",
            "API Integration",
          ],
        },
      ]}
    />
  );

  const happyClientsSection = <ListenFromClients />;

  return (
    <>
      <Breadcrumb currentPage="Web Development" />

      <ServiceHero
        badge="Web Development Company in India"
        title="Build Powerful, Scalable & High-Performance Websites"
        description="Afwan Tech delivers custom web development solutions tailored to your business needs."
        image="/images/web-development.webp"
        features={[
          "Custom Website Development",
          "Responsive Design",
          "SEO Friendly Structure",
          "High-Speed Performance",
          "Secure Architecture",
        ]}
      />

      <ServiceContent
        introTitle="Professional Web Development Services"
        introDescription="We design and develop websites that are visually impressive, technically strong, and conversion-focused."

        smallTitle="Web Development"
        mainTitle="Custom Web Solutions Built for Performance & Growth"
        description="Our team develops high-quality websites and web applications that enhance user experience and drive measurable results."

        image="/images/web-development.webp"

        secondTitle="Technology-Driven Development Approach"
        secondDescription="From frontend design to backend architecture, we ensure your website is scalable and future-ready."

        secondImage="/images/web-development.webp"

        bullets={[
          "User-Centric Design",
          "Modern Development Technologies",
          "SEO Optimized Code Structure",
          "Secure & Reliable Hosting Setup",
          "Ongoing Technical Support",
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

export default WebDevelopment;

