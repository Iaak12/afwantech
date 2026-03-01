import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const UnlockSection = ({ data }) => {
  const defaultServices = [
    { id: "1", title: "Website with SEO in Multiple Locations", img: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321634/webtechsathi/jypsl7vzmnikxkbcysqq.jpg", list: [{ name: "Local SEO", link: "/local-seo" }, { name: "City Wise SEO", link: "/city-seo" }, { name: "State Wise SEO", link: "/state-seo" }, { name: "National SEO", link: "/national-seo" }] },
    { id: "2", title: "Off Page SEO for Link-building", img: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321635/webtechsathi/eycpiidxhngwa5lzbizr.jpg", list: [{ name: "Link Building", link: "/link-building" }, { name: "Domain Authority", link: "/domain-authority" }, { name: "Technical SEO", link: "/technical-seo" }, { name: "Content Marketing", link: "/content-marketing" }] },
    { id: "3", title: "Brand Image Building", img: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321637/webtechsathi/xxkkynjh6aszfsn2yjn5.jpg", list: [{ name: "PR Distribution", link: "/pr-distribution" }, { name: "Media Coverage", link: "/media-coverage" }, { name: "Online Branding", link: "/online-branding" }, { name: "Press Releases", link: "/press-releases" }] },
    { id: "4", title: "SEO of Google My Business Listing", img: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321639/webtechsathi/fjpfhl0rnlgjb4jwvzzq.jpg", list: [{ name: "GMB Optimization", link: "/gmb-optimization" }, { name: "Review Management", link: "/review-management" }, { name: "Local Ranking", link: "/local-ranking" }, { name: "Maps SEO", link: "/maps-seo" }] },
    { id: "5", title: "Digital Marketing", img: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321640/webtechsathi/hgovnrdsfpdbarjh5c5c.jpg", list: [{ name: "Social Media", link: "/social-media" }, { name: "Performance Ads", link: "/performance-ads" }, { name: "Lead Generation", link: "/lead-generation" }, { name: "Content Strategy", link: "/content-strategy" }] }
  ];

  const finalTitle = data?.title || "Unlock 10x Growth with Our Unique Digital Marketing Techniques";
  const finalDescription = data?.description || "Following services have been developed after years of research & applied for thousands of small & medium businesses.";
  const finalServices = data?.services || defaultServices;
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

          {finalServices.map((service, index) => (
            <div
              key={service.id || index}
              className="relative bg-[#f0f2f4] border border-gray-300 rounded-xl overflow-hidden group transition-all duration-300"
            >

              {/* Big Number */}
              <span className="absolute top-4 left-5 text-6xl font-bold text-gray-300 group-hover:text-yellow-400 transition">
                {service.id || index + 1}
              </span>

              {/* Title */}
              <div className="p-6 pt-20 text-left">
                <h4 className="font-semibold text-[#123447] text-sm leading-snug group-hover:text-white transition">
                  {service.title}
                </h4>
              </div>

              {/* Image */}
              <div className="px-6 pb-6">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-36 object-cover rounded-lg"
                />
              </div>

              {/* Arrow Clickable */}
              <Link
                to={service.link || "/contact"}
                className="absolute bottom-5 right-5 text-[#123447] group-hover:text-yellow-400 transition"
              >
                <FaArrowRight />
              </Link>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#143e56] p-6 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl">

                {/* Hover Number */}
                <span className="absolute top-4 left-5 text-6xl font-bold text-yellow-400">
                  {service.id || index + 1}
                </span>

                <div className="mt-20 text-left text-white space-y-3 text-sm">
                  <h4 className="font-semibold text-base mb-3">
                    {service.title}
                  </h4>

                  {service.list?.map((item, i) => (
                    <Link
                      key={i}
                      to={item.link}
                      className="flex items-center gap-2 hover:text-yellow-400 transition"
                    >
                      <span className="w-2 h-[2px] bg-yellow-400"></span>
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Hover Arrow */}
                <Link
                  to={service.link || "/contact"}
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

