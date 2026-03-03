import ContactForm from "./ContactForm";

const ContactSection = ({ data }) => {
    const finalTitle = data?.title || "Get In Touch With Afwan Tech";
    const finalDescription = data?.description || "We are here to help you grow your business digitally. Reach out to us anytime.";
    const finalPhone = data?.phone || "+91 98688 98788";
    const finalEmail = data?.email || "info@afwantech.com";
    const finalLocation = data?.location || "India";

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                {/* Left Info */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-black text-[#123447] mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: finalTitle }} />
                    <div className="text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: finalDescription }} />

                    <div className="space-y-4 text-gray-700">
                        <p><strong>Phone:</strong> <span dangerouslySetInnerHTML={{ __html: finalPhone }} /></p>
                        <p><strong>Email:</strong> <span dangerouslySetInnerHTML={{ __html: finalEmail }} /></p>
                        <p><strong>Location:</strong> <span dangerouslySetInnerHTML={{ __html: finalLocation }} /></p>
                    </div>
                </div>

                {/* Right Form */}
                <ContactForm extraFields={data?.extraFields || []} />
            </div>
        </section>
    );
};

export default ContactSection;
