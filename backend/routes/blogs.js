const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// Get all blogs
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get single blog by slug (Public)
router.get('/slug/:slug', async (req, res) => {
    try {
        const blog = await Blog.findOne({ slug: req.params.slug });
        if (!blog) return res.status(404).json({ message: 'Blog not found' });
        res.json(blog);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a blog
router.post('/', async (req, res) => {
    try {
        const blog = new Blog(req.body);
        const newBlog = await blog.save();
        res.status(201).json(newBlog);
    } catch (err) {
        console.error('[BLOG CREATE ERROR]', err);
        res.status(400).json({ message: err.message });
    }
});

// Update a blog
router.put('/:id', async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedBlog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a blog
router.delete('/:id', async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.json({ message: 'Blog deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
