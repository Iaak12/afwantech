const mediaLogos = [
  "Press Trust of India",
  "India Today",
  "Business Today",
  "The Telegraph",
  "Hindustan",
  "IIFL",
  "Udaipur Kiran"
];

const NewsMediaSection = ({ data }) => {
  const defaultMediaLogos = [
    "Press Trust of India",
    "India Today",
    "Business Today",
    "The Telegraph",
    "Hindustan",
    "IIFL",
    "Udaipur Kiran"
  ];

  const finalTitle = data?.title || "Afwan Tech in News & Media";
  const finalMediaLogos = (data?.mediaLogos && data.mediaLogos.length > 0) ? data.mediaLogos : defaultMediaLogos;

  return (
    <section className="bg-[#eef3f7] py-20 relative">

      {/* Heading */}
      <div className="text-center mb-14 px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#123447] leading-tight">
          {finalTitle}
        </h2>
      </div>

      {/* Logos Grid */}
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {finalMediaLogos.map((logo, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl py-6 px-4 flex items-center justify-center text-gray-800 font-bold text-xs sm:text-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 shadow-sm text-center"
            >
              {logo}
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Pointer */}
      <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2">
        <div className="w-8 h-8 bg-[#eef3f7] rotate-45"></div>
      </div>

    </section>
  );
};

export default NewsMediaSection;

