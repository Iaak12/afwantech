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
  const finalMediaLogos = data?.mediaLogos || defaultMediaLogos;

  return (
    <section className="bg-[#eef3f7] py-20 relative">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-[#123447]">
          {finalTitle}
        </h2>
      </div>

      {/* Logos Grid */}
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          {finalMediaLogos.slice(0, 4).map((logo, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-md py-6 px-4 flex items-center justify-center text-gray-600 font-medium text-sm hover:shadow-md transition"
            >
              {logo}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {finalMediaLogos.slice(4).map((logo, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-md py-6 px-4 flex items-center justify-center text-gray-600 font-medium text-sm hover:shadow-md transition"
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

