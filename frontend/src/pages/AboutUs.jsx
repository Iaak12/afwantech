import React, { useState, useEffect } from "react";
import AboutHero from "../components/about/AboutHero";
import AboutIntro from "../components/about/AboutIntro";
import AboutWhyUs from "../components/about/AboutWhyUs";
import AboutTeam from "../components/about/AboutTeam";
import AboutProcess from "../components/about/AboutProcess";
import AboutStats from "../components/about/AboutStats";
import AboutCTA from "../components/about/AboutCTA";
import API_BASE_URL from "../config/api";

const AboutUs = () => {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/pages/about-us`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.slug) {
          setPageData(data);
        }
      })
      .catch((err) => console.error("Error fetching about us page data:", err));
  }, []);

  const getSectionData = (type) => {
    if (!pageData || !pageData.sections) return null;
    const section = pageData.sections.find((s) => s.type === type);
    return section ? section.data : null;
  };

  return (
    <>
      <AboutHero data={getSectionData("about_hero")} />
      <AboutIntro data={getSectionData("about_intro")} />
      <AboutWhyUs data={getSectionData("about_why")} />
      <AboutTeam data={getSectionData("about_team")} />
      <AboutProcess data={getSectionData("about_process")} />
      <AboutStats data={getSectionData("about_stats")} />
      <AboutCTA data={getSectionData("about_cta")} />
    </>
  );
};

export default AboutUs;

