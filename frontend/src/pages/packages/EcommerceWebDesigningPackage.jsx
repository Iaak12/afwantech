import Breadcrumb from "../../components/common/Breadcrumb";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceTabs from "../../components/services/ServiceTabs";
import PlansPricing from "../../components/services/PlansPricing";
import ServiceKeyFeatures from "../../components/services/ServiceKeyFeatures";
import ServiceBenefits from "../../components/services/ServiceBenefits";
import ServiceOurWork from "../../components/services/ServiceOurWork";
import ListenFromClients from "../../components/home/ListenFromClients";

const EcommerceWebDesigningPackage = () => {

    const plansSection = (
        <PlansPricing
            title="Ecommerce Web Designing Packages"
            description="Launch and grow your online store with our powerful, conversion-optimized ecommerce website packages."
            plans={[
                {
                    title: "Starter Store",
                    subtitle: "Perfect for new online sellers.",
                    price: "7999",
                    oldPrice: "15000",
                    save: "47%",
                    features: [
                        "Up to 50 Products",
                        "Payment Gateway Integration",
                        "Mobile Responsive Design",
                        "Order Management System",
                        "SSL Security",
                    ],
                },
                {
                    title: "Growth Store",
                    subtitle: "For growing ecommerce businesses.",
                    price: "14999",
                    oldPrice: "27000",
                    save: "44%",
                    recommended: true,
                    features: [
                        "Up to 500 Products",
                        "Multiple Payment Gateways",
                        "Coupon & Discount System",
                        "Wishlist & Compare Feature",
                        "Advanced Search & Filters",
                        "Basic SEO Setup",
                    ],
                },
                {
                    title: "Professional",
                    subtitle: "Scale your online business.",
                    price: "24999",
                    oldPrice: "45000",
                    save: "44%",
                    features: [
                        "Unlimited Products",
                        "Multi-Currency Support",
                        "Advanced Inventory Management",
                        "Customer Review System",
                        "Email Marketing Integration",
                        "Abandoned Cart Recovery",
                    ],
                },
                {
                    title: "Enterprise",
                    subtitle: "Full-scale ecommerce solution.",
                    price: "49999",
                    oldPrice: "90000",
                    save: "44%",
                    features: [
                        "Custom Ecommerce Platform",
                        "ERP/CRM Integration",
                        "Multi-Vendor Support",
                        "Advanced Analytics",
                        "Dedicated Account Manager",
                        "24/7 Priority Support",
                    ],
                },
            ]}
        />
    );

    const keyFeaturesSection = (
        <ServiceKeyFeatures
            title="Powerful Ecommerce Features for Maximum Sales"
            description="Our ecommerce packages are packed with everything you need to launch, run, and scale a successful online store."
            features={[
                { icon: "/icons/ecommerce.png", title: "Product Management" },
                { icon: "/icons/payment.png", title: "Payment Gateway" },
                { icon: "/icons/cart.png", title: "Shopping Cart" },
                { icon: "/icons/mobile.png", title: "Mobile Responsive" },
                { icon: "/icons/security.png", title: "SSL Security" },
                { icon: "/icons/inventory.png", title: "Inventory Management" },
                { icon: "/icons/coupon.png", title: "Coupon System" },
                { icon: "/icons/review.png", title: "Customer Reviews" },
                { icon: "/icons/shipping.png", title: "Shipping Integration" },
                { icon: "/icons/analytics.png", title: "Sales Analytics" },
                { icon: "/icons/seo.png", title: "SEO Optimization" },
                { icon: "/icons/support.png", title: "Post-Launch Support" },
            ]}
        />
    );

    const benefitsSection = (
        <ServiceBenefits
            badge="Benefits"
            title="Your Online Store Should Sell 24/7 — Ours Will"
            description="A professionally designed ecommerce website with conversion-focused features ensures your online store generates revenue around the clock."
            image="/images/ecommerce.webp"
            points={[
                "Professional Store That Builds Customer Trust",
                "Smooth Shopping Experience Across All Devices",
                "Multiple Payment Options for Maximum Conversions",
                "Advanced Product Management & Inventory Control",
                "SEO-Ready Store for Organic Discovery",
            ]}
            qualityTitle="Why Our Ecommerce Solutions Work"
            qualityItems={[
                {
                    icon: "/icons/ux.png",
                    title: "Conversion-Focused UX",
                    description: "Every design element is crafted to minimize cart abandonment.",
                },
                {
                    icon: "/icons/speed.png",
                    title: "Lightning Fast Performance",
                    description: "Optimized for speed to reduce bounce rates and improve rankings.",
                },
                {
                    icon: "/icons/security.png",
                    title: "Secure & Reliable",
                    description: "SSL encryption and secure payment gateways protect every transaction.",
                },
                {
                    icon: "/icons/scale.png",
                    title: "Built to Scale",
                    description: "Your store grows with your business — add products and features as needed.",
                },
            ]}
        />
    );

    const ourWorkSection = (
        <ServiceOurWork
            title="Ecommerce Stores We've Built"
            description="From fashion to electronics, we've created high-performing online stores across every industry."
            projects={[
                {
                    image: "/images/work1.webp",
                    name: "Fashion Clothing Store",
                    category: "Ecommerce Website",
                    services: ["500+ Products", "Multiple Payment Gateways", "Size Chart", "Wishlist Feature"],
                },
                {
                    image: "/images/work2.webp",
                    name: "Electronics Online Shop",
                    category: "Ecommerce Website",
                    services: ["Product Comparison", "EMI Integration", "Advanced Filters", "SEO Optimization"],
                },
            ]}
        />
    );

    return (
        <>
            <Breadcrumb currentPage="Ecommerce Web Designing Package" />

            <ServiceHero
                badge="Ecommerce Website Packages in India"
                title="Launch a High-Converting Online Store with Our Ecommerce Website Packages"
                description="Afwan Tech builds feature-rich, mobile-responsive, and SEO-optimized ecommerce websites that help you sell more, every day."
                image="/images/ecommerce.webp"
                features={[
                    "Product & Inventory Management System",
                    "Multiple Payment Gateway Integration",
                    "Mobile-First Responsive Design",
                    "Advanced Cart & Checkout Experience",
                    "Built-In SEO for Organic Discovery",
                ]}
            />

            <ServiceContent
                introTitle="Your Online Store Should Be as Powerful as Your Business"
                introDescription="A great ecommerce store is more than a product listing — it's a complete shopping experience that builds trust and drives sales."
                smallTitle="Ecommerce Web Designing Package"
                mainTitle="Complete Ecommerce Solutions Built to Sell More Online"
                description="Our ecommerce website packages include everything from product management and payment gateway integration to cart recovery and SEO optimization. We build stores that look professional and convert visitors into buyers."
                image="/images/ecommerce.webp"
                secondTitle="Every Feature Your Customers Expect"
                secondDescription="From wishlist and product comparison to coupon systems and multi-currency support — we pack every feature that modern online shoppers expect."
                secondImage="/images/ecommerce.webp"
                bullets={[
                    "Complete Product Catalogue & Category Management",
                    "Razorpay, PayU & Multiple Payment Integrations",
                    "Coupon, Discount & Loyalty Program System",
                    "Abandoned Cart Recovery & Email Automation",
                    "Mobile App Integration & Social Commerce Ready",
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

export default EcommerceWebDesigningPackage;

