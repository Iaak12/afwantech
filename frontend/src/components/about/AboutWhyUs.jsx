const AboutWhyUs = ({ data }) => {
  const title = data?.title || "Why Clients Trust <span class='text-blue-600'>Afwan Tech</span>";
  const cards = data?.cards || [
    { title: "Expert Digital Strategists", text: "A team of seasoned marketers, SEO experts, and developers delivering innovative and high-performing digital solutions." },
    { title: "Transparent & Ethical Approach", text: "No hidden fees or black-hat strategies. We believe in sheer transparency, clear reporting, and strict adherence to industry standards." },
    { title: "ROI-Focused Growth Driven", text: "We don't just build websites or run ads; we build measurable, growth-oriented digital engines tailored for your success." }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2
          className="text-3xl md:text-4xl font-bold text-[#0F172A]"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-[#F9FAFB] rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-[#1D4ED8]">
                {item.title}
              </h3>
              <p className="mt-3 text-[#64748B] leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutWhyUs;
