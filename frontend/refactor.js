const fs = require('fs');
const path = require('path');

const pages = [
    // website
    { file: 'src/pages/website/BusinessWebsiteWithSEO.jsx', slug: 'business-website-with-seo', name: 'Business Website With SEO' },
    { file: 'src/pages/website/CustomisedWebsiteDesigning.jsx', slug: 'customised-website-designing', name: 'Customised Website Designing' },
    { file: 'src/pages/website/EcommerceWebsite.jsx', slug: 'ecommerce-web-designing', name: 'Ecommerce Website Designing' },
    { file: 'src/pages/website/LandingPageDesigning.jsx', slug: 'landing-page-designing', name: 'Landing Page Designing' },
    { file: 'src/pages/website/PSDToHTML.jsx', slug: 'psd-to-html', name: 'PSD To HTML' },
    { file: 'src/pages/website/WebDevelopment.jsx', slug: 'web-development', name: 'Web Development' },
    { file: 'src/pages/website/WebsiteDesignByIndustry.jsx', slug: 'website-designing-by-industry', name: 'Website Designing By Industry' },

    // digitalMarketing
    { file: 'src/pages/digitalMarketing/ContentMarketing.jsx', slug: 'content-marketing', name: 'Content Marketing' },
    { file: 'src/pages/digitalMarketing/DigitalMarketingByIndustry.jsx', slug: 'digital-marketing-by-industry', name: 'Digital Marketing By Industry' },
    { file: 'src/pages/digitalMarketing/EmailMarketing.jsx', slug: 'email-marketing', name: 'Email Marketing' },
    { file: 'src/pages/digitalMarketing/PaidAds.jsx', slug: 'paid-ads-ppc', name: 'Paid Ads PPC' },
    { file: 'src/pages/digitalMarketing/SEOServices.jsx', slug: 'seo-services', name: 'SEO Services' },
    { file: 'src/pages/digitalMarketing/SMSMarketing.jsx', slug: 'sms-marketing', name: 'SMS Marketing' },

    // branding
    { file: 'src/pages/branding/CorporateVideoProduction.jsx', slug: 'corporate-video-production', name: 'Corporate Video Production' },
    { file: 'src/pages/branding/GraphicDesigning.jsx', slug: 'graphic-designing', name: 'Graphic Designing' },
    { file: 'src/pages/branding/OnlineReputationManagement.jsx', slug: 'online-reputation-management', name: 'Online Reputation Management' },
    { file: 'src/pages/branding/PRAgency.jsx', slug: 'pr-agency', name: 'PR Agency' },

    // packages
    { file: 'src/pages/packages/BusinessWebsiteWithSEOPackage.jsx', slug: 'business-website-with-seo-package', name: 'Business Website With SEO Package' },
    { file: 'src/pages/packages/EcommerceWebDesigningPackage.jsx', slug: 'ecommerce-web-designing-package', name: 'Ecommerce Web Designing Package' },
    { file: 'src/pages/packages/SEOPackage.jsx', slug: 'seo-package', name: 'SEO Package' },
    { file: 'src/pages/packages/SmallBusinessWebsitePackage.jsx', slug: 'small-business-website-package', name: 'Small Business Website Package' }
];

pages.forEach(p => {
    const componentName = path.basename(p.file, '.jsx');
    const importDepth = p.file.includes('packages/') ? '../services/UniversalServiceWrapper' : '../services/UniversalServiceWrapper';

    const content = `import UniversalServiceWrapper from "${importDepth}";

const ${componentName} = () => {
  return <UniversalServiceWrapper slug="${p.slug}" pageName="${p.name}" />;
};

export default ${componentName};
`;

    const absPath = path.resolve(__dirname, p.file);
    fs.writeFileSync(absPath, content);
    console.log('Updated ' + p.file);
});
