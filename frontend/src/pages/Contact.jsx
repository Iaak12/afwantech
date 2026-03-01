import React, { useState, useEffect } from "react";
import API_BASE_URL from "../config/api";
import Breadcrumb from "../components/common/Breadcrumb";
import ContactSection from "../components/common/ContactSection";
import StatsSection from "../components/home/StatsSection";
import GenericContent from "../components/home/GenericContent";
import SEO from "../components/SEO";

const Contact = () => {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/pages/contact`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.slug) {
          setPageData(data);
        }
      })
      .catch((err) => console.error("Error fetching contact page data:", err));
  }, []);

  if (!pageData) {
    return (
      <>
        <Breadcrumb currentPage="Contact" />
        <ContactSection />
      </>
    );
  }

  const renderSection = (section) => {
    switch (section.type) {
      case "contact_section":
        return <ContactSection data={section.data} />;
      case "stats":
        return <StatsSection data={section.data} />;
      case "content":
        return <GenericContent data={section.data} />;
      default:
        return null;
    }
  };

  return (
    <>
      <SEO
        title={pageData.metaTitle}
        description={pageData.metaDescription}
        keywords={pageData.keywords}
      />
      <Breadcrumb currentPage={pageData.title || "Contact"} />
      {pageData.sections && pageData.sections.map((section, index) => (
        <React.Fragment key={index}>
          {renderSection(section)}
        </React.Fragment>
      ))}
    </>
  );
};

export default Contact;

