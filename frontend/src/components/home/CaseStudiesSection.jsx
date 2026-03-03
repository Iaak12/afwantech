import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const CaseStudiesSection = ({ data }) => {
  const defaultCaseStudies = [
    {
      title: "Shelley Enterprises",
      subtitle: "Magnetic Jewellery in USA",
      image: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321611/webtechsathi/mlpbbcrmdgemibppqmrw.jpg",
      services: [
        "Website with SEO in Multiple Locations",
        "Off Page SEO for Link-building",
        "Brand Image Building",
        "SEO of Google My Business Listing",
      ],
    },
    {
      title: "Care Zindagi",
      subtitle: "Home Nursing Services in Jharkhand",
      image: "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321612/webtechsathi/xlh3es3akiqw2xcnltze.jpg",
      services: [
        "Website with SEO in Multiple Locations",
        "Off Page SEO for Link-building",
        "GMB Optimization",
      ],
    },
    {
      title: "Astro Meenakshi",
      subtitle: "Positive Vashikaran in Delhi",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      services: [
        "Website with SEO in Multiple Locations",
        "Brand Image Building",
        "National TV & Media Websites",
      ],
    },
  ];

  const finalTitle = data?.title || "Case Studies: Our Real Success Stories";
  const finalDescription = data?.description || "Every project tells a story of dedication, strategy, and measurable results. Dive into our success stories to see how we turn challenges into achievements.";
  const finalCaseStudies = (data?.caseStudies && data.caseStudies.length > 0) ? data.caseStudies : defaultCaseStudies;
  const finalBtnBottomText = data?.btnBottomText || "Connect with Expert →";
  const finalBtnBottomLink = data?.btnBottomLink || "/contact";

  return (
    <section className="bg-[#e9f0f4] py-24">
      <div className="max-w-7xl mx-auto px-10 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#123447]">
          {finalTitle}
        </h2>

        <div className="text-gray-600 mt-6 max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: finalDescription }} />

        {/* Slider */}
        <div className="mt-16">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={1}
          >
            {finalCaseStudies.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="grid md:grid-cols-2 gap-14 items-center text-left">

                  {/* LEFT IMAGE */}
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-xl shadow-xl w-full object-cover max-h-[400px]"
                    />

                    {/* Floating Stats Card */}
                    <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 w-40">
                      <p className="text-xs text-gray-500">Statistics</p>
                      <div className="flex items-end gap-2 mt-2">
                        <div className="w-2 h-8 bg-gray-300"></div>
                        <div className="w-2 h-12 bg-blue-400"></div>
                        <div className="w-2 h-6 bg-gray-300"></div>
                        <div className="w-2 h-10 bg-gray-400"></div>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT CONTENT */}
                  <div>
                    <h3 className="text-3xl font-bold text-yellow-500">
                      {item.title}
                    </h3>

                    <p className="text-lg text-gray-700 mt-2">
                      {item.subtitle}
                    </p>

                    {/* Accordion Style Card */}
                    <div className="mt-6 bg-white rounded-xl shadow overflow-hidden">

                      {/* Header */}
                      <div className="bg-[#123447] text-white px-6 py-4 font-semibold uppercase tracking-wider text-sm">
                        {item.listHeading || "Services Offered"}
                      </div>

                      {/* Body */}
                      <div className="px-6 py-5 space-y-3">
                        {item.services?.map((service, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 text-gray-700"
                          >
                            <FaCheckCircle className="text-blue-500 text-sm" />
                            {service}
                          </div>
                        ))}

                        <Link
                          to={item.btnLink || "/contact"}
                          className="mt-4 bg-yellow-400 px-5 py-2 rounded font-semibold hover:bg-yellow-500 transition inline-block"
                        >
                          {item.btnText || "View Case Study"}
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16">
          <Link
            to={finalBtnBottomLink}
            className="bg-yellow-400 px-8 py-3 rounded font-semibold hover:bg-yellow-500 transition inline-block"
          >
            {finalBtnBottomText}
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CaseStudiesSection;

