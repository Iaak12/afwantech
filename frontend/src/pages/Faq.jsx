import { useState, useEffect } from "react";
import PageMotion, { fadeUp } from "../components/common/PageMotion";

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5005/api/faqs')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setFaqs(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching FAQs:', err);
        setLoading(false);
      });
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PageMotion>
      <main className="bg-[#F9FAFB] min-h-screen pb-20">
        {/* ===== HERO ===== */}
        <section className="bg-gradient-to-r from-[#0b1f2d] to-[#1d3f54] py-24 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-blue-100 text-lg opacity-80">
              Clear answers to common questions about marketing, development,
              auditing, and financial advisory services.
            </p>
          </div>
        </section>

        {/* ===== FAQ LIST ===== */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 space-y-4">
            {loading ? (
              <div className="text-center py-20 text-gray-400 font-bold uppercase tracking-widest animate-pulse">
                Fetching Knowledge Base...
              </div>
            ) : faqs.length > 0 ? (
              faqs.map((faq, index) => (
                <div
                  key={faq._id || index}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center px-8 py-6 text-left focus:outline-none"
                  >
                    <span className="font-bold text-[#0F172A] text-lg">
                      {faq.q}
                    </span>
                    <span className="text-blue-600 text-2xl font-light transform transition-transform duration-300" style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`px-8 transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-[500px] pb-6' : 'max-h-0'}`}
                  >
                    <div className="text-[#64748B] leading-relaxed border-t border-gray-50 pt-4">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-20 text-gray-500 italic">
                No FAQs available at the moment.
              </div>
            )}
          </div>
        </section>
      </main>
    </PageMotion>
  );
};

export default FAQ;

