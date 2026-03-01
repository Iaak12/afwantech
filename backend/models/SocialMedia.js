const mongoose = require('mongoose');

const socialMediaSchema = new mongoose.Schema({
    platform: {
        type: String,
        required: true,
        unique: true,
    },
    url: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    backgroundColor: {
        type: String,
        default: '#1877F2',
    },
    order: {
        type: Number,
        default: 0,
    }
}, { timestamps: true });

module.exports = mongoose.model('SocialMedia', socialMediaSchema);
