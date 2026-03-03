import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const DigitalMarketingTabs = ({ data }) => {
  const defaultTabs = [
    {
      id: "seo",
      label: "SEO",
      content: {
        title: "Search Engine Optimization",
        description: "You've found the correct SEO Agency if any of these four pain areas apply to you.",
        btnText: "Know More",
        btnLink: "/seo",
        image: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321614/webtechsathi/s1wvegrvfzvfldh5i1he.jpg"
      }
    },
    {
      id: "branding",
      label: "Digital Branding & PR",
      content: {
        title: "360 Degree Digital Branding Company in India",
        description: "We provide 360-degree digital branding and PR services to ensure your business stands out.",
        btnText: "View Service",
        btnLink: "/branding",
        image: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321615/webtechsathi/yofwnmgdlhgsopwttoin.jpg"
      }
    }
  ];

  const finalTitle = data?.title || "Digital Marketing Services Our Agency Offers";
  const finalTabsData = data?.tabsData || defaultTabs;

  const [activeTab, setActiveTab] = useState(finalTabsData[0]?.id || "seo");

  // Update active tab if data changes and current active tab is no longer valid
  useEffect(() => {
    if (finalTabsData.length > 0 && !finalTabsData.find(t => t.id === activeTab)) {
      setActiveTab(finalTabsData[0].id);
    }
  }, [finalTabsData, activeTab]);

  const activeTabObj = finalTabsData.find(tab => tab.id === activeTab) || finalTabsData[0];
  const activeContent = activeTabObj?.content;

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-10">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-[#123447] mb-12">
          {finalTitle}
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center border-b border-gray-200 relative mb-12">

          {finalTabsData.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 md:px-8 py-4 font-semibold transition ${activeTab === tab.id
                ? "bg-[#15679a] text-white"
                : "text-gray-600 hover:text-[#15679a] hover:bg-gray-50"
                }`}
            >
              {tab.label}

              {/* Triangle */}
              {activeTab === tab.id && (
                <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#15679a] z-10"></span>
              )}
            </button>
          ))}

        </div>

        {/* Content Section */}
        {activeContent && (
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start mt-8">

            {/* Left Content */}
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-[#123447] mb-6">
                {activeContent.title}
              </h3>

              <div className="text-gray-600 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: activeContent.description }} />

              {activeContent.list && activeContent.list.length > 0 && (
                <ul className="mb-8 space-y-3">
                  {activeContent.list.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <FaArrowRight className="text-yellow-500 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              <Link
                to={activeContent.btnLink || "/contact"}
                className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg shadow-md transition-all hover:-translate-y-1"
              >
                {activeContent.btnText || "Know More"}
                <FaArrowRight />
              </Link>
            </div>

            {/* Right Image */}
            <div className="order-1 md:order-2 text-center">
              <img
                src={activeContent.image}
                alt={activeContent.title}
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transition-transform hover:scale-105 duration-500"
              />
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default DigitalMarketingTabs;

