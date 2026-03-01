import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const ListenFromClients = ({ data }) => {
  const defaultTestimonials = [
    {
      name: "Winntus Formwork Private Limited, Dr. P. Goyal",
      title: "Client Testimonial: How Webpulse Digital Marketing Helped Winntus Grow Online | Real Review",
      img: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321627/webtechsathi/q3rzcugot08ajyq5ryok.jpg",
    },
    {
      name: "Advocate Gaurav",
      title: "Website Design for Legal Services | Testimonial by Adv Gaurav | Best Web Designing Company in Delhi",
      img: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321628/webtechsathi/g1ezaytgau790ibx4kvp.jpg",
    },
    {
      name: "Mr. Sahibjeet Singh, Director of Maskeen Toys Pvt. Ltd.",
      title: "Does Webpulse Solution Pvt Ltd REALLY Deliver Unbeatable Results?",
      img: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321630/webtechsathi/um192j30ladw4sbm37k4.jpg",
    },
    {
      name: "Shelley Inc USA",
      title: "Case Study: Shelley Inc. USA (Webpulse Testimonial / Client's Review)",
      img: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321631/webtechsathi/szxk8j0vft8qhkjhrklv.jpg",
    },
    {
      name: "Mr. Naseem Khan, SKF Decor",
      title: "Client's Review / Testimonial About Webpulse | Mr. Naseem Khan, SKF Decor - Furniture Manufacturers",
      img: "https://images.unsplash.com/photo-1581090700227-1e8a0b61e8f1",
    },
    {
      name: "Dr. Meenakshi Sharma",
      title: "Website & SEO Testimonials for Webpulse by Astrologer Dr. Meenakshi Sharma",
      img: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321632/webtechsathi/zsay7fauhew2ey8c3fzb.jpg",
    },
  ];

  const finalTitle = data?.title || "Listen From Our Clients";
  const finalDescription = data?.description || "Behind every success story is a partnership built on trust and collaboration. Our clients share how we've helped them achieve remarkable results and measurable growth.";
  const finalTestimonials = data?.testimonials || defaultTestimonials;
  const finalFooterText = data?.footerText || "Discover the power of effective SEO and digital marketing through real client experiences. Watch our testimonials and see the difference we can make for your business.";
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
                  src={item.img}
                  alt={item.name}
                  className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-red-600 p-4 rounded-full shadow-lg">
                    <FaPlay className="text-white text-lg" />
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-3 italic">
                {item.name}
              </p>

              <h4 className="text-sm font-semibold text-[#123447] mt-2 hover:text-blue-600 cursor-pointer">
                {item.title}
              </h4>
            </div>
          ))}
        </div>

        <div className="text-gray-600 mt-12 max-w-4xl mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: finalFooterText }} />

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
