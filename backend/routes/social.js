const express = require('express');
const router = express.Router();
const SocialMedia = require('../models/SocialMedia');

// GET all social media links
router.get('/', async (req, res) => {
    try {
        const socials = await SocialMedia.find().sort({ order: 1 });
        res.json(socials);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST/UPDATE social media link
router.post('/', async (req, res) => {
    const { id, platform, url, icon, backgroundColor, order } = req.body;

    try {
        if (id) {
            // Update existing
            const updated = await SocialMedia.findByIdAndUpdate(
                id,
                { platform, url, icon, backgroundColor, order },
                { new: true }
            );
            return res.json(updated);
        } else {
            // Create new
            const social = new SocialMedia({
                platform,
                url,
                icon,
                backgroundColor,
                order
            });
            const saved = await social.save();
            res.status(201).json(saved);
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE social media link
router.delete('/:id', async (req, res) => {
    try {
        await SocialMedia.findByIdAndDelete(req.params.id);
        res.json({ message: 'Social media link deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
