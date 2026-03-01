import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { FaPlus, FaEdit, FaTrash, FaTimes, FaSave, FaShareAlt } from 'react-icons/fa';
import API_BASE_URL from '../../config/api';

const SocialMediaManager = () => {
    const [socials, setSocials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [currentSocial, setCurrentSocial] = useState({
        platform: '',
        url: ''
    });

    useEffect(() => {
        fetchSocials();
    }, []);

    const fetchSocials = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/api/social`);
            const data = await res.json();
            setSocials(data);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching socials:', err);
            setLoading(false);
        }
    };

    const handleSave = async () => {
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
                setIsEditing(false);
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

    const handleDelete = async (id) => {
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

    return (
        <AdminLayout>
            <div className="max-w-6xl mx-auto py-10 px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <div>
                        <h1 className="text-5xl font-black text-[#123447] tracking-tight mb-2">Social <span className="text-yellow-500">Media</span></h1>
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Manage Social Presence</p>
                    </div>
                    {!isEditing && (
                        <button
                            onClick={() => { setCurrentSocial({ platform: '', url: '' }); setIsEditing(true); }}
                            className="bg-yellow-500 hover:bg-yellow-400 text-[#123447] px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-yellow-500/20 active:scale-95 flex items-center gap-3"
                        >
                            <FaPlus /> Add New Social
                        </button>
                    )}
                </div>

                {!isEditing ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {loading ? (
                            <div className="col-span-full py-20 text-center bg-white rounded-[2rem] border-2 border-dashed border-gray-100">
                                <p className="text-gray-400 font-bold uppercase tracking-widest">Loading Social Links...</p>
                            </div>
                        ) : socials.length > 0 ? (
                            socials.map(social => (
                                <div key={social._id} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div
                                            className="w-12 h-12 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg bg-[#123447]"
                                        >
                                            <FaShareAlt />
                                        </div>
                                        <div>
                                            <h3 className="font-black text-[#123447]">{social.platform}</h3>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Active Link</p>
                                        </div>
                                    </div>

                                    <p className="text-gray-500 text-xs truncate mb-6 font-medium bg-gray-50 p-3 rounded-xl italic">
                                        {social.url}
                                    </p>

                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => { setCurrentSocial(social); setIsEditing(true); }}
                                            className="flex-1 bg-gray-50 text-[#123447] py-3 rounded-xl font-bold text-[10px] uppercase hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                                        >
                                            <FaEdit /> Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(social._id)}
                                            className="bg-red-50 text-red-500 p-3 rounded-xl hover:bg-red-500 hover:text-white transition-all"
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center bg-white rounded-[2rem] border-2 border-dashed border-gray-200">
                                <p className="text-gray-400 font-bold uppercase tracking-widest">No social links added yet.</p>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-bottom-10 duration-500">
                        <div className="bg-gray-50/50 p-8 border-b border-gray-100 flex justify-between items-center">
                            <h2 className="text-2xl font-black text-[#123447]">{currentSocial._id ? 'Edit Social' : 'New Social Link'}</h2>
                            <button onClick={() => setIsEditing(false)} className="text-gray-400 hover:text-red-500 transition-colors p-2 bg-white rounded-full shadow-sm"><FaTimes /></button>
                        </div>

                        <div className="p-10 space-y-8">
                            <div>
                                <label className="block text-[10px] font-black text-[#123447]/50 uppercase mb-3 tracking-widest">Platform Name</label>
                                <input
                                    type="text"
                                    value={currentSocial.platform}
                                    onChange={(e) => setCurrentSocial({ ...currentSocial, platform: e.target.value })}
                                    className="w-full p-4 border-2 border-gray-100 rounded-2xl bg-white outline-none focus:border-[#123447] font-bold text-gray-700 transition-all"
                                    placeholder="e.g., Facebook, Instagram, Youtube, Linkedin, Twitter (X)"
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] font-black text-[#123447]/50 uppercase mb-3 tracking-widest">Profile URL</label>
                                <input
                                    type="text"
                                    value={currentSocial.url}
                                    onChange={(e) => setCurrentSocial({ ...currentSocial, url: e.target.value })}
                                    className="w-full p-4 border-2 border-gray-100 rounded-2xl bg-white outline-none focus:border-[#123447] font-bold text-gray-700 transition-all font-sans"
                                    placeholder="https://facebook.com/your-username"
                                />
                                <p className="text-[10px] text-gray-400 mt-2 italic font-bold">Designing elements like icons and colors are handled automatically based on the platform name.</p>
                            </div>

                            <button
                                onClick={handleSave}
                                className="w-full py-6 bg-[#123447] text-white rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-opacity-90 transition-all shadow-2xl shadow-[#123447]/30 flex items-center justify-center gap-3 active:scale-[0.98]"
                            >
                                <FaSave className="text-yellow-500" /> {currentSocial._id ? 'Update Social Link' : 'Add Social Link'}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
};

export default SocialMediaManager;
