import { FaCheckCircle, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceHero = ({
  badge,
  title,
  description,
  features = [],
  image,
  primaryBtnText = "See Plans & Pricing",
  primaryBtnLink = "/pricing",
  secondaryBtnText = "Request a Quote",
  secondaryBtnLink = "/contact"
}) => {
  return (
    <section className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT IMAGE */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={image}
            alt={title}
            className="w-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* Small Blue Badge */}
          {badge && (
            <p className="text-blue-600 font-semibold mb-3">
              {badge}
            </p>
          )}

          {/* Main Title */}
          <h1 className="text-2xl lg:text-4xl font-bold text-[#123447] leading-tight mb-6">
            {title}
          </h1>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            {description}
          </p>

          {/* Feature List */}
          <div className="space-y-3 mb-8">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              to={primaryBtnLink}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg transition"
            >
              {primaryBtnText}
            </Link>

            <Link
              to={secondaryBtnLink}
              className="bg-[#123447] hover:bg-[#0f2b3a] text-white font-semibold px-8 py-3 rounded-lg transition flex items-center gap-2"
            >
              {secondaryBtnText}
              <FaEnvelope />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceHero;

