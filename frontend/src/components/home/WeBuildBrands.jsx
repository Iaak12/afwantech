import { FaBullhorn, FaTv, FaChartLine, FaPaintBrush } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { GiCrown } from "react-icons/gi";

const WeBuildBrands = ({ data }) => {
  const defaultCards = [
    { title: "Web Designing", text: "We specialize in building visually stunning websites.", position: "top-0 left-10", iconType: "MdWeb" },
    { title: "Brand Recognition", text: "Recognising outstanding companies for quality.", position: "top-0 right-10", iconType: "GiCrown" },
    { title: "Lead Generation", text: "City-wise SEO to generate targeted leads.", position: "top-1/2 -translate-y-1/2 left-0", iconType: "FaChartLine" },
    { title: "PR & Branding", text: "Media coverage on leading news websites.", position: "top-1/2 -translate-y-1/2 right-0", iconType: "FaBullhorn" },
    { title: "Digital Marketing", text: "SEO, PPC, Meta Ads & more.", position: "bottom-0 left-16", iconType: "FaPaintBrush" },
    { title: "Electronic Media", text: "National TV coverage like Zee Business.", position: "bottom-0 right-16", iconType: "FaTv" },
  ];

  const getIcon = (type) => {
    switch (type) {
      case "MdWeb": return <MdWeb />;
      case "GiCrown": return <GiCrown />;
      case "FaChartLine": return <FaChartLine />;
      case "FaBullhorn": return <FaBullhorn />;
      case "FaPaintBrush": return <FaPaintBrush />;
      case "FaTv": return <FaTv />;
      default: return <MdWeb />;
    }
  };

  const finalTitle = data?.title || "We Build Brands";
  const finalBackgroundImage = data?.backgroundImage || "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321649/webtechsathi/emmraulqaohppcs5p0gn.jpg";
  const finalCards = data?.cards || defaultCards;

  return (
    <section
      className="relative py-28 bg-cover bg-center"
      style={{
        backgroundImage: `url('${finalBackgroundImage}')`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0e3a52]/85"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-yellow-400 mb-20">
          {finalTitle}
        </h2>

        {/* Circle Container */}
        <div className="relative w-[700px] h-[500px] mx-auto">

          {/* Center Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-6 shadow-xl">
            <span className="text-4xl text-[#123447] font-bold">W</span>
          </div>

          {/* Connecting Lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[400px] h-[400px] border border-blue-400 rounded-full opacity-40"></div>
          </div>

          {finalCards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              text={card.text}
              position={card.position || "top-0 left-10"}
              icon={getIcon(card.iconType || card.icon)}
            />
          ))}

        </div>
      </div>
    </section>
  );
};

const Card = ({ title, text, position, icon }) => {
  return (
    <div
      className={`absolute ${position} w-64 bg-white/10 backdrop-blur-md border border-blue-400/40 rounded-xl p-6 text-white shadow-lg hover:scale-105 transition`}
    >
      <div className="text-yellow-400 text-2xl mb-3 flex justify-center">
        {icon}
      </div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <div className="text-sm text-gray-200" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export default WeBuildBrands;

