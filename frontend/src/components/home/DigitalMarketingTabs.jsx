import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const DigitalMarketingTabs = ({ data }) => {
  const defaultTabsData = [
    {
      id: "seo",
      label: "SEO",
      title: "Search Engine Optimization",
      description: "You've found the correct SEO Agency if any of these four pain areas apply to you. We provide professional Google SEO services to improve rankings and generate organic traffic.",
      btn: "Know More",
      link: "/seo",
      img: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321614/webtechsathi/s1wvegrvfzvfldh5i1he.jpg"
    },
    {
      id: "branding",
      label: "Digital Branding & PR",
      title: "360 Degree Digital Branding Company in India",
      description: "We provide 360-degree digital branding and PR services to ensure your business stands out as a credible and trusted brand across India and globally.",
      btn: "View Service",
      link: "/branding",
      img: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321615/webtechsathi/yofwnmgdlhgsopwttoin.jpg"
    },
    {
      id: "website",
      label: "Website",
      title: "Web Development and Design",
      description: "Our Website with SEO in Multiple Cities service helps businesses expand their online presence and rank across various locations.",
      btn: "Read More",
      link: "/website",
      img: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321617/webtechsathi/zzc20rueyvjdqmg4nrou.jpg"
    },
    {
      id: "gmb",
      label: "GMB",
      title: "Boost Local Business with Expert Google Map Promotion",
      description: "We specialize in Google Map Local Business promotion to drive local traffic and increase visibility with GMB optimization.",
      btn: "View Service",
      link: "/gmb",
      img: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321618/webtechsathi/rq15e1unz2zjvfitxwuq.jpg"
    },
    {
      id: "digital",
      label: "Digital Marketing",
      title: "Webpulse® : Your Trusted Partner in Digital Marketing in Delhi, India",
      description: "We deliver customized digital marketing strategies focused on measurable growth, innovation, and performance.",
      btn: "View Service",
      link: "/digital-marketing",
      img: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321619/webtechsathi/xqu4si4hkdh7nogcony2.jpg"
    }
  ];

  const finalTitle = data?.title || "Digital Marketing Services Our Agency Offers";
  const finalTabsData = data?.tabsData || defaultTabsData;

  const [activeTab, setActiveTab] = useState(finalTabsData[0]?.id || "seo");

  // Update active tab if data changes and current active tab is no longer valid
  useEffect(() => {
    if (finalTabsData.length > 0 && !finalTabsData.find(t => t.id === activeTab)) {
      setActiveTab(finalTabsData[0].id);
    }
  }, [finalTabsData, activeTab]);

  const activeContent = finalTabsData.find(tab => tab.id === activeTab) || finalTabsData[0];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-10">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-[#123447] mb-12">
          {finalTitle}
        </h2>

        {/* Tabs */}
        <div className="flex justify-between border-b border-gray-200 relative">

          {finalTabsData.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-8 py-4 font-semibold transition ${activeTab === tab.id
                ? "bg-[#15679a] text-white"
                : "text-gray-600 hover:text-[#15679a]"
                }`}
            >
              {tab.label}

              {/* Triangle */}
              {activeTab === tab.id && (
                <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#15679a]"></span>
              )}
            </button>
          ))}

        </div>

        {/* Content Section */}
        {activeContent && (
          <div className="grid md:grid-cols-2 gap-16 items-center mt-16">

            {/* Left Content */}
            <div>
              <h3 className="text-3xl font-bold text-[#123447] mb-6">
                {activeContent.title}
              </h3>

              <div className="text-gray-600 leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: activeContent.description }} />

              <Link
                to={activeContent.link || "/contact"}
                className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded transition"
              >
                {activeContent.btn || "Know More"}
                <FaArrowRight />
              </Link>
            </div>

            {/* Right Image */}
            <div className="text-center">
              <img
                src={activeContent.img}
                alt={activeContent.title}
                className="w-full max-w-md mx-auto"
              />
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default DigitalMarketingTabs;

