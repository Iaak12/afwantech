const mongoose = require('mongoose');

const officeLocationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    address: { type: String, required: true }
});

const linkSchema = new mongoose.Schema({
    label: { type: String, required: true },
    url: { type: String, required: true }
});

const footerLinkSectionSchema = new mongoose.Schema({
    category: { type: String, required: true },
    links: [linkSchema]
});

const headerFooterSchema = new mongoose.Schema({
    headerLogo: { type: String, default: '' },
    headerPhone: { type: String, default: '' },
    headerTopBarText: { type: String, default: '' },
    footerLogo: { type: String, default: '' },
    footerOfficeLocations: [officeLocationSchema],
    footerLinkSections: [footerLinkSectionSchema],
    footerDisclaimerTitle: { type: String, default: '' },
    footerDisclaimerText: { type: String, default: '' },
    footerCopyrightText: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('HeaderFooter', headerFooterSchema);
