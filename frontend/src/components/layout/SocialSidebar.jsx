import React, { useState, useEffect } from "react";
import API_BASE_URL from "../../config/api";
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
    backgroundColor: "#1877F2",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    backgroundColor: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
  },
  {
    name: "Youtube",
    icon: <FaYoutube />,
    backgroundColor: "#FF0000",
  },
  {
    name: "Twitter",
    icon: <FaXTwitter />,
    backgroundColor: "#000000",
  },
  {
    name: "Linkedin",
    icon: <FaLinkedinIn />,
    backgroundColor: "#0A66C2",
  }
];

const SocialSidebar = () => {
  const [socialLinks, setSocialLinks] = useState({});

  useEffect(() => {
    const fetchSocials = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/social`);
        const data = await res.json();
        // Convert array to platform-keyed object for easy lookup
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
    <div className="fixed right-0 top-1/3 z-50 flex flex-col gap-3">
      {SOCIAL_CONFIG.map((platform) => {
        const link = socialLinks[platform.name.toLowerCase()];
        if (!link) return null; // Only show if link exists in backend

        return (
          <a
            key={platform.name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white w-12 h-12 flex items-center justify-center rounded-l-full shadow-lg hover:scale-110 transition duration-300"
            style={{ background: platform.backgroundColor }}
          >
            {platform.icon}
          </a>
        );
      })}
    </div>
  );
};

export default SocialSidebar;

