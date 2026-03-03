const PlanCard = ({
  title,
  subtitle,
  price,
  oldPrice,
  save,
  recommended,
  features,
}) => {
  return (
    <div className="relative bg-white rounded-2xl border shadow-sm hover:shadow-lg transition-all duration-300">

      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#123447] text-white text-sm px-4 py-1 rounded-full">
          Recommended
        </div>
      )}

      <div className="p-8">
        <h3 className="text-2xl font-bold text-[#123447] mb-2">
          {title}
        </h3>

        <p className="text-gray-500 mb-6">{subtitle}</p>

        <div className="mb-6">
          <p className="text-sm text-gray-500">12 Month @</p>

          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-[#123447]">
              ₹{price}
            </span>
            <span className="line-through text-gray-400">
              ₹{oldPrice}
            </span>
          </div>

          <span className="text-orange-500 text-sm font-semibold">
            Save {save}
          </span>
        </div>

        <div className="space-y-3 mb-6">
          <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 rounded-lg font-medium hover:opacity-90">
            Buy Now
          </button>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700">
            Enquire Now
          </button>
        </div>

        <ul className="space-y-2 text-gray-600 text-sm">
          {features.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-blue-600">✔</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t p-4">
        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-[#123447] font-medium py-2 rounded-lg">
          View full details →
        </button>
      </div>
    </div>
  );
};



const PlansPricing = ({ title, description, plans }) => {
  return (
    <div className="text-center">

      <h2 className="text-4xl font-bold text-[#123447] mb-6">
        {title}
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto mb-16">
        {description}
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans?.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>

    </div>
  );
};

export default PlansPricing;

