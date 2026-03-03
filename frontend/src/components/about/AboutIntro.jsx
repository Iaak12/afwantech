const AboutIntro = ({ data }) => {
  const badge = data?.badge || "Who We Are";
  const title = data?.title || "Empowering Your Digital Journey";
  const description = data?.description || "<p>Afwan Tech is a premier IT and Digital Marketing agency committed to helping startups, enterprises, and established brands dominate the digital landscape. We blend cutting-edge technology with data-driven marketing to deliver measurable ROI.</p><p>From Custom Website Designing and eCommerce Development to advanced SEO, Paid Ads, and Online Reputation Management, we provide 360-degree digital solutions tailored to your unique business goals.</p>";
  const quote = data?.quote || "Our mission is to turn your business vision into a profound digital reality.";
  const listTitle = data?.listTitle || "Why Choose Afwan Tech?";
  const listItems = data?.listItems || [
    "Award-Winning Digital Marketing & SEO Experts",
    "Custom Web Development & E-Commerce Solutions",
    "Ethical, Transparent, and Data-Driven Approach",
    "Dedicated Account Managers & Round-the-Clock Support",
    "Proven Track Record of Scaling Businesses Globally"
  ];

  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        <div>
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">
            {badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
            {title}
          </h2>

          <div className="mt-6 text-[#64748B] leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: description }} />

          {quote && (
            <p className="mt-4 text-[#64748B] leading-relaxed border-l-4 border-yellow-400 pl-4 italic">
              "{quote}"
            </p>
          )}
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 transform hover:-translate-y-1 transition duration-300">
          <h3 className="text-xl font-bold text-[#0F172A] mb-6 border-b pb-4">
            {listTitle}
          </h3>
          <ul className="space-y-5">
            {listItems.map((item, index) => (
              <li key={index} className="flex gap-4 items-start">
                <span className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold shadow-sm">
                  ✓
                </span>
                <span className="text-[#334155] font-medium leading-tight mt-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default AboutIntro;
