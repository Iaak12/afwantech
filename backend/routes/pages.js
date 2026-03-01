const express = require('express');
const router = express.Router();
const Page = require('../models/Page');

const authMiddleware = require('../middleware/auth');

// Get all pages
router.get('/', async (req, res) => {
    try {
        const pages = await Page.find().select('slug title');
        res.json(pages);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get page by slug
router.get('/:slug', async (req, res) => {
    console.log(`[GET PAGE] Requested slug: ${req.params.slug}`);
    try {
        const page = await Page.findOne({ slug: req.params.slug });
        if (!page) {
            console.log(`[GET PAGE] Page NOT FOUND for slug: ${req.params.slug}`);
            return res.status(404).json({ message: 'Page not found' });
        }
        console.log(`[GET PAGE] Found page: ${page.title} (${page.slug})`);
        res.json(page);
    } catch (err) {
        console.error(`[GET PAGE ERROR] ${err.message}`);
        res.status(500).json({ message: err.message });
    }
});

// Create or Update page (Protected)
router.post('/', authMiddleware, async (req, res) => {
    const { slug, title, description, metaTitle, metaDescription, keywords, sections } = req.body;
    try {
        let page = await Page.findOne({ slug });
        if (page) {
            page.title = title;
            page.description = description;
            page.metaTitle = metaTitle;
            page.metaDescription = metaDescription;
            page.keywords = keywords;
            page.sections = sections;
            await page.save();
        } else {
            page = new Page({ slug, title, description, metaTitle, metaDescription, keywords, sections });
            await page.save();
        }
        res.status(201).json(page);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
