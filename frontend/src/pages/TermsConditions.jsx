const TermsConditions = () => {
  return (
    <main className="bg-[#F9FAFB]">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#DBEAFE] to-[#EFF6FF] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-[#0F172A]">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-[#64748B]">
            Please read these terms carefully before using our website
            or services.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-[#334155]">

          <p>
            These Terms & Conditions govern your use of the Afwan Tech
            Advisory website and services. By accessing this website, you
            agree to comply with these terms.
          </p>

          <h2 className="text-2xl font-semibold text-[#0F172A]">
            Professional Services
          </h2>
          <p>
            Our services are provided by qualified professionals and are
            subject to applicable laws, regulations, and professional
            standards governing Digital Experts in India.
          </p>

          <h2 className="text-2xl font-semibold text-[#0F172A]">
            Use of Website
          </h2>
          <p>
            You agree not to misuse this website or engage in activities
            that may harm its functionality, security, or reputation.
          </p>

          <h2 className="text-2xl font-semibold text-[#0F172A]">
            Limitation of Liability
          </h2>
          <p>
            Afwan Tech shall not be liable for any indirect,
            incidental, or consequential damages arising from the use
            of our website or services.
          </p>

          <h2 className="text-2xl font-semibold text-[#0F172A]">
            Intellectual Property
          </h2>
          <p>
            All content, logos, and materials on this website are the
            intellectual property of Afwan Tech and may
            not be used without prior written consent.
          </p>

          <h2 className="text-2xl font-semibold text-[#0F172A]">
            Governing Law
          </h2>
          <p>
            These terms shall be governed by and interpreted in
            accordance with the laws of India.
          </p>

          <p className="text-sm text-[#64748B]">
            Last updated: {new Date().getFullYear()}
          </p>
        </div>
      </section>

    </main>
  );
};

export default TermsConditions;

