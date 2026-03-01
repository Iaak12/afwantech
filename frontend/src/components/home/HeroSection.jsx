import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const heroGirl = "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321621/webtechsathi/m7yqjugxzxeouuqlvza3.webp"; // Migrated to Cloudinary; // use your image

const HeroSection = ({ data }) => {
  const finalBadge = data?.badge || "";
  const finalImage = data?.image || heroGirl;
  const finalTitle = data?.title || "Best Digital Marketing Agency in India - Helping MSMEs, Business Owners & Institutions";
  const finalDescription = data?.description || "Drive genuine buyers' traffic from your target locations, with our City Wise SEO. Crush your competitors & grow your business fast!";
  const finalBtn1Text = data?.btn1Text || "See How";
  const finalBtn1Link = data?.btn1Link || "/contact";
  const finalBtn2Text = data?.btn2Text || "See Our Work";
  const finalBtn2Link = data?.btn2Link || "/our-work";

  // Dynamic Typing Sequence
  const defaultSequence = [
    "Rank on Google #1 Page",
    2000,
    "Increase Organic Traffic",
    2000,
    "Boost Your Online Sales",
    2000,
  ];

  const customSequence = data?.typingText
    ? data.typingText.split(',').flatMap(text => [text.trim(), 2000])
    : defaultSequence;

  return (
    <section className="relative bg-gradient-to-r from-[#081b29] via-[#0f2d3f] to-[#1d3f54] text-white overflow-hidden">

      {/* Dotted Background Effect */}
      <div className="absolute left-20 top-40 grid grid-cols-6 gap-2 opacity-20">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-10 py-28 flex items-center justify-between">

        {/* LEFT IMAGE */}
        <div className="w-1/2">
          <img
            src={finalImage}
            alt="Hero"
            className="w-[450px]"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-1/2">
          {finalBadge && (
            <span className="bg-yellow-400 text-black px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block">
              {finalBadge}
            </span>
          )}

          <h1 className="text-5xl font-bold leading-tight">
            {finalTitle}
          </h1>

          {/* GOLDEN TYPING TEXT */}
          <div className="mt-6 text-4xl font-bold text-yellow-400 min-h-[60px]">
            <TypeAnimation
              key={customSequence.join(',')} // Force re-render if sequence changes
              sequence={customSequence}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <div className="mt-6 text-gray-300 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: finalDescription }} />

          {/* BUTTONS */}
          <div className="flex gap-5 mt-8">

            <Link
              to={finalBtn1Link}
              className="bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-yellow-500 transition"
            >
              {finalBtn1Text} <FaArrowRight />
            </Link>

            <Link
              to={finalBtn2Link}
              className="border border-yellow-400 px-6 py-3 rounded-md hover:bg-yellow-400 hover:text-black transition"
            >
              {finalBtn2Text}
            </Link>

          </div>

        </div>
      </div>

    </section>
  );
};

export default HeroSection;

