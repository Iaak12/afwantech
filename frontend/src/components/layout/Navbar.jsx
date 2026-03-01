import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaChevronDown,
  FaGlobe,
  FaPaintBrush,
  FaSearch,
  FaShoppingCart,
  FaCode,
  FaIndustry,
  FaFileCode,
  FaWindowMaximize,
  FaBullhorn,
  FaEnvelope,
  FaMobileAlt,
  FaUsers,
  FaVideo,
  FaNewspaper,
} from "react-icons/fa";

import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className="w-full relative z-50">

      {/* ===== TOP BAR ===== */}
      <div className="bg-black text-white text-sm px-6 py-2 flex justify-between items-center">
        <p>Afwan Tech Has Been Named "Best SEO Company of the Year"</p>

        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <FaPhoneAlt /> +91-98688-98788
          </span>

          <Link to="/franchise" className="bg-blue-500 px-3 py-1 rounded text-xs">
            Franchise Opportunity
          </Link>

          <Link
            to="/careers"
            className="bg-yellow-400 text-black px-3 py-1 rounded text-xs font-semibold"
          >
            WE ARE HIRING
          </Link>
        </div>
      </div>

      {/* ===== MAIN NAVBAR ===== */}
      <nav className="relative bg-gradient-to-r from-[#0b1f2d] to-[#1d3f54] text-white px-10 py-4">
        <div className="flex justify-between items-center">

          {/* LOGO */}
          <Link to="/">
            <img src={logo} alt="Afwan Tech" className="h-16 md:h-20 object-contain drop-shadow-md" />
          </Link>

          {/* MENU */}
          <ul className="flex gap-8 font-medium">

            {/* ================= WEBSITE ================= */}
            <li className="relative group pb-4 flex items-center gap-1 cursor-pointer">
              WEBSITE <FaChevronDown size={12} />

              <div className="absolute left-1/2 -translate-x-1/2 top-full 
              hidden group-hover:block bg-white text-black 
              rounded-xl shadow-xl p-6 w-[700px] max-w-[90vw]">

                <div className="grid grid-cols-2 gap-6 text-sm">

                  <div className="space-y-3">
                    <Link to="/small-business-website" className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded">
                      <FaGlobe className="text-blue-500" />
                      Small Business Website
                    </Link>

                    <Link to="/customised-website-designing" className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded">
                      <FaPaintBrush className="text-green-500" />
                      Customised Website Designing
                    </Link>

                    <Link to="/business-website-with-seo" className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded">
                      <FaSearch className="text-purple-500" />
                      Business Website With SEO
                    </Link>

                    <Link to="/ecommerce-web-designing" className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded">
                      <FaShoppingCart className="text-pink-500" />
                      Ecommerce Web Designing
                    </Link>
                  </div>

                  <div className="space-y-3">
                    <Link to="/web-development" className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded">
                      <FaCode className="text-indigo-500" />
                      Web Development
                    </Link>

                    <Link to="/website-designing-by-industry" className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded">
                      <FaIndustry className="text-orange-500" />
                      Website Designing By Industry
                    </Link>

                    <Link to="/psd-to-html" className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded">
                      <FaFileCode className="text-red-500" />
                      PSD to HTML Conversion
                    </Link>

                    <Link to="/landing-page-designing" className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded">
                      <FaWindowMaximize className="text-teal-500" />
                      Landing Page Designing
                    </Link>
                  </div>

                </div>
              </div>
            </li>

            {/* ================= DIGITAL MARKETING ================= */}
            <li className="relative group pb-4 flex items-center gap-1 cursor-pointer">
              DIGITAL MARKETING <FaChevronDown size={12} />

              <div className="absolute left-1/2 -translate-x-1/2 top-full 
              hidden group-hover:block bg-white text-black 
              rounded-xl shadow-xl p-6 w-[700px] max-w-[90vw]">

                <div className="grid grid-cols-2 gap-6 text-sm">

                  <div className="space-y-3">
                    <Link to="/seo-services" className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded">
                      <FaSearch className="text-blue-500" />
                      SEO Services
                    </Link>

                    <Link to="/paid-ads-ppc" className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded">
                      <FaBullhorn className="text-red-500" />
                      Paid Ads / PPC
                    </Link>

                    <Link to="/email-marketing" className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded">
                      <FaEnvelope className="text-purple-500" />
                      Email Marketing
                    </Link>
                  </div>

                  <div className="space-y-3">
                    <Link to="/sms-marketing" className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded">
                      <FaMobileAlt className="text-green-500" />
                      SMS Marketing
                    </Link>

                    <Link to="/content-marketing" className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded">
                      <FaUsers className="text-indigo-500" />
                      Content Marketing
                    </Link>

                    <Link to="/digital-marketing-by-industry" className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded">
                      <FaGlobe className="text-orange-500" />
                      Digital Marketing By Industry
                    </Link>
                  </div>

                </div>
              </div>
            </li>

            {/* ================= BRANDING ================= */}
            <li className="relative group pb-4 flex items-center gap-1 cursor-pointer">
              BRANDING & PR <FaChevronDown size={12} />

              <div className="absolute left-1/2 -translate-x-1/2 top-full 
              hidden group-hover:block bg-white text-black 
              rounded-xl shadow-xl p-6 w-[700px] max-w-[90vw]">

                <div className="grid grid-cols-2 gap-6 text-sm">

                  <div className="space-y-3">
                    <Link to="/online-reputation-management" className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded">
                      <FaUsers className="text-blue-500" />
                      Online Reputation Management
                    </Link>

                    <Link to="/pr-agency" className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded">
                      <FaNewspaper className="text-green-500" />
                      PR Agency
                    </Link>
                  </div>

                  <div className="space-y-3">
                    <Link to="/corporate-video-production" className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded">
                      <FaVideo className="text-red-500" />
                      Corporate Video Production
                    </Link>

                    <Link to="/graphic-designing" className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded">
                      <FaPaintBrush className="text-pink-500" />
                      Graphic Designing
                    </Link>
                  </div>

                </div>
              </div>
            </li>

            {/* ================= PACKAGES ================= */}
            <li className="relative group pb-4 flex items-center gap-1 cursor-pointer">
              PACKAGES <FaChevronDown size={12} />

              <div className="absolute left-1/2 -translate-x-1/2 top-full 
              hidden group-hover:block bg-white text-black 
              rounded-xl shadow-xl p-6 w-[700px] max-w-[90vw]">

                <div className="grid grid-cols-2 gap-6 text-sm">

                  <div className="space-y-3">
                    <h4 className="font-semibold text-green-600 mb-2">
                      WEBSITE PACKAGES
                    </h4>

                    <Link to="/small-business-website-package" className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded">
                      <FaGlobe className="text-blue-500" />
                      Small Business Website Package
                    </Link>

                    <Link to="/business-website-with-seo-package" className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded">
                      <FaSearch className="text-purple-500" />
                      Business Website With SEO Package
                    </Link>

                    <Link to="/ecommerce-web-designing-package" className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded">
                      <FaShoppingCart className="text-pink-500" />
                      Ecommerce Web Designing Package
                    </Link>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-green-600 mb-2">
                      DIGITAL MARKETING PACKAGES
                    </h4>

                    <Link to="/seo-package" className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded">
                      <FaBullhorn className="text-red-500" />
                      SEO Search Engine Optimisation Package
                    </Link>
                  </div>

                </div>
              </div>
            </li>

            {/* ================= COMPANY ================= */}
            <li className="relative group pb-4 flex items-center gap-1 cursor-pointer">
              COMPANY <FaChevronDown size={12} />

              <div className="absolute left-1/2 -translate-x-1/2 top-full 
              hidden group-hover:block bg-white text-black 
              shadow-lg rounded w-64 p-4 space-y-2 text-sm">

                <Link to="/about-us" className="block hover:bg-gray-100 p-2 rounded">About Afwan Tech</Link>
                <Link to="/mission" className="block hover:bg-gray-100 p-2 rounded">Mission, Vision & Goals</Link>
                <Link to="/why-us" className="block hover:bg-gray-100 p-2 rounded">Why Afwan Tech</Link>
                <Link to="/clients" className="block hover:bg-gray-100 p-2 rounded">Our Clients</Link>
                <Link to="/testimonials" className="block hover:bg-gray-100 p-2 rounded">Testimonials</Link>
                <Link to="/awards" className="block hover:bg-gray-100 p-2 rounded">Awards & Achievements</Link>
                <Link to="/blogs" className="block hover:bg-gray-100 p-2 rounded">Blogs</Link>
                <Link to="/news" className="block hover:bg-gray-100 p-2 rounded">News & Events</Link>
              </div>
            </li>

            {/* ================= OUR WORK ================= */}
            <li className="relative group pb-4 flex items-center gap-1 cursor-pointer">
              OUR WORK <FaChevronDown size={12} />

              <div className="absolute left-1/2 -translate-x-1/2 top-full 
              hidden group-hover:block bg-white text-black 
              shadow-lg rounded w-64 p-4 space-y-2 text-sm">

                <Link to="/web-portfolio" className="block hover:bg-gray-100 p-2 rounded">Web Designing Portfolio</Link>
                <Link to="/seo-portfolio" className="block hover:bg-gray-100 p-2 rounded">SEO Portfolio</Link>
                <Link to="/graphic-portfolio" className="block hover:bg-gray-100 p-2 rounded">Graphic Design Portfolio</Link>
                <Link to="/video-portfolio" className="block hover:bg-gray-100 p-2 rounded">Video Production Portfolio</Link>
              </div>
            </li>

            <li>
              <Link to="/contact">CONTACT</Link>
            </li>

          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

