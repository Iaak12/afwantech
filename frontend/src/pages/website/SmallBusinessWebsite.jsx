import Breadcrumb from "../../components/common/Breadcrumb";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceTabs from "../../components/services/ServiceTabs";
import PlansPricing from "../../components/services/PlansPricing";
import ServiceKeyFeatures from "../../components/services/ServiceKeyFeatures";
import ServiceBenefits from "../../components/services/ServiceBenefits";
import ServiceOurWork from "../../components/services/ServiceOurWork";  
import ListenFromClients from "@/components/home/ListenFromClients";




const SmallBusinessWebsite = () => {
    const plansSection = (
  <PlansPricing
    title="Small Business Web Design Development Packages"
    description="Choose affordable packages tailored for startups and growing businesses."
    plans={[
      {
        title: "Bronze",
        subtitle: "Great for first-time users.",
        price: "1666",
        oldPrice: "29000",
        save: "45%",
        features: [
          "Web Pages - 5",
          "Template Based",
          "Admin Panel",
          "Enquiry Form",
        ],
      },
      {
        title: "Silver",
        subtitle: "Ideal for startups.",
        price: "2499",
        oldPrice: "39000",
        save: "30%",
        recommended: true,
        features: [
          "Web Pages - 10",
          "Template Based",
          "Admin Panel",
          "Enquiry Form",
        ],
      },
      {
        title: "Gold",
        subtitle: "Optimized for growth.",
        price: "3333",
        oldPrice: "49000",
        save: "22%",
        features: [
          "Web Pages - 20",
          "SEO Ready",
          "Admin Panel",
          "Enquiry Form",
        ],
      },
      {
        title: "Diamond",
        subtitle: "For high-traffic sites.",
        price: "5833",
        oldPrice: "79000",
        save: "12%",
        features: [
          "Web Pages - 50",
          "SEO Optimized",
          "Admin Panel",
          "Enquiry Form",
        ],
      },
    ]}
  />
);

    const keyFeaturesSection = (
  <ServiceKeyFeatures
    title="Small Business Website Design: Affordable, Professional, and Built for Growth"
    description="In today's digital-first world, every small business deserves a professional online presence without breaking the bank. We offer cost-effective solutions tailored to your brand."

    features={[
      { icon: "/icons/template.png", title: "Professional Templates" },
      { icon: "/icons/cost.png", title: "Cost-Effective Design" },
      { icon: "/icons/mobile.png", title: "Mobile Responsive" },
      { icon: "/icons/speed.png", title: "Fast Load Speeds" },
      { icon: "/icons/ui.png", title: "User-Friendly Interface" },
      { icon: "/icons/hosting.png", title: "Secure Hosting" },
      { icon: "/icons/branding.png", title: "Custom Branding Colors" },
      { icon: "/icons/form.png", title: "Integrated Contact Forms" },
      { icon: "/icons/domain.png", title: "Domain Registration Included" },
      { icon: "/icons/launch.png", title: "Quick Launch Timeline" },
      { icon: "/icons/scale.png", title: "Scalable Solutions" },
      { icon: "/icons/support.png", title: "Technical Support" },
    ]}
  />
);


const benefitsSection = (
  <ServiceBenefits
    badge="Benefits"
    title="Designing a Website for Small Business That Delivers Real Results"
    description="Today's digital-first world requires a website that looks great but also delivers measurable results."

    image="/images/small-business.webp"

    points={[
      "Attractively Designed: First impressions matter.",
      "User-Centric Experiences for smooth navigation.",
      "Mobile Responsiveness across all devices.",
      "SEO Optimization for better rankings.",
      "Conversion-Focused Strategy for business growth.",
    ]}

    qualityTitle="The Quality You'll Experience"

    qualityItems={[
      {
        icon: "/icons/community.png",
        title: "Stronger Local Community Outreach",
        description: "Build trust and stronger engagement within your local market.",
      },
      {
        icon: "/icons/seo.png",
        title: "Higher Local SEO Ranking",
        description: "Improve search visibility with tailored local strategies.",
      },
      {
        icon: "/icons/keyword.png",
        title: "Area-Based Keyword Research",
        description: "Target relevant local keywords for better traffic.",
      },
      {
        icon: "/icons/link.png",
        title: "Local Link Building and Listing",
        description: "Boost credibility and attract nearby customers.",
      },
      {
        icon: "/icons/analysis.png",
        title: "In-depth Service Area Analysis",
        description: "Discover growth opportunities in your service region.",
      },
      {
        icon: "/icons/gmb.png",
        title: "Optimizing Google My Business",
        description: "Enhance online visibility and local presence.",
      },
    ]}
  />
);
const ourWorkSection = (
  <ServiceOurWork
    title="Case Studies: Our Real Success Stories"
    description="Every project tells a story of dedication and measurable growth. Explore how we transform businesses through innovation."

    projects={[
      {
        image: "/images/work1.webp",
        name: "DRH Sports",
        category: "Sports Uniform Manufacturers",
        services: [
          "Website with SEO in Multiple Locations",
          "Off Page SEO for Link-building",
          "Brand Image Building",
          "Google My Business Optimization",
        ],
      },
      {
        image: "/images/work2.webp",
        name: "MilkMan Dairy",
        category: "Dairy Equipment Manufacturer",
        services: [
          "SEO Optimization",
          "Website Development",
          "Local SEO Ranking",
          "Lead Generation Strategy",
        ],
      },
    ]}
  />
);
const happyClientsSection = (
  <ListenFromClients />
);


  return (
    <>
      <Breadcrumb currentPage="Small Business Website" />

      <ServiceHero
        badge="Small Business Website Design Company in India"
        title="Transform Your Small Business with a Leading Website Design Company"
        description="Afwan Tech creates visually stunning, functional websites that help you stand out and connect with your audience."
        image="/images/small-business.webp"
        features={[
          "User-Friendly Websites for Maximum Engagement",
          "Mobile-Optimized for Modern Users",
          "Customized Designs for Unique Brands",
          "Fast Loading for Better User Experience",
          "SEO-Friendly Structure for Organic Growth"
        ]}
      />

      <ServiceContent
        introTitle="Accelerate Your Business Growth with Unmatched Web Design"
        introDescription="Your website is more than a digital presence—it's your growth engine. We design innovative, user-focused websites that captivate audiences and drive measurable results."

        smallTitle="Small Business Website"
        mainTitle="Drive Success with One of the Top 10 Best Small Business Web Designing Services in India"
        description="A well-designed website forms the core of success for your small business online. It's that first impression your audience will have and a platform to introduce your brand."

        image="/images/small-business.webp"

        secondTitle="Exceptional Web Design Services That Small Businesses Count On"
        secondDescription="We carefully design websites that represent your brand and generate measurable success. Our expertise ensures impactful websites that drive growth."

        secondImage="/images/small-business.webp"

        bullets={[
          "Custom Designs tailored to your brand identity",
          "Results-focused approach for better engagement",
          "User-Centric layout for smooth navigation",
          "Mobile-Friendly & Responsive Design",
          "SEO-Optimized for higher Google rankings"
        ]}
      />

      {/* ✅ Service Tabs Section Added */}
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

export default SmallBusinessWebsite;

