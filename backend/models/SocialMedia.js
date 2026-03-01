const mongoose = require('mongoose');

const socialMediaSchema = new mongoose.Schema({
    platform: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    url: {
        type: String,
        required: true,
        trim: true,
    },
    icon: {
        type: String,
        default: '',
    },
    backgroundColor: {
        type: String,
        default: '',
    },
    order: {
        type: Number,
        default: 0,
    }
}, { timestamps: true });

module.exports = mongoose.model('SocialMedia', socialMediaSchema);
