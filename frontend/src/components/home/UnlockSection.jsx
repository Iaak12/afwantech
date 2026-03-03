import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const UnlockSection = ({ data }) => {
  const defaultCards = [
    { number: "1", title: "Website with SEO in Multiple Locations", image: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321634/webtechsathi/jypsl7vzmnikxkbcysqq.jpg", bulletPoints: "<ul><li>Local SEO</li><li>City Wise SEO</li><li>State Wise SEO</li><li>National SEO</li></ul>" },
    { number: "2", title: "Off Page SEO for Link-building", image: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321635/webtechsathi/eycpiidxhngwa5lzbizr.jpg", bulletPoints: "<ul><li>Link Building</li><li>Domain Authority</li><li>Technical SEO</li><li>Content Marketing</li></ul>" },
    { number: "3", title: "Brand Image Building", image: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321637/webtechsathi/xxkkynjh6aszfsn2yjn5.jpg", bulletPoints: "<ul><li>PR Distribution</li><li>Media Coverage</li><li>Online Branding</li><li>Press Releases</li></ul>" },
    { number: "4", title: "SEO of Google My Business Listing", image: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321639/webtechsathi/fjpfhl0rnlgjb4jwvzzq.jpg", bulletPoints: "<ul><li>GMB Optimization</li><li>Review Management</li><li>Local Ranking</li><li>Maps SEO</li></ul>" },
    { number: "5", title: "Digital Marketing", image: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321640/webtechsathi/hgovnrdsfpdbarjh5c5c.jpg", bulletPoints: "<ul><li>Social Media</li><li>Performance Ads</li><li>Lead Generation</li><li>Content Strategy</li></ul>" }
  ];

  const finalTitle = data?.title || "Unlock 10x Growth with Our Unique Digital Marketing Techniques";
  const finalDescription = data?.description || "Following services have been developed after years of research & applied for thousands of small & medium businesses.";
  const finalCards = data?.cards || defaultCards;
  const finalFooterText = data?.footerText || "Lead your industry not just in your own city, but also in your target cities & countries, with our Web Development with City wise SEO, Link Building Off Page SEO, SEO of your GMB Listing, Comprehensive Digital Marketing, Online Reputation Building with Branding & PR Services, all under one roof.";
  const finalBtnText = data?.btnText || "Connect with Expert";
  const finalBtnLink = data?.btnLink || "/contact";

  return (
    <section className="bg-[#f4f7f9] py-20">
      <div className="max-w-7xl mx-auto px-10 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#123447] leading-snug">
          {finalTitle.split('with').map((t, i) => i === 0 ? <span key={i}>{t} with <br /></span> : <span key={i}>{t}</span>)}
        </h2>

        <div className="text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: finalDescription }} />

        {/* Cards */}
        <div className="grid md:grid-cols-5 gap-6 mt-14">

          {finalCards.map((card, index) => (
            <div
              key={index}
              className="relative bg-[#f0f2f4] border border-gray-300 rounded-xl overflow-hidden group transition-all duration-300"
            >

              {/* Big Number */}
              <span className="absolute top-4 left-5 text-6xl font-bold text-gray-300 group-hover:text-yellow-400 transition">
                {card.number || index + 1}
              </span>

              {/* Title */}
              <div className="p-6 pt-20 text-left">
                <h4 className="font-semibold text-[#123447] text-sm leading-snug group-hover:text-white transition">
                  {card.title}
                </h4>
              </div>

              {/* Image */}
              <div className="px-6 pb-6">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-36 object-cover rounded-lg"
                />
              </div>

              {/* Arrow Clickable */}
              <Link
                to={card.link || "/contact"}
                className="absolute bottom-5 right-5 text-[#123447] group-hover:text-yellow-400 transition"
              >
                <FaArrowRight />
              </Link>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#143e56] p-6 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl">

                {/* Hover Number */}
                <span className="absolute top-4 left-5 text-6xl font-bold text-yellow-400">
                  {card.number || index + 1}
                </span>

                <div className="mt-20 text-left text-white space-y-3 text-sm">
                  <h4 className="font-semibold text-base mb-3">
                    {card.title}
                  </h4>

                  <div
                    className="prose-sm prose-invert"
                    dangerouslySetInnerHTML={{ __html: card.bulletPoints }}
                  />
                </div>

                {/* Hover Arrow */}
                <Link
                  to={card.link || "/contact"}
                  className="absolute bottom-5 right-5 text-yellow-400"
                >
                  <FaArrowRight />
                </Link>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Section */}
        <div className="mt-14 text-center">

          <div className="text-gray-600 max-w-4xl mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: finalFooterText }} />

          {/* CTA Button */}
          <Link
            to={finalBtnLink}
            className="inline-flex items-center gap-3 mt-8 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-md transition duration-300 shadow-md"
          >
            {finalBtnText}
            <span className="bg-yellow-500 px-3 py-2 rounded-sm">
              <FaArrowRight className="text-black text-sm" />
            </span>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default UnlockSection;

