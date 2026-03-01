import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions";
import Franchise from "../pages/Franchise";
import Careers from "../pages/Careers";

// Website service pages
import SmallBusinessWebsite from "../pages/website/SmallBusinessWebsite";
import BusinessWebsiteWithSEO from "../pages/website/BusinessWebsiteWithSEO";
import CustomisedWebsiteDesigning from "../pages/website/CustomisedWebsiteDesigning";
import EcommerceWebsite from "../pages/website/EcommerceWebsite";
import WebDevelopment from "../pages/website/WebDevelopment";
import WebsiteDesignByIndustry from "../pages/website/WebsiteDesignByIndustry";
import PSDToHTML from "../pages/website/PSDToHTML";
import LandingPageDesigning from "../pages/website/LandingPageDesigning";

// Digital marketing service pages
import SEOServices from "../pages/digitalMarketing/SEOServices";
import PaidAds from "../pages/digitalMarketing/PaidAds";
import EmailMarketing from "../pages/digitalMarketing/EmailMarketing";
import SMSMarketing from "../pages/digitalMarketing/SMSMarketing";
import ContentMarketing from "../pages/digitalMarketing/ContentMarketing";
import DigitalMarketingByIndustry from "../pages/digitalMarketing/DigitalMarketingByIndustry";

// Branding & PR pages
import OnlineReputationManagement from "../pages/branding/OnlineReputationManagement";
import PRAgency from "../pages/branding/PRAgency";
import CorporateVideoProduction from "../pages/branding/CorporateVideoProduction";
import GraphicDesigning from "../pages/branding/GraphicDesigning";

// Package pages
import SmallBusinessWebsitePackage from "../pages/packages/SmallBusinessWebsitePackage";
import BusinessWebsiteWithSEOPackage from "../pages/packages/BusinessWebsiteWithSEOPackage";
import EcommerceWebDesigningPackage from "../pages/packages/EcommerceWebDesigningPackage";
import SEOPackage from "../pages/packages/SEOPackage";

// Company pages
import Mission from "../pages/company/Mission";
import WhyUs from "../pages/company/WhyUs";
import Clients from "../pages/company/Clients";
import Testimonials from "../pages/company/Testimonials";
import Awards from "../pages/company/Awards";
import NewsEvents from "../pages/company/NewsEvents";

// Portfolio / Our Work pages
import WebPortfolio from "../pages/portfolio/WebPortfolio";
import SEOPortfolio from "../pages/portfolio/SEOPortfolio";
import GraphicPortfolio from "../pages/portfolio/GraphicPortfolio";
import VideoPortfolio from "../pages/portfolio/VideoPortfolio";

import Blogs from "../pages/Blogs";
import BlogDetail from "../pages/BlogDetail";
import Faq from "../pages/Faq";
import Contact from "../pages/Contact";

// Admin Pages
import Dashboard from "../pages/admin/Dashboard";
import BlogManager from "../pages/admin/BlogManager";
import FaqManager from "../pages/admin/FaqManager";
import PageManager from "../pages/admin/PageManager";
import PageEditor from "../pages/admin/PageEditor";
import Login from "../pages/admin/Login";
import ProtectedRoute from "../components/admin/ProtectedRoute";
import Logout from "../pages/admin/Logout";
import ContactSubmissions from "../pages/admin/ContactSubmissions";
import SocialMediaManager from "../pages/admin/SocialMediaManager";

const AppRoutes = () => {
  return (
    <Routes>
      {/* MAIN LAYOUT */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/careers" element={<Careers />} />

        {/* WEBSITE SERVICE PAGES */}
        <Route path="/small-business-website" element={<SmallBusinessWebsite />} />
        <Route path="/business-website-with-seo" element={<BusinessWebsiteWithSEO />} />
        <Route path="/customised-website-designing" element={<CustomisedWebsiteDesigning />} />
        <Route path="/ecommerce-web-designing" element={<EcommerceWebsite />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/website-designing-by-industry" element={<WebsiteDesignByIndustry />} />
        <Route path="/psd-to-html" element={<PSDToHTML />} />
        <Route path="/landing-page-designing" element={<LandingPageDesigning />} />

        {/* DIGITAL MARKETING SERVICE PAGES */}
        <Route path="/seo-services" element={<SEOServices />} />
        <Route path="/paid-ads-ppc" element={<PaidAds />} />
        <Route path="/email-marketing" element={<EmailMarketing />} />
        <Route path="/sms-marketing" element={<SMSMarketing />} />
        <Route path="/content-marketing" element={<ContentMarketing />} />
        <Route path="/digital-marketing-by-industry" element={<DigitalMarketingByIndustry />} />

        {/* BRANDING & PR PAGES */}
        <Route path="/online-reputation-management" element={<OnlineReputationManagement />} />
        <Route path="/pr-agency" element={<PRAgency />} />
        <Route path="/corporate-video-production" element={<CorporateVideoProduction />} />
        <Route path="/graphic-designing" element={<GraphicDesigning />} />

        {/* PACKAGES PAGES */}
        <Route path="/small-business-website-package" element={<SmallBusinessWebsitePackage />} />
        <Route path="/business-website-with-seo-package" element={<BusinessWebsiteWithSEOPackage />} />
        <Route path="/ecommerce-web-designing-package" element={<EcommerceWebDesigningPackage />} />
        <Route path="/seo-package" element={<SEOPackage />} />

        {/* COMPANY PAGES */}
        <Route path="/mission" element={<Mission />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/news" element={<NewsEvents />} />

        {/* OUR WORK / PORTFOLIO PAGES */}
        <Route path="/web-portfolio" element={<WebPortfolio />} />
        <Route path="/seo-portfolio" element={<SEOPortfolio />} />
        <Route path="/graphic-portfolio" element={<GraphicPortfolio />} />
        <Route path="/video-portfolio" element={<VideoPortfolio />} />

        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Route>

      {/* ADMIN ROUTES */}
      <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/admin/pages" element={<ProtectedRoute><PageManager /></ProtectedRoute>} />
      <Route path="/admin/pages/:slug" element={<ProtectedRoute><PageEditor /></ProtectedRoute>} />
      <Route path="/admin/blogs" element={<ProtectedRoute><BlogManager /></ProtectedRoute>} />
      <Route path="/admin/faqs" element={<ProtectedRoute><FaqManager /></ProtectedRoute>} />
      <Route path="/admin/contact-submissions" element={<ProtectedRoute><ContactSubmissions /></ProtectedRoute>} />
      <Route path="/admin/social" element={<ProtectedRoute><SocialMediaManager /></ProtectedRoute>} />
      <Route path="/admin/logout" element={<Logout />} />
    </Routes>
  );
};

export default AppRoutes;
