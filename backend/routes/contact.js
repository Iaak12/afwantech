const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/ContactMessage');
const jwt = require('jsonwebtoken');

// Middleware to protect routes (optional for some, mandatory for others)
const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) throw new Error('No token');

        jwt.verify(token, process.env.JWT_SECRET || 'your_super_secret_key_here'); // Fallback if env is missing
        next();
    } catch (err) {
        res.status(401).json({ message: 'Unauthorized access' });
    }
};

// PUBLIC: Submit a new contact message
router.post('/', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Name, email, and message are required.' });
        }

        const newMessage = new ContactMessage({ name, email, phone, message });
        await newMessage.save();

        res.status(201).json({ message: 'Message sent successfully!', data: newMessage });
    } catch (err) {
        res.status(500).json({ message: 'Server error processing your request.', error: err.message });
    }
});

// PRIVATE (ADMIN): Get all contact messages
router.get('/', authMiddleware, async (req, res) => {
    try {
        const messages = await ContactMessage.find().sort({ createdAt: -1 });
        res.json(messages);
    } catch (err) {
        res.status(500).json({ message: 'Server error fetching messages.', error: err.message });
    }
});

// PRIVATE (ADMIN): Mark message as read
router.patch('/:id/read', authMiddleware, async (req, res) => {
    try {
        const msg = await ContactMessage.findByIdAndUpdate(req.params.id, { isRead: true }, { new: true });
        if (!msg) return res.status(404).json({ message: 'Message not found' });
        res.json(msg);
    } catch (err) {
        res.status(500).json({ message: 'Server error updating message.', error: err.message });
    }
});

// PRIVATE (ADMIN): Delete a message
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const msg = await ContactMessage.findByIdAndDelete(req.params.id);
        if (!msg) return res.status(404).json({ message: 'Message not found' });
        res.json({ message: 'Message deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error deleting message.', error: err.message });
    }
});

module.exports = router;
