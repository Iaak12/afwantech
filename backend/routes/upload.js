const express = require('express');
const router = express.Router();
const { upload } = require('../utils/cloudinary');
const authMiddleware = require('../middleware/auth');


// Protect this route, use multer middleware to process the 'image' field
router.post('/', authMiddleware, upload.single('image'), (req, res) => {
    console.log(`[UPLOAD V2 LOG] Handling upload request at ${new Date().toISOString()}`);
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        // Add version header to identify the correct active server
        res.set('X-API-VERSION', '2.0');

        // Return the successfully hosted Cloudinary URL
        res.status(200).json({
            message: 'Image uploaded successfully (v2 active)',
            url: req.file.path,
            public_id: req.file.filename
        });
    } catch (err) {
        console.error('[UPLOAD ERROR]', err);
        res.status(500).json({ message: 'Error uploading image', error: err.message });
    }
});

module.exports = router;
