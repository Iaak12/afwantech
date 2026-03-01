import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const WebinarHeroSection = ({ data }) => {
  const defaultPointsLeft = [
    "Establish a strong online presence",
    "Generate genuine B2B leads",
    "Enhance your online reputation",
  ];

  const defaultPointsRight = [
    "Drive more website traffic",
    "Boost sales and turnover",
    "Build the personal brand image of the founder",
  ];

  const defaultThumbnails = [
    "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321642/webtechsathi/u0q5v1v81fjvzfggrncz.jpg",
    "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321643/webtechsathi/lk4gcnbrdm3fpxgpey9k.jpg",
    "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321645/webtechsathi/a08gcydwujdqabyctbim.jpg",
    "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321646/webtechsathi/qghh0ob4cbbzgryxyczg.jpg",
    "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321647/webtechsathi/rtxbtzuogkitcw4xqcwi.jpg",
    "https://images.unsplash.com/photo-1581090700227-1e8a0b61e8f1",
  ];

  const finalTitle = data?.title || "Business Growth Formula Webinar";
  const finalDescription = data?.description || "Join the Founder & CEO to unlock the Business Growth Formula.";
  const finalSchedule = data?.schedule || "📅 Every Tuesday | ⏰ 11am to 12 Noon | On Zoom";
  const finalPointsLeft = data?.pointsLeft || defaultPointsLeft;
  const finalPointsRight = data?.pointsRight || defaultPointsRight;
  const finalQuote = data?.quote || "Achieve business success and take your place among the top 5% of successful entrepreneurs. Don't miss this opportunity!";
  const finalCoachName = data?.coachName || "Rahul Ranjan Singh - Awarded Best Business Growth Coach in India";
  const finalThumbnails = data?.thumbnails || defaultThumbnails;
  const finalMainImage = data?.mainImage || "https://res.cloudinary.com/dx0wvjqmg/image/upload/v1772321648/webtechsathi/j6eqfpatinfkfiujltia.jpg";
  const finalBtnPrimaryText = data?.btnPrimaryText || "Book Your Slot Now →";
  const finalBtnSecondaryText = data?.btnSecondaryText || "Read Story →";
  const finalBtnPrimaryLink = data?.btnPrimaryLink || "/contact";
  const finalBtnSecondaryLink = data?.btnSecondaryLink || "/contact";

  return (
    <section className="bg-gradient-to-r from-[#0b2233] to-[#1b3f55] text-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
            {finalTitle}
          </h1>

          <div className="mt-4 text-lg text-gray-200" dangerouslySetInnerHTML={{ __html: finalDescription }} />

          <p className="mt-2 text-sm text-gray-300">
            {finalSchedule}
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

          {/* Highlight Line */}
          <p className="mt-8 text-sm text-gray-300 pr-10">
            {finalQuote}
          </p>

          {/* Award Title */}
          <h2 className="mt-6 text-3xl font-bold text-yellow-400">
            {finalCoachName.split('-').map((t, i) => i === 0 ? <span key={i}>{t} - <br /></span> : <span key={i}>{t}</span>)}
          </h2>

          {/* Thumbnails */}
          <div className="grid grid-cols-6 gap-2 mt-6">
            {finalThumbnails.map((img, i) => (
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
              to={finalBtnPrimaryLink}
              className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition"
            >
              {finalBtnPrimaryText}
            </Link>

            <Link
              to={finalBtnSecondaryLink}
              className="border border-gray-400 px-6 py-3 rounded font-semibold hover:bg-white hover:text-black transition"
            >
              {finalBtnSecondaryText}
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
