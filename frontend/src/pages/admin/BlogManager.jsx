import React, { useState, useEffect, useRef } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import JoditEditor from 'jodit-react';
import { FaPlus, FaEdit, FaTrash, FaGlobe, FaImage, FaTimes, FaSave, FaSearch } from 'react-icons/fa';
import API_BASE_URL from '../../config/api';

const BlogManager = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentBlog, setCurrentBlog] = useState({
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        image: '',
        category: 'Digital Marketing',
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    });

    const categories = ["SEO", "Web Design", "Digital Marketing", "Branding", "Social Media", "General"];

    const editor = useRef(null);
    const config = {
        readonly: false,
        placeholder: 'Start typing your blog content here...',
        height: 400,
        toolbarButtonSize: 'middle',
        buttons: [
            'source', '|', 'bold', 'italic', 'underline', 'strikethrough', '|',
            'superscript', 'subscript', '|', 'ul', 'ol', '|', 'outdent', 'indent', '|',
            'font', 'fontsize', 'brush', 'paragraph', '|', 'image', 'video', 'table', 'link', '|',
            'align', 'undo', 'redo', '|', 'hr', 'eraser', 'fullsize'
        ]
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/api/blogs`);
            const data = await res.json();
            setBlogs(data);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching blogs:', err);
            setLoading(false);
        }
    };

    const handleUploadImage = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

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
            const data = await res.json();
            if (data.url) {
                setCurrentBlog({ ...currentBlog, image: data.url });
            }
        } catch (err) {
            alert('Upload failed: ' + err.message);
        }
    };

    const handleSave = async () => {
        const method = currentBlog._id ? 'PUT' : 'POST';
        const url = currentBlog._id
            ? `${API_BASE_URL}/api/blogs/${currentBlog._id}`
            : `${API_BASE_URL}/api/blogs`;

        // Auto-generate slug if empty
        const finalBlog = {
            ...currentBlog,
            slug: currentBlog.slug || currentBlog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
        };

        try {
            const res = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
                },
                body: JSON.stringify(finalBlog)
            });

            if (res.ok) {
                setIsEditing(false);
                fetchBlogs();
                setCurrentBlog({ title: '', slug: '', excerpt: '', content: '', image: '', date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) });
            } else {
                const error = await res.json();
                alert('Error: ' + error.message);
            }
        } catch (err) {
            console.error('Save error:', err);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this blog?')) return;

        try {
            const res = await fetch(`${API_BASE_URL}/api/blogs/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
                }
            });
            if (res.ok) fetchBlogs();
        } catch (err) {
            console.error('Delete error:', err);
        }
    };

    const filteredBlogs = blogs.filter(b =>
        b.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <AdminLayout>
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-10 bg-[#123447] p-8 rounded-[2rem] shadow-2xl text-white">
                    <div>
                        <h1 className="text-4xl font-black tracking-tight mb-2">Blog Control Center</h1>
                        <p className="text-blue-200 font-bold uppercase text-[10px] tracking-widest">Manage your SEO-optimized content library</p>
                    </div>
                    {!isEditing && (
                        <button
                            onClick={() => {
                                setCurrentBlog({ title: '', slug: '', excerpt: '', content: '', image: '', date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) });
                                setIsEditing(true);
                            }}
                            className="bg-yellow-400 text-[#123447] px-8 py-4 rounded-2xl font-black flex items-center gap-3 hover:bg-yellow-500 hover:scale-105 transition-all shadow-xl uppercase text-xs"
                        >
                            <FaPlus className="text-sm" /> Create New Post
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
                                placeholder="Search blogs by title..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-16 pr-8 py-5 rounded-2xl border-none bg-white shadow-sm outline-none focus:ring-4 focus:ring-[#123447]/5 font-bold text-gray-700 transition-all"
                            />
                        </div>

                        {/* Inventory Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredBlogs.length > 0 ? (
                                filteredBlogs.map(blog => (
                                    <div key={blog._id} className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all group flex flex-col justify-between">
                                        <div>
                                            <div className="h-40 bg-gray-50 rounded-2xl mb-5 overflow-hidden relative">
                                                {blog.image ? (
                                                    <img src={blog.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                                                        <FaImage size={40} />
                                                    </div>
                                                )}
                                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[9px] font-black text-[#123447] uppercase tracking-tighter shadow-sm">
                                                    {blog.date}
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-black text-[#123447] mb-2 line-clamp-2 leading-tight">
                                                {blog.title}
                                            </h3>
                                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                                                <FaGlobe className="text-blue-400" /> /{blog.slug}
                                            </p>
                                        </div>
                                        <div className="flex gap-2 pt-4 border-t border-gray-50">
                                            <button
                                                onClick={() => { setCurrentBlog(blog); setIsEditing(true); }}
                                                className="flex-1 bg-gray-50 text-[#123447] py-3 rounded-xl font-bold text-[10px] uppercase hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                                            >
                                                <FaEdit /> Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(blog._id)}
                                                className="w-12 bg-red-50 text-red-500 py-3 rounded-xl hover:bg-red-500 hover:text-white transition-all flex items-center justify-center"
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full py-20 text-center bg-white rounded-[3rem] border-2 border-dashed border-gray-200">
                                    <p className="text-gray-400 font-bold uppercase tracking-widest">No blogs matching your search.</p>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    /* Blog Editor Form */
                    <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-bottom-10 duration-500">
                        <div className="bg-gray-50/50 p-8 border-b border-gray-100 flex justify-between items-center">
                            <h2 className="text-2xl font-black text-[#123447]">{currentBlog._id ? 'Edit Article' : 'Compose New Article'}</h2>
                            <button onClick={() => setIsEditing(false)} className="text-gray-400 hover:text-red-500 transition-colors p-2 bg-white rounded-full shadow-sm"><FaTimes /></button>
                        </div>

                        <div className="p-10 space-y-10">
                            {/* Title & Slug Group */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div>
                                    <label className="block text-[10px] font-black text-[#123447]/50 uppercase mb-3 tracking-widest">Article Headline</label>
                                    <input
                                        type="text"
                                        value={currentBlog.title}
                                        onChange={(e) => setCurrentBlog({ ...currentBlog, title: e.target.value })}
                                        className="w-full p-5 border-2 border-gray-100 rounded-2xl bg-white outline-none focus:border-[#123447] font-bold text-gray-700 transition-all text-lg"
                                        placeholder="Enter a catchy headline..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black text-[#123447]/50 uppercase mb-3 tracking-widest">SEO-Friendly Slug (Auto-generated)</label>
                                    <div className="flex items-center bg-gray-50 p-5 rounded-2xl border-2 border-transparent">
                                        <span className="text-gray-400 font-bold pr-2">/blog/</span>
                                        <input
                                            type="text"
                                            value={currentBlog.slug}
                                            onChange={(e) => setCurrentBlog({ ...currentBlog, slug: e.target.value })}
                                            className="flex-1 bg-transparent outline-none font-bold text-[#123447]"
                                            placeholder="my-cool-post"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Image & Excerpt */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div>
                                    <label className="block text-[10px] font-black text-[#123447]/50 uppercase mb-3 tracking-widest">Featured Banner</label>
                                    <div className="flex gap-4 items-end">
                                        <div className="flex-1 h-32 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 relative overflow-hidden group">
                                            {currentBlog.image ? (
                                                <img src={currentBlog.image} className="w-full h-full object-cover" alt="" />
                                            ) : (
                                                <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 gap-2">
                                                    <FaImage size={24} />
                                                    <span className="text-[10px] font-black uppercase">No Image</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="bg-[#123447] text-white p-4 rounded-2xl cursor-pointer hover:bg-opacity-90 transition-all shadow-lg active:scale-95">
                                                <FaImage size={20} />
                                                <input type="file" onChange={handleUploadImage} className="hidden" />
                                            </label>
                                            {currentBlog.image && (
                                                <button onClick={() => setCurrentBlog({ ...currentBlog, image: '' })} className="bg-red-500 text-white p-4 rounded-2xl hover:bg-red-600 transition-all shadow-lg">
                                                    <FaTrash size={20} />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black text-[#123447]/50 uppercase mb-3 tracking-widest">Article Category</label>
                                    <select
                                        value={currentBlog.category}
                                        onChange={(e) => setCurrentBlog({ ...currentBlog, category: e.target.value })}
                                        className="w-full p-5 border-2 border-gray-100 rounded-2xl bg-white outline-none focus:border-[#123447] font-bold text-gray-700 transition-all"
                                    >
                                        {categories.map(cat => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-[10px] font-black text-[#123447]/50 uppercase mb-3 tracking-widest">Meta Description / Excerpt</label>
                                <textarea
                                    rows="3"
                                    value={currentBlog.excerpt}
                                    onChange={(e) => setCurrentBlog({ ...currentBlog, excerpt: e.target.value })}
                                    className="w-full p-5 border-2 border-gray-100 rounded-2xl bg-white outline-none focus:border-[#123447] font-bold text-gray-700 transition-all resize-none"
                                    placeholder="Briefly describe what this blog is about for Google search..."
                                ></textarea>
                            </div>

                            {/* JODIT EDITOR */}
                            <div className="pt-4">
                                <label className="block text-[10px] font-black text-[#123447]/50 uppercase mb-3 tracking-widest">Full Article Content</label>
                                <div className="border border-gray-100 rounded-[2rem] overflow-hidden shadow-inner">
                                    <JoditEditor
                                        ref={editor}
                                        value={currentBlog.content}
                                        config={config}
                                        onBlur={newContent => setCurrentBlog({ ...currentBlog, content: newContent })}
                                    />
                                </div>
                            </div>

                            {/* Action Footer */}
                            <div className="flex justify-end gap-4 pt-10 border-t border-gray-100">
                                <button
                                    onClick={() => setIsEditing(false)}
                                    className="px-10 py-5 rounded-2xl font-black text-[#123447] uppercase text-xs hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSave}
                                    className="px-12 py-5 bg-[#123447] text-white rounded-[1.5rem] font-black uppercase text-xs flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-blue-900/20 active:scale-95"
                                >
                                    <FaSave /> {currentBlog._id ? 'Update Article' : 'Publish Article'}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
};

export default BlogManager;
