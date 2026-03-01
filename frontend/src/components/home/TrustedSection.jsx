const TrustedSection = ({ data }) => {
  const finalTitle1 = data?.title1 || "Trusted by";
  const finalTitle2 = data?.title2 || "3000+ High-Growth";
  const finalTitle3 = data?.title3 || "MSMEs/ Clients";

  const defaultLogos = Array.from({ length: 12 }).map(() => "https://via.placeholder.com/120x50?text=Logo");
  const finalLogos = data?.logos || defaultLogos;

  const defaultRibbon = [
    "⭐ Awarded Best SEO Company",
    "⭐ Rated No.1 Digital Marketing Agency",
    "⭐ Web Designing with SEO in Multiple Cities",
    "⭐ Reputation Building Company",
    "⭐ Performance Driven Growth"
  ];
  const finalRibbon = data?.ribbonItems || defaultRibbon;

  return (
    <section className="bg-[#eef2f5] py-20 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-10 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1d3f54]">
          {finalTitle1}{" "}
          <span className="text-yellow-500">{finalTitle2}</span>{" "}
          {finalTitle3}
        </h2>

        {/* Yellow underline */}
        <div className="w-48 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mt-12">

          {finalLogos.map((logoUrl, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex items-center justify-center min-h-[82px]"
            >
              <img
                src={logoUrl}
                alt="Client Logo"
                className="mx-auto opacity-60 hover:opacity-100 transition max-h-[50px] object-contain"
              />
            </div>
          ))}

        </div>
      </div>

      {/* Moving Ribbon */}
      <div className="absolute bottom-0 w-full bg-[#123447] py-3 overflow-hidden">

        <div className="whitespace-nowrap animate-marquee text-white font-medium text-sm flex items-center gap-16">
          {finalRibbon.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>

      </div>

    </section>
  );
};

export default TrustedSection;

