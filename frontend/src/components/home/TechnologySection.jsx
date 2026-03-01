const TechnologySection = ({ data }) => {
  const defaultTools = [
    "Ubersuggest", "PHP", "Google Analytics", "CodeIgniter",
    "Meta Business Partner", "JavaScript + jQuery", "Google Partner", "Linux",
    "Google Search Console", "FileZilla", "Bootstrap", "Visual Studio Code",
    "HTML5", "Adobe Photoshop", "W3C", "Adobe Illustrator"
  ];

  const finalTitle = data?.title || "Technology and Tools we use";
  const finalDescription = data?.description || "At Webpulse Solution Pvt. Ltd., we harness the latest technologies and tools to deliver exceptional results for our clients. These tools empower us to deliver top-notch solutions tailored to your business needs.";
  const finalTools = data?.tools || defaultTools;

  return (
    <section className="bg-[#eef3f7] py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold text-[#123447] mb-6">
            {finalTitle}
          </h2>

          <div className="text-gray-600 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: finalDescription }} />
        </div>

        {/* Right Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

          {finalTools.map((tool, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-md p-5 flex items-center justify-center text-center text-gray-500 text-sm font-medium shadow-sm hover:shadow-md transition"
            >
              {tool}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TechnologySection;

