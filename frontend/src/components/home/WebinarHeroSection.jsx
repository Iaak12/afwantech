import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const WebinarHeroSection = ({ data }) => {
  const defaultPoints = [
    "Establish a strong online presence",
    "Generate genuine B2B leads",
    "Enhance your online reputation",
    "Drive more website traffic",
    "Boost sales and turnover",
    "Build personal brand image"
  ];

  const defaultImages = [
    "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321642/webtechsathi/u0q5v1v81fjvzfggrncz.jpg",
    "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321643/webtechsathi/lk4gcnbrdm3fpxgpey9k.jpg",
    "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321645/webtechsathi/a08gcydwujdqabyctbim.jpg",
    "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321646/webtechsathi/qghh0ob4cbbzgryxyczg.jpg",
    "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321647/webtechsathi/rtxbtzuogkitcw4xqcwi.jpg"
  ];

  const finalTitle = data?.title || "Business Growth Formula Webinar";
  const finalSubtitle = data?.subtitle || "Free Webinar for Entrepreneurs";
  const finalDateTime = data?.datetime || "Every Tuesday | 11am to 12 Noon | On Zoom";
  const allPoints = data?.points || defaultPoints;
  const finalPointsLeft = allPoints.slice(0, Math.ceil(allPoints.length / 2));
  const finalPointsRight = allPoints.slice(Math.ceil(allPoints.length / 2));

  const finalCoachName = data?.coachName || "Rahul Ranjan Singh";
  const finalCoachTitle = data?.coachTitle || "Awarded Best Business Growth Coach in India";
  const finalImages = data?.images || defaultImages;
  const finalMainImage = data?.mainImage || "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321648/webtechsathi/j6eqfpatinfkfiujltia.jpg";
  const finalBtn1Text = data?.btn1Text || "Book Your Slot Now →";
  const finalBtn2Text = data?.btn2Text || "Read Story →";
  const finalBtn1Link = data?.btn1Link || "/contact";
  const finalBtn2Link = data?.btn2Link || "/contact";

  return (
    <section className="bg-gradient-to-r from-[#0b2233] to-[#1b3f55] text-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
            {finalTitle}
          </h1>

          <div className="mt-4 text-lg text-gray-200" dangerouslySetInnerHTML={{ __html: finalSubtitle }} />

          <p className="mt-2 text-sm text-gray-300">
            {finalDateTime}
          </p>

          {/* Learn How To */}
          <div className="mt-8">
            <h3 className="text-yellow-400 font-semibold mb-4">
              Learn How to:
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                {finalPointsLeft.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="text-yellow-400 mt-1 text-sm" />
                    <p className="text-gray-200 text-sm">{point}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {finalPointsRight.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="text-yellow-400 mt-1 text-sm" />
                    <p className="text-gray-200 text-sm">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Award Title */}
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-yellow-400 leading-tight">
              {finalCoachName}
            </h2>
            <p className="text-gray-300 text-lg mt-1">{finalCoachTitle}</p>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-5 gap-2 mt-6">
            {finalImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="video preview"
                className="h-16 w-full object-cover rounded-md border border-gray-600 hover:scale-105 transition"
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <Link
              to={finalBtn1Link}
              className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition"
            >
              {finalBtn1Text}
            </Link>

            <Link
              to={finalBtn2Link}
              className="border border-gray-400 px-6 py-3 rounded font-semibold hover:bg-white hover:text-black transition"
            >
              {finalBtn2Text}
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <img
            src={finalMainImage}
            alt="Coach"
            className="rounded-xl object-cover h-[500px]"
          />
        </div>

      </div>
    </section>
  );
};

export default WebinarHeroSection;
