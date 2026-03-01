import { NavLink } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="bg-gradient-to-r from-[#0b1f2d] to-[#1d3f54] py-20 text-center text-white relative flex flex-col items-center justify-center overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Ready to Supercharge Your Business Growth?
        </h2>
        <p className="mt-4 text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Connect with our digital experts to scale your brand with proven marketing strategies, stunning websites, and cutting-edge technology.
        </p>
        <NavLink
          to="/contact"
          className="inline-block bg-yellow-400 text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] transform hover:-translate-y-1 transition-all duration-300"
        >
          Get Your Free Consultation
        </NavLink>
      </div>
    </section>
  );
};

export default AboutCTA;
