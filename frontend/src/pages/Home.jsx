
import HeroSection from "../components/home/HeroSection";
import WhySection from "../components/home/WhySection";
import TrustedSection from "../components/home/TrustedSection";
import UnlockSection from "../components/home/UnlockSection";
import CaseStudiesSection from "../components/home/CaseStudiesSection";
import WebinarHeroSection from "../components/home/WebinarHeroSection";
import ListenFromClients from "../components/home/ListenFromClients";
import BusinessServeSection from "../components/home/BusinessServeSection";
import WeBuildBrands from "../components/home/WeBuildBrands";
import DigitalMarketingTabs from "../components/home/DigitalMarketingTabs";
import IndustriesSection from "../components/home/IndustriesSection";
import StatsSection from "../components/home/StatsSection";
import TechnologySection from "../components/home/TechnologySection";
import NewsMediaSection from "../components/home/NewsMediaSection";
import LifeAtAfwanTech from "../components/home/LifeAtWebTechSathi";

import React, { useState, useEffect } from "react";

const Home = () => {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5005/api/pages/home")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.slug) {
          setPageData(data);
        }
      })
      .catch((err) => console.error("Error fetching home page data:", err));
  }, []);

  const getSectionData = (type) => {
    if (!pageData || !pageData.sections) return null;
    const section = pageData.sections.find((s) => s.type === type);
    return section ? section.data : null;
  };

  return (
    <>
      <HeroSection data={getSectionData("hero")} />
      <TrustedSection data={getSectionData("trusted")} />
      <WhySection data={getSectionData("why")} />
      <UnlockSection data={getSectionData("unlock")} />
      <CaseStudiesSection data={getSectionData("case_studies")} />
      <WebinarHeroSection data={getSectionData("webinar")} />
      <ListenFromClients data={getSectionData("clients")} />
      <BusinessServeSection data={getSectionData("business_serve")} />
      <WeBuildBrands data={getSectionData("brands")} />
      <DigitalMarketingTabs data={getSectionData("tabs")} />
      <IndustriesSection data={getSectionData("industries")} />
      <TechnologySection data={getSectionData("technology")} />
      <StatsSection data={getSectionData("stats")} />
      <NewsMediaSection data={getSectionData("news")} />
      <LifeAtAfwanTech data={getSectionData("life")} />
    </>
  );
};

export default Home;

