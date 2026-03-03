const AboutProcess = ({ data }) => {
  const title = data?.title || "Our Proven <span class='text-blue-600'>Growth Blueprint</span>";
  const description = data?.description || "We follow a data-driven, systematic approach to ensure every project we touch turns into a digital success story.";
  const steps = data?.steps || [
    { title: "Discover & Strategy", desc: "In-depth research and strategic roadmapping." },
    { title: "Design & Development", desc: "Building aesthetics matched with robust technical architecture." },
    { title: "Marketing Execution", desc: "Deploying multi-channel campaigns for max reach." },
    { title: "Analyze & Scale", desc: "Data measurement and continuous ROI optimization." },
  ];

  return (
    <section className="bg-[#F9FAFB] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2
          className="text-3xl md:text-4xl font-bold text-[#0F172A] text-center mb-4"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="text-center text-[#64748B] max-w-2xl mx-auto mb-16 text-lg">
          {description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center relative">

          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[24px] left-[12%] right-[12%] h-1 bg-blue-100 -z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300 relative z-10 border border-gray-50">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xl shadow-md mb-6 ring-4 ring-white">
                {index + 1}
              </div>
              <h3 className="font-bold text-[#0F172A] text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutProcess;
