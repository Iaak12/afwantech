import Breadcrumb from "../../components/common/Breadcrumb";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceTabs from "../../components/services/ServiceTabs";
import PlansPricing from "../../components/services/PlansPricing";
import ServiceKeyFeatures from "../../components/services/ServiceKeyFeatures";
import ServiceBenefits from "../../components/services/ServiceBenefits";
import ServiceOurWork from "../../components/services/ServiceOurWork";
import ListenFromClients from "../../components/home/ListenFromClients";

const EcommerceWebsite = () => {

  /* ================= PLANS SECTION ================= */
  const plansSection = (
    <PlansPricing
      title="Ecommerce Website Packages"
      description="Launch your online store with powerful ecommerce features and secure payment integration."

      plans={[
        {
          title: "Starter Store",
          subtitle: "Perfect for small product businesses.",
          price: "14999",
          oldPrice: "25000",
          save: "40%",
          features: [
            "Up to 50 Products",
            "Payment Gateway Integration",
            "Mobile Responsive Design",
            "Basic SEO Setup",
          ],
        },
        {
          title: "Growth Store",
          subtitle: "Best for scaling businesses.",
          price: "24999",
          oldPrice: "40000",
          save: "37%",
          recommended: true,
          features: [
            "Unlimited Products",
            "Advanced SEO",
            "Coupon & Discount System",
            "Order Tracking System",
            "Speed Optimization",
          ],
        },
        {
          title: "Advanced Store",
          subtitle: "For serious ecommerce brands.",
          price: "39999",
          oldPrice: "60000",
          save: "33%",
          features: [
            "Custom UI/UX Design",
            "Multi-Vendor Option",
            "Advanced Analytics",
            "Marketing Tools Integration",
            "Inventory Management System",
          ],
        },
      ]}
    />
  );

  /* ================= KEY FEATURES ================= */
  const keyFeaturesSection = (
    <ServiceKeyFeatures
      title="Powerful Ecommerce Features That Drive Sales"
      description="We build secure, high-performance ecommerce websites designed for conversions."

      features={[
        { icon: "/icons/payment.png", title: "Secure Payment Integration" },
        { icon: "/icons/cart.png", title: "Advanced Shopping Cart" },
        { icon: "/icons/inventory.png", title: "Inventory Management" },
        { icon: "/icons/mobile.png", title: "Mobile Optimized Store" },
        { icon: "/icons/discount.png", title: "Coupon & Discount System" },
        { icon: "/icons/shipping.png", title: "Shipping Integration" },
        { icon: "/icons/analytics.png", title: "Sales Analytics Dashboard" },
        { icon: "/icons/security.png", title: "SSL Secured Website" },
      ]}
    />
  );

  /* ================= BENEFITS ================= */
  const benefitsSection = (
    <ServiceBenefits
      badge="Benefits"
      title="Sell Online 24/7 & Grow Without Limits"
      description="An ecommerce website allows your business to reach customers anytime, anywhere."

      image="/images/ecommerce.webp"

      points={[
        "Increase Online Sales",
        "Reach Nationwide & Global Customers",
        "Automated Order Management",
        "Professional Brand Presence",
        "Scalable Business Growth",
      ]}

      qualityTitle="Why Our Ecommerce Stores Perform Better"

      qualityItems={[
        {
          icon: "/icons/design.png",
          title: "Conversion-Focused Design",
          description: "UI/UX optimized to increase purchases.",
        },
        {
          icon: "/icons/speed.png",
          title: "High-Speed Performance",
          description: "Fast-loading store for better rankings.",
        },
        {
          icon: "/icons/seo.png",
          title: "SEO Optimized Products",
          description: "Rank product pages on Google.",
        },
        {
          icon: "/icons/support.png",
          title: "Ongoing Support",
          description: "Continuous updates & assistance.",
        },
      ]}
    />
  );

  /* ================= OUR WORK ================= */
  const ourWorkSection = (
    <ServiceOurWork
      title="Our Ecommerce Success Stories"
      description="Explore how our ecommerce solutions helped businesses increase revenue."

      projects={[
        {
          image: "/images/work-ecommerce1.webp",
          name: "Fashion Brand Store",
          category: "Ecommerce Website",
          services: [
            "Payment Integration",
            "Product SEO",
            "Mobile Optimization",
            "Sales Growth Strategy",
          ],
        },
        {
          image: "/images/work-ecommerce2.webp",
          name: "Electronics Store",
          category: "Online Store Development",
          services: [
            "Inventory Management",
            "Coupon System",
            "Performance Optimization",
            "Conversion Boosting",
          ],
        },
      ]}
    />
  );

  const happyClientsSection = <ListenFromClients />;

  return (
    <>
      <Breadcrumb currentPage="Ecommerce Website Designing" />

      <ServiceHero
        badge="Ecommerce Website Development Company in India"
        title="Launch a High-Converting Online Store for Your Business"
        description="Afwan Tech builds powerful ecommerce websites with secure payment systems, modern design, and high-performance architecture."
        image="/images/ecommerce.webp"
        features={[
          "Secure Payment Gateway",
          "Mobile Responsive Store",
          "Advanced Inventory System",
          "Conversion Focused Design",
          "SEO Optimized Product Pages",
        ]}
      />

      <ServiceContent
        introTitle="Start Selling Online with Confidence"
        introDescription="We create ecommerce stores that are fast, secure, and designed to maximize sales."

        smallTitle="Ecommerce Website Designing"
        mainTitle="Build a Powerful Online Store That Converts Visitors into Buyers"
        description="Our ecommerce solutions combine design, technology, and marketing strategy to help your business grow online."

        image="/images/ecommerce.webp"

        secondTitle="Technology + Strategy = Ecommerce Success"
        secondDescription="From product structure to checkout optimization, every part of your store is built for performance."

        secondImage="/images/ecommerce.webp"

        bullets={[
          "User-Friendly Shopping Experience",
          "Secure Payment Processing",
          "Mobile-First Design",
          "SEO Optimized Products",
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

export default EcommerceWebsite;

