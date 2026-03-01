import React, { useState, useEffect } from "react";
import API_BASE_URL from "../../config/api";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaWhatsapp, FaTelegram, FaPinterest, FaShareAlt } from "react-icons/fa";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";

// Map platform names (lowercase) to icon
const PLATFORM_MAP = {
  facebook: <FaFacebookF />,
  instagram: <FaInstagram />,
  youtube: <FaYoutube />,
  twitter: <FaXTwitter />,
  x: <FaXTwitter />,
  linkedin: <FaLinkedinIn />,
  whatsapp: <FaWhatsapp />,
  telegram: <FaTelegram />,
  pinterest: <FaPinterest />,
  tiktok: <FaTiktok />,
};

const Footer = () => {
  const [socialLinks, setSocialLinks] = useState({});
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        // Fetch Header & Footer settings
        const settingsRes = await fetch(`${API_BASE_URL}/api/header-footer`);
        const settingsData = await settingsRes.json();
        setSettings(settingsData);

        // Fetch Social links
        const socialRes = await fetch(`${API_BASE_URL}/api/social`);
        const socialData = await socialRes.json();
        const linksObj = {};
        socialData.forEach(item => {
          linksObj[item.platform.toLowerCase()] = item.url;
        });
        setSocialLinks(linksObj);
      } catch (err) {
        console.error("Error fetching footer data:", err);
      }
    };
    fetchFooterData();
  }, []);

  const footerLogo = settings?.footerLogo;
  const officeLocations = settings?.footerOfficeLocations || [];
  const disclaimerTitle = settings?.footerDisclaimerTitle || 'Disclaimer for the Job-Seekers';
  const disclaimerText = settings?.footerDisclaimerText || 'Afwan Tech does not charge any fees from candidates in exchange for job offers. If anyone claims to represent our company and asks for payment, please report immediately.';
  const copyrightText = settings?.footerCopyrightText || 'Afwan Tech Solution Pvt Ltd. All Rights Reserved.';

  // Fallback links if no dynamic links are loaded yet
  const defaultLinkSections = [
    {
      category: 'Website',
      links: [
        { label: 'Small Business Website', url: '/small-business-website' },
        { label: 'Customised Website Designing', url: '/customised-website-designing' },
        { label: 'Business Website with SEO', url: '/business-website-with-seo' },
        { label: 'eCommerce Web Designing', url: '/ecommerce-web-designing' },
        { label: 'Web Development', url: '/web-development' },
        { label: 'Landing Page Designing', url: '/landing-page-designing' },
        { label: 'Responsive Web Designing', url: '/website-designing-by-industry' }
      ]
    },
    {
      category: 'Digital Marketing',
      links: [
        { label: 'Business Website with SEO', url: '/business-website-with-seo' },
        { label: 'SEO Services', url: '/seo-services' },
        { label: 'GMB SEO', url: '/seo-services' },
        { label: 'Social Media Marketing', url: '/content-marketing' },
        { label: 'Paid Ads / PPC', url: '/paid-ads-ppc' },
        { label: 'Email Marketing', url: '/email-marketing' },
        { label: 'Content Marketing', url: '/content-marketing' }
      ]
    },
    {
      category: 'Branding & PR',
      links: [
        { label: 'Online Reputation Management', url: '/online-reputation-management' },
        { label: 'PR Agency', url: '/pr-agency' },
        { label: 'Press Release Distribution', url: '/pr-agency' },
        { label: 'Brand Image Building', url: '/online-reputation-management' },
        { label: 'Corporate Film Makers', url: '/corporate-video-production' },
        { label: 'Graphic Designing', url: '/graphic-designing' }
      ]
    },
    {
      category: 'Company',
      links: [
        { label: 'About Afwan Tech', url: '/about-us' },
        { label: 'Mission, Vision & Goals', url: '/mission' },
        { label: 'Our Clients', url: '/clients' },
        { label: 'Testimonials', url: '/testimonials' },
        { label: 'Awards & Achievements', url: '/awards' },
        { label: 'Contact Us', url: '/contact' },
        { label: 'Terms & Conditions', url: '/terms-conditions' }
      ]
    }
  ];

  const linkSections = settings?.footerLinkSections && settings.footerLinkSections.length > 0
    ? settings.footerLinkSections
    : defaultLinkSections;

  return (
    <footer className="bg-gradient-to-r from-[#0b1f2d] to-[#1d3f54] text-white pt-16">

      <div className="container mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-gray-500">
          {linkSections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-yellow-400 font-black mb-6 uppercase text-[10px] tracking-[0.2em]">
                {section.category}
              </h3>
              <ul className="space-y-3 text-sm text-gray-300">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx} className="hover:text-yellow-400 transition-all hover:translate-x-1 duration-300">
                    <Link to={link.url}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Office Locations */}
        <div className="py-12 border-b border-gray-500">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            {footerLogo && <img src={footerLogo} alt="Afwan Tech" className="h-12 object-contain" />}
            <h3 className="text-xl font-black tracking-tight">Afwan Tech</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 text-sm text-gray-300">
            {officeLocations.map((loc, idx) => (
              <div key={idx} className="group">
                <h4 className="text-yellow-400 font-black uppercase tracking-widest text-[10px] mb-3 group-hover:text-yellow-300 transition-colors">
                  {loc.title}
                </h4>
                <p className="leading-relaxed whitespace-pre-line">{loc.address}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social & Payment */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-b border-gray-500">
          {/* Social Links */}
          <div className="flex space-x-4">
            {Object.entries(socialLinks).map(([platform, url]) => {
              const icon = PLATFORM_MAP[platform] || <FaShareAlt />;
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#123447] flex items-center justify-center hover:bg-yellow-400 hover:text-[#123447] transition-all duration-300 border border-gray-600 shadow-md"
                  title={platform}
                >
                  {icon}
                </a>
              );
            })}
          </div>

          <div className="text-sm text-gray-300">
            Payment Methods: Visa • Mastercard • PayPal
          </div>

        </div>

        {/* Disclaimer */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-sm text-gray-300 text-sm p-8 mt-12 rounded-[2rem] shadow-inner">
          <h4 className="font-black text-red-500 uppercase tracking-[0.2em] text-[10px] mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
            {disclaimerTitle}
          </h4>
          <p className="leading-relaxed opacity-80">
            {disclaimerText}
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em] py-10 opacity-60">
          © {new Date().getFullYear()} {copyrightText}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
