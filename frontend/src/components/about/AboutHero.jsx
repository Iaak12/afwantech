const AboutHero = ({ data }) => {
  const title = data?.title || "About <span class='text-yellow-400'>Afwan Tech</span>";
  const desc = data?.description || "Awarded Best SEO Company of the Year and rated No.1 Digital Marketing Agency. We are a passionate team of digital strategists, designers, and developers dedicated to driving exceptional growth for businesses worldwide.";

  return (
    <section className="bg-gradient-to-r from-[#0b1f2d] to-[#1d3f54] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1
          className="text-4xl md:text-6xl font-bold mb-6"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p
          className="mt-4 text-blue-100 max-w-3xl mx-auto text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      </div>
    </section>
  );
};

export default AboutHero;
