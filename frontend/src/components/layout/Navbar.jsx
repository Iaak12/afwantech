import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API_BASE_URL from "../../config/api";
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
  FaBars,
  FaTimes
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../../assets/logo.png";

const Navbar = () => {
  const [settings, setSettings] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/header-footer`)
      .then(res => res.json())
      .then(data => setSettings(data))
      .catch(err => console.error("Error fetching header settings:", err));
  }, []);

  const headerLogo = settings?.headerLogo || logo;
  const phone = settings?.headerPhone || "+91-98688-98788";
  const topText = settings?.headerTopBarText || 'Afwan Tech Has Been Named "Best SEO Company of the Year"';

  return (
    <header className="w-full relative z-50">

      {/* ===== TOP BAR ===== */}
      <div className="bg-black text-white text-[10px] sm:text-sm px-4 sm:px-6 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-center sm:text-left">{topText}</p>

        <div className="flex items-center gap-2 sm:gap-4 scale-90 sm:scale-100">
          <span className="flex items-center gap-1 sm:gap-2 whitespace-nowrap">
            <FaPhoneAlt /> {phone}
          </span>

          <Link to="/franchise" className="bg-blue-500 px-2 sm:px-3 py-1 rounded text-[10px] sm:text-xs">
            Franchise
          </Link>

          <Link
            to="/careers"
            className="bg-yellow-400 text-black px-2 sm:px-3 py-1 rounded text-[10px] sm:text-xs font-semibold"
          >
            HIRING
          </Link>
        </div>
      </div>

      {/* ===== MAIN NAVBAR ===== */}
      <nav className="relative bg-gradient-to-r from-[#0b1f2d] to-[#1d3f54] text-white px-6 lg:px-10 py-4">
        <div className="flex justify-between items-center">

          {/* LOGO */}
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img src={headerLogo} alt="Afwan Tech" className="h-12 md:h-16 lg:h-20 object-contain drop-shadow-md" />
          </Link>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden text-white p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex gap-8 font-medium">

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
                <Link to="/faq" className="block hover:bg-gray-100 p-2 rounded text-blue-600 font-semibold">FAQ</Link>
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

        {/* MOBILE MENU DRAWER */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 top-[100px] bg-[#0b1f2d] z-[100] lg:hidden overflow-y-auto pb-20"
            >
              <div className="px-6 py-8 space-y-4">
                {/* WEBSITE DROPDOWN */}
                <div className="border-b border-white/10 pb-2">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'web' ? null : 'web')}
                    className="w-full flex justify-between items-center py-3 text-lg font-bold uppercase tracking-wider"
                  >
                    Website <FaChevronDown className={`transition-transform duration-300 ${activeDropdown === 'web' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === 'web' && (
                    <div className="mt-2 grid grid-cols-1 gap-2 pl-4 pb-4 bg-white/5 rounded-lg p-3">
                      <Link onClick={() => setIsMenuOpen(false)} to="/small-business-website" className="flex items-center gap-3 py-2 text-sm"><FaGlobe className="text-blue-400" /> Small Business Website</Link>
                      <Link onClick={() => setIsMenuOpen(false)} to="/customised-website-designing" className="flex items-center gap-3 py-2 text-sm"><FaPaintBrush className="text-green-400" /> Customised Designing</Link>
                      <Link onClick={() => setIsMenuOpen(false)} to="/business-website-with-seo" className="flex items-center gap-3 py-2 text-sm"><FaSearch className="text-purple-400" /> Business Website With SEO</Link>
                      <Link onClick={() => setIsMenuOpen(false)} to="/ecommerce-web-designing" className="flex items-center gap-3 py-2 text-sm"><FaShoppingCart className="text-pink-400" /> Ecommerce Web Designing</Link>
                      <Link onClick={() => setIsMenuOpen(false)} to="/web-development" className="flex items-center gap-3 py-2 text-sm"><FaCode className="text-indigo-400" /> Web Development</Link>
                      <Link onClick={() => setIsMenuOpen(false)} to="/website-designing-by-industry" className="flex items-center gap-3 py-2 text-sm"><FaIndustry className="text-orange-400" /> Designing By Industry</Link>
                      <Link onClick={() => setIsMenuOpen(false)} to="/psd-to-html" className="flex items-center gap-3 py-2 text-sm"><FaFileCode className="text-red-400" /> PSD to HTML</Link>
                      <Link onClick={() => setIsMenuOpen(false)} to="/landing-page-designing" className="flex items-center gap-3 py-2 text-sm"><FaWindowMaximize className="text-teal-400" /> Landing Page Designing</Link>
                    </div>
                  )}
                </div>

                {/* DIGITAL MARKETING DROPDOWN */}
                <div className="border-b border-white/10 pb-2">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'marketing' ? null : 'marketing')}
                    className="w-full flex justify-between items-center py-3 text-lg font-bold uppercase tracking-wider"
                  >
                    Digital Marketing <FaChevronDown className={`transition-transform duration-300 ${activeDropdown === 'marketing' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === 'marketing' && (
                    <div className="mt-2 grid grid-cols-1 gap-2 pl-4 pb-4 bg-white/5 rounded-lg p-3">
                      <Link onClick={() => setIsMenuOpen(false)} to="/seo-services" className="flex items-center gap-3 py-2 text-sm"><FaSearch className="text-blue-400" /> SEO Services</Link>
                      <Link onClick={() => setIsMenuOpen(false)} to="/paid-ads-ppc" className="flex items-center gap-3 py-2 text-sm"><FaBullhorn className="text-red-400" /> Paid Ads / PPC</Link>
                      <Link onClick={() => setIsMenuOpen(false)} to="/email-marketing" className="flex items-center gap-3 py-2 text-sm"><FaEnvelope className="text-purple-400" /> Email Marketing</Link>
                      <Link onClick={() => setIsMenuOpen(false)} to="/sms-marketing" className="flex items-center gap-3 py-2 text-sm"><FaMobileAlt className="text-green-400" /> SMS Marketing</Link>
                      <Link onClick={() => setIsMenuOpen(false)} to="/content-marketing" className="flex items-center gap-3 py-2 text-sm"><FaUsers className="text-indigo-400" /> Content Marketing</Link>
                      <Link onClick={() => setIsMenuOpen(false)} to="/digital-marketing-by-industry" className="flex items-center gap-3 py-2 text-sm"><FaGlobe className="text-orange-400" /> Marketing By Industry</Link>
                    </div>
                  )}
                </div>

                {/* BRANDING & PR DROPDOWN */}
                <div className="border-b border-white/10 pb-2">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'branding' ? null : 'branding')}
                    className="w-full flex justify-between items-center py-3 text-lg font-bold uppercase tracking-wider"
                  >
                    Branding & PR <FaChevronDown className={`transition-transform duration-300 ${activeDropdown === 'branding' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === 'branding' && (
                    <div className="mt-2 grid grid-cols-1 gap-2 pl-4 pb-4 bg-white/5 rounded-lg p-3">
                      <Link onClick={() => setIsMenuOpen(false)} to="/online-reputation-management" className="flex items-center gap-3 py-2 text-sm"><FaUsers className="text-blue-400" /> Online Reputation (ORM)</Link>
                      <Link onClick={() => setIsMenuOpen(false)} to="/pr-agency" className="flex items-center gap-3 py-2 text-sm"><FaNewspaper className="text-green-400" /> PR Agency</Link>
                      <Link onClick={() => setIsMenuOpen(false)} to="/corporate-video-production" className="flex items-center gap-3 py-2 text-sm"><FaVideo className="text-red-400" /> Video Production</Link>
                      <Link onClick={() => setIsMenuOpen(false)} to="/graphic-designing" className="flex items-center gap-3 py-2 text-sm"><FaPaintBrush className="text-pink-400" /> Graphic Designing</Link>
                    </div>
                  )}
                </div>

                {/* PACKAGES DROPDOWN */}
                <div className="border-b border-white/10 pb-2">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'packages' ? null : 'packages')}
                    className="w-full flex justify-between items-center py-3 text-lg font-bold uppercase tracking-wider"
                  >
                    Packages <FaChevronDown className={`transition-transform duration-300 ${activeDropdown === 'packages' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === 'packages' && (
                    <div className="mt-2 grid grid-cols-1 gap-2 pl-4 pb-4 bg-white/5 rounded-lg p-3">
                      <p className="text-xs font-bold text-yellow-400 px-2 mt-2">WEBSITE PACKAGES</p>
                      <Link onClick={() => setIsMenuOpen(false)} to="/small-business-website-package" className="flex items-center gap-3 py-2 text-sm pl-4">Small Business Package</Link>
                      <Link onClick={() => setIsMenuOpen(false)} to="/business-website-with-seo-package" className="flex items-center gap-3 py-2 text-sm pl-4">Business with SEO Package</Link>
                      <Link onClick={() => setIsMenuOpen(false)} to="/ecommerce-web-designing-package" className="flex items-center gap-3 py-2 text-sm pl-4">Ecommerce Package</Link>
                      <p className="text-xs font-bold text-yellow-400 px-2 mt-4">MARKETING PACKAGES</p>
                      <Link onClick={() => setIsMenuOpen(false)} to="/seo-package" className="flex items-center gap-3 py-2 text-sm pl-4">SEO Optimization Package</Link>
                    </div>
                  )}
                </div>

                {/* COMPANY DROPDOWN */}
                <div className="border-b border-white/10 pb-2">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'company' ? null : 'company')}
                    className="w-full flex justify-between items-center py-3 text-lg font-bold uppercase tracking-wider"
                  >
                    Company <FaChevronDown className={`transition-transform duration-300 ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === 'company' && (
                    <div className="mt-2 grid grid-cols-2 gap-4 pl-4 pb-4 bg-white/5 rounded-lg p-3">
                      <Link onClick={() => setIsMenuOpen(false)} to="/about-us" className="text-sm py-1">About Us</Link>
                      <Link onClick={() => setIsMenuOpen(false)} to="/mission" className="text-sm py-1">Mission & Vision</Link>
                      <Link onClick={() => setIsMenuOpen(false)} to="/why-us" className="text-sm py-1">Why Us</Link>
                      <Link onClick={() => setIsMenuOpen(false)} to="/clients" className="text-sm py-1">Our Clients</Link>
                      <Link onClick={() => setIsMenuOpen(false)} to="/testimonials" className="text-sm py-1">Testimonials</Link>
                      <Link onClick={() => setIsMenuOpen(false)} to="/awards" className="text-sm py-1">Awards</Link>
                      <Link onClick={() => setIsMenuOpen(false)} to="/faq" className="text-sm py-1 text-yellow-400 font-bold">FAQ</Link>
                      <Link onClick={() => setIsMenuOpen(false)} to="/blogs" className="text-sm py-1">Blogs</Link>
                      <Link onClick={() => setIsMenuOpen(false)} to="/news" className="text-sm py-1">News & Events</Link>
                    </div>
                  )}
                </div>

                {/* OUR WORK DROPDOWN */}
                <div className="border-b border-white/10 pb-2">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'work' ? null : 'work')}
                    className="w-full flex justify-between items-center py-3 text-lg font-bold uppercase tracking-wider"
                  >
                    Our Work <FaChevronDown className={`transition-transform duration-300 ${activeDropdown === 'work' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === 'work' && (
                    <div className="mt-2 grid grid-cols-1 gap-2 pl-4 pb-4 bg-white/5 rounded-lg p-3">
                      <Link onClick={() => setIsMenuOpen(false)} to="/web-portfolio" className="text-sm py-2">Web Designing Portfolio</Link>
                      <Link onClick={() => setIsMenuOpen(false)} to="/seo-portfolio" className="text-sm py-2">SEO Portfolio</Link>
                      <Link onClick={() => setIsMenuOpen(false)} to="/graphic-portfolio" className="text-sm py-2">Graphic Design Portfolio</Link>
                      <Link onClick={() => setIsMenuOpen(false)} to="/video-portfolio" className="text-sm py-2">Video Production Portfolio</Link>
                    </div>
                  )}
                </div>

                {/* DIRECT LINKS */}
                <Link onClick={() => setIsMenuOpen(false)} to="/contact" className="block text-lg font-bold uppercase tracking-wider py-4 border-b border-white/10">Contact Us</Link>

                <div className="pt-8 flex justify-center">
                  <a href={`tel:${phone}`} className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform active:scale-95">
                    <FaPhoneAlt /> CALL US NOW
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;

