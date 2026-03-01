import Breadcrumb from "../../components/common/Breadcrumb";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceTabs from "../../components/services/ServiceTabs";
import PlansPricing from "../../components/services/PlansPricing";
import ServiceKeyFeatures from "../../components/services/ServiceKeyFeatures";
import ServiceBenefits from "../../components/services/ServiceBenefits";
import ServiceOurWork from "../../components/services/ServiceOurWork";
import ListenFromClients from "../../components/home/ListenFromClients";

const PSDToHTML = () => {

  const plansSection = (
    <PlansPricing
      title="PSD to HTML Conversion Packages"
      description="Pixel-perfect conversion of your design files into responsive, clean-coded HTML."

      plans={[
        {
          title: "Basic Conversion",
          subtitle: "For simple static designs.",
          price: "4999",
          oldPrice: "9000",
          save: "45%",
          features: [
            "Up to 3 Pages",
            "Pixel Perfect Conversion",
            "Responsive Layout",
            "Cross-Browser Compatibility",
          ],
        },
        {
          title: "Professional Conversion",
          subtitle: "For business websites.",
          price: "9999",
          oldPrice: "16000",
          save: "38%",
          recommended: true,
          features: [
            "Up to 8 Pages",
            "SEO Friendly Code",
            "W3C Validated HTML",
            "Speed Optimization",
          ],
        },
        {
          title: "Advanced Conversion",
          subtitle: "For complex UI projects.",
          price: "19999",
          oldPrice: "30000",
          save: "33%",
          features: [
            "Unlimited Pages",
            "Animation Integration",
            "React / Tailwind Option",
            "Performance Optimization",
          ],
        },
      ]}
    />
  );

  const keyFeaturesSection = (
    <ServiceKeyFeatures
      title="High-Quality PSD to HTML Conversion"
      description="We transform your designs into clean, structured, and scalable frontend code."

      features={[
        { icon: "/icons/code.png", title: "Clean Structured Code" },
        { icon: "/icons/pixel.png", title: "Pixel Perfect Conversion" },
        { icon: "/icons/mobile.png", title: "Fully Responsive" },
        { icon: "/icons/browser.png", title: "Cross Browser Compatible" },
        { icon: "/icons/seo.png", title: "SEO Friendly Markup" },
        { icon: "/icons/speed.png", title: "Optimized Performance" },
      ]}
    />
  );

  const benefitsSection = (
    <ServiceBenefits
      badge="Benefits"
      title="Why Choose Our PSD to HTML Service?"
      description="Get fast, reliable, and professional frontend development."

      image="/images/psd-html.webp"

      points={[
        "Accurate Design Implementation",
        "Mobile Responsive Output",
        "Fast Loading Pages",
        "Developer-Friendly Code",
        "Future Scalability",
      ]}

      qualityTitle="Development Quality You Can Trust"

      qualityItems={[
        {
          icon: "/icons/design.png",
          title: "Attention to Detail",
          description: "Every pixel carefully implemented.",
        },
        {
          icon: "/icons/structure.png",
          title: "Semantic HTML Structure",
          description: "Clean & SEO-optimized markup.",
        },
        {
          icon: "/icons/performance.png",
          title: "Performance Optimized",
          description: "Minimal and efficient coding.",
        },
      ]}
    />
  );

  const ourWorkSection = (
    <ServiceOurWork
      title="Recent PSD to HTML Projects"
      description="See how we converted creative designs into functional websites."

      projects={[
        {
          image: "/images/work-psd1.webp",
          name: "Corporate Landing UI",
          category: "PSD to HTML",
          services: ["Responsive Coding", "Animation", "SEO Structure"],
        },
      ]}
    />
  );

  const happyClientsSection = <ListenFromClients />;

  return (
    <>
      <Breadcrumb currentPage="PSD to HTML Conversion" />

      <ServiceHero
        badge="PSD to HTML Conversion Company in India"
        title="Convert Your Designs into Pixel-Perfect HTML"
        description="We convert PSD, Figma, and XD designs into responsive and optimized HTML websites."
        image="/images/psd-html.webp"
        features={[
          "Pixel Perfect Conversion",
          "Responsive Layout",
          "SEO Optimized Code",
          "Cross Browser Compatibility",
        ]}
      />

      <ServiceContent
        introTitle="Professional PSD to HTML Services"
        introDescription="Turn your static designs into fully functional web pages."

        smallTitle="PSD to HTML Conversion"
        mainTitle="Clean, Structured & Responsive Frontend Development"
        description="We ensure your design is accurately translated into HTML while maintaining performance and scalability."

        image="/images/psd-html.webp"

        secondTitle="From Design File to Live Website"
        secondDescription="We support PSD, Figma, Adobe XD, and Sketch files."

        secondImage="/images/psd-html.webp"

        bullets={[
          "Pixel Accurate Implementation",
          "Mobile First Approach",
          "Clean & Commented Code",
          "SEO Structured Markup",
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

export default PSDToHTML;

