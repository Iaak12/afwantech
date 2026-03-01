const express = require('express');
const router = express.Router();
const HeaderFooter = require('../models/HeaderFooter');

// GET header & footer settings
router.get('/', async (req, res) => {
    try {
        let settings = await HeaderFooter.findOne();
        if (!settings) {
            // Create default settings if not exists
            settings = new HeaderFooter({
                headerLogo: '',
                headerPhone: '+91-98688-98788',
                headerTopBarText: 'Afwan Tech Has Been Named "Best SEO Company of the Year"',
                footerLogo: '',
                footerOfficeLocations: [
                    { title: 'Delhi NCR', address: '77/A Ram Road, New Delhi - 110005' },
                    { title: 'Ranchi', address: 'Harmu Road, Ranchi, Jharkhand' },
                    { title: 'United Kingdom', address: '27 Old Gloucester Street, London' },
                    { title: 'Australia', address: '2 Alice Cres, Melbourne' },
                    { title: 'Canada', address: '665 Kennedy Road, Ontario' }
                ],
                footerLinkSections: [
                    {
                        category: 'Website',
                        links: [
                            { label: 'Small Business Website', url: '/small-business-website' },
                            { label: 'Customised Website Designing', url: '/customised-website-designing' },
                            { label: 'Business Website with SEO', url: '/business-website-with-seo' },
                            { label: 'eCommerce Web Designing', url: '/ecommerce-web-designing' },
                            { label: 'Web Development', url: '/web-development' },
                            { label: 'Landing Page Designing', url: '/landing-page-designing' },
                            { label: 'Responsive Web Designing', url: '/website-designing-by-industry' }
                        ]
                    },
                    {
                        category: 'Digital Marketing',
                        links: [
                            { label: 'Business Website with SEO', url: '/business-website-with-seo' },
                            { label: 'SEO Services', url: '/seo-services' },
                            { label: 'GMB SEO', url: '/seo-services' },
                            { label: 'Social Media Marketing', url: '/content-marketing' },
                            { label: 'Paid Ads / PPC', url: '/paid-ads-ppc' },
                            { label: 'Email Marketing', url: '/email-marketing' },
                            { label: 'Content Marketing', url: '/content-marketing' }
                        ]
                    },
                    {
                        category: 'Branding & PR',
                        links: [
                            { label: 'Online Reputation Management', url: '/online-reputation-management' },
                            { label: 'PR Agency', url: '/pr-agency' },
                            { label: 'Press Release Distribution', url: '/pr-agency' },
                            { label: 'Brand Image Building', url: '/online-reputation-management' },
                            { label: 'Corporate Film Makers', url: '/corporate-video-production' },
                            { label: 'Graphic Designing', url: '/graphic-designing' }
                        ]
                    },
                    {
                        category: 'Company',
                        links: [
                            { label: 'About Afwan Tech', url: '/about-us' },
                            { label: 'Mission, Vision & Goals', url: '/mission' },
                            { label: 'Our Clients', url: '/clients' },
                            { label: 'Testimonials', url: '/testimonials' },
                            { label: 'Awards & Achievements', url: '/awards' },
                            { label: 'Contact Us', url: '/contact' },
                            { label: 'Terms & Conditions', url: '/terms-conditions' }
                        ]
                    }
                ],
                footerDisclaimerTitle: 'Disclaimer for the Job-Seekers',
                footerDisclaimerText: 'Afwan Tech does not charge any fees from candidates in exchange for job offers. If anyone claims to represent our company and asks for payment, please report immediately.',
                footerCopyrightText: 'Afwan Tech Solution Pvt Ltd. All Rights Reserved.'
            });
            await settings.save();
        }
        res.json(settings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// UPDATE header & footer settings
router.post('/', async (req, res) => {
    try {
        let settings = await HeaderFooter.findOne();
        if (settings) {
            // Update existing
            settings = await HeaderFooter.findByIdAndUpdate(settings._id, req.body, { new: true });
        } else {
            // Create new
            settings = new HeaderFooter(req.body);
            await settings.save();
        }
        res.json(settings);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
