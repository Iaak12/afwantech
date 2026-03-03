import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const ListenFromClients = ({ data }) => {
  const defaultTestimonials = [
    {
      caption: "Winntus Formwork Private Limited, Dr. P. Goyal",
      description: "How Webpulse Digital Marketing Helped Winntus Grow Online",
      thumbnail: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321627/webtechsathi/q3rzcugot08ajyq5ryok.jpg",
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      caption: "Advocate Gaurav",
      description: "Website Design for Legal Services | Testimonial by Adv Gaurav",
      thumbnail: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321628/webtechsathi/g1ezaytgau790ibx4kvp.jpg",
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  const finalTitle = data?.title || "Listen From Our Clients";
  const finalDescription = data?.description || "Behind every success story is a partnership built on trust and collaboration.";
  const finalTestimonials = data?.testimonials || defaultTestimonials;
  const finalBtnText = data?.btnText || "View More Reviews →";
  const finalBtnLink = data?.btnLink || "/reviews";

  return (
    <section className="bg-[#f4f7f9] py-20">
      <div className="max-w-7xl mx-auto px-10 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-[#123447]">
          {finalTitle}
        </h2>

        <div className="text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: finalDescription }} />

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {finalTestimonials.map((item, index) => (
            <div key={index} className="text-left">
              <div className="relative group cursor-pointer overflow-hidden rounded-md shadow-md">
                <img
                  src={item.thumbnail}
                  alt={item.caption}
                  className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-red-600 p-4 rounded-full shadow-lg">
                    <FaPlay className="text-white text-lg" />
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-3 italic">
                {item.caption}
              </p>

              <h4 className="text-sm font-semibold text-[#123447] mt-2 hover:text-blue-600 cursor-pointer">
                {item.description}
              </h4>
            </div>
          ))}
        </div>

        <Link
          to={finalBtnLink}
          className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded font-semibold transition inline-block"
        >
          {finalBtnText}
        </Link>

      </div>
    </section>
  );
};

export default ListenFromClients;
