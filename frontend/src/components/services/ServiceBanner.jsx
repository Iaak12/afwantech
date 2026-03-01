const ServiceBanner = ({ title, description, ctaText }) => {
  return (
    <section className="bg-gradient-to-r from-[#DBEAFE] to-[#EFF6FF] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-[#0F172A]">
          {title}
        </h1>

        <p className="mt-4 max-w-3xl mx-auto text-[#64748B]">
          {description}
        </p>

        <a
          href="#contact-form"
          className="inline-block mt-8 bg-[#1D4ED8] text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
};

export default ServiceBanner;

