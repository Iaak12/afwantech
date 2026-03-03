import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import API_BASE_URL from "../../config/api";

const FAQSection = ({ data }) => {
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openIndex, setOpenIndex] = useState(null);

    const sectionTitle = data?.title || "Frequently Asked Questions";
    const sectionDesc = data?.description || "Find answers to common questions about our services and process.";

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/faqs`)
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

    if (loading) return (
        <div className="py-20 text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <p className="mt-4 text-gray-500 font-medium">Loading FAQs...</p>
        </div>
    );

    if (faqs.length === 0) return null;

    return (
        <section className="py-20 bg-gray-50 border-y border-gray-100">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{sectionTitle}</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">{sectionDesc}</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={faq._id || index}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center px-8 py-6 text-left focus:outline-none group"
                            >
                                <span className={`font-bold text-lg transition-colors duration-300 ${openIndex === index ? 'text-blue-600' : 'text-gray-800 group-hover:text-blue-600'}`}>
                                    {faq.q}
                                </span>
                                <span className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                                    <svg className={`w-6 h-6 ${openIndex === index ? 'text-blue-600' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={openIndex === index ? "M20 12H4" : "M12 4v16m8-8H4"} />
                                    </svg>
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-8 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
