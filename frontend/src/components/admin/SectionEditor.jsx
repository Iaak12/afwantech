import React, { useMemo, useRef } from 'react';
import JoditEditor from 'jodit-react';
import { FaImage, FaUpload, FaCheckCircle, FaExclamationTriangle, FaTrash } from 'react-icons/fa';
import API_BASE_URL from '../../config/api';

const InlineImageUploader = ({ value, onChange }) => {
    const [uploading, setUploading] = React.useState(false);

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
        <div className="bg-gray-50/50 p-4 rounded-2xl border border-gray-100 shadow-inner group transition-all hover:bg-white hover:shadow-md">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
                <div className="w-16 h-16 rounded-xl overflow-hidden shadow-sm bg-gray-200 flex-shrink-0 flex items-center justify-center border border-gray-100">
                    {value ? (
                        <img src={value} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                        <FaImage className="text-gray-400 w-6 h-6" />
                    )}
                </div>

                <div className="flex-1 w-full relative">
                    <input
                        type="text"
                        value={value || ''}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder="Image URL..."
                        className="w-full p-3 pr-10 border border-white rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-[#123447] font-mono text-[10px]"
                    />
                    {value && <FaCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 w-4 h-4" />}
                </div>

                <div className="relative">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleUpload}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <button
                        type="button"
                        disabled={uploading}
                        className={`flex items-center px-6 py-3 bg-[#123447] text-white text-[10px] font-black rounded-xl shadow-lg transition-all hover:bg-[#fbbf24] hover:text-[#123447] ${uploading ? 'opacity-50' : ''}`}
                    >
                        <FaUpload className={`mr-2 ${uploading ? 'animate-bounce' : ''}`} />
                        {uploading ? '...' : 'UPDATE'}
                    </button>
                    {value && (
                        <button
                            type="button"
                            onClick={() => onChange('')}
                            className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-all border-2 border-white z-20"
                            title="Remove Image"
                        >
                            <FaTrash className="w-2.5 h-2.5" />
                        </button>
                    )}
                </div>
            </div>
            {value && (
                <p className="text-[9px] font-bold text-gray-400 mt-2 truncate max-w-full opacity-60">
                    Filename: {value.split('/').pop()}
                </p>
            )}
        </div>
    );
};

const HeroSectionEditor = ({ data, onChange }) => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-[10px] font-black text-[#123447]/50 uppercase mb-2 tracking-widest">Badge Text</label>
                    <input
                        type="text"
                        value={data.badge || ''}
                        onChange={(e) => onChange({ ...data, badge: e.target.value })}
                        placeholder="e.g. Trending"
                        className="w-full p-4 border border-gray-100 rounded-2xl bg-gray-50 outline-none focus:ring-2 focus:ring-[#123447] font-bold"
                    />
                </div>
                <div>
                    <label className="block text-[10px] font-black text-[#123447]/50 uppercase mb-2 tracking-widest">Main Title</label>
                    <input
                        type="text"
                        value={data.title || ''}
                        onChange={(e) => onChange({ ...data, title: e.target.value })}
                        className="w-full p-4 border border-gray-100 rounded-2xl bg-gray-50 outline-none focus:ring-2 focus:ring-[#123447] font-bold"
                    />
                </div>
            </div>
            <div>
                <label className="block text-[10px] font-black text-[#123447]/50 uppercase mb-2 tracking-widest">Description</label>
                <textarea
                    rows="3"
                    value={data.description || ''}
                    onChange={(e) => onChange({ ...data, description: e.target.value })}
                    className="w-full p-4 border border-gray-100 rounded-2xl bg-gray-50 outline-none focus:ring-2 focus:ring-[#123447] font-medium"
                ></textarea>
            </div>

            <div>
                <label className="block text-[10px] font-black text-[#123447]/50 uppercase mb-2 tracking-widest">Hero Banner / Background Image</label>
                <InlineImageUploader
                    value={data.image}
                    onChange={(newUrl) => onChange({ ...data, image: newUrl })}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-gray-100">
                <div>
                    <label className="block text-[10px] font-black text-[#123447]/50 uppercase mb-2 tracking-widest">Button 1 Text</label>
                    <input
                        type="text"
                        value={data.btn1Text || ''}
                        onChange={(e) => onChange({ ...data, btn1Text: e.target.value })}
                        placeholder="e.g. See How"
                        className="w-full p-4 border border-gray-100 rounded-2xl bg-gray-50 outline-none focus:ring-2 focus:ring-[#123447] font-bold"
                    />
                </div>
                <div>
                    <label className="block text-[10px] font-black text-[#123447]/50 uppercase mb-2 tracking-widest">Button 1 Link</label>
                    <input
                        type="text"
                        value={data.btn1Link || ''}
                        onChange={(e) => onChange({ ...data, btn1Link: e.target.value })}
                        placeholder="e.g. /contact"
                        className="w-full p-4 border border-gray-100 rounded-2xl bg-gray-50 outline-none focus:ring-2 focus:ring-[#123447] font-bold"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-gray-100">
                <div>
                    <label className="block text-[10px] font-black text-[#123447]/50 uppercase mb-2 tracking-widest">Button 2 Text</label>
                    <input
                        type="text"
                        value={data.btn2Text || ''}
                        onChange={(e) => onChange({ ...data, btn2Text: e.target.value })}
                        placeholder="e.g. See Our Work"
                        className="w-full p-4 border border-gray-100 rounded-2xl bg-gray-50 outline-none focus:ring-2 focus:ring-[#123447] font-bold"
                    />
                </div>
                <div>
                    <label className="block text-[10px] font-black text-[#123447]/50 uppercase mb-2 tracking-widest">Button 2 Link</label>
                    <input
                        type="text"
                        value={data.btn2Link || ''}
                        onChange={(e) => onChange({ ...data, btn2Link: e.target.value })}
                        placeholder="e.g. /our-work"
                        className="w-full p-4 border border-gray-100 rounded-2xl bg-gray-50 outline-none focus:ring-2 focus:ring-[#123447] font-bold"
                    />
                </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
                <label className="block text-[10px] font-black text-[#123447]/50 uppercase mb-2 tracking-widest">Typing Animation Text (Comma Separated)</label>
                <textarea
                    rows="2"
                    value={data.typingText || ''}
                    onChange={(e) => onChange({ ...data, typingText: e.target.value })}
                    placeholder="e.g. Rank on Google #1 Page, Increase Organic Traffic, Boost Sales"
                    className="w-full p-4 border border-gray-100 rounded-2xl bg-gray-50 outline-none focus:ring-2 focus:ring-[#123447] font-bold text-sm"
                ></textarea>
                <p className="text-[9px] text-gray-400 font-bold mt-2 uppercase tracking-widest">Separated by commas to create a sequence of rotating text.</p>
            </div>
        </div>
    );
};

const GenericFormEditor = ({ data, onChange }) => {
    const editorConfig = useMemo(() => ({
        readonly: false,
        height: 300,
        toolbarButtonSize: 'small',
        statusbar: false,
        buttons: ['source', '|', 'bold', 'strikethrough', 'underline', 'italic', '|', 'ul', 'ol', '|', 'font', 'fontsize', 'brush', 'paragraph', '|', 'image', 'link', '|', 'align', 'undo', 'redo']
    }), []);

    const handleChange = (key, val) => {
        onChange({ ...data, [key]: val });
    };

    const renderField = (key, value) => {
        const fieldLabel = key.replace(/([A-Z])/g, ' $1').toUpperCase().trim();
        const isImageField = key.toLowerCase().includes('image') || key.toLowerCase().includes('logo') || key.toLowerCase().includes('icon') || key.toLowerCase().includes('thumb');

        if (typeof value === 'string') {
            const isRichText = key.toLowerCase().includes('description') || key.toLowerCase().includes('content') || key.toLowerCase().includes('quote') || key.toLowerCase().includes('footertext');

            if (isImageField) {
                return (
                    <div key={key} className="mb-8">
                        <label className="block text-[10px] font-black text-[#123447]/40 uppercase mb-2 tracking-[0.2em]">{fieldLabel}</label>
                        <InlineImageUploader value={value} onChange={(newVal) => handleChange(key, newVal)} />
                    </div>
                );
            }

            return (
                <div key={key} className="mb-8">
                    <label className="block text-[10px] font-black text-[#123447]/40 uppercase mb-2 tracking-[0.2em]">{fieldLabel}</label>
                    {isRichText ? (
                        <div className="rounded-[1.5rem] overflow-hidden border border-gray-100 shadow-sm bg-white">
                            <JoditEditor
                                value={value}
                                config={editorConfig}
                                onBlur={(newContent) => handleChange(key, newContent)}
                            />
                        </div>
                    ) : (
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => handleChange(key, e.target.value)}
                            className="w-full p-4 border border-gray-100 rounded-2xl bg-gray-50/50 focus:bg-white outline-none focus:ring-2 focus:ring-[#123447] font-bold text-gray-700 transition-all shadow-inner"
                        />
                    )}
                </div>
            );
        } else if (Array.isArray(value)) {
            return (
                <div key={key} className="mb-10 bg-gray-50/30 p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <label className="block text-[10px] font-black text-[#123447] uppercase tracking-[0.3em]">{fieldLabel} (LIST)</label>
                        <button
                            onClick={() => {
                                const newArr = [...value];
                                if (value.length > 0 && typeof value[0] === 'object') {
                                    const emptyObj = {};
                                    Object.keys(value[0]).forEach(k => emptyObj[k] = '');
                                    newArr.push(emptyObj);
                                } else {
                                    newArr.push('');
                                }
                                handleChange(key, newArr);
                            }}
                            className="text-[10px] font-black bg-[#fbbf24] text-[#123447] px-4 py-2 rounded-xl shadow-sm hover:scale-105 active:scale-95 transition-all uppercase tracking-widest"
                        >+ NEW ITEM</button>
                    </div>

                    <div className="space-y-4">
                        {value.map((item, index) => (
                            <div key={index} className="group relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <button
                                    onClick={() => {
                                        const newArr = value.filter((_, i) => i !== index);
                                        handleChange(key, newArr);
                                    }}
                                    className="absolute -top-2 -right-2 bg-red-500 text-white w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-lg hover:scale-110"
                                ><FaTrash className="w-3 h-3" /></button>

                                {typeof item === 'string' ? (
                                    <input
                                        type="text"
                                        value={item}
                                        onChange={(e) => {
                                            const newArr = [...value];
                                            newArr[index] = e.target.value;
                                            handleChange(key, newArr);
                                        }}
                                        className="w-full p-2 border-none outline-none font-bold text-gray-700"
                                    />
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {Object.keys(item).map(subKey => {
                                            const isSubImage = subKey.toLowerCase().includes('image') || subKey.toLowerCase().includes('logo') || subKey.toLowerCase().includes('icon') || subKey.toLowerCase().includes('thumb');
                                            return (
                                                <div key={subKey} className={isSubImage ? "md:col-span-2 lg:col-span-3" : ""}>
                                                    <label className="block text-[8px] font-black text-gray-300 uppercase mb-1 tracking-widest">{subKey}</label>
                                                    {isSubImage ? (
                                                        <InlineImageUploader
                                                            value={item[subKey]}
                                                            onChange={(newV) => {
                                                                const newArr = [...value];
                                                                newArr[index] = { ...item, [subKey]: newV };
                                                                handleChange(key, newArr);
                                                            }}
                                                        />
                                                    ) : (
                                                        <input
                                                            type="text"
                                                            value={item[subKey] || ''}
                                                            onChange={(e) => {
                                                                const newArr = [...value];
                                                                newArr[index] = { ...item, [subKey]: e.target.value };
                                                                handleChange(key, newArr);
                                                            }}
                                                            className="w-full p-2 border-b-2 border-gray-50 bg-transparent outline-none focus:border-[#fbbf24] transition-colors font-bold text-sm"
                                                        />
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="p-2">
            {Object.keys(data).map(key => renderField(key, data[key]))}
        </div>
    );
};

const SectionEditor = ({ section, onChange, onRemove }) => {
    const [activeTab, setActiveTab] = React.useState('form');

    return (
        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 relative group shadow-lg transition-all hover:shadow-2xl">
            <button
                onClick={onRemove}
                className="absolute top-6 right-6 text-red-500 opacity-0 group-hover:opacity-100 transition-all hover:scale-110 bg-red-50 p-3 rounded-2xl shadow-sm border border-red-100"
                title="Remove Section"
            >
                <FaTrash className="w-5 h-5" />
            </button>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 pr-12 gap-4">
                <div className="flex items-center">
                    <span className="bg-[#123447]/5 text-[#123447] text-[10px] font-black px-4 py-2 rounded-xl uppercase tracking-[0.2em] mr-4 shadow-inner border border-gray-100">
                        {section.type}
                    </span>
                    <h3 className="font-black text-[#123447] capitalize text-xl tracking-tight">{section.type.replace('_', ' ')} Block</h3>
                </div>

                <div className="flex bg-gray-100/60 p-1.5 rounded-2xl border border-gray-100">
                    <button
                        onClick={() => setActiveTab('form')}
                        className={`px-6 py-2.5 text-xs font-black rounded-xl transition-all uppercase tracking-widest ${activeTab === 'form' ? 'bg-[#123447] shadow-xl text-white' : 'text-[#123447]/40 hover:text-[#123447]'}`}
                    >
                        Editor View
                    </button>
                    <button
                        onClick={() => setActiveTab('code')}
                        className={`px-6 py-2.5 text-xs font-black rounded-xl transition-all uppercase tracking-widest ${activeTab === 'code' ? 'bg-[#123447] shadow-xl text-white' : 'text-[#123447]/40 hover:text-[#123447]'}`}
                    >
                        JSON Logic
                    </button>
                </div>
            </div>

            <div className="mt-4">
                {activeTab === 'form' ? (
                    <div className="bg-white">
                        {section.type === 'hero' ? (
                            <HeroSectionEditor data={section.data} onChange={(newData) => onChange({ ...section, data: newData })} />
                        ) : (
                            <GenericFormEditor data={section.data} onChange={(newData) => onChange({ ...section, data: newData })} />
                        )}
                    </div>
                ) : (
                    <div>
                        <div className="rounded-[2rem] overflow-hidden border-4 border-[#123447] shadow-2xl relative">
                            <div className="absolute top-4 right-6 text-[10px] font-black text-green-500 uppercase tracking-widest animate-pulse">Advanced JSON Mode</div>
                            <textarea
                                rows="15"
                                value={typeof section.data === 'string' ? section.data : JSON.stringify(section.data, null, 2)}
                                onBlur={(e) => {
                                    try {
                                        const parsed = JSON.parse(e.target.value);
                                        onChange({ ...section, data: parsed });
                                    } catch (err) {
                                        alert("CRITICAL: Invalid JSON syntax. Changes rejected to prevent data loss.");
                                    }
                                }}
                                defaultValue={JSON.stringify(section.data, null, 2)}
                                className="w-full p-8 outline-none font-mono text-sm bg-[#0a1e35] text-[#fbbf24] shadow-inner leading-relaxed"
                            ></textarea>
                        </div>
                        <p className="text-[10px] text-gray-400 font-bold mt-4 uppercase tracking-widest text-center italic opacity-60">⚠️ Edit with caution. Ensure valid JSON structure with double quotes.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SectionEditor;
