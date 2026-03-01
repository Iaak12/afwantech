import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { FaPlus, FaEdit, FaTrash, FaTimes, FaSave, FaSearch, FaQuestionCircle } from 'react-icons/fa';
import API_BASE_URL from '../../config/api';

const FaqManager = () => {
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentFaq, setCurrentFaq] = useState({
        q: '',
        a: ''
    });

    useEffect(() => {
        fetchFaqs();
    }, []);

    const fetchFaqs = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/api/faqs`);
            const data = await res.json();
            setFaqs(data);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching FAQs:', err);
            setLoading(false);
        }
    };

    const handleSave = async () => {
        if (!currentFaq.q || !currentFaq.a) {
            alert('Please fill in both question and answer.');
            return;
        }

        const method = currentFaq._id ? 'PUT' : 'POST';
        const url = currentFaq._id
            ? `${API_BASE_URL}/api/faqs/${currentFaq._id}`
            : `${API_BASE_URL}/api/faqs`;

        try {
            const res = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
                },
                body: JSON.stringify(currentFaq)
            });

            if (res.ok) {
                setIsEditing(false);
                setCurrentFaq({ q: '', a: '' });
                fetchFaqs();
            } else {
                const errorData = await res.json();
                alert('Save failed: ' + (errorData.message || 'Unknown error'));
            }
        } catch (err) {
            alert('Save failed: ' + err.message);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this FAQ?')) return;

        try {
            const res = await fetch(`${API_BASE_URL}/api/faqs/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
                }
            });

            if (res.ok) {
                fetchFaqs();
            }
        } catch (err) {
            alert('Delete failed');
        }
    };

    const filteredFaqs = faqs.filter(faq =>
        faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <AdminLayout>
            <div className="max-w-6xl mx-auto py-10 px-6">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <div>
                        <h1 className="text-5xl font-black text-[#123447] tracking-tight mb-2">Help & <span className="text-yellow-500">FAQs</span></h1>
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Knowledge Base Management</p>
                    </div>
                    {!isEditing && (
                        <button
                            onClick={() => { setCurrentFaq({ q: '', a: '' }); setIsEditing(true); }}
                            className="bg-yellow-500 hover:bg-yellow-400 text-[#123447] px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-yellow-500/20 active:scale-95 flex items-center gap-3"
                        >
                            <FaPlus /> Add New FAQ
                        </button>
                    )}
                </div>

                {!isEditing ? (
                    <>
                        {/* Search Bar */}
                        <div className="mb-8 relative group">
                            <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#123447] transition-colors" />
                            <input
                                type="text"
                                placeholder="Search FAQs by question or keyword..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-16 pr-8 py-5 rounded-2xl border-none bg-white shadow-sm outline-none focus:ring-4 focus:ring-[#123447]/5 font-bold text-gray-700 transition-all"
                            />
                        </div>

                        {/* FAQ Grid */}
                        <div className="grid grid-cols-1 gap-4">
                            {loading ? (
                                <div className="py-20 text-center bg-white rounded-[2rem] border-2 border-dashed border-gray-100">
                                    <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                                    <p className="text-gray-400 font-bold uppercase tracking-widest">Hydrating Q&A Repository...</p>
                                </div>
                            ) : filteredFaqs.length > 0 ? (
                                filteredFaqs.map(faq => (
                                    <div key={faq._id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all group flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <FaQuestionCircle className="text-blue-500" />
                                                <h3 className="text-lg font-black text-[#123447] leading-tight">
                                                    {faq.q}
                                                </h3>
                                            </div>
                                            <p className="text-gray-500 text-sm line-clamp-2 italic">
                                                {faq.a}
                                            </p>
                                        </div>
                                        <div className="flex gap-2 shrink-0">
                                            <button
                                                onClick={() => { setCurrentFaq(faq); setIsEditing(true); }}
                                                className="bg-gray-50 text-[#123447] px-6 py-3 rounded-xl font-bold text-[10px] uppercase hover:bg-gray-100 transition-colors flex items-center gap-2"
                                            >
                                                <FaEdit /> Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(faq._id)}
                                                className="bg-red-50 text-red-500 p-3 rounded-xl hover:bg-red-500 hover:text-white transition-all"
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="py-20 text-center bg-white rounded-[2rem] border-2 border-dashed border-gray-200">
                                    <p className="text-gray-400 font-bold uppercase tracking-widest">No matching questions found.</p>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    /* FAQ Editor Form */
                    <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-bottom-10 duration-500">
                        <div className="bg-gray-50/50 p-8 border-b border-gray-100 flex justify-between items-center">
                            <h2 className="text-2xl font-black text-[#123447]">{currentFaq._id ? 'Edit FAQ' : 'Draft New FAQ'}</h2>
                            <button onClick={() => setIsEditing(false)} className="text-gray-400 hover:text-red-500 transition-colors p-2 bg-white rounded-full shadow-sm"><FaTimes /></button>
                        </div>

                        <div className="p-10 space-y-10">
                            <div>
                                <label className="block text-[10px] font-black text-[#123447]/50 uppercase mb-3 tracking-widest">The Question</label>
                                <input
                                    type="text"
                                    value={currentFaq.q}
                                    onChange={(e) => setCurrentFaq({ ...currentFaq, q: e.target.value })}
                                    className="w-full p-5 border-2 border-gray-100 rounded-2xl bg-white outline-none focus:border-[#123447] font-bold text-gray-700 transition-all text-lg"
                                    placeholder="e.g., What is your typical project timeline?"
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] font-black text-[#123447]/50 uppercase mb-3 tracking-widest">The Expert Answer</label>
                                <textarea
                                    rows="6"
                                    value={currentFaq.a}
                                    onChange={(e) => setCurrentFaq({ ...currentFaq, a: e.target.value })}
                                    className="w-full p-5 border-2 border-gray-100 rounded-2xl bg-white outline-none focus:border-[#123447] font-bold text-gray-700 transition-all resize-none"
                                    placeholder="Provide a clear, helpful response..."
                                />
                            </div>

                            <button
                                onClick={handleSave}
                                className="w-full py-6 bg-[#123447] text-white rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-opacity-90 transition-all shadow-2xl shadow-[#123447]/30 flex items-center justify-center gap-3 active:scale-[0.98]"
                            >
                                <FaSave className="text-yellow-500" /> {currentFaq._id ? 'Update Knowledge Base' : 'Publish to Website'}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
};

export default FaqManager;
