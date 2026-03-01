import Breadcrumb from "../../components/common/Breadcrumb";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceTabs from "../../components/services/ServiceTabs";
import PlansPricing from "../../components/services/PlansPricing";
import ServiceKeyFeatures from "../../components/services/ServiceKeyFeatures";
import ServiceBenefits from "../../components/services/ServiceBenefits";
import ServiceOurWork from "../../components/services/ServiceOurWork";
import ListenFromClients from "../../components/home/ListenFromClients";

const EmailMarketing = () => {

  /* ================= PLANS ================= */

  const plansSection = (
    <PlansPricing
      title="Email Marketing Packages"
      description="Strategic email campaigns designed to nurture leads, increase engagement, and boost sales."

      plans={[
        {
          title: "Starter Email",
          subtitle: "Perfect for small businesses.",
          price: "3999",
          oldPrice: "7000",
          save: "43%",
          features: [
            "Up to 2 Campaigns per Month",
            "Email Template Design",
            "Basic Audience Segmentation",
            "Subject Line Optimization",
            "Monthly Performance Report",
          ],
        },
        {
          title: "Growth Email",
          subtitle: "For growing brands.",
          price: "7999",
          oldPrice: "14000",
          save: "42%",
          recommended: true,
          features: [
            "Up to 4 Campaigns per Month",
            "Advanced Segmentation",
            "Automation Setup (Welcome Series)",
            "A/B Testing",
            "Click & Open Rate Optimization",
            "Bi-Weekly Reporting",
          ],
        },
        {
          title: "Advanced Email",
          subtitle: "Best for ecommerce & lead funnels.",
          price: "14999",
          oldPrice: "22000",
          save: "32%",
          features: [
            "Unlimited Campaigns",
            "Full Automation Workflows",
            "Cart Abandonment Emails",
            "Lead Nurture Sequence",
            "Behavior-Based Triggers",
            "Conversion Optimization",
            "Weekly Performance Review",
          ],
        },
        {
          title: "Enterprise Automation",
          subtitle: "For large-scale marketing funnels.",
          price: "24999",
          oldPrice: "35000",
          save: "29%",
          features: [
            "Dedicated Email Strategist",
            "Full Funnel Automation Strategy",
            "CRM Integration",
            "Advanced Personalization",
            "AI-Based Segmentation",
            "Advanced Analytics Dashboard",
            "Revenue Tracking & Optimization",
            "Weekly Detailed Reports",
          ],
        },
      ]}
    />
  );

  /* ================= KEY FEATURES ================= */

  const keyFeaturesSection = (
    <ServiceKeyFeatures
      title="Powerful Email Marketing & Automation"
      description="We design data-driven email campaigns that convert subscribers into loyal customers."

      features={[
        { icon: "/icons/template.png", title: "Custom Email Templates" },
        { icon: "/icons/automation.png", title: "Automation Workflows" },
        { icon: "/icons/segmentation.png", title: "Audience Segmentation" },
        { icon: "/icons/abtesting.png", title: "A/B Testing" },
        { icon: "/icons/crm.png", title: "CRM Integration" },
        { icon: "/icons/analytics.png", title: "Performance Tracking" },
      ]}
    />
  );

  /* ================= BENEFITS ================= */

  const benefitsSection = (
    <ServiceBenefits
      badge="Benefits"
      title="Turn Subscribers into Paying Customers"
      description="Email marketing remains one of the highest ROI digital marketing channels."

      image="/images/email-marketing.webp"

      points={[
        "Higher Customer Retention",
        "Increased Sales & Conversions",
        "Automated Lead Nurturing",
        "Personalized Customer Engagement",
        "Better ROI Compared to Paid Ads",
      ]}

      qualityTitle="Our Email Marketing Approach"

      qualityItems={[
        {
          icon: "/icons/strategy.png",
          title: "Strategic Campaign Planning",
          description: "Every campaign aligned with your business goals.",
        },
        {
          icon: "/icons/design.png",
          title: "Conversion-Focused Design",
          description: "Emails crafted to drive clicks and sales.",
        },
        {
          icon: "/icons/trigger.png",
          title: "Behavior-Based Automation",
          description: "Automated emails triggered by user actions.",
        },
        {
          icon: "/icons/report.png",
          title: "Transparent Analytics",
          description: "Track open rates, CTR, and revenue performance.",
        },
      ]}
    />
  );

  /* ================= OUR WORK ================= */

  const ourWorkSection = (
    <ServiceOurWork
      title="Email Campaign Success Stories"
      description="See how our email marketing strategies boosted revenue."

      projects={[
        {
          image: "/images/work-email1.webp",
          name: "Ecommerce Cart Recovery Campaign",
          category: "Email Automation",
          services: [
            "Cart Abandonment Sequence",
            "Personalized Offers",
            "Revenue Optimization",
          ],
        },
        {
          image: "/images/work-email2.webp",
          name: "Coaching Business Lead Funnel",
          category: "Lead Nurture Campaign",
          services: [
            "Welcome Automation",
            "Content Email Strategy",
            "Conversion Tracking",
          ],
        },
      ]}
    />
  );

  const happyClientsSection = <ListenFromClients />;

  return (
    <>
      <Breadcrumb currentPage="Email Marketing" />

      <ServiceHero
        badge="Email Marketing Agency in India"
        title="High-Converting Email Marketing & Automation Services"
        description="We help businesses build powerful email campaigns that nurture leads and increase sales."
        image="/images/email-marketing.webp"
        features={[
          "Automation Workflows",
          "Cart Recovery Emails",
          "Audience Segmentation",
          "CRM Integration",
          "Revenue Optimization",
        ]}
      />

      <ServiceContent
        introTitle="Drive Sales Through Strategic Email Campaigns"
        introDescription="Email marketing allows you to build direct relationships with your audience."

        smallTitle="Email Marketing Services"
        mainTitle="Automated Email Funnels That Generate Consistent Revenue"
        description="From welcome sequences to advanced automation funnels, we create email strategies that maximize engagement and conversions."

        image="/images/email-marketing.webp"

        secondTitle="Data-Driven Email Strategy"
        secondDescription="We analyze behavior, segment audiences, and optimize campaigns for maximum ROI."

        secondImage="/images/email-marketing.webp"

        bullets={[
          "Lead Nurture Sequences",
          "Ecommerce Automation",
          "Advanced Segmentation",
          "Conversion-Focused Templates",
          "Performance Tracking & Reporting",
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

export default EmailMarketing;

