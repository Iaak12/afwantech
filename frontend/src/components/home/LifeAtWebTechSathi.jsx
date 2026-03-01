import { useEffect, useState } from "react";

const LifeAtAfwanTech = ({ data }) => {
  const defaultSlides = [
    {
      img: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321622/webtechsathi/qhimok3me2gcxv805jru.jpg",
      title: "Unleashing Fun With the Afwan Tech Team"
    },
    {
      img: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321623/webtechsathi/s4f0cloh8nzu0iwih60x.jpg",
      title: "Afwan Tech Team Celebrates Diwali With Joy"
    },
    {
      img: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321625/webtechsathi/gwgjr7tofeursrl30s0w.jpg",
      title: "Festive Celebration at Afwan Tech"
    },
    {
      img: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321626/webtechsathi/mtnceahpcspiukhxjike.jpg",
      title: "Holi Celebration at Afwan Tech"
    }
  ];

  const finalTitle = data?.title || "Life At Afwan Tech";
  const finalDescription = data?.description || "Life at Afwan Tech is all about collaboration, innovation, and growth. Our team thrives in an environment that values creativity, learning, and mutual support. Every project is an opportunity to grow together and deliver outstanding results.";
  const finalSlides = data?.slides || defaultSlides;

  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % finalSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [finalSlides.length]);

  return (
    <section className="py-20 bg-white relative overflow-hidden">

      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto px-6 mb-14">
        <h2 className="text-4xl font-bold text-[#123447] mb-6">
          {finalTitle}
        </h2>

        <div className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: finalDescription }} />
      </div>

      {/* Slider */}
      <div className="max-w-6xl mx-auto px-6 overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {finalSlides.map((slide, index) => (
            <div key={index} className="min-w-full px-3">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-5 text-center">
                  <h4 className="text-lg font-semibold text-[#123447]">
                    {slide.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {finalSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${current === index
              ? "bg-yellow-400 scale-110"
              : "bg-gray-300"
              }`}
          />
        ))}
      </div>

    </section>
  );
};

export default LifeAtAfwanTech;

