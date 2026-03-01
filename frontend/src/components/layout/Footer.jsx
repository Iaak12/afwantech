import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Static configuration for visual consistency
const SOCIAL_CONFIG = [
  {
    name: "Facebook",
    icon: <FaFacebookF />,
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
  },
  {
    name: "Youtube",
    icon: <FaYoutube />,
  },
  {
    name: "Twitter",
    icon: <FaXTwitter />,
  },
  {
    name: "Linkedin",
    icon: <FaLinkedinIn />,
  }
];

const Footer = () => {
  const [socialLinks, setSocialLinks] = useState({});

  useEffect(() => {
    const fetchSocials = async () => {
      try {
        const res = await fetch("http://localhost:5005/api/social");
        const data = await res.json();
        const linksObj = {};
        data.forEach(item => {
          linksObj[item.platform.toLowerCase()] = item.url;
        });
        setSocialLinks(linksObj);
      } catch (err) {
        console.error("Error fetching socials:", err);
      }
    };
    fetchSocials();
  }, []);

  return (
    <footer className="bg-gradient-to-r from-[#0b1f2d] to-[#1d3f54] text-white pt-16">

      <div className="container mx-auto px-6">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-gray-500">

          {/* Website */}
          <div>
            <h3 className="text-yellow-400 font-semibold mb-4 uppercase text-sm">
              Website
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-yellow-400 transition-colors"><Link to="/small-business-website">Small Business Website</Link></li>
              <li className="hover:text-yellow-400 transition-colors"><Link to="/customised-website-designing">Customised Website Designing</Link></li>
              <li className="hover:text-yellow-400 transition-colors"><Link to="/business-website-with-seo">Business Website with SEO</Link></li>
              <li className="hover:text-yellow-400 transition-colors"><Link to="/ecommerce-web-designing">eCommerce Web Designing</Link></li>
              <li className="hover:text-yellow-400 transition-colors"><Link to="/web-development">Web Development</Link></li>
              <li className="hover:text-yellow-400 transition-colors"><Link to="/landing-page-designing">Landing Page Designing</Link></li>
              <li className="hover:text-yellow-400 transition-colors"><Link to="/website-designing-by-industry">Responsive Web Designing</Link></li>
            </ul>
          </div>

          {/* Digital Marketing */}
          <div>
            <h3 className="text-yellow-400 font-semibold mb-4 uppercase text-sm">
              Digital Marketing
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-yellow-400 transition-colors"><Link to="/business-website-with-seo">Business Website with SEO</Link></li>
              <li className="hover:text-yellow-400 transition-colors"><Link to="/seo-services">SEO Services</Link></li>
              <li className="hover:text-yellow-400 transition-colors"><Link to="/seo-services">GMB SEO</Link></li>
              <li className="hover:text-yellow-400 transition-colors"><Link to="/content-marketing">Social Media Marketing</Link></li>
              <li className="hover:text-yellow-400 transition-colors"><Link to="/paid-ads-ppc">Paid Ads / PPC</Link></li>
              <li className="hover:text-yellow-400 transition-colors"><Link to="/email-marketing">Email Marketing</Link></li>
              <li className="hover:text-yellow-400 transition-colors"><Link to="/content-marketing">Content Marketing</Link></li>
            </ul>
          </div>

          {/* Branding */}
          <div>
            <h3 className="text-yellow-400 font-semibold mb-4 uppercase text-sm">
              Branding & PR
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-yellow-400 transition-colors"><Link to="/online-reputation-management">Online Reputation Management</Link></li>
              <li className="hover:text-yellow-400 transition-colors"><Link to="/pr-agency">PR Agency</Link></li>
              <li className="hover:text-yellow-400 transition-colors"><Link to="/pr-agency">Press Release Distribution</Link></li>
              <li className="hover:text-yellow-400 transition-colors"><Link to="/online-reputation-management">Brand Image Building</Link></li>
              <li className="hover:text-yellow-400 transition-colors"><Link to="/corporate-video-production">Corporate Film Makers</Link></li>
              <li className="hover:text-yellow-400 transition-colors"><Link to="/graphic-designing">Graphic Designing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-yellow-400 font-semibold mb-4 uppercase text-sm">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-yellow-400 transition-colors"><Link to="/about-us">About Afwan Tech</Link></li>
              <li className="hover:text-yellow-400 transition-colors"><Link to="/mission">Mission, Vision & Goals</Link></li>
              <li className="hover:text-yellow-400 transition-colors"><Link to="/clients">Our Clients</Link></li>
              <li className="hover:text-yellow-400 transition-colors"><Link to="/testimonials">Testimonials</Link></li>
              <li className="hover:text-yellow-400 transition-colors"><Link to="/awards">Awards & Achievements</Link></li>
              <li className="hover:text-yellow-400 transition-colors"><Link to="/contact">Contact Us</Link></li>
              <li className="hover:text-yellow-400 transition-colors"><Link to="/terms-conditions">Terms & Conditions</Link></li>
            </ul>
          </div>

        </div>

        {/* Office Locations */}
        <div className="py-12 border-b border-gray-500">
          <h3 className="text-lg font-semibold mb-6">Afwan Tech</h3>

          <div className="grid md:grid-cols-5 gap-6 text-sm text-gray-300">
            <div>
              <h4 className="text-yellow-400 mb-2">Delhi NCR</h4>
              <p>77/A Ram Road<br />New Delhi - 110005</p>
            </div>

            <div>
              <h4 className="text-yellow-400 mb-2">Ranchi</h4>
              <p>Harmu Road<br />Ranchi, Jharkhand</p>
            </div>

            <div>
              <h4 className="text-yellow-400 mb-2"> United Kingdom</h4>
              <p>27 Old Gloucester Street<br />London</p>
            </div>

            <div>
              <h4 className="text-yellow-400 mb-2">Australia</h4>
              <p>2 Alice Cres<br />Melbourne</p>
            </div>

            <div>
              <h4 className="text-yellow-400 mb-2">Canada</h4>
              <p>665 Kennedy Road<br />Ontario</p>
            </div>
          </div>
        </div>

        {/* Social & Payment */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-b border-gray-500">

          <div className="flex gap-4 text-lg mb-4 md:mb-0">
            {SOCIAL_CONFIG.map((platform) => {
              const link = socialLinks[platform.name.toLowerCase()];
              if (!link) return null;

              return (
                <a
                  key={platform.name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 cursor-pointer transition-colors"
                  title={platform.name}
                >
                  {platform.icon}
                </a>
              );
            })}
          </div>

          <div className="text-sm text-gray-300">
            Payment Methods: Visa • Mastercard • PayPal
          </div>

        </div>

        {/* Disclaimer */}
        <div className="bg-white text-gray-700 text-sm p-6 mt-8 rounded">
          <h4 className="font-semibold text-red-600 mb-2">
            Disclaimer for the Job-Seekers
          </h4>
          <p>
            Afwan Tech does not charge any fees from candidates in exchange
            for job offers. If anyone claims to represent our company and asks
            for payment, please report immediately.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm py-6">
          © {new Date().getFullYear()} Afwan Tech Solution Pvt Ltd.
          All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
