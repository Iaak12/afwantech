import { FaBullhorn, FaTv, FaChartLine, FaPaintBrush } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { GiCrown } from "react-icons/gi";

const WeBuildBrands = ({ data }) => {
  const defaultNodes = [
    { title: "Web Designing", description: "Visually stunning websites.", icon: "MdWeb" },
    { title: "Brand Recognition", description: "Recognising quality companies.", icon: "GiCrown" },
    { title: "Lead Generation", description: "City-wise SEO for leads.", icon: "FaChartLine" },
    { title: "PR & Branding", description: "Leading news media coverage.", icon: "FaBullhorn" },
    { title: "Digital Marketing", description: "SEO, PPC, Meta Ads.", icon: "FaPaintBrush" },
    { title: "Electronic Media", description: "National TV coverage.", icon: "FaTv" },
  ];

  const positions = [
    "top-0 left-10",
    "top-0 right-10",
    "top-1/2 -translate-y-1/2 left-0",
    "top-1/2 -translate-y-1/2 right-0",
    "bottom-0 left-16",
    "bottom-0 right-16",
  ];

  const getIcon = (item) => {
    if (item.icon?.startsWith('http')) return <img src={item.icon} alt={item.title} className="w-8 h-8 object-contain" />;
    switch (item.icon) {
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
  const finalBgImage = data?.bgImage || "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321649/webtechsathi/emmraulqaohppcs5p0gn.jpg";
  const finalNodes = data?.nodes || defaultNodes;
  const finalCenterText = data?.centerText || "W";

  return (
    <section
      className="relative py-28 bg-cover bg-center"
      style={{
        backgroundImage: `url('${finalBgImage}')`,
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
        <div className="relative w-full max-w-[700px] h-[500px] mx-auto scale-75 md:scale-100">

          {/* Center Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-6 shadow-xl z-20">
            <span className="text-4xl text-[#123447] font-bold">{finalCenterText}</span>
          </div>

          {/* Connecting Lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] border border-blue-400 rounded-full opacity-40"></div>
          </div>

          {finalNodes.map((node, index) => {
            if (index >= positions.length) return null; // Only show up to 6 in the circular layout
            return (
              <Card
                key={index}
                title={node.title}
                text={node.description}
                position={positions[index]}
                icon={getIcon(node)}
              />
            );
          })}

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

