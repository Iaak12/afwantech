import { FaCheck, FaStar, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const WhySection = ({ data }) => {
  const defaultFeatures = [
    { title: "Experience: Over A Decade in Business", description: "With more than a decade of hands-on experience, we have successfully managed countless digital marketing campaigns delivering measurable results." },
    { title: "Expertise: 3000+ Businesses Empowered", description: "Our team delivers web development, SEO Service, PPC, and content creation across multiple industries at the fastest speed." },
    { title: "Authority: 100+ Experts with Award Winning Status", description: "Award-winning teams involve well-motivated, smart, and creative professionals who help brands grow online." },
    { title: "Trustworthiness: See Real Results, Honest Testimonials", description: "We build trust through transparency and consistent results. Our clients rely on us for honest advice and measurable success." }
  ];
  const defaultRatings = [
    { platform: "Google", score: "4.8 / 5" },
    { platform: "Justdial", score: "4.9 / 5" },
    { platform: "Facebook", score: "4.8 / 5" }
  ];

  const finalSubtitle = data?.subtitle || "";
  const finalTitle = data?.title || "What Makes Afwan Tech #1 Digital Marketing SEO Agency";
  const finalDescription = data?.description || "Don't let traditional internet marketing strategies slow down your Business Growth. Our unique strategy of website development with SEO Service in multiple locations will help you lead on Google.";
  const finalFeatures = data?.features || defaultFeatures;
  const finalImage = data?.mainImage || "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321651/webtechsathi/hi4rp8stiudaqivd6tb4.jpg";
  const finalRatings = data?.ratings || defaultRatings;
  const finalBtnText = data?.btnText || "Connect with Expert →";
  const finalBtnLink = data?.btnLink || "/contact";

  return (
    <section className="bg-[#f2f6f9] py-24">
      <div className="max-w-7xl mx-auto px-10">

        {/* ===== TOP HEADING ===== */}
        {/* ===== TOP HEADING ===== */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-xs sm:text-sm text-gray-500 mb-3 uppercase tracking-widest font-bold">
            {finalSubtitle}
          </p>

          <h2 className="text-3xl md:text-5xl font-black text-[#123447] leading-tight">
            {finalTitle}
          </h2>

          <div className="text-gray-600 mt-6 leading-relaxed text-sm sm:text-base px-2" dangerouslySetInnerHTML={{ __html: finalDescription }} />
        </div>

        {/* ===== MAIN GRID ===== */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ===== LEFT CONTENT ===== */}
          <div className="space-y-8 lg:space-y-10 order-2 lg:order-1">

            {finalFeatures.map((item, index) => (
              <div key={index} className="flex gap-4 sm:gap-5 group">
                <div className="min-w-[32px] w-[32px] h-[32px] rounded-full bg-[#1d3f54] flex items-center justify-center text-white mt-1 group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300 shadow-md">
                  <FaCheck size={14} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#123447]">
                    {item.title}
                  </h4>
                  <div className="text-gray-600 text-sm mt-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
              </div>
            ))}

            <Link
              to={finalBtnLink}
              className="inline-block w-full sm:w-auto text-center mt-4 bg-yellow-400 text-black px-10 py-4 rounded-md font-bold hover:bg-yellow-500 transition shadow-lg"
            >
              {finalBtnText}
            </Link>

          </div>

          {/* ===== RIGHT SIDE ===== */}
          <div className="relative order-1 lg:order-2">

            {/* Main Office Image */}
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={finalImage}
                alt="Office"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Ratings */}
            <div className="mt-12 lg:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">

              {finalRatings.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <h4 className="font-bold text-[#123447] text-lg">
                    {item.platform}
                  </h4>

                  <div className="flex justify-center text-yellow-400 my-3">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>

                  <p className="text-sm font-black text-blue-600">
                    {item.score}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhySection;

