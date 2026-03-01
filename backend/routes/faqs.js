const express = require('express');
const router = express.Router();
const FAQ = require('../models/FAQ');
const authMiddleware = require('../middleware/auth');

// Get all FAQs
router.get('/', async (req, res) => {
    try {
        const faqs = await FAQ.find();
        res.json(faqs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create an FAQ (Protected)
router.post('/', authMiddleware, async (req, res) => {
    const faq = new FAQ(req.body);
    try {
        const newFaq = await faq.save();
        res.status(201).json(newFaq);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update an FAQ (Protected)
router.put('/:id', authMiddleware, async (req, res) => {
    try {
        const updatedFaq = await FAQ.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedFaq);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete an FAQ (Protected)
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        await FAQ.findByIdAndDelete(req.params.id);
        res.json({ message: 'FAQ deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
