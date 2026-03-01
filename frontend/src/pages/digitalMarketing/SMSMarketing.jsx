import Breadcrumb from "../../components/common/Breadcrumb";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceTabs from "../../components/services/ServiceTabs";
import PlansPricing from "../../components/services/PlansPricing";
import ServiceKeyFeatures from "../../components/services/ServiceKeyFeatures";
import ServiceBenefits from "../../components/services/ServiceBenefits";
import ServiceOurWork from "../../components/services/ServiceOurWork";
import ListenFromClients from "../../components/home/ListenFromClients";

const SMSMarketing = () => {

  /* ================= PLANS ================= */

  const plansSection = (
    <PlansPricing
      title="SMS Marketing Packages"
      description="Instant communication through bulk SMS, transactional alerts, and promotional campaigns."

      plans={[
        {
          title: "Starter SMS",
          subtitle: "Perfect for small businesses.",
          price: "2999",
          oldPrice: "6000",
          save: "50%",
          features: [
            "Up to 5,000 SMS Credits",
            "Promotional SMS Campaign",
            "Basic Sender ID Setup",
            "Campaign Scheduling",
            "Delivery Report Access",
          ],
        },
        {
          title: "Growth SMS",
          subtitle: "For growing brands.",
          price: "6999",
          oldPrice: "12000",
          save: "42%",
          recommended: true,
          features: [
            "Up to 15,000 SMS Credits",
            "Promotional + Transactional SMS",
            "Custom Sender ID",
            "Audience Segmentation",
            "Campaign Scheduling",
            "Performance Report",
          ],
        },
        {
          title: "Advanced SMS",
          subtitle: "For ecommerce & service businesses.",
          price: "12999",
          oldPrice: "20000",
          save: "35%",
          features: [
            "Up to 40,000 SMS Credits",
            "OTP & Transactional SMS Setup",
            "API Integration",
            "Automation Workflows",
            "Delivery & Click Tracking",
            "Priority Delivery Route",
          ],
        },
        {
          title: "Enterprise SMS",
          subtitle: "High-volume communication solution.",
          price: "24999",
          oldPrice: "40000",
          save: "37%",
          features: [
            "Unlimited SMS Credits (Custom Plan)",
            "Dedicated SMS Account Manager",
            "Advanced API Integration",
            "Multi-Campaign Automation",
            "CRM Integration",
            "Real-Time Reporting Dashboard",
            "Priority Support",
          ],
        },
      ]}
    />
  );

  /* ================= KEY FEATURES ================= */

  const keyFeaturesSection = (
    <ServiceKeyFeatures
      title="High-Impact SMS Marketing Solutions"
      description="Reach customers instantly with powerful SMS campaigns."

      features={[
        { icon: "/icons/bulk.png", title: "Bulk SMS Campaigns" },
        { icon: "/icons/otp.png", title: "OTP & Transactional SMS" },
        { icon: "/icons/api.png", title: "API Integration" },
        { icon: "/icons/schedule.png", title: "Scheduled Campaigns" },
        { icon: "/icons/segmentation.png", title: "Audience Segmentation" },
        { icon: "/icons/report.png", title: "Delivery & Click Reports" },
      ]}
    />
  );

  /* ================= BENEFITS ================= */

  const benefitsSection = (
    <ServiceBenefits
      badge="Benefits"
      title="Instant Customer Communication & Higher Engagement"
      description="SMS marketing ensures your message is seen within minutes."

      image="/images/sms-marketing.webp"

      points={[
        "98% Open Rate",
        "Instant Customer Reach",
        "Higher Engagement Compared to Email",
        "Effective Promotional Campaigns",
        "Reliable OTP & Alert System",
      ]}

      qualityTitle="Why Our SMS Marketing Works"

      qualityItems={[
        {
          icon: "/icons/delivery.png",
          title: "High Delivery Rate",
          description: "Premium SMS routes for fast and reliable delivery.",
        },
        {
          icon: "/icons/automation.png",
          title: "Automation Integration",
          description: "Trigger-based SMS for better engagement.",
        },
        {
          icon: "/icons/security.png",
          title: "Secure & Compliant",
          description: "DND filtering and compliance-ready setup.",
        },
        {
          icon: "/icons/analytics.png",
          title: "Performance Tracking",
          description: "Real-time tracking of campaign results.",
        },
      ]}
    />
  );

  /* ================= OUR WORK ================= */

  const ourWorkSection = (
    <ServiceOurWork
      title="SMS Campaign Success Stories"
      description="See how our SMS marketing boosted customer engagement."

      projects={[
        {
          image: "/images/work-sms1.webp",
          name: "Retail Discount Campaign",
          category: "Promotional SMS",
          services: [
            "Bulk SMS Campaign",
            "Targeted Audience Segmentation",
            "High Open Rate Strategy",
          ],
        },
        {
          image: "/images/work-sms2.webp",
          name: "OTP & Alerts System",
          category: "Transactional SMS",
          services: [
            "API Integration",
            "Secure OTP Delivery",
            "Real-Time Alerts",
          ],
        },
      ]}
    />
  );

  const happyClientsSection = <ListenFromClients />;

  return (
    <>
      <Breadcrumb currentPage="SMS Marketing" />

      <ServiceHero
        badge="Bulk SMS Marketing Company in India"
        title="Reach Customers Instantly with Powerful SMS Campaigns"
        description="Afwan Tech provides bulk SMS, transactional alerts, and automated messaging solutions."
        image="/images/sms-marketing.webp"
        features={[
          "Bulk Promotional SMS",
          "OTP & Transactional Alerts",
          "API Integration",
          "Campaign Scheduling",
          "Real-Time Reporting",
        ]}
      />

      <ServiceContent
        introTitle="Direct Communication That Delivers Results"
        introDescription="SMS marketing ensures your message is delivered and seen quickly."

        smallTitle="SMS Marketing Services"
        mainTitle="High-Open-Rate SMS Campaigns for Business Growth"
        description="From promotional campaigns to transactional alerts, we help businesses communicate effectively with their customers."

        image="/images/sms-marketing.webp"

        secondTitle="Automation + Reliability = Higher Engagement"
        secondDescription="We integrate SMS solutions into your CRM and business systems."

        secondImage="/images/sms-marketing.webp"

        bullets={[
          "Bulk SMS Campaigns",
          "Transactional & OTP Integration",
          "Automated Trigger-Based SMS",
          "High Delivery Rate Routes",
          "Detailed Campaign Reporting",
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

export default SMSMarketing;

