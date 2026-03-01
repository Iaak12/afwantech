const AboutStats = () => {
  return (
    <section className="bg-white py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

        {[
          { value: "10+", label: "Years of Digital Excellence" },
          { value: "500+", label: "Global Clients Served" },
          { value: "5K+", label: "Digital Campaigns Executed" },
          { value: "100%", label: "Client Satisfaction Rate" },
        ].map((stat, index) => (
          <div key={index} className="p-6">
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#1D4ED8] mb-2 tracking-tight">
              {stat.value}
            </h3>
            <p className="mt-2 text-[#64748B] font-medium text-sm md:text-base">
              {stat.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default AboutStats;
