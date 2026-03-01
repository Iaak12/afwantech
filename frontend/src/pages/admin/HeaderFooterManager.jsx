import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { FaSave, FaPlus, FaTrash, FaImage, FaPhoneAlt, FaInfoCircle, FaMapMarkerAlt, FaCopyright, FaLink, FaFolderPlus, FaShareAlt, FaEdit, FaTimes, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaWhatsapp, FaTelegram, FaPinterest } from 'react-icons/fa';
import { FaXTwitter, FaTiktok } from 'react-icons/fa6';
import API_BASE_URL from '../../config/api';

const InlineImageUploader = ({ value, onChange, label }) => {
    const [uploading, setUploading] = useState(false);

    const handleUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploading(true);
        const formData = new FormData();
        formData.append('image', file);

        try {
            const res = await fetch(`${API_BASE_URL}/api/v2/upload`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
                },
                body: formData
            });

            const result = await res.json();
            if (res.ok) {
                onChange(result.url);
            } else {
                alert(`Upload Error: ${result.message || 'Unknown Error'}`);
            }
        } catch (err) {
            console.error('Upload Exception:', err);
            alert('Connection Error: Could not reach the upload server.');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="bg-gray-50/50 p-6 rounded-3xl border border-gray-100 shadow-inner group transition-all hover:bg-white hover:shadow-md mb-6">
            <label className="block text-[10px] font-black text-[#123447]/40 uppercase tracking-[0.2em] mb-4">{label}</label>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center">
                <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg bg-white flex-shrink-0 flex items-center justify-center border-2 border-gray-50 group-hover:border-yellow-400/30 transition-colors">
                    {uploading ? (
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500"></div>
                    ) : value ? (
                        <img src={value} alt="Preview" className="w-full h-full object-contain p-2" />
                    ) : (
                        <FaImage className="text-gray-200 w-10 h-10" />
                    )}
                </div>
                <div className="flex-1 w-full">
                    <div className="relative">
                        <input
                            type="file"
                            onChange={handleUpload}
                            disabled={uploading}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div className="bg-[#123447] text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest text-center transition-all hover:bg-[#1d3f54] shadow-lg shadow-[#123447]/20">
                            {uploading ? 'Uploading...' : 'Choose New Image'}
                        </div>
                    </div>
                    <p className="text-[9px] text-gray-400 mt-3 font-bold uppercase tracking-widest text-center sm:text-left">Recommended: PNG/SVG with transparent background</p>
                </div>
            </div>
        </div>
    );
};

const HeaderFooterManager = () => {
    const [settings, setSettings] = useState({
        headerLogo: '',
        headerPhone: '',
        headerTopBarText: '',
        footerLogo: '',
        footerOfficeLocations: [],
        footerLinkSections: [],
        footerDisclaimerTitle: '',
        footerDisclaimerText: '',
        footerCopyrightText: ''
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    // Social Media States
    const [socials, setSocials] = useState([]);
    const [socialLoading, setSocialLoading] = useState(true);
    const [isEditingSocial, setIsEditingSocial] = useState(false);
    const [currentSocial, setCurrentSocial] = useState({ platform: '', url: '' });

    const SUPPORTED_PLATFORMS = [
        { label: 'Facebook', value: 'Facebook' },
        { label: 'Instagram', value: 'Instagram' },
        { label: 'Youtube', value: 'Youtube' },
        { label: 'Twitter / X', value: 'X' },
        { label: 'LinkedIn', value: 'Linkedin' },
        { label: 'WhatsApp', value: 'Whatsapp' },
        { label: 'Telegram', value: 'Telegram' },
        { label: 'Pinterest', value: 'Pinterest' },
        { label: 'TikTok', value: 'Tiktok' },
    ];

    const PLATFORM_ICONS = {
        facebook: { icon: <FaFacebookF />, bg: '#1877F2' },
        instagram: { icon: <FaInstagram />, bg: '#E1306C' },
        youtube: { icon: <FaYoutube />, bg: '#FF0000' },
        x: { icon: <FaXTwitter />, bg: '#000000' },
        linkedin: { icon: <FaLinkedinIn />, bg: '#0A66C2' },
        whatsapp: { icon: <FaWhatsapp />, bg: '#25D366' },
        telegram: { icon: <FaTelegram />, bg: '#229ED9' },
        pinterest: { icon: <FaPinterest />, bg: '#E60023' },
        tiktok: { icon: <FaTiktok />, bg: '#010101' },
    };

    useEffect(() => {
        fetchSettings();
        fetchSocials();
    }, []);

    const fetchSettings = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/api/header-footer`);
            const data = await res.json();
            setSettings(data);
        } catch (err) {
            console.error("Error fetching settings:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            const res = await fetch(`${API_BASE_URL}/api/header-footer`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
                },
                body: JSON.stringify(settings)
            });
            if (res.ok) {
                alert("Settings saved successfully!");
            }
        } catch (err) {
            console.error("Error saving settings:", err);
            alert("Failed to save settings.");
        } finally {
            setSaving(false);
        }
    };

    const addLocation = () => {
        setSettings({
            ...settings,
            footerOfficeLocations: [...settings.footerOfficeLocations, { title: '', address: '' }]
        });
    };

    const removeLocation = (index) => {
        const newLocations = settings.footerOfficeLocations.filter((_, i) => i !== index);
        setSettings({ ...settings, footerOfficeLocations: newLocations });
    };

    const updateLocation = (index, field, value) => {
        const newLocations = [...settings.footerOfficeLocations];
        newLocations[index][field] = value;
        setSettings({ ...settings, footerOfficeLocations: newLocations });
    };

    const addLinkSection = () => {
        setSettings({
            ...settings,
            footerLinkSections: [...(settings.footerLinkSections || []), { category: '', links: [{ label: '', url: '' }] }]
        });
    };

    const removeLinkSection = (sectionIndex) => {
        const newSections = settings.footerLinkSections.filter((_, i) => i !== sectionIndex);
        setSettings({ ...settings, footerLinkSections: newSections });
    };

    const updateSectionCategory = (sectionIndex, value) => {
        const newSections = [...settings.footerLinkSections];
        newSections[sectionIndex].category = value;
        setSettings({ ...settings, footerLinkSections: newSections });
    };

    const addLinkToSection = (sectionIndex) => {
        const newSections = [...settings.footerLinkSections];
        newSections[sectionIndex].links.push({ label: '', url: '' });
        setSettings({ ...settings, footerLinkSections: newSections });
    };

    const removeLinkFromSection = (sectionIndex, linkIndex) => {
        const newSections = [...settings.footerLinkSections];
        newSections[sectionIndex].links = newSections[sectionIndex].links.filter((_, i) => i !== linkIndex);
        setSettings({ ...settings, footerLinkSections: newSections });
    };

    const updateLinkDetail = (sectionIndex, linkIndex, field, value) => {
        const newSections = [...settings.footerLinkSections];
        newSections[sectionIndex].links[linkIndex][field] = value;
        setSettings({ ...settings, footerLinkSections: newSections });
    };

    // Social Media Handlers
    const fetchSocials = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/api/social`);
            const data = await res.json();
            setSocials(data);
        } catch (err) {
            console.error('Error fetching socials:', err);
        } finally {
            setSocialLoading(false);
        }
    };

    const handleSaveSocial = async () => {
        if (!currentSocial.platform || !currentSocial.url) {
            alert('Please fill in platform name and URL.');
            return;
        }

        try {
            const res = await fetch(`${API_BASE_URL}/api/social`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
                },
                body: JSON.stringify({
                    id: currentSocial._id,
                    ...currentSocial
                })
            });

            if (res.ok) {
                setIsEditingSocial(false);
                setCurrentSocial({ platform: '', url: '' });
                fetchSocials();
            } else {
                const errorData = await res.json();
                alert('Save failed: ' + (errorData.message || 'Unknown error'));
            }
        } catch (err) {
            alert('Save failed: ' + err.message);
        }
    };

    const handleDeleteSocial = async (id) => {
        if (!window.confirm('Are you sure you want to delete this social link?')) return;

        try {
            const res = await fetch(`${API_BASE_URL}/api/social/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
                }
            });

            if (res.ok) {
                fetchSocials();
            }
        } catch (err) {
            alert('Delete failed');
        }
    };

    if (loading) {
        return (
            <AdminLayout>
                <div className="flex items-center justify-center min-h-[60vh]">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
                </div>
            </AdminLayout>
        );
    }

    return (
        <AdminLayout>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
                    <div>
                        <h1 className="text-5xl font-black text-[#123447] tracking-tight mb-2">Header & <span className="text-yellow-500">Footer</span></h1>
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Manage Global Site Components</p>
                    </div>
                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="bg-yellow-500 hover:bg-yellow-400 text-[#123447] px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-2xl shadow-yellow-500/30 active:scale-95 flex items-center gap-3 disabled:opacity-50"
                    >
                        <FaSave className="text-lg" /> {saving ? 'Saving Changes...' : 'Save All Settings'}
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* HEADER SECTION */}
                    <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all h-fit">
                        <div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-50">
                            <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center text-xl">
                                <FaInfoCircle />
                            </div>
                            <h2 className="text-2xl font-black text-[#123447]">Header Settings</h2>
                        </div>

                        <InlineImageUploader
                            label="Header Logo"
                            value={settings.headerLogo}
                            onChange={(url) => setSettings({ ...settings, headerLogo: url })}
                        />

                        <div className="space-y-8">
                            <div>
                                <label className="block text-[10px] font-black text-[#123447]/40 uppercase tracking-[0.2em] mb-3 ml-1">Contact Number</label>
                                <div className="relative">
                                    <FaPhoneAlt className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" />
                                    <input
                                        type="text"
                                        value={settings.headerPhone}
                                        onChange={(e) => setSettings({ ...settings, headerPhone: e.target.value })}
                                        className="w-full bg-gray-50 border-2 border-transparent focus:border-yellow-400/30 focus:bg-white outline-none px-14 py-4 rounded-2xl font-bold text-[#123447] transition-all"
                                        placeholder="+91-XXXXX-XXXXX"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[10px] font-black text-[#123447]/40 uppercase tracking-[0.2em] mb-3 ml-1">Top Bar Announcement</label>
                                <textarea
                                    value={settings.headerTopBarText}
                                    onChange={(e) => setSettings({ ...settings, headerTopBarText: e.target.value })}
                                    rows="3"
                                    className="w-full bg-gray-50 border-2 border-transparent focus:border-yellow-400/30 focus:bg-white outline-none p-6 rounded-2xl font-bold text-[#123447] transition-all leading-relaxed"
                                    placeholder="Enter top bar text..."
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    {/* FOOTER SECTION */}
                    <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all h-fit">
                        <div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-50">
                            <div className="w-12 h-12 bg-yellow-50 text-yellow-500 rounded-2xl flex items-center justify-center text-xl">
                                <FaInfoCircle />
                            </div>
                            <h2 className="text-2xl font-black text-[#123447]">Footer Settings</h2>
                        </div>

                        <InlineImageUploader
                            label="Footer Logo"
                            value={settings.footerLogo}
                            onChange={(url) => setSettings({ ...settings, footerLogo: url })}
                        />

                        <div className="space-y-8">
                            <div>
                                <label className="block text-[10px] font-black text-[#123447]/40 uppercase tracking-[0.2em] mb-3 ml-1">Copyright Text</label>
                                <div className="relative">
                                    <FaCopyright className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" />
                                    <input
                                        type="text"
                                        value={settings.footerCopyrightText}
                                        onChange={(e) => setSettings({ ...settings, footerCopyrightText: e.target.value })}
                                        className="w-full bg-gray-50 border-2 border-transparent focus:border-yellow-400/30 focus:bg-white outline-none px-14 py-4 rounded-2xl font-bold text-[#123447] transition-all"
                                        placeholder="© 2024 Your Company. All Rights Reserved."
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[10px] font-black text-[#123447]/40 uppercase tracking-[0.2em] mb-3 ml-1">Disclaimer Title</label>
                                <input
                                    type="text"
                                    value={settings.footerDisclaimerTitle}
                                    onChange={(e) => setSettings({ ...settings, footerDisclaimerTitle: e.target.value })}
                                    className="w-full bg-gray-50 border-2 border-transparent focus:border-yellow-400/30 focus:bg-white outline-none px-6 py-4 rounded-2xl font-bold text-[#123447] transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] font-black text-[#123447]/40 uppercase tracking-[0.2em] mb-3 ml-1">Disclaimer text</label>
                                <textarea
                                    value={settings.footerDisclaimerText}
                                    onChange={(e) => setSettings({ ...settings, footerDisclaimerText: e.target.value })}
                                    rows="3"
                                    className="w-full bg-gray-50 border-2 border-transparent focus:border-yellow-400/30 focus:bg-white outline-none p-6 rounded-2xl font-bold text-[#123447] transition-all leading-relaxed"
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    {/* OFFICE LOCATIONS */}
                    <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 pb-6 border-b border-gray-50 gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center text-xl">
                                    <FaMapMarkerAlt />
                                </div>
                                <h2 className="text-2xl font-black text-[#123447]">Office Locations</h2>
                            </div>
                            <button
                                onClick={addLocation}
                                className="bg-[#123447] hover:bg-[#1d3f54] text-white px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-2 active:scale-95 shadow-lg shadow-[#123447]/20"
                            >
                                <FaPlus /> Add Location
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {settings.footerOfficeLocations.map((loc, index) => (
                                <div key={index} className="bg-gray-50/50 p-8 rounded-[2rem] border border-gray-100 relative group">
                                    <button
                                        onClick={() => removeLocation(index)}
                                        className="absolute -top-3 -right-3 bg-white text-red-500 w-10 h-10 rounded-xl shadow-lg border border-red-50 flex items-center justify-center hover:bg-red-50 transition-all active:scale-90"
                                    >
                                        <FaTrash size={12} />
                                    </button>
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-[10px] font-black text-[#123447]/30 uppercase tracking-[0.2em] mb-2 ml-1">Location Title</label>
                                            <input
                                                type="text"
                                                value={loc.title}
                                                onChange={(e) => updateLocation(index, 'title', e.target.value)}
                                                className="w-full bg-white border-2 border-transparent focus:border-yellow-400/30 outline-none px-6 py-3 rounded-xl font-bold text-[#123447] shadow-sm"
                                                placeholder="e.g. Delhi NCR"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-black text-[#123447]/30 uppercase tracking-[0.2em] mb-2 ml-1">Full Address</label>
                                            <textarea
                                                value={loc.address}
                                                onChange={(e) => updateLocation(index, 'address', e.target.value)}
                                                rows="2"
                                                className="w-full bg-white border-2 border-transparent focus:border-yellow-400/30 outline-none px-6 py-3 rounded-xl font-bold text-[#123447] shadow-sm"
                                                placeholder="Street address, City, ZIP"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {settings.footerOfficeLocations.length === 0 && (
                            <div className="py-20 text-center border-4 border-dashed border-gray-50 rounded-[2rem]">
                                <p className="text-gray-300 font-black uppercase tracking-widest">No locations added yet.</p>
                            </div>
                        )}
                    </div>

                    {/* FOOTER LINK SECTIONS */}
                    <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 pb-6 border-b border-gray-50 gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center text-xl">
                                    <FaLink />
                                </div>
                                <h2 className="text-2xl font-black text-[#123447]">Footer Link Categories</h2>
                            </div>
                            <button
                                onClick={addLinkSection}
                                className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-2 active:scale-95 shadow-lg shadow-purple-600/20"
                            >
                                <FaFolderPlus /> Add Category
                            </button>
                        </div>

                        <div className="space-y-12">
                            {(settings.footerLinkSections || []).map((section, sIdx) => (
                                <div key={sIdx} className="bg-gray-50/30 p-10 rounded-[3rem] border border-gray-100 relative group/section">
                                    <button
                                        onClick={() => removeLinkSection(sIdx)}
                                        className="absolute -top-4 -right-4 bg-white text-red-500 w-12 h-12 rounded-2xl shadow-xl border border-red-50 flex items-center justify-center hover:bg-red-50 transition-all active:scale-90 group-hover/section:scale-110"
                                        title="Remove Category"
                                    >
                                        <FaTrash size={14} />
                                    </button>

                                    <div className="mb-10 max-w-md">
                                        <label className="block text-[10px] font-black text-[#123447]/30 uppercase tracking-[0.2em] mb-3 ml-1">Category Title</label>
                                        <input
                                            type="text"
                                            value={section.category}
                                            onChange={(e) => updateSectionCategory(sIdx, e.target.value)}
                                            className="w-full bg-white border-2 border-purple-100 focus:border-purple-400 outline-none px-8 py-4 rounded-2xl font-black text-[#123447] shadow-sm text-xl"
                                            placeholder="e.g. Our Services"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {section.links.map((link, lIdx) => (
                                            <div key={lIdx} className="bg-white p-6 rounded-2xl border border-gray-50 shadow-sm relative group/link hover:shadow-md transition-all">
                                                <button
                                                    onClick={() => removeLinkFromSection(sIdx, lIdx)}
                                                    className="absolute -top-2 -right-2 bg-red-50 text-red-400 w-7 h-7 rounded-lg opacity-0 group-hover/link:opacity-100 transition-all hover:bg-red-500 hover:text-white flex items-center justify-center shadow-sm"
                                                >
                                                    <FaTrash size={10} />
                                                </button>
                                                <div className="space-y-4">
                                                    <div>
                                                        <label className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Label</label>
                                                        <input
                                                            type="text"
                                                            value={link.label}
                                                            onChange={(e) => updateLinkDetail(sIdx, lIdx, 'label', e.target.value)}
                                                            className="w-full bg-gray-50 border border-transparent focus:border-gray-200 outline-none px-4 py-2.5 rounded-xl font-bold text-[#123447] text-sm"
                                                            placeholder="Link Name"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5 ml-1">URL Path</label>
                                                        <input
                                                            type="text"
                                                            value={link.url}
                                                            onChange={(e) => updateLinkDetail(sIdx, lIdx, 'url', e.target.value)}
                                                            className="w-full bg-gray-50 border border-transparent focus:border-gray-200 outline-none px-4 py-2.5 rounded-xl font-bold text-blue-500 text-xs font-mono"
                                                            placeholder="/services"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <button
                                            onClick={() => addLinkToSection(sIdx)}
                                            className="border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center p-6 text-gray-300 hover:text-purple-400 hover:border-purple-200 hover:bg-purple-50/30 transition-all group/add"
                                        >
                                            <FaPlus className="mb-2 group-hover/add:scale-125 transition-transform" />
                                            <span className="text-[10px] font-black uppercase tracking-widest">Add Link</span>
                                        </button>
                                    </div>
                                </div>
                            ))}

                            {(!settings.footerLinkSections || settings.footerLinkSections.length === 0) && (
                                <div className="py-20 text-center border-4 border-dashed border-gray-50 rounded-[2.5rem]">
                                    <p className="text-gray-300 font-black uppercase tracking-widest mb-4">No link categories defined.</p>
                                    <button
                                        onClick={addLinkSection}
                                        className="bg-[#123447] text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px]"
                                    >
                                        Create First Category
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* SOCIAL MEDIA SECTION */}
                    <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 pb-6 border-b border-gray-50 gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-pink-50 text-pink-500 rounded-2xl flex items-center justify-center text-xl">
                                    <FaShareAlt />
                                </div>
                                <h2 className="text-2xl font-black text-[#123447]">Social Media Links</h2>
                            </div>
                            {!isEditingSocial && (
                                <button
                                    onClick={() => { setCurrentSocial({ platform: '', url: '' }); setIsEditingSocial(true); }}
                                    className="bg-pink-600 hover:bg-pink-500 text-white px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-2 active:scale-95 shadow-lg shadow-pink-600/20"
                                >
                                    <FaPlus /> Add New Social
                                </button>
                            )}
                        </div>

                        {isEditingSocial ? (
                            <div className="bg-gray-50/50 p-10 rounded-[2rem] border-2 border-pink-100 animate-in fade-in zoom-in duration-300">
                                <div className="flex justify-between items-center mb-8">
                                    <h3 className="text-xl font-black text-[#123447]">{currentSocial._id ? 'Edit Social' : 'New Social'}</h3>
                                    <button onClick={() => setIsEditingSocial(false)} className="bg-white text-gray-400 p-2 rounded-full shadow-sm hover:text-red-500"><FaTimes /></button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 ml-1">Platform</label>
                                        <select
                                            value={currentSocial.platform}
                                            onChange={(e) => setCurrentSocial({ ...currentSocial, platform: e.target.value })}
                                            className="w-full bg-white border-2 border-transparent focus:border-pink-300 outline-none px-6 py-4 rounded-2xl font-bold text-[#123447] shadow-sm transition-all"
                                        >
                                            <option value="">Select Platform</option>
                                            {SUPPORTED_PLATFORMS.map(p => (
                                                <option key={p.value} value={p.value}>{p.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 ml-1">Profile URL</label>
                                        <input
                                            type="text"
                                            value={currentSocial.url}
                                            onChange={(e) => setCurrentSocial({ ...currentSocial, url: e.target.value })}
                                            className="w-full bg-white border-2 border-transparent focus:border-pink-300 outline-none px-6 py-4 rounded-2xl font-bold text-[#123447] shadow-sm transition-all"
                                            placeholder="https://..."
                                        />
                                    </div>
                                </div>
                                <button
                                    onClick={handleSaveSocial}
                                    className="w-full py-5 bg-[#123447] text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#1d3f54] transition-all shadow-xl shadow-[#123447]/20 flex items-center justify-center gap-3 active:scale-95"
                                >
                                    <FaSave className="text-yellow-500" /> {currentSocial._id ? 'Update Social Link' : 'Save Social Link'}
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {socialLoading ? (
                                    <div className="col-span-full py-10 text-center">
                                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500 mx-auto"></div>
                                    </div>
                                ) : socials.length > 0 ? (
                                    socials.map(social => (
                                        <div key={social._id} className="bg-gray-50/50 p-6 rounded-3xl border border-gray-100 group relative">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div
                                                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg"
                                                    style={{ background: PLATFORM_ICONS[social.platform?.toLowerCase()]?.bg || '#123447' }}
                                                >
                                                    {PLATFORM_ICONS[social.platform?.toLowerCase()]?.icon || <FaShareAlt />}
                                                </div>
                                                <div className="overflow-hidden">
                                                    <h4 className="font-black text-[#123447] text-sm">{social.platform}</h4>
                                                    <p className="text-[9px] text-gray-400 truncate">{social.url}</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => { setCurrentSocial(social); setIsEditingSocial(true); }}
                                                    className="flex-1 bg-white text-[#123447] py-2 rounded-xl font-black uppercase text-[8px] tracking-widest hover:bg-gray-50 border border-gray-100 flex items-center justify-center gap-1.5 transition-all"
                                                >
                                                    <FaEdit /> Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteSocial(social._id)}
                                                    className="bg-red-50 text-red-500 p-2 rounded-xl hover:bg-red-500 hover:text-white transition-all flex items-center justify-center"
                                                >
                                                    <FaTrash size={10} />
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-span-full py-16 text-center border-4 border-dashed border-gray-50 rounded-[2rem]">
                                        <p className="text-gray-300 font-black uppercase tracking-widest text-[10px]">No social links added yet.</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default HeaderFooterManager;
