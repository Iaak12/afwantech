import { useEffect, useState } from "react";

const ServiceTabs = ({
  plansData,
  featuresData,
  benefitsData,
  workData,
  clientsData,
}) => {
  const tabs = [
    { name: "Plans & Pricing", id: "plans" },
    { name: "Key Features", id: "features" },
    { name: "Benefits", id: "benefits" },
    { name: "Our Work", id: "work" },
    { name: "Happy Clients", id: "clients" },
  ];

  const [activeTab, setActiveTab] = useState("plans");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      tabs.forEach((tab) => {
        const section = document.getElementById(tab.id);
        if (section) {
          if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
          ) {
            setActiveTab(tab.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-3 mb-16 justify-center sticky top-0 bg-gray-100 z-20 py-4">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300
              ${
                activeTab === tab.id
                  ? "bg-[#123447] text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-[#123447] hover:text-white"
              }`}
            >
              {tab.name}
            </a>
          ))}
        </div>

        {/* Sections */}
        <div className="space-y-24">

          <div id="plans" className="scroll-mt-32">
            {plansData}
          </div>

          <div id="features" className="scroll-mt-32">
            {featuresData}
          </div>

          <div id="benefits" className="scroll-mt-32">
            {benefitsData}
          </div>

          <div id="work" className="scroll-mt-32">
            {workData}
          </div>

          <div id="clients" className="scroll-mt-32">
            {clientsData}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServiceTabs;

