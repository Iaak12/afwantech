import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url }) => {
    // Fallback default values if not provided from the database
    const defaultTitle = 'Afwan Tech | Best Digital Marketing Agency & Web Development';
    const defaultDesc = 'Afwan Tech is the best digital marketing agency and IT company, providing high-quality website development, SEO, and branding services for businesses worldwide.';
    const defaultKeywords = 'digital marketing agency, web development company, SEO experts, Afwan Tech';

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDesc,
        keywords: keywords || defaultKeywords,
        url: url || 'https://afwantech.com'
    };

    return (
        <Helmet>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="keywords" content={seo.keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={seo.url} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content="/logo.png" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={seo.url} />
            <meta property="twitter:title" content={seo.title} />
            <meta property="twitter:description" content={seo.description} />
            <meta property="twitter:image" content="/logo.png" />
        </Helmet>
    );
};

export default SEO;
