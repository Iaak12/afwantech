const ServiceFAQs = ({ faqs }) => {
  return (
    <section className="bg-[#F9FAFB] py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-[#0F172A] mb-6">
          FAQs
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border rounded-lg p-5"
            >
              <h4 className="font-medium text-[#0F172A]">
                {faq.q}
              </h4>
              <p className="mt-2 text-sm text-[#64748B]">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQs;

