const PrivacyPolicy = () => {
  return (
    <main className="bg-[#F9FAFB]">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#DBEAFE] to-[#EFF6FF] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-[#0F172A]">
            Privacy Policy
          </h1>
          <p className="mt-4 text-[#64748B]">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-[#334155]">

          <p>
            Afwan Tech is committed to safeguarding the privacy
            of clients and website visitors. This Privacy Policy outlines how
            we collect, use, disclose, and protect your personal information.
          </p>

          <h2 className="text-2xl font-semibold text-[#0F172A]">
            Information We Collect
          </h2>
          <p>
            We may collect personal information such as your name, email
            address, phone number, and service-related details when you
            contact us, submit forms, or engage with our services.
          </p>

          <h2 className="text-2xl font-semibold text-[#0F172A]">
            How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To respond to inquiries and provide requested services</li>
            <li>To comply with legal and regulatory requirements</li>
            <li>To improve our services and client experience</li>
            <li>For internal record keeping and communication</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#0F172A]">
            Data Protection
          </h2>
          <p>
            We implement appropriate technical and organizational measures
            to protect your personal data from unauthorized access,
            disclosure, or misuse.
          </p>

          <h2 className="text-2xl font-semibold text-[#0F172A]">
            Sharing of Information
          </h2>
          <p>
            We do not sell or rent your personal information. Information
            may be shared only when required by law or with trusted
            professionals involved in delivering our services.
          </p>

          <h2 className="text-2xl font-semibold text-[#0F172A]">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be reflected on this page.
          </p>

          <p className="text-sm text-[#64748B]">
            Last updated: {new Date().getFullYear()}
          </p>
        </div>
      </section>

    </main>
  );
};

export default PrivacyPolicy;

