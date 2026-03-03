import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ServiceOurWork = ({
  title,
  description,
  projects,
  ctaText = "Connect with Expert",
}) => {
  return (
    <section className="py-20 bg-[#eaf1f5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#123447] mb-6">
            {title}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-lg p-8 grid md:grid-cols-2 gap-12 items-center">

                {/* Left Image */}
                <div>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="rounded-lg shadow-md"
                  />
                </div>

                {/* Right Content */}
                <div>
                  <h3 className="text-3xl font-bold text-[#123447] mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-500 mb-6">
                    {project.category}
                  </p>

                  <ul className="space-y-3 text-gray-600 mb-8">
                    {project.services?.map((service, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-blue-600">✔</span>
                        {service}
                      </li>
                    ))}
                  </ul>

                  <button className="bg-yellow-400 hover:bg-yellow-500 text-[#123447] font-semibold px-6 py-3 rounded-lg">
                    {ctaText} →
                  </button>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default ServiceOurWork;

