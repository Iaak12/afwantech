const ServiceKeyFeatures = ({
  title,
  description,
  features = [],
}) => {
  return (
    <section className="py-20 bg-[#eef3f7]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#123447] mb-6">
            {title}
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 border border-gray-300">

          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 border border-gray-300 bg-white hover:shadow-md transition"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-16 h-16 mb-4"
              />

              <h3 className="font-semibold text-[#123447] text-lg">
                {feature.title}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ServiceKeyFeatures;

