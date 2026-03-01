import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const IndustriesSection = ({ data }) => {
  const defaultProductIndustries = [
    "Drugs & Pharmaceuticals", "Food & Beverages", "Building & Construction", "Chemicals, Dyes & Solvents",
    "Furniture & Supplies", "Housewares & Supplies", "Handicrafts & Decoratives", "Books & Stationery",
    "Engineering Services", "Fashion Accessories & Gear", "Sports Goods, Toys & Games", "Bags, Belts & Wallets",
    "Apparel & Garments", "Industrial Plants & Machinery", "Electronics & Electrical", "Mechanical Parts & Spares",
    "Automobile, Parts & Spares", "Metals, Alloys & Minerals", "Kitchen Utensils & Appliances", "Cosmetics & Personal Care",
    "Gems, Jewelry & Astrology", "Herbal & Ayurvedic Product", "Telecom Equipment & Goods", "Media, PR & Publishing",
    "Hospital & Diagnostics", "Industrial Supplies", "Packaging Machines & Goods", "Lab Instruments & Supplies",
    "Agriculture & Farming", "Hand & Machine Tools", "Textiles, Yarn & Fabrics", "Home Textile & Furnishing",
    "Computer & IT Solutions", "Security Systems & Services", "Paper & Paper Products", "Marble, Granite & Stones"
  ];

  const defaultServiceIndustries = [
    "Event Planner & Organizer", "Transportation & Logistics", "Education & Training", "Bicycle, Rickshaw & Spares",
    "HR Planning & Recruitment", "Contractors & Freelancers", "Hospital, Clinic & Consultation", "IT & Telecom Services",
    "Taxes, Audit & Advisory", "Travel, Tourism & Hotels", "R&D and Testing Labs", "House Keeping Services",
    "Electronics Components", "Product Rental & Leasing", "Financial & Legal Services", "Call Center & BPO Services",
    "Architecture & Interiors", "Leather Products", "Electrical Equipment"
  ];

  const finalTitle = data?.title || "Industries We Serve";
  const finalDescription = data?.description || "At Webpulse Solution Pvt. Ltd., we proudly serve a wide range of industries. Our tailored digital solutions are crafted to drive real results and sustainable growth for our clients.";
  const finalProductTitle = data?.productTitle || "Products Based Industries";
  const finalServiceTitle = data?.serviceTitle || "Services Based Industries";
  const finalProductIndustries = data?.productIndustries || defaultProductIndustries;
  const finalServiceIndustries = data?.serviceIndustries || defaultServiceIndustries;
  const finalBtnText = data?.btnText || "Connect with Expert";
  const finalBtnLink = data?.btnLink || "/contact";

  return (
    <section
      className="py-24 relative"
      style={{
        background: "linear-gradient(to bottom, #1d2951 50%, #ffffff 50%)"
      }}
    >
      {/* Heading Section */}
      <div className="text-center text-white max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">
          {finalTitle}
        </h2>

        <div className="text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: finalDescription }} />
      </div>

      {/* White Card Container */}
      <div className="max-w-6xl mx-auto mt-16 bg-white rounded-2xl shadow-2xl p-12 relative z-10">

        {/* Products Based Industries */}
        <h3 className="text-2xl font-semibold text-[#123447] mb-8">
          {finalProductTitle}
        </h3>

        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {finalProductIndustries.map((item, index) => (
            <p
              key={index}
              className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed"
            >
              <FaCheckCircle className="text-blue-500 text-xs mt-1" />
              {item}
            </p>
          ))}
        </div>

        {/* Services Based Industries */}
        <h3 className="text-2xl font-semibold text-[#123447] mb-8">
          {finalServiceTitle}
        </h3>

        <div className="grid md:grid-cols-3 gap-5">
          {finalServiceIndustries.map((item, index) => (
            <p
              key={index}
              className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed"
            >
              <FaCheckCircle className="text-blue-500 text-xs mt-1" />
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-14">
        <Link
          to={finalBtnLink}
          className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg transition duration-300 shadow-md"
        >
          {finalBtnText}
          <FaArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default IndustriesSection;

