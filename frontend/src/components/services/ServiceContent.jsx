import { FaCheckCircle } from "react-icons/fa";

const ServiceContent = ({
  introTitle,
  introDescription,

  smallTitle,
  mainTitle,
  description,
  image,

  secondTitle,
  secondDescription,
  secondImage,

  bullets = [],
}) => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= TOP CENTER INTRO SECTION ================= */}
        {introTitle && (
          <div className="text-center max-w-4xl mx-auto mb-1">
            <h2 className="text-4xl font-bold text-[#123447] mb-6">
              {introTitle}
            </h2>

            <p className="text-gray-600 leading-relaxed">
              {introDescription}
            </p>
          </div>
        )}

        {/* ================= FIRST TWO COLUMN SECTION ================= */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-8">

          {/* Left Content */}
          <div>
            {smallTitle && (
              <p className="text-blue-600 font-semibold mb-3">
                {smallTitle}
              </p>
            )}

            <h3 className="text-3xl font-bold text-[#123447] leading-tight mb-6">
              {mainTitle}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Right Image */}
          <div>
            <img
              src={image}
              alt="Service"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>

        {/* ================= SECOND SECTION ================= */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-16">

          {/* Image Left */}
          <div className="order-2 md:order-1">
            <img
              src={secondImage}
              alt="Service Detail"
              className="rounded-xl shadow-lg w-full"
            />
          </div>

          {/* Content Right */}
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold text-[#123447] mb-6">
              {secondTitle}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {secondDescription}
            </p>
          </div>
        </div>

        {/* ================= BULLETS ================= */}
        {bullets.length > 0 && (
          <div>
            <h4 className="text-2xl font-bold text-[#123447] mb-6">
              Here's what makes us the trusted partner for small business web design:
            </h4>

            <div className="space-y-4">
              {bullets.map((item, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <FaCheckCircle className="text-blue-600 mt-1" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceContent;

