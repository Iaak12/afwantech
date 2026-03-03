import {
  FaBuilding,
  FaBoxOpen,
  FaIndustry,
  FaGlobe,
  FaUserTie,
  FaHospital,
  FaGraduationCap,
  FaFilm,
  FaHandsHelping,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const BusinessServeSection = ({ data }) => {
  const defaultBusinesses = [
    { name: "B2B", iconUrl: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321640/webtechsathi/hgovnrdsfpdbarjh5c5c.jpg" },
    { name: "Wholesale Suppliers", iconUrl: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321640/webtechsathi/hgovnrdsfpdbarjh5c5c.jpg" },
    { name: "Manufacturers", iconUrl: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321640/webtechsathi/hgovnrdsfpdbarjh5c5c.jpg" },
    { name: "Exporters & Importers", iconUrl: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321640/webtechsathi/hgovnrdsfpdbarjh5c5c.jpg" },
    { name: "Service Providers", iconUrl: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321640/webtechsathi/hgovnrdsfpdbarjh5c5c.jpg" },
    { name: "Healthcare", iconUrl: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321640/webtechsathi/hgovnrdsfpdbarjh5c5c.jpg" },
    { name: "Education & Institutions", iconUrl: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321640/webtechsathi/hgovnrdsfpdbarjh5c5c.jpg" },
    { name: "Entertainment", iconUrl: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321640/webtechsathi/hgovnrdsfpdbarjh5c5c.jpg" },
    { name: "Charity", iconUrl: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321640/webtechsathi/hgovnrdsfpdbarjh5c5c.jpg" },
  ];

  const getIcon = (item) => {
    if (item.iconUrl) return <img src={item.iconUrl} alt={item.name} className="w-10 h-10 object-contain mx-auto" />;
    switch (item.iconType) {
      case "FaBuilding": return <FaBuilding />;
      case "FaBoxOpen": return <FaBoxOpen />;
      case "FaIndustry": return <FaIndustry />;
      case "FaGlobe": return <FaGlobe />;
      case "FaUserTie": return <FaUserTie />;
      case "FaHospital": return <FaHospital />;
      case "FaGraduationCap": return <FaGraduationCap />;
      case "FaFilm": return <FaFilm />;
      case "FaHandsHelping": return <FaHandsHelping />;
      default: return <FaBuilding />;
    }
  };

  const finalTopSubtitle = data?.topSubtitle || "Get a FREE SEO audit for your website!";
  const finalTopTitle = data?.topTitle || "READY TO GROW YOUR BUSINESS with 10x Speed?";
  const finalTopDescription = data?.topDescription || "Contact us to work with a results-driven Digital Branding Agency.";
  const finalBusinesses = data?.businesses || defaultBusinesses;
  const finalRightTitle = data?.title || "Businesses We SERVE";
  const finalRightDescription1 = data?.description || "Building a Strong Organic Presence for Businesses & MSMEs like Yours Since 2011. Webpulse has worked with businesses from a wide range of industries, delivering Website Designing, SEO Services, Digital Marketing, and PR Services.";
  const finalRightDescription2 = data?.rightDescription2 || "Our dedication to creating a strong organic presence helps numerous businesses thrive in the digital landscape. Choose us for unparalleled expertise and measurable growth.";
  const finalBtnTopText = data?.btnTopText || "Get Quote";
  const finalBtnRightText = data?.btnText || "Send Enquiry";
  const finalBtnTopLink = data?.btnTopLink || "/contact";
  const finalBtnRightLink = data?.btnLink || "/contact";

  return (
    <section className="bg-[#f4f7f9]">

      {/* ================= CTA TOP SECTION ================= */}
      <div className="relative bg-gradient-to-r from-[#0e3a52] to-[#123f5c] text-white text-center py-20 overflow-hidden">

        <h3 className="text-lg mb-3">
          {finalTopSubtitle}
        </h3>

        <h2 className="text-2xl md:text-3xl font-bold">
          {finalTopTitle}
        </h2>

        <div className="mt-3 text-gray-200" dangerouslySetInnerHTML={{ __html: finalTopDescription }} />

        <Link
          to={finalBtnTopLink}
          className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded font-semibold flex items-center gap-2 mx-auto transition w-fit"
        >
          {finalBtnTopText} <FaArrowRight />
        </Link>

        {/* Wave Effect */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-24"
            preserveAspectRatio="none"
          >
            <path
              fill="#f4f7f9"
              d="M0,64L60,69.3C120,75,240,85,360,90.7C480,96,600,96,720,90.7C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32V120H0Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* ================= BUSINESS SECTION ================= */}
      <div className="max-w-7xl mx-auto px-10 py-16 grid md:grid-cols-2 gap-12 items-start">

        {/* Left Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {finalBusinesses.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-blue-200 rounded-xl p-8 text-center hover:shadow-lg hover:border-blue-400 transition"
            >
              <div className="text-3xl text-[#123447] mb-4 flex justify-center">
                {getIcon(item)}
              </div>
              <p className="text-sm font-medium text-[#123447]">
                {item.name}
              </p>
            </div>
          ))}

        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl font-bold text-[#123447] mb-4">
            {finalRightTitle}
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            {finalRightDescription1}
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            {finalRightDescription2}
          </p>

          <Link
            to={finalBtnRightLink}
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded font-semibold flex items-center gap-2 transition w-fit"
          >
            {finalBtnRightText} <FaArrowRight />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BusinessServeSection;

