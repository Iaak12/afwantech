import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegram,
  FaPinterest,
} from "react-icons/fa";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
import API_BASE_URL from "../../config/api";

// Map platform names (lowercase) to icon + color
const PLATFORM_MAP = {
  facebook: { icon: <FaFacebookF />, bg: "#1877F2" },
  instagram: { icon: <FaInstagram />, bg: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)" },
  youtube: { icon: <FaYoutube />, bg: "#FF0000" },
  twitter: { icon: <FaXTwitter />, bg: "#000000" },
  x: { icon: <FaXTwitter />, bg: "#000000" },
  linkedin: { icon: <FaLinkedinIn />, bg: "#0A66C2" },
  whatsapp: { icon: <FaWhatsapp />, bg: "#25D366" },
  telegram: { icon: <FaTelegram />, bg: "#229ED9" },
  pinterest: { icon: <FaPinterest />, bg: "#E60023" },
  tiktok: { icon: <FaTiktok />, bg: "#010101" },
};

const SocialSidebar = () => {
  const [socials, setSocials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/social`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setSocials(data);
        }
      })
      .catch((err) => console.error("SocialSidebar fetch error:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading || socials.length === 0) return null;

  return (
    <div className="fixed right-0 top-1/3 z-50 hidden lg:flex flex-col gap-2">
      {socials.map((social) => {
        if (!social.url) return null;

        const key = social.platform?.toLowerCase().trim();
        const config = PLATFORM_MAP[key] || { icon: <FaShareAlt />, bg: "#123447" };

        return (
          <a
            key={social._id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            title={social.platform}
            className="text-white w-11 h-11 flex items-center justify-center rounded-l-full shadow-lg hover:scale-110 hover:w-14 transition-all duration-300 group"
            style={{ background: config.bg }}
          >
            <span className="group-hover:scale-125 transition-transform">
              {config.icon}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialSidebar;
