import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const heroGirl = "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321621/webtechsathi/m7yqjugxzxeouuqlvza3.webp";

const HeroSection = ({ data }) => {
  const finalBadge = data?.badge || "TRENDING";
  const finalImage = data?.image || heroGirl;
  const finalTitle = data?.title || "Best Digital Marketing Agency in India";
  const finalDescription = data?.description || "Drive genuine buyers' traffic from your target locations, with our City Wise SEO. Crush your competitors & grow your business fast!";
  const finalBtn1Text = data?.btn1Text || "See How";
  const finalBtn1Link = data?.btn1Link || "/contact";
  const finalBtn2Text = data?.btn2Text || "See Our Work";
  const finalBtn2Link = data?.btn2Link || "/our-work";

  const defaultSequence = [
    "Rank on Google #1 Page",
    2000,
    "Increase Organic Traffic",
    2000,
    "Boost Your Online Sales",
    2000,
  ];

  const customSequence = data?.typingText
    ? data.typingText.split(',').flatMap(text => [text.trim(), 2000])
    : defaultSequence;

  return (
    <section className="relative bg-[#081b29] text-white overflow-hidden min-h-[85vh] flex items-center">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/4 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl"></div>

        {/* Dotted Pattern */}
        <div className="absolute left-10 top-20 grid grid-cols-6 gap-2 opacity-10">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-28 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* LEFT IMAGE / BOTTOM ON MOBILE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-start"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-all"></div>
              <img
                src={finalImage}
                alt="Hero"
                className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] object-contain relative z-10 drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT / TOP ON MOBILE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {finalBadge && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-yellow-400 text-black px-5 py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest mb-6 inline-block shadow-[0_0_20px_rgba(250,204,21,0.4)]"
              >
                {finalBadge}
              </motion.span>
            )}

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black leading-[1.1] mb-2">
              {finalTitle}
            </h1>

            {/* GOLDEN TYPING TEXT */}
            <div className="text-2xl sm:text-3xl md:text-5xl font-black text-yellow-400 min-h-[60px] md:min-h-[80px] drop-shadow-sm">
              <TypeAnimation
                key={customSequence.join(',')}
                sequence={customSequence}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <div className="mt-6 text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-medium" dangerouslySetInnerHTML={{ __html: finalDescription }} />

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-10 w-full sm:w-auto">
              <Link
                to={finalBtn1Link}
                className="group bg-yellow-400 text-black px-10 py-4 rounded-xl font-black flex items-center gap-3 hover:bg-yellow-500 transition-all shadow-[0_10px_20px_rgba(250,204,21,0.3)] hover:-translate-y-1 active:scale-95"
              >
                {finalBtn1Text}
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to={finalBtn2Link}
                className="bg-white/5 border border-white/20 text-white px-10 py-4 rounded-xl font-black hover:bg-white/10 transition-all backdrop-blur-sm hover:-translate-y-1 active:scale-95 text-center"
              >
                {finalBtn2Text}
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

