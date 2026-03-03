const ServiceBenefits = ({
  badge,
  title,
  description,
  image,
  points = [],
  qualityTitle,
  qualityItems = [],
  ctaText = "Connect with Expert",
}) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

          {/* Left Content */}
          <div>
            {badge && (
              <span className="inline-block bg-gray-100 text-[#123447] px-4 py-1 rounded-full text-sm font-medium mb-4">
                {badge}
              </span>
            )}

            <h2 className="text-4xl font-bold text-[#123447] mb-6 leading-tight">
              {title}
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>

            <ul className="space-y-4">
              {points?.map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <span className="text-blue-600 mt-1">✔</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div>
            <img
              src={image}
              alt="benefits"
              className="rounded-2xl shadow-lg"
            />
          </div>

        </div>

        {/* Quality Section */}
        {qualityTitle && (
          <>
            <h3 className="text-4xl font-bold text-center text-[#123447] mb-16">
              {qualityTitle}
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {qualityItems?.map((item, index) => (
                <div key={index} className="text-center">
                  {item.icon && (
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="mx-auto mb-4 h-16"
                    />
                  )}
                  <h4 className="text-xl font-semibold text-[#123447] mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mt-16">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-[#123447] font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition">
                {ctaText} →
              </button>
            </div>
          </>
        )}

      </div>
    </section>
  );
};

export default ServiceBenefits;

