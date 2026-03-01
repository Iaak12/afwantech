import { FaCheck, FaStar, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const WhySection = ({ data }) => {
  const defaultFeatures = [
    { title: "Experience: Over A Decade in Business", text: "With more than a decade of hands-on experience, we have successfully managed countless digital marketing campaigns delivering measurable results." },
    { title: "Expertise: 3000+ Businesses Empowered", text: "Our team delivers web development, SEO Service, PPC, and content creation across multiple industries at the fastest speed." },
    { title: "Authority: 100+ Experts with Award Winning Status", text: "Award-winning teams involve well-motivated, smart, and creative professionals who help brands grow online." },
    { title: "Trustworthiness: See Real Results, Honest Testimonials", text: "We build trust through transparency and consistent results. Our clients rely on us for honest advice and measurable success." }
  ];
  const defaultRatings = [
    { name: "Google", rating: "4.8 / 5" },
    { name: "Justdial", rating: "4.9 / 5" },
    { name: "Facebook", rating: "4.8 / 5" }
  ];

  const finalSubtitle = data?.subtitle || "Dominate Search Results in Multiple Cities with Our Unique Location wise SEO Service";
  const finalTitle = data?.title || "What Makes Afwan Tech #1 Digital Marketing SEO Agency";
  const finalDescription = data?.description || "Don't let traditional internet marketing strategies slow down your Business Growth. Our unique strategy of website development with SEO Service in multiple locations will help you lead on Google.";
  const finalFeatures = data?.features || defaultFeatures;
  const finalImage = data?.image || "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321651/webtechsathi/hi4rp8stiudaqivd6tb4.jpg";
  const finalRatings = data?.ratings || defaultRatings;
  const finalBtnText = data?.btnText || "Connect with Expert →";
  const finalBtnLink = data?.btnLink || "/contact";

  return (
    <section className="bg-[#f2f6f9] py-24">
      <div className="max-w-7xl mx-auto px-10">

        {/* ===== TOP HEADING ===== */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-sm text-gray-500 mb-3">
            {finalSubtitle}
          </p>

          <h2 className="text-4xl font-bold text-[#123447] leading-snug">
            {finalTitle}
          </h2>

          <div className="text-gray-600 mt-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: finalDescription }} />
        </div>

        {/* ===== MAIN GRID ===== */}
        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* ===== LEFT CONTENT ===== */}
          <div className="space-y-10">

            {finalFeatures.map((item, index) => (
              <div key={index} className="flex gap-5">
                <div className="min-w-[28px] h-[28px] rounded-full bg-[#1d3f54] flex items-center justify-center text-white mt-1">
                  <FaCheck size={12} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-[#123447]">
                    {item.title}
                  </h4>
                  <div className="text-gray-600 text-sm mt-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.text }} />
                </div>
              </div>
            ))}

            <Link
              to={finalBtnLink}
              className="inline-block mt-4 bg-yellow-400 text-black px-7 py-3 rounded-md font-semibold hover:bg-yellow-500 transition"
            >
              {finalBtnText}
            </Link>

          </div>

          {/* ===== RIGHT SIDE ===== */}
          <div className="relative">

            {/* Main Office Image */}
            <img
              src={finalImage}
              alt="Office"
              className="rounded-xl shadow-xl max-w-full h-auto"
            />

            {/* Ratings */}
            <div className="mt-20 grid grid-cols-3 gap-6">

              {finalRatings.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-lg shadow text-center"
                >
                  <h4 className="font-semibold text-[#123447]">
                    {item.name}
                  </h4>

                  <div className="flex justify-center text-yellow-400 my-2">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>

                  <p className="text-sm text-gray-600">
                    {item.rating}
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

