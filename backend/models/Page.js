const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
    type: { type: String, required: true }, // e.g., 'hero', 'content', 'plans', 'features'
    data: { type: mongoose.Schema.Types.Mixed, required: true }
});

const pageSchema = new mongoose.Schema({
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String },
    metaTitle: { type: String },
    metaDescription: { type: String },
    keywords: { type: String },
    sections: [sectionSchema]
}, { timestamps: true });

module.exports = mongoose.model('Page', pageSchema);
