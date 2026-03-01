import { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../common/ScrollToTop";
import SocialSidebar from "./SocialSidebar";
import SEO from "../SEO";

const MainLayout = () => {
  const location = useLocation();
  const [seoData, setSeoData] = useState(null);

  useEffect(() => {
    // Generate slug from path, defaulting to 'home' for the root route
    let slug = location.pathname === '/' ? 'home' : location.pathname.substring(1);

    // For nested routes like /blog/:slug, you might want to handle it differently, 
    // but for top-level pages this works perfectly.

    fetch(`http://localhost:5005/api/pages/${slug}`)
      .then(res => res.json())
      .then(data => {
        if (data.metaTitle || data.metaDescription || data.keywords) {
          setSeoData({
            title: data.metaTitle || data.title,
            description: data.metaDescription || data.description,
            keywords: data.keywords
          });
        } else {
          setSeoData(null); // use default SEO values in the component
        }
      })
      .catch((err) => {
        console.warn("Could not fetch SEO data for slug: " + slug);
        setSeoData(null);
      });
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      {seoData ? (
        <SEO
          title={seoData.title}
          description={seoData.description}
          keywords={seoData.keywords}
          url={`https://afwantech.com${location.pathname}`}
        />
      ) : (
        <SEO url={`https://afwantech.com${location.pathname}`} />
      )}
      <Navbar />
      <SocialSidebar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;

