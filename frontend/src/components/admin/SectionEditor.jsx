import React, { useMemo } from 'react';
import JoditEditor from 'jodit-react';
import { FaImage, FaUpload, FaCheckCircle, FaTrash, FaPlus, FaVideo, FaGamepad } from 'react-icons/fa';
import API_BASE_URL from '../../config/api';

// --- SHARED UI COMPONENTS ---

const InlineImageUploader = ({ value, onChange, icon: Icon = FaImage, placeholder = "Image URL..." }) => {
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
                headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` },
                body: formData
            });

            const result = await res.json();
            if (res.ok) {
                onChange(result.url);
            } else {
                if (res.status === 401) {
                    alert("Session expired. Please login again.");
                    localStorage.removeItem('adminToken');
                    window.location.href = '/admin/login';
                    return;
                }
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
        <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 items-center">
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0 flex items-center justify-center border border-gray-200">
                {value ? (
                    <img src={value} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                    <Icon className="text-gray-300 w-5 h-5" />
                )}
            </div>

            <div className="flex-1 w-full relative">
                <input
                    type="text"
                    value={value || ''}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className="w-full p-2.5 pr-8 border border-gray-200 rounded-lg bg-gray-50 outline-none focus:border-blue-500 focus:bg-white font-mono text-xs transition-colors"
                />
                {value && <FaCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 w-3.5 h-3.5" />}
            </div>

            <div className="relative">
                <input type="file" accept="image/*" onChange={handleUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                <button type="button" disabled={uploading} className={`flex items-center px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-bold tracking-wide rounded-lg shadow-sm transition-all whitespace-nowrap ${uploading ? 'opacity-50' : ''}`}>
                    <FaUpload className={`mr-2 ${uploading ? 'animate-bounce' : ''}`} />
                    {uploading ? 'UPLOADING...' : 'UPLOAD'}
                </button>
            </div>
            {value && (
                <button type="button" onClick={() => onChange('')} className="bg-red-50 text-red-500 hover:bg-red-500 hover:text-white p-2.5 rounded-lg border border-red-100 transition-colors" title="Clear">
                    <FaTrash className="w-3.5 h-3.5" />
                </button>
            )}
        </div>
    );
};

const Field = ({ label, children }) => (
    <div className="mb-4">
        <label className="block text-xs font-bold text-gray-700 mb-1.5 tracking-wide uppercase">{label}</label>
        {children}
    </div>
);

const InputText = ({ value, onChange, placeholder, isTextarea }) => isTextarea ? (
    <textarea rows="3" value={value || ''} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-sm font-medium transition-all shadow-sm resize-none"></textarea>
) : (
    <input type="text" value={value || ''} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-sm font-medium transition-all shadow-sm" />
);


const RichText = ({ value, onChange }) => {
    const config = useMemo(() => ({ readonly: false, height: 200, toolbarButtonSize: 'small' }), []);
    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <JoditEditor value={value || ''} config={config} onBlur={(v) => onChange(v)} />
        </div>
    );
};

const ListManager = ({ title, items = [], template, onAdd, onRemove, renderItem }) => (
    <div className="pt-6 border-t border-gray-100">
        <div className="flex justify-between items-center mb-4">
            <label className="block text-sm font-black text-[#111827] uppercase tracking-wide">{title} <span className="text-gray-400 font-medium normal-case">({items.length})</span></label>
            <button onClick={() => onAdd(template)} className="flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-xs font-bold hover:bg-blue-100 transition-colors border border-blue-100">
                <FaPlus className="mr-1.5" /> ADD NEW
            </button>
        </div>
        <div className="space-y-4">
            {items.map((item, index) => (
                <div key={index} className="bg-gray-50/50 p-5 rounded-xl border border-gray-200 relative group transition-all hover:bg-white hover:shadow-md">
                    <button onClick={() => onRemove(index)} className="absolute top-4 right-4 text-red-400 hover:text-red-600 bg-white hover:bg-red-50 p-2 rounded-lg shadow-sm border border-red-100 opacity-0 group-hover:opacity-100 transition-all text-xs font-bold flex items-center z-10">
                        <FaTrash className="mr-1" /> REMOVE
                    </button>
                    {renderItem(item, index)}
                </div>
            ))}
            {items.length === 0 && (
                <div className="text-center p-8 border-2 border-dashed border-gray-200 rounded-xl text-gray-400 text-sm font-medium bg-gray-50">
                    No items added yet. Click &quot;Add New&quot; to begin.
                </div>
            )}
        </div>
    </div>
);


// --- SPECIFIC SECTION EDITORS ---

const HeroSectionEditor = ({ data, onChange }) => (
    <div className="p-8 space-y-6">
        <div className="flex items-center gap-3 mb-6"><span className="text-2xl">🎯</span><h3 className="text-xl font-bold text-[#111827]">Hero Section</h3></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field label="Badge (e.g. Trending)"><InputText value={data.badge} onChange={v => onChange({ ...data, badge: v })} /></Field>
            <Field label="Background Image"><InlineImageUploader value={data.image} onChange={v => onChange({ ...data, image: v })} /></Field>
        </div>
        <Field label="Main Title"><InputText isTextarea value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Testing Final Restoration\nIncrease Organ..." /></Field>
        <Field label="Description"><InputText value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-blue-50/50 p-5 rounded-xl border border-blue-100/50">
            <Field label="Button 1 Text"><InputText value={data.btn1Text} onChange={v => onChange({ ...data, btn1Text: v })} placeholder="See How" /></Field>
            <Field label="Button 1 Link"><InputText value={data.btn1Link} onChange={v => onChange({ ...data, btn1Link: v })} /></Field>
            <Field label="Button 2 Text"><InputText value={data.btn2Text} onChange={v => onChange({ ...data, btn2Text: v })} placeholder="See Our Work" /></Field>
            <Field label="Button 2 Link"><InputText value={data.btn2Link} onChange={v => onChange({ ...data, btn2Link: v })} /></Field>
        </div>
        <Field label="Typing Animation Sentences (Comma Separated)"><InputText isTextarea value={data.typingText} onChange={v => onChange({ ...data, typingText: v })} /></Field>
    </div>
);

const TrustedSectionEditor = ({ data, onChange }) => {
    const arr = data.logos || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">🤝</span><h3 className="text-xl font-bold text-[#111827]">Trusted Clients Logos</h3></div>
            <Field label="Section Title"><InputText value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Trusted by 3000+ High-Growth MSMEs/ Clients" /></Field>
            <ListManager
                title="Client Logos" items={arr} template={''}
                onAdd={(t) => onChange({ ...data, logos: [...arr, t] })}
                onRemove={(i) => onChange({ ...data, logos: arr.filter((_, idx) => idx !== i) })}
                renderItem={(item, index) => (
                    <Field label={`Logo ${index + 1}`}><InlineImageUploader value={item} onChange={v => { const n = [...arr]; n[index] = v; onChange({ ...data, logos: n }); }} /></Field>
                )}
            />
        </div>
    );
};

const WhySectionEditor = ({ data, onChange }) => {
    const feats = data.features || [];
    const ratings = data.ratings || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">💡</span><h3 className="text-xl font-bold text-[#111827]">Why Choose Us (#1 Agency)</h3></div>
            <Field label="Main Title"><InputText isTextarea value={data.title} onChange={v => onChange({ ...data, title: v })} /></Field>
            <Field label="Subtitle / Description"><RichText value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
            <Field label="Side Image (Office Window)"><InlineImageUploader value={data.mainImage} onChange={v => onChange({ ...data, mainImage: v })} /></Field>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-yellow-50/50 p-5 rounded-xl border border-yellow-100">
                <Field label="Button Text"><InputText value={data.btnText} onChange={v => onChange({ ...data, btnText: v })} placeholder="Connect with Expert" /></Field>
                <Field label="Button Link"><InputText value={data.btnLink} onChange={v => onChange({ ...data, btnLink: v })} /></Field>
            </div>

            <ListManager
                title="Features Checklist" items={feats} template={{ title: '', description: '' }}
                onAdd={(t) => onChange({ ...data, features: [...feats, t] })}
                onRemove={(i) => onChange({ ...data, features: feats.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <div className="grid grid-cols-1 gap-4 w-full md:w-5/6">
                        <Field label="Feature Title"><InputText value={item.title} onChange={v => { const n = [...feats]; n[idx].title = v; onChange({ ...data, features: n }); }} placeholder="Experience: Over A Decade in Business" /></Field>
                        <Field label="Short Description"><InputText value={item.description} onChange={v => { const n = [...feats]; n[idx].description = v; onChange({ ...data, features: n }); }} /></Field>
                    </div>
                )}
            />

            <ListManager
                title="Platform Ratings (Google, Justdial, etc.)" items={ratings} template={{ platform: '', score: '4.9 / 5', stars: 5 }}
                onAdd={(t) => onChange({ ...data, ratings: [...ratings, t] })}
                onRemove={(i) => onChange({ ...data, ratings: ratings.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <div className="grid grid-cols-3 gap-4 w-full md:w-3/4">
                        <Field label="Platform Name"><InputText value={item.platform} onChange={v => { const n = [...ratings]; n[idx].platform = v; onChange({ ...data, ratings: n }); }} placeholder="Google" /></Field>
                        <Field label="Score Text"><InputText value={item.score} onChange={v => { const n = [...ratings]; n[idx].score = v; onChange({ ...data, ratings: n }); }} placeholder="4.9 / 5" /></Field>
                        <Field label="Stars (1-5)"><input type="number" min="1" max="5" value={item.stars || 5} onChange={e => { const n = [...ratings]; n[idx].stars = parseInt(e.target.value); onChange({ ...data, ratings: n }); }} className="w-full p-3 border border-gray-200 rounded-lg outline-none" /></Field>
                    </div>
                )}
            />
        </div>
    );
};

const UnlockSectionEditor = ({ data, onChange }) => {
    const cards = data.cards || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">🔓</span><h3 className="text-xl font-bold text-[#111827]">Unlock 10x Growth Section</h3></div>
            <Field label="Main Title"><InputText value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Unlock 10x Growth with Our Unique..." /></Field>
            <Field label="Description"><InputText isTextarea value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
            <ListManager
                title="Growth Cards (Columns)" items={cards} template={{ number: '', title: '', image: '', bulletPoints: '' }}
                onAdd={(t) => onChange({ ...data, cards: [...cards, t] })}
                onRemove={(i) => onChange({ ...data, cards: cards.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <Field label="Card Number or Text"><InputText value={item.number} onChange={v => { const n = [...cards]; n[idx].number = v; onChange({ ...data, cards: n }); }} placeholder="3" /></Field>
                            <Field label="Card Title"><InputText value={item.title} onChange={v => { const n = [...cards]; n[idx].title = v; onChange({ ...data, cards: n }); }} placeholder="Brand Image Building" /></Field>
                            <Field label="Bottom Image"><InlineImageUploader value={item.image} onChange={v => { const n = [...cards]; n[idx].image = v; onChange({ ...data, cards: n }); }} /></Field>
                        </div>
                        <Field label="Bullet Points / Content (Rich Text)"><RichText value={item.bulletPoints} onChange={v => { const n = [...cards]; n[idx].bulletPoints = v; onChange({ ...data, cards: n }); }} /></Field>
                    </div>
                )}
            />
        </div>
    );
};

const CaseStudiesSectionEditor = ({ data, onChange }) => {
    const cases = data.caseStudies || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">📋</span><h3 className="text-xl font-bold text-[#111827]">Case Studies Slider</h3></div>
            <Field label="Section Title"><InputText value={data.title} onChange={v => onChange({ ...data, title: v })} /></Field>
            <Field label="Section Description"><InputText isTextarea value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
            <ListManager
                title="Case Study Slides" items={cases} template={{ title: '', subtitle: '', image: '', highlightImage: '', listHeading: '', services: [], btnText: '', btnLink: '' }}
                onAdd={(t) => onChange({ ...data, caseStudies: [...cases, t] })}
                onRemove={(i) => onChange({ ...data, caseStudies: cases.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                        <div className="space-y-4">
                            <Field label="Client Name (Title)"><InputText value={item.title} onChange={v => { const n = [...cases]; n[idx].title = v; onChange({ ...data, caseStudies: n }); }} placeholder="Shelley Enterprises" /></Field>
                            <Field label="Industry / Subtitle"><InputText value={item.subtitle} onChange={v => { const n = [...cases]; n[idx].subtitle = v; onChange({ ...data, caseStudies: n }); }} placeholder="Magnetic Jewellery in USA" /></Field>
                            <Field label="Main Background Image"><InlineImageUploader value={item.image} onChange={v => { const n = [...cases]; n[idx].image = v; onChange({ ...data, caseStudies: n }); }} /></Field>
                            <Field label="Hover/Highlight Image (e.g. Chart/Shoe)"><InlineImageUploader value={item.highlightImage} onChange={v => { const n = [...cases]; n[idx].highlightImage = v; onChange({ ...data, caseStudies: n }); }} /></Field>
                        </div>
                        <div className="space-y-4">
                            <Field label="List Heading (Dropdown text)"><InputText value={item.listHeading} onChange={v => { const n = [...cases]; n[idx].listHeading = v; onChange({ ...data, caseStudies: n }); }} placeholder="1 service offered by us" /></Field>
                            <Field label="Services (Comma Separated)"><InputText isTextarea value={(item.services || []).join(',')} onChange={v => { const n = [...cases]; n[idx].services = v.split(',').map(s => s.trim()).filter(s => s); onChange({ ...data, caseStudies: n }); }} placeholder="Website with SEO, Off Page SEO, Brand Image..." /></Field>
                            <div className="grid grid-cols-2 gap-4 mt-2">
                                <Field label="Button Text"><InputText value={item.btnText} onChange={v => { const n = [...cases]; n[idx].btnText = v; onChange({ ...data, caseStudies: n }); }} placeholder="Connect with Expert" /></Field>
                                <Field label="Button Link"><InputText value={item.btnLink} onChange={v => { const n = [...cases]; n[idx].btnLink = v; onChange({ ...data, caseStudies: n }); }} /></Field>
                            </div>
                        </div>
                    </div>
                )}
            />
        </div>
    );
};

const WebinarSectionEditor = ({ data, onChange }) => {
    const points = data.points || [];
    const images = data.images || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">📹</span><h3 className="text-xl font-bold text-[#111827]">Webinar Ad Section</h3></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Main Title"><InputText isTextarea value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Business Growth Formula Webinar" /></Field>
                <div className="space-y-4">
                    <Field label="Subtitle"><InputText value={data.subtitle} onChange={v => onChange({ ...data, subtitle: v })} /></Field>
                    <Field label="Date/Time Box Text"><InputText value={data.datetime} onChange={v => onChange({ ...data, datetime: v })} placeholder="Every Tuesday | 11am to 12 Noon | On Zoom" /></Field>
                </div>
            </div>

            <ListManager
                title="Learn How To (Bullet Points)" items={points} template={''}
                onAdd={(t) => onChange({ ...data, points: [...points, t] })}
                onRemove={(i) => onChange({ ...data, points: points.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <Field label={`Point ${idx + 1}`}><InputText value={item} onChange={v => { const n = [...points]; n[idx] = v; onChange({ ...data, points: n }); }} placeholder="Establish a strong online presence" /></Field>
                )}
            />

            <div className="border-t border-gray-100 pt-6 mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <Field label="Coach Name"><InputText value={data.coachName} onChange={v => onChange({ ...data, coachName: v })} placeholder="Rahul Ranjan Singh" /></Field>
                    <Field label="Coach Title"><InputText value={data.coachTitle} onChange={v => onChange({ ...data, coachTitle: v })} placeholder="- Awarded Best Business Growth Coach" /></Field>
                    <Field label="Main Coach Image"><InlineImageUploader value={data.mainImage} onChange={v => onChange({ ...data, mainImage: v })} /></Field>
                </div>
                <div className="space-y-4">
                    <ListManager
                        title="Small Video/Image Thumbnails Gallery" items={images} template={''}
                        onAdd={(t) => onChange({ ...data, images: [...images, t] })}
                        onRemove={(i) => onChange({ ...data, images: images.filter((_, idx) => idx !== i) })}
                        renderItem={(item, idx) => (
                            <Field label={`Thumbnail ${idx + 1}`}><InlineImageUploader value={item} onChange={v => { const n = [...images]; n[idx] = v; onChange({ ...data, images: n }); }} /></Field>
                        )}
                    />
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                        <Field label="Button 1 Text"><InputText value={data.btn1Text} onChange={v => onChange({ ...data, btn1Text: v })} placeholder="Book Your Slot Now" /></Field>
                        <Field label="Button 2 Text"><InputText value={data.btn2Text} onChange={v => onChange({ ...data, btn2Text: v })} placeholder="Read Story" /></Field>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ClientsSectionEditor = ({ data, onChange }) => {
    const clients = data.testimonials || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">👥</span><h3 className="text-xl font-bold text-[#111827]">Video Testimonials Grid</h3></div>
            <div className="text-center w-full md:w-2/3 mx-auto pb-6 border-b border-gray-100">
                <Field label="Section Title"><InputText value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Listen From Our Clients" /></Field>
                <Field label="Section Subtitle"><InputText isTextarea value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
            </div>
            <ListManager
                title="Client Videos" items={clients} template={{ youtubeUrl: '', thumbnail: '', caption: '', description: '' }}
                onAdd={(t) => onChange({ ...data, testimonials: [...clients, t] })}
                onRemove={(i) => onChange({ ...data, testimonials: clients.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-4">
                        <div className="space-y-4">
                            <Field label="Thumbnail Image (or Video Cover)"><InlineImageUploader value={item.thumbnail} onChange={v => { const n = [...clients]; n[idx].thumbnail = v; onChange({ ...data, testimonials: n }); }} /></Field>
                            <Field label="YouTube Video Embed URL"><div className="flex"><span className="bg-red-500 text-white rounded-l-lg p-3"><FaVideo /></span><InputText value={item.youtubeUrl} onChange={v => { const n = [...clients]; n[idx].youtubeUrl = v; onChange({ ...data, testimonials: n }); }} placeholder="https://www.youtube.com/embed/..." /></div></Field>
                        </div>
                        <div className="space-y-4">
                            <Field label="Top Caption (Blue text)"><InputText value={item.caption} onChange={v => { const n = [...clients]; n[idx].caption = v; onChange({ ...data, testimonials: n }); }} placeholder="Winntus Formwork Private Limited, Dr. P. Goyal" /></Field>
                            <Field label="Main Bold Description (Client Review Text)"><InputText isTextarea value={item.description} onChange={v => { const n = [...clients]; n[idx].description = v; onChange({ ...data, testimonials: n }); }} placeholder="Client Testimonial: How Webpulse Digital Marketing Helped Winntus Grow Online!" /></Field>
                        </div>
                    </div>
                )}
            />
            <div className="flex justify-center pt-4">
                <Field label="Load More Button Text"><InputText value={data.btnText} onChange={v => onChange({ ...data, btnText: v })} placeholder="View More Reviews" /></Field>
            </div>
        </div>
    );
};

const BusinessServeSectionEditor = ({ data, onChange }) => {
    const businesses = data.businesses || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">🏢</span><h3 className="text-xl font-bold text-[#111827]">Businesses We Serve</h3></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-blue-50/30 p-6 border border-blue-50 rounded-xl mb-6">
                <div className="space-y-4">
                    <Field label="Right Side Main Title"><InputText value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Businesses We SERVE" /></Field>
                    <Field label="Right Side Description"><RichText value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
                </div>
                <div className="flex flex-col justify-end space-y-4">
                    <Field label="Button Text"><InputText value={data.btnText} onChange={v => onChange({ ...data, btnText: v })} placeholder="Send Enquiry" /></Field>
                    <Field label="Button Link"><InputText value={data.btnLink} onChange={v => onChange({ ...data, btnLink: v })} /></Field>
                </div>
            </div>

            <ListManager
                title="Business Grid Cards (Left Side)" items={businesses} template={{ name: '', iconUrl: '' }}
                onAdd={(t) => onChange({ ...data, businesses: [...businesses, t] })}
                onRemove={(i) => onChange({ ...data, businesses: businesses.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                        <Field label="Business Name"><InputText value={item.name} onChange={v => { const n = [...businesses]; n[idx].name = v; onChange({ ...data, businesses: n }); }} placeholder="B2B / Wholesale" /></Field>
                        <Field label="Icon/Image URL"><InlineImageUploader value={item.iconUrl} onChange={v => { const n = [...businesses]; n[idx].iconUrl = v; onChange({ ...data, businesses: n }); }} /></Field>
                    </div>
                )}
            />
        </div>
    );
};

const BrandsSectionEditor = ({ data, onChange }) => {
    const nodes = data.nodes || [];
    return (
        <div className="p-8 space-y-6 bg-slate-50 rounded-xl border border-slate-200">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">✨</span><h3 className="text-xl font-bold text-[#111827]">We Build Brands (Connected Nodes)</h3></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Main Title (Yellow text)"><InputText value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="We Build Brands" /></Field>
                <Field label="Background Image (Dark blue overlay)"><InlineImageUploader value={data.bgImage} onChange={v => onChange({ ...data, bgImage: v })} /></Field>
                <div className="md:col-span-2">
                    <Field label="Center Logo Overlay text (Usually short like 'W' or icon list)"><InputText value={data.centerText} onChange={v => onChange({ ...data, centerText: v })} placeholder="W" /></Field>
                </div>
            </div>

            <ListManager
                title="Connected Service Nodes around Center" items={nodes} template={{ title: '', description: '', icon: '' }}
                onAdd={(t) => onChange({ ...data, nodes: [...nodes, t] })}
                onRemove={(i) => onChange({ ...data, nodes: nodes.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-2 space-y-4">
                            <Field label="Service Name"><InputText value={item.title} onChange={v => { const n = [...nodes]; n[idx].title = v; onChange({ ...data, nodes: n }); }} placeholder="Web Designing" /></Field>
                            <Field label="Hover/Under Description"><InputText isTextarea value={item.description} onChange={v => { const n = [...nodes]; n[idx].description = v; onChange({ ...data, nodes: n }); }} placeholder="We specialize in visually stunning websites..." /></Field>
                        </div>
                        <Field label="Small Icon URL"><InlineImageUploader value={item.icon} onChange={v => { const n = [...nodes]; n[idx].icon = v; onChange({ ...data, nodes: n }); }} /></Field>
                    </div>
                )}
            />
        </div>
    );
};

const TabsSectionEditor = ({ data, onChange }) => {
    const tabsData = data.tabsData || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">📑</span><h3 className="text-xl font-bold text-[#111827]">Digital Marketing Tabs</h3></div>
            <div className="text-center w-full md:w-1/2 mx-auto pb-6 border-b border-gray-100">
                <Field label="Top Main Title"><InputText value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Digital Marketing Services Our Agency Offers" /></Field>
            </div>

            <ListManager
                title="Service Tabs" items={tabsData} template={{ tabName: '', title: '', description: '', image: '', btnText: '', btnLink: '' }}
                onAdd={(t) => onChange({ ...data, tabsData: [...tabsData, t] })}
                onRemove={(i) => onChange({ ...data, tabsData: tabsData.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <div className="border border-blue-100 rounded-xl p-6 bg-white relative">
                        <div className="absolute top-0 right-0 bg-blue-100 text-blue-800 px-3 py-1 rounded-bl-xl rounded-tr-xl font-bold text-xs uppercase cursor-default">Tab Item #{idx + 1}</div>
                        <Field label="Tab Header / Title (e.g. SEO, Website)"><InputText value={item.tabName} onChange={v => { const n = [...tabsData]; n[idx].tabName = v; onChange({ ...data, tabsData: n }); }} placeholder="SEO" /></Field>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4 pt-4 border-t border-gray-100">
                            <div className="space-y-4">
                                <Field label="Content Main Title"><InputText value={item.title} onChange={v => { const n = [...tabsData]; n[idx].title = v; onChange({ ...data, tabsData: n }); }} placeholder="Search Engine Optimization" /></Field>
                                <Field label="Content Rich Description"><RichText value={item.description} onChange={v => { const n = [...tabsData]; n[idx].description = v; onChange({ ...data, tabsData: n }); }} /></Field>
                                <div className="grid grid-cols-2 gap-4">
                                    <Field label="Button Text"><InputText value={item.btnText} onChange={v => { const n = [...tabsData]; n[idx].btnText = v; onChange({ ...data, tabsData: n }); }} placeholder="Know More" /></Field>
                                    <Field label="Button Link"><InputText value={item.btnLink} onChange={v => { const n = [...tabsData]; n[idx].btnLink = v; onChange({ ...data, tabsData: n }); }} /></Field>
                                </div>
                            </div>
                            <Field label="Right Side Preview Image"><InlineImageUploader value={item.image} onChange={v => { const n = [...tabsData]; n[idx].image = v; onChange({ ...data, tabsData: n }); }} /></Field>
                        </div>
                    </div>
                )}
            />
        </div>
    );
};

const IndustriesSectionEditor = ({ data, onChange }) => {
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">🏬</span><h3 className="text-xl font-bold text-[#111827]">Industries We Serve Lists</h3></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-xl border border-slate-100 mb-6">
                <Field label="Main Top Title"><InputText value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Industries We Serve" /></Field>
                <Field label="Subtitle Description"><InputText isTextarea value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="border border-green-100 bg-green-50/20 p-6 rounded-xl">
                    <Field label="Left List Title"><InputText value={data.productTitle} onChange={v => onChange({ ...data, productTitle: v })} placeholder="Products Based Industries" /></Field>
                    <Field label="Items (Comma Separated)"><InputText isTextarea value={(data.productIndustries || []).join(',')} onChange={v => onChange({ ...data, productIndustries: v.split(',').map(s => s.trim()).filter(s => s) })} placeholder="Drugs & Pharmaceuticals, Food & Beverages, ..." /></Field>
                </div>
                <div className="border border-purple-100 bg-purple-50/20 p-6 rounded-xl">
                    <Field label="Right List Title"><InputText value={data.serviceTitle} onChange={v => onChange({ ...data, serviceTitle: v })} placeholder="Services Based Industries" /></Field>
                    <Field label="Items (Comma Separated)"><InputText isTextarea value={(data.serviceIndustries || []).join(',')} onChange={v => onChange({ ...data, serviceIndustries: v.split(',').map(s => s.trim()).filter(s => s) })} placeholder="Event Planner, Security Systems..." /></Field>
                </div>
            </div>

            <div className="flex justify-center pt-6 mt-4 border-t border-gray-100">
                <Field label="Bottom CTA Button Text"><InputText value={data.btnText} onChange={v => onChange({ ...data, btnText: v })} placeholder="Connect with Expert" /></Field>
                <div className="ml-4 w-64"><Field label="Bottom CTA Link"><InputText value={data.btnLink} onChange={v => onChange({ ...data, btnLink: v })} /></Field></div>
            </div>
        </div>
    );
};

const TechnologySectionEditor = ({ data, onChange }) => {
    const tools = data.tools || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">💻</span><h3 className="text-xl font-bold text-[#111827]">Technology & Tools Grid</h3></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50/80 p-6 rounded-xl border border-gray-100 mb-4">
                <Field label="Title on Left"><InputText value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Technology and Tools we use" /></Field>
                <Field label="Description under Title"><InputText isTextarea value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
            </div>

            <ListManager
                title="Tools Box Data Grid (Right Side)" items={tools} template={{ name: '' }}
                onAdd={(t) => onChange({ ...data, tools: [...tools, t] })}
                onRemove={(i) => onChange({ ...data, tools: tools.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <div className="w-full md:w-1/2">
                        <Field label={`Box Text #${idx + 1} (e.g. PHP, HTML5)`}><InputText value={item.name} onChange={v => { const n = [...tools]; n[idx].name = v; onChange({ ...data, tools: n }); }} placeholder="HTML5" /></Field>
                    </div>
                )}
            />
        </div>
    );
};

const StatsSectionEditor = ({ data, onChange }) => {
    const stats = data.stats || [];
    return (
        <div className="p-8 space-y-6 bg-blue-900 rounded-b-xl border border-[#0f2138]">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">📊</span><h3 className="text-xl font-bold text-white">Stats Counter Strip</h3></div>
            <ListManager
                title={<span className="text-blue-200">Stats Blocks</span>} items={stats} template={{ number: '', suffix: '', title: '' }}
                onAdd={(t) => onChange({ ...data, stats: [...stats, t] })}
                onRemove={(i) => onChange({ ...data, stats: stats.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <div className="grid grid-cols-3 gap-4">
                        <Field label="Main Number (e.g. 2011)"><InputText value={item.number} onChange={v => { const n = [...stats]; n[idx].number = v; onChange({ ...data, stats: n }); }} placeholder="3000" /></Field>
                        <Field label="Suffix (e.g. +)"><InputText value={item.suffix} onChange={v => { const n = [...stats]; n[idx].suffix = v; onChange({ ...data, stats: n }); }} placeholder="+" /></Field>
                        <Field label="Bottom Text (e.g. Established)"><InputText value={item.title} onChange={v => { const n = [...stats]; n[idx].title = v; onChange({ ...data, stats: n }); }} placeholder="Clients Trust Us" /></Field>
                    </div>
                )}
            />
        </div>
    );
};

const NewsMediaSectionEditor = ({ data, onChange }) => {
    const medialogos = data.mediaLogos || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">📰</span><h3 className="text-xl font-bold text-[#111827]">News & Media Logos</h3></div>
            <div className="text-center w-full md:w-1/2 mx-auto pb-4"><Field label="Title"><InputText value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Afwan Tech in News & Media" /></Field></div>
            <ListManager
                title="Media Outlet Images/Text Boxes" items={medialogos} template={''}
                onAdd={(t) => onChange({ ...data, mediaLogos: [...medialogos, t] })}
                onRemove={(i) => onChange({ ...data, mediaLogos: medialogos.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <div className="w-full md:w-1/2">
                        <Field label="Logo URL or Output Name"><InlineImageUploader value={item} onChange={v => { const n = [...medialogos]; n[idx] = v; onChange({ ...data, mediaLogos: n }); }} placeholder="Upload Logo or type text name..." /></Field>
                    </div>
                )}
            />
        </div>
    );
};

const LifeSectionEditor = ({ data, onChange }) => {
    const slides = data.slides || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">🌟</span><h3 className="text-xl font-bold text-[#111827]">Life At Afwan Tech (Carousel)</h3></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-xl border border-slate-100 mb-6">
                <Field label="Center Section Title"><InputText value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Life At Afwan Tech" /></Field>
                <Field label="Center Section Description"><InputText isTextarea value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
            </div>

            <ListManager
                title="Carousel Images with Captions" items={slides} template={{ image: '', caption: '' }}
                onAdd={(t) => onChange({ ...data, slides: [...slides, t] })}
                onRemove={(i) => onChange({ ...data, slides: slides.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="w-full md:w-1/2"><Field label="Main Slide Image"><InlineImageUploader value={item.image} onChange={v => { const n = [...slides]; n[idx].image = v; onChange({ ...data, slides: n }); }} /></Field></div>
                        <div className="w-full md:w-1/2"><Field label="Image Caption (e.g. Holi Celebration)"><InputText value={item.caption} onChange={v => { const n = [...slides]; n[idx].caption = v; onChange({ ...data, slides: n }); }} placeholder="Holi Celebration at Afwan Tech" /></Field></div>
                    </div>
                )}
            />
        </div>
    );
};

// --- ABOUT US SECTION EDITORS ---

const AboutHeroEditor = ({ data, onChange }) => (
    <div className="p-8 space-y-6">
        <div className="flex items-center gap-3 mb-6"><span className="text-2xl">🎯</span><h3 className="text-xl font-bold text-[#111827]">About Hero Section</h3></div>
        <Field label="Main Title (HTML allowed)"><InputText isTextarea value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="About <span class='text-yellow-400'>Afwan Tech</span>" /></Field>
        <Field label="Description"><InputText isTextarea value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
    </div>
);

const AboutIntroEditor = ({ data, onChange }) => {
    const items = data.listItems || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">👋</span><h3 className="text-xl font-bold text-[#111827]">About Intro (Who We Are)</h3></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Top Badge"><InputText value={data.badge} onChange={v => onChange({ ...data, badge: v })} placeholder="Who We Are" /></Field>
                <Field label="Main Title"><InputText value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Empowering Your Digital Journey" /></Field>
            </div>
            <Field label="Description (Rich Text)"><RichText value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
            <Field label="Quote Text (Italic text)"><InputText isTextarea value={data.quote} onChange={v => onChange({ ...data, quote: v })} /></Field>

            <div className="border-t border-gray-100 pt-6 mt-6">
                <Field label="Sidebar List Title"><InputText value={data.listTitle} onChange={v => onChange({ ...data, listTitle: v })} placeholder="Why Choose Afwan Tech?" /></Field>
                <ListManager
                    title="Checklist Items" items={items} template={''}
                    onAdd={(t) => onChange({ ...data, listItems: [...items, t] })}
                    onRemove={(i) => onChange({ ...data, listItems: items.filter((_, idx) => idx !== i) })}
                    renderItem={(item, idx) => (
                        <Field label={`Item ${idx + 1}`}><InputText value={item} onChange={v => { const n = [...items]; n[idx] = v; onChange({ ...data, listItems: n }); }} placeholder="Award-Winning..." /></Field>
                    )}
                />
            </div>
        </div>
    );
};

const AboutWhyEditor = ({ data, onChange }) => {
    const cards = data.cards || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">💡</span><h3 className="text-xl font-bold text-[#111827]">About Why Trust Us</h3></div>
            <Field label="Main Title (HTML allowed)"><InputText value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Why Clients Trust <span class='text-blue-600'>Afwan Tech</span>" /></Field>
            <ListManager
                title="Reason Cards" items={cards} template={{ title: '', text: '' }}
                onAdd={(t) => onChange({ ...data, cards: [...cards, t] })}
                onRemove={(i) => onChange({ ...data, cards: cards.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <div className="grid grid-cols-1 gap-4 w-full md:w-5/6">
                        <Field label="Card Title"><InputText value={item.title} onChange={v => { const n = [...cards]; n[idx].title = v; onChange({ ...data, cards: n }); }} placeholder="Expert Digital Strategists" /></Field>
                        <Field label="Card Description"><InputText isTextarea value={item.text} onChange={v => { const n = [...cards]; n[idx].text = v; onChange({ ...data, cards: n }); }} /></Field>
                    </div>
                )}
            />
        </div>
    );
};

const AboutTeamEditor = ({ data, onChange }) => {
    const members = data.members || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">👥</span><h3 className="text-xl font-bold text-[#111827]">About Team Section</h3></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-xl border border-slate-100 mb-6">
                <Field label="Top Badge"><InputText value={data.badge} onChange={v => onChange({ ...data, badge: v })} placeholder="Meet Our Experts" /></Field>
                <Field label="Main Title"><InputText value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="The Visionaries Behind Our Success" /></Field>
                <div className="md:col-span-2">
                    <Field label="Description"><InputText isTextarea value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
                </div>
            </div>
            <ListManager
                title="Team Members" items={members} template={{ name: '', role: '', image: '', desc: '', linkedin: '#', twitter: '#', email: '#' }}
                onAdd={(t) => onChange({ ...data, members: [...members, t] })}
                onRemove={(i) => onChange({ ...data, members: members.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <Field label="Member Name"><InputText value={item.name} onChange={v => { const n = [...members]; n[idx].name = v; onChange({ ...data, members: n }); }} placeholder="Rahul Ranjan Singh" /></Field>
                            <Field label="Role"><InputText value={item.role} onChange={v => { const n = [...members]; n[idx].role = v; onChange({ ...data, members: n }); }} placeholder="Founder & CEO" /></Field>
                            <Field label="Short Bio"><InputText isTextarea value={item.desc} onChange={v => { const n = [...members]; n[idx].desc = v; onChange({ ...data, members: n }); }} /></Field>
                        </div>
                        <div className="space-y-4">
                            <Field label="Profile Image URL"><InlineImageUploader value={item.image} onChange={v => { const n = [...members]; n[idx].image = v; onChange({ ...data, members: n }); }} /></Field>
                            <div className="grid grid-cols-3 gap-2">
                                <Field label="LinkedIn URL"><InputText value={item.linkedin} onChange={v => { const n = [...members]; n[idx].linkedin = v; onChange({ ...data, members: n }); }} /></Field>
                                <Field label="Twitter/X URL"><InputText value={item.twitter} onChange={v => { const n = [...members]; n[idx].twitter = v; onChange({ ...data, members: n }); }} /></Field>
                                <Field label="Email/Mailto"><InputText value={item.email} onChange={v => { const n = [...members]; n[idx].email = v; onChange({ ...data, members: n }); }} /></Field>
                            </div>
                        </div>
                    </div>
                )}
            />
        </div>
    );
};

const AboutProcessEditor = ({ data, onChange }) => {
    const steps = data.steps || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">⚙️</span><h3 className="text-xl font-bold text-[#111827]">About Process Blueprint</h3></div>
            <Field label="Main Title (HTML allowed)"><InputText value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Our Proven <span class='text-blue-600'>Growth Blueprint</span>" /></Field>
            <Field label="Description"><InputText isTextarea value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
            <ListManager
                title="Process Steps" items={steps} template={{ title: '', desc: '' }}
                onAdd={(t) => onChange({ ...data, steps: [...steps, t] })}
                onRemove={(i) => onChange({ ...data, steps: steps.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field label={`Step ${idx + 1} Title`}><InputText value={item.title} onChange={v => { const n = [...steps]; n[idx].title = v; onChange({ ...data, steps: n }); }} placeholder="Discover & Strategy" /></Field>
                        <Field label="Description"><InputText isTextarea value={item.desc} onChange={v => { const n = [...steps]; n[idx].desc = v; onChange({ ...data, steps: n }); }} /></Field>
                    </div>
                )}
            />
        </div>
    );
};

const AboutStatsEditor = ({ data, onChange }) => {
    const stats = data.stats || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">📊</span><h3 className="text-xl font-bold text-[#111827]">About Stats Section</h3></div>
            <ListManager
                title="Stats Blocks" items={stats} template={{ value: '', label: '' }}
                onAdd={(t) => onChange({ ...data, stats: [...stats, t] })}
                onRemove={(i) => onChange({ ...data, stats: stats.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <div className="grid grid-cols-2 gap-4">
                        <Field label="Stat Value (e.g. 10+)"><InputText value={item.value} onChange={v => { const n = [...stats]; n[idx].value = v; onChange({ ...data, stats: n }); }} placeholder="10+" /></Field>
                        <Field label="Stat Label"><InputText value={item.label} onChange={v => { const n = [...stats]; n[idx].label = v; onChange({ ...data, stats: n }); }} placeholder="Years of Digital Excellence" /></Field>
                    </div>
                )}
            />
        </div>
    );
};

const AboutCTAEditor = ({ data, onChange }) => (
    <div className="p-8 space-y-6">
        <div className="flex items-center gap-3 mb-6"><span className="text-2xl">🚀</span><h3 className="text-xl font-bold text-[#111827]">About Call to Action</h3></div>
        <Field label="Main Title"><InputText isTextarea value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Ready to Supercharge..." /></Field>
        <Field label="Description"><InputText isTextarea value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-blue-50/50 p-5 rounded-xl border border-blue-100/50">
            <Field label="Button Text"><InputText value={data.btnText} onChange={v => onChange({ ...data, btnText: v })} placeholder="Get Your Free Consultation" /></Field>
            <Field label="Button Link"><InputText value={data.btnLink} onChange={v => onChange({ ...data, btnLink: v })} /></Field>
        </div>
    </div>
);

const ContactSectionEditor = ({ data, onChange }) => {
    const fields = data.extraFields || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">📞</span><h3 className="text-xl font-bold text-[#111827]">Contact Info Section</h3></div>
            <Field label="Main Title (HTML allowed)"><InputText value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Get In Touch With Afwan Tech" /></Field>
            <Field label="Description (HTML allowed)"><InputText isTextarea value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50 p-5 rounded-xl border border-slate-100">
                <Field label="Phone Number"><InputText value={data.phone} onChange={v => onChange({ ...data, phone: v })} placeholder="+91 92413 03862" /></Field>
                <Field label="Email Address"><InputText value={data.email} onChange={v => onChange({ ...data, email: v })} placeholder="afwantechservices@gmail.com" /></Field>
                <Field label="Location"><InputText value={data.location} onChange={v => onChange({ ...data, location: v })} placeholder="India" /></Field>
            </div>

            <div className="border-t border-gray-100 pt-6 mt-6">
                <div className="mb-4">
                    <h4 className="text-lg font-bold text-gray-800">Dynamic Form Fields</h4>
                    <p className="text-sm text-gray-500">Add custom fields to your contact form (e.g. Company Name, Budget, etc).</p>
                </div>
                <ListManager
                    title="Extra Fields"
                    items={fields}
                    template={{ label: '', type: 'text', required: false }}
                    onAdd={(t) => onChange({ ...data, extraFields: [...fields, t] })}
                    onRemove={(i) => onChange({ ...data, extraFields: fields.filter((_, idx) => idx !== i) })}
                    renderItem={(item, idx) => (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white">
                            <Field label="Field Label (e.g. Budget)"><InputText value={item.label} onChange={v => { const n = [...fields]; n[idx].label = v; onChange({ ...data, extraFields: n }); }} placeholder="Your Company" /></Field>
                            <Field label="Field Type">
                                <select
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white"
                                    value={item.type}
                                    onChange={e => { const n = [...fields]; n[idx].type = e.target.value; onChange({ ...data, extraFields: n }); }}
                                >
                                    <option value="text">Text Input</option>
                                    <option value="email">Email</option>
                                    <option value="tel">Phone</option>
                                    <option value="textarea">Large Text Area</option>
                                </select>
                            </Field>
                            <Field label="Required">
                                <select
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white"
                                    value={item.required ? 'true' : 'false'}
                                    onChange={e => { const n = [...fields]; n[idx].required = e.target.value === 'true'; onChange({ ...data, extraFields: n }); }}
                                >
                                    <option value="false">Optional</option>
                                    <option value="true">Required</option>
                                </select>
                            </Field>
                        </div>
                    )}
                />
            </div>
        </div>
    );
};

// --- UNIVERSAL SERVICE PAGE EDITORS ---

const ServiceHeroEditor = ({ data, onChange }) => (
    <div className="p-8 space-y-6">
        <div className="flex items-center gap-3 mb-6"><span className="text-2xl">🎯</span><h3 className="text-xl font-bold text-[#111827]">Service Hero Section</h3></div>
        <Field label="Top Badge"><InputText value={data.badge} onChange={v => onChange({ ...data, badge: v })} placeholder="Best Service Agency" /></Field>
        <Field label="Main Title (HTML Allowed)"><InputText isTextarea value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Transform Your Business..." /></Field>
        <Field label="Description"><InputText isTextarea value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
        <Field label="Background Image (Right Side)"><InlineImageUploader value={data.image} onChange={v => onChange({ ...data, image: v })} /></Field>
        <ListManager
            title="Hero Bullet Features" items={data.features || []} template={''}
            onAdd={(t) => onChange({ ...data, features: [...(data.features || []), t] })}
            onRemove={(i) => onChange({ ...data, features: (data.features || []).filter((_, idx) => idx !== i) })}
            renderItem={(item, idx) => (
                <Field label={`Feature ${idx + 1}`}><InputText value={item} onChange={v => { const n = [...(data.features || [])]; n[idx] = v; onChange({ ...data, features: n }); }} placeholder="User-Friendly Solutions..." /></Field>
            )}
        />
    </div>
);

const ServiceContentEditor = ({ data, onChange }) => (
    <div className="p-8 space-y-6">
        <div className="flex items-center gap-3 mb-6"><span className="text-2xl">📝</span><h3 className="text-xl font-bold text-[#111827]">Service Content Section</h3></div>
        <div className="bg-blue-50/30 p-6 rounded-xl border border-blue-50 mb-6 space-y-4">
            <h4 className="font-bold text-blue-800 text-sm uppercase mb-2">Intro Section (Top Center)</h4>
            <Field label="Intro Title"><InputText value={data.introTitle} onChange={v => onChange({ ...data, introTitle: v })} placeholder="Accelerate Your Business Growth" /></Field>
            <Field label="Intro Description"><InputText isTextarea value={data.introDescription} onChange={v => onChange({ ...data, introDescription: v })} /></Field>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-xl border border-slate-100 mb-6">
            <div className="space-y-4">
                <h4 className="font-bold text-slate-800 text-sm uppercase mb-2">Left Side Content</h4>
                <Field label="Small Colored Title"><InputText value={data.smallTitle} onChange={v => onChange({ ...data, smallTitle: v })} placeholder="Service Name" /></Field>
                <Field label="Main Bold Title"><InputText isTextarea value={data.mainTitle} onChange={v => onChange({ ...data, mainTitle: v })} placeholder="Drive Success With..." /></Field>
                <Field label="Description"><InputText isTextarea value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
                <Field label="Bottom Bold Title"><InputText isTextarea value={data.secondTitle} onChange={v => onChange({ ...data, secondTitle: v })} /></Field>
                <Field label="Bottom Description"><InputText isTextarea value={data.secondDescription} onChange={v => onChange({ ...data, secondDescription: v })} /></Field>
            </div>
            <div className="space-y-4">
                <h4 className="font-bold text-slate-800 text-sm uppercase mb-2">Right Side Images & List</h4>
                <Field label="Top Image"><InlineImageUploader value={data.image} onChange={v => onChange({ ...data, image: v })} /></Field>
                <Field label="Bottom Image"><InlineImageUploader value={data.secondImage} onChange={v => onChange({ ...data, secondImage: v })} /></Field>
                <ListManager
                    title="Bullet Points List" items={data.bullets || []} template={''}
                    onAdd={(t) => onChange({ ...data, bullets: [...(data.bullets || []), t] })}
                    onRemove={(i) => onChange({ ...data, bullets: (data.bullets || []).filter((_, idx) => idx !== i) })}
                    renderItem={(item, idx) => (
                        <Field label={`Bullet ${idx + 1}`}><InputText value={item} onChange={v => { const n = [...(data.bullets || [])]; n[idx] = v; onChange({ ...data, bullets: n }); }} placeholder="Custom Designs..." /></Field>
                    )}
                />
            </div>
        </div>
    </div>
);

const ServicePlansEditor = ({ data, onChange }) => {
    const plans = data.plans || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">💰</span><h3 className="text-xl font-bold text-[#111827]">Plans & Pricing Section</h3></div>
            <div className="text-center w-full md:w-2/3 mx-auto pb-6 border-b border-gray-100">
                <Field label="Section Title"><InputText value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Affordable Pricing Packages" /></Field>
                <Field label="Section Description"><InputText isTextarea value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
            </div>
            <ListManager
                title="Pricing Plans" items={plans} template={{ title: '', subtitle: '', price: '', oldPrice: '', save: '', recommended: false, features: [] }}
                onAdd={(t) => onChange({ ...data, plans: [...plans, t] })}
                onRemove={(i) => onChange({ ...data, plans: plans.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-4 rounded-lg border border-gray-200 relative">
                        {item.recommended && <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-bl-lg">Recommended</div>}
                        <div className="space-y-4">
                            <Field label="Plan Title (e.g. Gold)"><InputText value={item.title} onChange={v => { const n = [...plans]; n[idx].title = v; onChange({ ...data, plans: n }); }} /></Field>
                            <Field label="Subtitle / Best for"><InputText value={item.subtitle} onChange={v => { const n = [...plans]; n[idx].subtitle = v; onChange({ ...data, plans: n }); }} /></Field>
                            <div className="grid grid-cols-3 gap-2">
                                <Field label="Price (₹)"><InputText value={item.price} onChange={v => { const n = [...plans]; n[idx].price = v; onChange({ ...data, plans: n }); }} /></Field>
                                <Field label="Old Price"><InputText value={item.oldPrice} onChange={v => { const n = [...plans]; n[idx].oldPrice = v; onChange({ ...data, plans: n }); }} /></Field>
                                <Field label="Save Banner Text"><InputText value={item.save} onChange={v => { const n = [...plans]; n[idx].save = v; onChange({ ...data, plans: n }); }} placeholder="30%" /></Field>
                            </div>
                            <Field label="Is Recommended?">
                                <select value={item.recommended ? 'true' : 'false'} onChange={e => { const n = [...plans]; n[idx].recommended = e.target.value === 'true'; onChange({ ...data, plans: n }); }} className="w-full p-2 border border-gray-200 rounded text-sm">
                                    <option value="false">No</option>
                                    <option value="true">Yes</option>
                                </select>
                            </Field>
                        </div>
                        <div className="space-y-4 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100">
                            <Field label="Features List (Comma Separated)"><InputText isTextarea value={(item.features || []).join(',\n')} onChange={v => { const n = [...plans]; n[idx].features = v.split(',').map(s => s.trim()).filter(Boolean); onChange({ ...data, plans: n }); }} placeholder="Web Pages - 10, SEO Ready, Admin Panel..." /></Field>
                        </div>
                    </div>
                )}
            />
        </div>
    );
};

const ServiceFeaturesEditor = ({ data, onChange }) => {
    const features = data.features || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">✨</span><h3 className="text-xl font-bold text-[#111827]">Key Features Grid</h3></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-gray-100">
                <Field label="Section Title"><InputText value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Affordable, Professional, and Built for Growth" /></Field>
                <Field label="Section Description"><InputText isTextarea value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
            </div>
            <ListManager
                title="Features Icons/Cards" items={features} template={{ icon: '', title: '' }}
                onAdd={(t) => onChange({ ...data, features: [...features, t] })}
                onRemove={(i) => onChange({ ...data, features: features.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field label="Feature Title"><InputText value={item.title} onChange={v => { const n = [...features]; n[idx].title = v; onChange({ ...data, features: n }); }} placeholder="Professional Templates" /></Field>
                        <Field label="Icon Image URL"><InlineImageUploader value={item.icon} onChange={v => { const n = [...features]; n[idx].icon = v; onChange({ ...data, features: n }); }} /></Field>
                    </div>
                )}
            />
        </div>
    );
};

const ServiceBenefitsEditor = ({ data, onChange }) => {
    const points = data.points || [];
    const qualityItems = data.qualityItems || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">📈</span><h3 className="text-xl font-bold text-[#111827]">Benefits & Quality Section</h3></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 border-b border-gray-100 pb-8">
                <div className="space-y-4">
                    <Field label="Top Badge"><InputText value={data.badge} onChange={v => onChange({ ...data, badge: v })} placeholder="Benefits" /></Field>
                    <Field label="Main Title"><InputText isTextarea value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Designing a Website for Small Business..." /></Field>
                    <Field label="Description"><InputText isTextarea value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
                    <ListManager
                        title="Tick Bullet Points" items={points} template={''}
                        onAdd={(t) => onChange({ ...data, points: [...points, t] })}
                        onRemove={(i) => onChange({ ...data, points: points.filter((_, idx) => idx !== i) })}
                        renderItem={(item, idx) => (
                            <Field label={`Point ${idx + 1}`}><InputText value={item} onChange={v => { const n = [...points]; n[idx] = v; onChange({ ...data, points: n }); }} placeholder="Attractively Designed: First impressions matter." /></Field>
                        )}
                    />
                </div>
                <div>
                    <Field label="Right Side Image"><InlineImageUploader value={data.image} onChange={v => onChange({ ...data, image: v })} /></Field>
                </div>
            </div>

            <div className="space-y-6">
                <Field label="Quality Grid Title (Bottom Half)"><InputText value={data.qualityTitle} onChange={v => onChange({ ...data, qualityTitle: v })} placeholder="The Quality You'll Experience" /></Field>
                <ListManager
                    title="Quality Features Grid" items={qualityItems} template={{ icon: '', title: '', description: '' }}
                    onAdd={(t) => onChange({ ...data, qualityItems: [...qualityItems, t] })}
                    onRemove={(i) => onChange({ ...data, qualityItems: qualityItems.filter((_, idx) => idx !== i) })}
                    renderItem={(item, idx) => (
                        <div className="grid grid-cols-1 gap-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Field label="Quality Title"><InputText value={item.title} onChange={v => { const n = [...qualityItems]; n[idx].title = v; onChange({ ...data, qualityItems: n }); }} placeholder="Stronger Local Community Outreach" /></Field>
                                <Field label="Icon URL"><InlineImageUploader value={item.icon} onChange={v => { const n = [...qualityItems]; n[idx].icon = v; onChange({ ...data, qualityItems: n }); }} /></Field>
                            </div>
                            <Field label="Quality Description"><InputText isTextarea value={item.description} onChange={v => { const n = [...qualityItems]; n[idx].description = v; onChange({ ...data, qualityItems: n }); }} /></Field>
                        </div>
                    )}
                />
            </div>
        </div>
    );
};

const ServiceOurWorkEditor = ({ data, onChange }) => {
    const projects = data.projects || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">💼</span><h3 className="text-xl font-bold text-[#111827]">Case Studies / Our Work List</h3></div>
            <div className="text-center w-full md:w-2/3 mx-auto pb-6 border-b border-gray-100">
                <Field label="Section Title"><InputText value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Case Studies: Our Real Success Stories" /></Field>
                <Field label="Section Description"><InputText isTextarea value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
            </div>
            <ListManager
                title="Project Case Studies" items={projects} template={{ image: '', name: '', category: '', services: [] }}
                onAdd={(t) => onChange({ ...data, projects: [...projects, t] })}
                onRemove={(i) => onChange({ ...data, projects: projects.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <Field label="Project Title / Client Name"><InputText value={item.name} onChange={v => { const n = [...projects]; n[idx].name = v; onChange({ ...data, projects: n }); }} placeholder="DRH Sports" /></Field>
                            <Field label="Category / Subtitle"><InputText value={item.category} onChange={v => { const n = [...projects]; n[idx].category = v; onChange({ ...data, projects: n }); }} placeholder="Sports Uniform Manufacturers" /></Field>
                            <Field label="Project Thumbnail Image"><InlineImageUploader value={item.image} onChange={v => { const n = [...projects]; n[idx].image = v; onChange({ ...data, projects: n }); }} /></Field>
                        </div>
                        <div className="space-y-4">
                            <Field label="Provided Services list (Comma Separated)"><InputText isTextarea value={(item.services || []).join(',\n')} onChange={v => { const n = [...projects]; n[idx].services = v.split(',').map(s => s.trim()).filter(Boolean); onChange({ ...data, projects: n }); }} placeholder="Website with SEO in Multiple Locations, Off Page SEO for Link-building..." /></Field>
                        </div>
                    </div>
                )}
            />
        </div>
    );
};

// --- MISSION PAGE EDITORS ---

const MissionDetailsEditor = ({ data, onChange }) => (
    <div className="p-8 space-y-12">
        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
            <span className="text-3xl">🚀</span>
            <div>
                <h3 className="text-2xl font-black text-[#111827] tracking-tight">MISSION DETAILS</h3>
                <p className="text-gray-500 text-sm">Manage header, mission, vision, and strategic goals in one place.</p>
            </div>
        </div>

        {/* --- PAGE HEADER (HERO) --- */}
        <div className="space-y-6">
            <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest">
                <div className="w-8 h-[2px] bg-blue-600"></div> Page Header
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Header Badge"><InputText value={data.hero?.badge} onChange={v => onChange({ ...data, hero: { ...data.hero, badge: v } })} placeholder="Our Purpose" /></Field>
                <Field label="Main Title"><InputText value={data.hero?.title} onChange={v => onChange({ ...data, hero: { ...data.hero, title: v } })} placeholder="Mission, Vision & Goals" /></Field>
            </div>
            <Field label="Header Description"><InputText isTextarea value={data.hero?.description} onChange={v => onChange({ ...data, hero: { ...data.hero, description: v } })} /></Field>
        </div>

        {/* --- MISSION CARD --- */}
        <div className="space-y-6 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-widest">
                <div className="w-8 h-[2px] bg-orange-600"></div> Our Mission
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Mission Badge"><InputText value={data.mission?.badge} onChange={v => onChange({ ...data, mission: { ...data.mission, badge: v } })} placeholder="Our Mission" /></Field>
                <Field label="Mission Title"><InputText value={data.mission?.title} onChange={v => onChange({ ...data, mission: { ...data.mission, title: v } })} /></Field>
            </div>
            <Field label="Mission Description"><InputText isTextarea value={data.mission?.description} onChange={v => onChange({ ...data, mission: { ...data.mission, description: v } })} /></Field>
            <ListManager
                title="Mission Points" items={data.mission?.points || []} template={''}
                onAdd={(t) => onChange({ ...data, mission: { ...data.mission, points: [...(data.mission?.points || []), t] } })}
                onRemove={(i) => onChange({ ...data, mission: { ...data.mission, points: (data.mission?.points || []).filter((_, idx) => idx !== i) } })}
                renderItem={(item, idx) => (
                    <Field label={`Point ${idx + 1}`}><InputText value={item} onChange={v => { const n = [...(data.mission?.points || [])]; n[idx] = v; onChange({ ...data, mission: { ...data.mission, points: n } }); }} placeholder="Enter mission point..." /></Field>
                )}
            />
        </div>

        {/* --- VISION CARD --- */}
        <div className="space-y-6 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-2 text-purple-600 font-bold text-xs uppercase tracking-widest">
                <div className="w-8 h-[2px] bg-purple-600"></div> Our Vision
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Vision Badge"><InputText value={data.vision?.badge} onChange={v => onChange({ ...data, vision: { ...data.vision, badge: v } })} placeholder="Our Vision" /></Field>
                <Field label="Vision Title"><InputText value={data.vision?.title} onChange={v => onChange({ ...data, vision: { ...data.vision, title: v } })} /></Field>
            </div>
            <Field label="Vision Description"><InputText isTextarea value={data.vision?.description} onChange={v => onChange({ ...data, vision: { ...data.vision, description: v } })} /></Field>
            <ListManager
                title="Vision Points" items={data.vision?.points || []} template={''}
                onAdd={(t) => onChange({ ...data, vision: { ...data.vision, points: [...(data.vision?.points || []), t] } })}
                onRemove={(i) => onChange({ ...data, vision: { ...data.vision, points: (data.vision?.points || []).filter((_, idx) => idx !== i) } })}
                renderItem={(item, idx) => (
                    <Field label={`Point ${idx + 1}`}><InputText value={item} onChange={v => { const n = [...(data.vision?.points || [])]; n[idx] = v; onChange({ ...data, vision: { ...data.vision, points: n } }); }} placeholder="Enter vision point..." /></Field>
                )}
            />
        </div>

        {/* --- STRATEGIC GOALS --- */}
        <div className="space-y-6 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-2 text-green-600 font-bold text-xs uppercase tracking-widest">
                <div className="w-8 h-[2px] bg-green-600"></div> Strategic Goals
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Goals Badge"><InputText value={data.goalsSection?.badge} onChange={v => onChange({ ...data, goalsSection: { ...data.goalsSection, badge: v } })} placeholder="Our Goals" /></Field>
                <Field label="Goals Title"><InputText value={data.goalsSection?.title} onChange={v => onChange({ ...data, goalsSection: { ...data.goalsSection, title: v } })} /></Field>
            </div>
            <Field label="Goals Description"><InputText isTextarea value={data.goalsSection?.description} onChange={v => onChange({ ...data, goalsSection: { ...data.goalsSection, description: v } })} /></Field>
            <ListManager
                title="Goal Cards" items={data.goalsSection?.goals || []} template={{ title: '', desc: '', color: 'bg-blue-100 border-blue-400' }}
                onAdd={(t) => onChange({ ...data, goalsSection: { ...data.goalsSection, goals: [...(data.goalsSection?.goals || []), t] } })}
                onRemove={(i) => onChange({ ...data, goalsSection: { ...data.goalsSection, goals: (data.goalsSection?.goals || []).filter((_, idx) => idx !== i) } })}
                renderItem={(item, idx) => (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <Field label="Goal Title"><InputText value={item.title} onChange={v => { const n = [...(data.goalsSection?.goals || [])]; n[idx].title = v; onChange({ ...data, goalsSection: { ...data.goalsSection, goals: n } }); }} placeholder="Client Success" /></Field>
                            <Field label="Tailwind Color Class"><InputText value={item.color} onChange={v => { const n = [...(data.goalsSection?.goals || [])]; n[idx].color = v; onChange({ ...data, goalsSection: { ...data.goalsSection, goals: n } }); }} placeholder="bg-blue-100 border-blue-400" /></Field>
                        </div>
                        <Field label="Goal Description"><InputText isTextarea value={item.desc} onChange={v => { const n = [...(data.goalsSection?.goals || [])]; n[idx].desc = v; onChange({ ...data, goalsSection: { ...data.goalsSection, goals: n } }); }} placeholder="Deliver measurable ROI..." /></Field>
                    </div>
                )}
            />
        </div>
    </div>
);



const ListenFromClientsEditor = ({ data, onChange }) => {
    const testimonials = data.testimonials || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">👥</span><h3 className="text-xl font-bold text-[#111827]">Listen From Clients</h3></div>
            <Field label="Section Title"><InputText value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Listen From Our Clients" /></Field>
            <Field label="Description"><RichText value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
            <ListManager
                title="Video Testimonials" items={testimonials} template={{ name: '', title: '', img: '' }}
                onAdd={(t) => onChange({ ...data, testimonials: [...testimonials, t] })}
                onRemove={(i) => onChange({ ...data, testimonials: testimonials.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <Field label="Client Name"><InputText value={item.name} onChange={v => { const n = [...testimonials]; n[idx].name = v; onChange({ ...data, testimonials: n }); }} placeholder="Advocate Gaurav" /></Field>
                            <Field label="Video Title / Description"><InputText isTextarea value={item.title} onChange={v => { const n = [...testimonials]; n[idx].title = v; onChange({ ...data, testimonials: n }); }} placeholder="Website Design for Legal Services..." /></Field>
                        </div>
                        <Field label="Video Thumbnail"><InlineImageUploader value={item.img} onChange={v => { const n = [...testimonials]; n[idx].img = v; onChange({ ...data, testimonials: n }); }} /></Field>
                    </div>
                )}
            />
            <Field label="Footer Text"><RichText value={data.footerText} onChange={v => onChange({ ...data, footerText: v })} /></Field>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Button Text"><InputText value={data.btnText} onChange={v => onChange({ ...data, btnText: v })} placeholder="View More Reviews →" /></Field>
                <Field label="Button Link"><InputText value={data.btnLink} onChange={v => onChange({ ...data, btnLink: v })} placeholder="/reviews" /></Field>
            </div>
        </div>
    );
};

// --- WHY US PAGE EDITORS ---

const WhyUsHeroEditor = ({ data, onChange }) => (
    <div className="p-8 space-y-6">
        <div className="flex items-center gap-3 mb-6"><span className="text-2xl">🎯</span><h3 className="text-xl font-bold text-[#111827]">Hero Section</h3></div>
        <Field label="Badge"><InputText value={data.badge} onChange={v => onChange({ ...data, badge: v })} placeholder="Why Choose Us" /></Field>
        <Field label="Title"><InputText isTextarea value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Why Afwan Tech?" /></Field>
        <Field label="Description"><InputText isTextarea value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
    </div>
);

const WhyUsStatsEditor = ({ data, onChange }) => {
    const stats = data.stats || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">📊</span><h3 className="text-xl font-bold text-[#111827]">Stats Grid</h3></div>
            <ListManager
                title="Company Stats" items={stats} template={{ number: '', label: '' }}
                onAdd={(t) => onChange({ ...data, stats: [...stats, t] })}
                onRemove={(i) => onChange({ ...data, stats: stats.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field label="Number / Value"><InputText value={item.number} onChange={v => { const n = [...stats]; n[idx].number = v; onChange({ ...data, stats: n }); }} placeholder="5000+" /></Field>
                        <Field label="Label"><InputText value={item.label} onChange={v => { const n = [...stats]; n[idx].label = v; onChange({ ...data, stats: n }); }} placeholder="Projects Completed" /></Field>
                    </div>
                )}
            />
        </div>
    );
};

const WhyUsReasonsEditor = ({ data, onChange }) => {
    const reasons = data.reasons || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">💡</span><h3 className="text-xl font-bold text-[#111827]">Reasons Grid</h3></div>
            <Field label="Section Title"><InputText value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="8 Reasons Why..." /></Field>
            <Field label="Section Description"><InputText isTextarea value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
            <ListManager
                title="Reasons" items={reasons} template={{ icon: '🏆', title: '', desc: '' }}
                onAdd={(t) => onChange({ ...data, reasons: [...reasons, t] })}
                onRemove={(i) => onChange({ ...data, reasons: reasons.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <div className="grid grid-cols-1 gap-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Field label="Icon (Emoji)"><InputText value={item.icon} onChange={v => { const n = [...reasons]; n[idx].icon = v; onChange({ ...data, reasons: n }); }} placeholder="🏆" /></Field>
                            <Field label="Title"><InputText value={item.title} onChange={v => { const n = [...reasons]; n[idx].title = v; onChange({ ...data, reasons: n }); }} placeholder="Award-Winning Agency" /></Field>
                        </div>
                        <Field label="Description"><InputText isTextarea value={item.desc} onChange={v => { const n = [...reasons]; n[idx].desc = v; onChange({ ...data, reasons: n }); }} placeholder="Recognized as one of..." /></Field>
                    </div>
                )}
            />
        </div>
    );
};

const WhyUsCTAEditor = ({ data, onChange }) => (
    <div className="p-8 space-y-6">
        <div className="flex items-center gap-3 mb-6"><span className="text-2xl">🚀</span><h3 className="text-xl font-bold text-[#111827]">Call to Action</h3></div>
        <Field label="Title"><InputText isTextarea value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Ready to Experience..." /></Field>
        <Field label="Description"><InputText isTextarea value={data.description} onChange={v => onChange({ ...data, description: v })} placeholder="Join 5000+ businesses..." /></Field>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Button Text"><InputText value={data.btnText} onChange={v => onChange({ ...data, btnText: v })} placeholder="Get Free Consultation" /></Field>
            <Field label="Button Link"><InputText value={data.btnLink} onChange={v => onChange({ ...data, btnLink: v })} placeholder="/contact" /></Field>
        </div>
    </div>
);

// --- CLIENTS PAGE EDITORS ---

const ClientsHeroEditor = ({ data, onChange }) => (
    <div className="p-8 space-y-6">
        <div className="flex items-center gap-3 mb-6"><span className="text-2xl">🎯</span><h3 className="text-xl font-bold text-[#111827]">Hero Section</h3></div>
        <Field label="Badge"><InputText value={data.badge} onChange={v => onChange({ ...data, badge: v })} placeholder="Trusted By" /></Field>
        <Field label="Title"><InputText isTextarea value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Our Clients" /></Field>
        <Field label="Description"><InputText isTextarea value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
    </div>
);

const ClientsStatsEditor = ({ data, onChange }) => {
    const stats = data.stats || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">📊</span><h3 className="text-xl font-bold text-[#111827]">Stats Grid</h3></div>
            <ListManager
                title="Company Stats" items={stats} template={{ number: '', label: '' }}
                onAdd={(t) => onChange({ ...data, stats: [...stats, t] })}
                onRemove={(i) => onChange({ ...data, stats: stats.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field label="Number / Value"><InputText value={item.number} onChange={v => { const n = [...stats]; n[idx].number = v; onChange({ ...data, stats: n }); }} placeholder="5000+" /></Field>
                        <Field label="Label"><InputText value={item.label} onChange={v => { const n = [...stats]; n[idx].label = v; onChange({ ...data, stats: n }); }} placeholder="Happy Clients" /></Field>
                    </div>
                )}
            />
        </div>
    );
};

const ClientsBrandsEditor = ({ data, onChange }) => {
    const clients = data.clients || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">🏢</span><h3 className="text-xl font-bold text-[#111827]">Trusted Brands Grid</h3></div>
            <Field label="Section Title"><InputText value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Brands That Trust Afwan Tech" /></Field>
            <Field label="Section Description"><InputText isTextarea value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
            <ListManager
                title="Brands" items={clients} template={{ name: '', industry: '' }}
                onAdd={(t) => onChange({ ...data, clients: [...clients, t] })}
                onRemove={(i) => onChange({ ...data, clients: clients.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field label="Client Name"><InputText value={item.name} onChange={v => { const n = [...clients]; n[idx].name = v; onChange({ ...data, clients: n }); }} placeholder="DRH Sports" /></Field>
                        <Field label="Industry"><InputText value={item.industry} onChange={v => { const n = [...clients]; n[idx].industry = v; onChange({ ...data, clients: n }); }} placeholder="Sports Manufacturer" /></Field>
                    </div>
                )}
            />
        </div>
    );
};

const ClientsIndustriesEditor = ({ data, onChange }) => {
    const industries = data.industries || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">🏭</span><h3 className="text-xl font-bold text-[#111827]">Industries Served</h3></div>
            <Field label="Section Title"><InputText value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Industries We Serve" /></Field>
            <Field label="Section Description"><InputText isTextarea value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
            <ListManager
                title="Industries (Text badgets)" items={industries.map(i => ({ val: i }))} template={{ val: '' }}
                onAdd={(t) => onChange({ ...data, industries: [...industries, t.val] })}
                onRemove={(i) => onChange({ ...data, industries: industries.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <Field label="Industry Name">
                        <InputText value={industries[idx]} onChange={v => { const n = [...industries]; n[idx] = v; onChange({ ...data, industries: n }); }} placeholder="Healthcare" />
                    </Field>
                )}
            />
        </div>
    );
};

// --- TESTIMONIALS PAGE EDITORS ---

const TestimonialsHeroEditor = ({ data, onChange }) => (
    <div className="p-8 space-y-6">
        <div className="flex items-center gap-3 mb-6"><span className="text-2xl">🎯</span><h3 className="text-xl font-bold text-[#111827]">Hero Section</h3></div>
        <Field label="Badge"><InputText value={data.badge} onChange={v => onChange({ ...data, badge: v })} placeholder="Client Stories" /></Field>
        <Field label="Title"><InputText isTextarea value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="What Our Clients Say" /></Field>
        <Field label="Description"><InputText isTextarea value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
    </div>
);

const TestimonialsStatsEditor = WhyUsStatsEditor;

const TestimonialsReviewEditor = ({ data, onChange }) => {
    const testimonials = data.testimonials || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">⭐</span><h3 className="text-xl font-bold text-[#111827]">Reviews Grid</h3></div>
            <Field label="Section Title"><InputText value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Real Stories. Real Results." /></Field>
            <Field label="Section Description"><InputText isTextarea value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
            <ListManager
                title="Testimonials" items={testimonials} template={{ name: '', company: '', role: '', rating: 5, review: '' }}
                onAdd={(t) => onChange({ ...data, testimonials: [...testimonials, t] })}
                onRemove={(i) => onChange({ ...data, testimonials: testimonials.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <div className="grid grid-cols-1 gap-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <Field label="Name"><InputText value={item.name} onChange={v => { const n = [...testimonials]; n[idx].name = v; onChange({ ...data, testimonials: n }); }} placeholder="Rajesh Kumar" /></Field>
                            <Field label="Company"><InputText value={item.company} onChange={v => { const n = [...testimonials]; n[idx].company = v; onChange({ ...data, testimonials: n }); }} placeholder="DRH Sports" /></Field>
                            <Field label="Role"><InputText value={item.role} onChange={v => { const n = [...testimonials]; n[idx].role = v; onChange({ ...data, testimonials: n }); }} placeholder="CEO" /></Field>
                            <Field label="Rating (1-5)">
                                <input type="number" min="1" max="5" value={item.rating || 5} onChange={e => { const n = [...testimonials]; n[idx].rating = Number(e.target.value); onChange({ ...data, testimonials: n }); }} className="w-full px-4 py-2 border rounded focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
                            </Field>
                        </div>
                        <Field label="Review"><InputText isTextarea value={item.review} onChange={v => { const n = [...testimonials]; n[idx].review = v; onChange({ ...data, testimonials: n }); }} placeholder="Afwan Tech completely transformed our online presence..." /></Field>
                    </div>
                )}
            />
        </div>
    );
};

const TestimonialsCTAEditor = WhyUsCTAEditor;

// --- AWARDS PAGE EDITORS ---

const AwardsHeroEditor = ({ data, onChange }) => (
    <div className="p-8 space-y-6">
        <div className="flex items-center gap-3 mb-6"><span className="text-2xl">🎯</span><h3 className="text-xl font-bold text-[#111827]">Hero Section</h3></div>
        <Field label="Badge"><InputText value={data.badge} onChange={v => onChange({ ...data, badge: v })} placeholder="🏆 Recognized Excellence" /></Field>
        <Field label="Title"><InputText isTextarea value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Awards & Achievements" /></Field>
        <Field label="Description"><InputText isTextarea value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
    </div>
);

const AwardsGridEditor = ({ data, onChange }) => {
    const awards = data.awards || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">🏆</span><h3 className="text-xl font-bold text-[#111827]">Awards Grid</h3></div>
            <Field label="Section Title"><InputText value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Our Recognition & Milestones" /></Field>
            <Field label="Section Description"><InputText isTextarea value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
            <ListManager
                title="Awards list" items={awards} template={{ year: '', title: '', org: '', desc: '', color: 'border-yellow-400 bg-yellow-50' }}
                onAdd={(t) => onChange({ ...data, awards: [...awards, t] })}
                onRemove={(i) => onChange({ ...data, awards: awards.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <div className="grid grid-cols-1 gap-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <Field label="Year"><InputText value={item.year} onChange={v => { const n = [...awards]; n[idx].year = v; onChange({ ...data, awards: n }); }} placeholder="2024" /></Field>
                            <Field label="Title"><InputText value={item.title} onChange={v => { const n = [...awards]; n[idx].title = v; onChange({ ...data, awards: n }); }} placeholder="Best SEO Company" /></Field>
                            <Field label="Organization"><InputText value={item.org} onChange={v => { const n = [...awards]; n[idx].org = v; onChange({ ...data, awards: n }); }} placeholder="Digital Excellence" /></Field>
                            <Field label="Tailwind Color Class"><InputText value={item.color} onChange={v => { const n = [...awards]; n[idx].color = v; onChange({ ...data, awards: n }); }} placeholder="border-yellow-400 bg-yellow-50" /></Field>
                        </div>
                        <Field label="Description"><InputText isTextarea value={item.desc} onChange={v => { const n = [...awards]; n[idx].desc = v; onChange({ ...data, awards: n }); }} placeholder="Recognized for..." /></Field>
                    </div>
                )}
            />
        </div>
    );
};

const AwardsMilestonesEditor = ({ data, onChange }) => {
    const milestones = data.milestones || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">📈</span><h3 className="text-xl font-bold text-[#111827]">Company Milestones</h3></div>
            <Field label="Section Title"><InputText value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Company Milestones" /></Field>
            <ListManager
                title="Milestones List" items={milestones} template={{ number: '', label: '' }}
                onAdd={(t) => onChange({ ...data, milestones: [...milestones, t] })}
                onRemove={(i) => onChange({ ...data, milestones: milestones.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field label="Number / Value"><InputText value={item.number} onChange={v => { const n = [...milestones]; n[idx].number = v; onChange({ ...data, milestones: n }); }} placeholder="10+" /></Field>
                        <Field label="Label"><InputText value={item.label} onChange={v => { const n = [...milestones]; n[idx].label = v; onChange({ ...data, milestones: n }); }} placeholder="Years in Business" /></Field>
                    </div>
                )}
            />
        </div>
    );
};

// --- NEWS & EVENTS EDITORS ---

const NewsHeroEditor = ({ data, onChange }) => (
    <div className="p-8 space-y-6">
        <div className="flex items-center gap-3 mb-6"><span className="text-2xl">🎯</span><h3 className="text-xl font-bold text-[#111827]">Hero Section</h3></div>
        <Field label="Badge"><InputText value={data.badge} onChange={v => onChange({ ...data, badge: v })} placeholder="Latest Updates" /></Field>
        <Field label="Title"><InputText isTextarea value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="News & Events" /></Field>
        <Field label="Description"><InputText isTextarea value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
    </div>
);

const NewsGridEditor = ({ data, onChange }) => {
    const news = data.news || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">📰</span><h3 className="text-xl font-bold text-[#111827]">News/Events Grid</h3></div>
            <ListManager
                title="Updates List" items={news} template={{ date: '', category: '', title: '', desc: '', tag: 'bg-blue-100 text-blue-800' }}
                onAdd={(t) => onChange({ ...data, news: [...news, t] })}
                onRemove={(i) => onChange({ ...data, news: news.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <div className="grid grid-cols-1 gap-4">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <Field label="Date"><InputText value={item.date} onChange={v => { const n = [...news]; n[idx].date = v; onChange({ ...data, news: n }); }} placeholder="Feb 2026" /></Field>
                            <Field label="Category"><InputText value={item.category} onChange={v => { const n = [...news]; n[idx].category = v; onChange({ ...data, news: n }); }} placeholder="Award" /></Field>
                            <Field label="Tailwind Tag Class"><InputText value={item.tag} onChange={v => { const n = [...news]; n[idx].tag = v; onChange({ ...data, news: n }); }} placeholder="bg-yellow-100 text-yellow-800" /></Field>
                        </div>
                        <Field label="Title"><InputText isTextarea value={item.title} onChange={v => { const n = [...news]; n[idx].title = v; onChange({ ...data, news: n }); }} placeholder="Afwan Tech Named Best..." /></Field>
                        <Field label="Description"><InputText isTextarea value={item.desc} onChange={v => { const n = [...news]; n[idx].desc = v; onChange({ ...data, news: n }); }} placeholder="We are thrilled to announce..." /></Field>
                    </div>
                )}
            />
        </div>
    );
};

const NewsSubscribeEditor = ({ data, onChange }) => (
    <div className="p-8 space-y-6">
        <div className="flex items-center gap-3 mb-6"><span className="text-2xl">✉️</span><h3 className="text-xl font-bold text-[#111827]">Subscribe Section</h3></div>
        <Field label="Title"><InputText isTextarea value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Stay Updated with Afwan Tech" /></Field>
        <Field label="Description"><InputText isTextarea value={data.description} onChange={v => onChange({ ...data, description: v })} placeholder="Subscribe to get the latest news" /></Field>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Button Text"><InputText value={data.btnText} onChange={v => onChange({ ...data, btnText: v })} placeholder="Subscribe" /></Field>
            <Field label="Button Colors Formatter (Tailwind)"><InputText value={data.btnColor} onChange={v => onChange({ ...data, btnColor: v })} placeholder="bg-yellow-400 text-black..." /></Field>
        </div>
    </div>
);


// --- PORTFOLIO EDITORS ---

const PortfolioHeroEditor = ({ data, onChange }) => (
    <div className="p-8 space-y-6">
        <div className="flex items-center gap-3 mb-6"><span className="text-2xl">🎯</span><h3 className="text-xl font-bold text-[#111827]">Hero Section</h3></div>
        <Field label="Badge Text"><InputText value={data.badge} onChange={v => onChange({ ...data, badge: v })} placeholder="Our Work" /></Field>
        <Field label="Title"><InputText isTextarea value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Portfolio Title" /></Field>
        <Field label="Description"><InputText isTextarea value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
    </div>
);

const PortfolioStatsEditor = ({ data, onChange }) => {
    const stats = data.stats || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">📊</span><h3 className="text-xl font-bold text-[#111827]">Stats Grid</h3></div>
            <ListManager
                title="Stats List" items={stats} template={{ number: '', label: '' }}
                onAdd={(t) => onChange({ ...data, stats: [...stats, t] })}
                onRemove={(i) => onChange({ ...data, stats: stats.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field label="Number / Value"><InputText value={item.number} onChange={v => { const n = [...stats]; n[idx].number = v; onChange({ ...data, stats: n }); }} placeholder="2000+" /></Field>
                        <Field label="Label"><InputText value={item.label} onChange={v => { const n = [...stats]; n[idx].label = v; onChange({ ...data, stats: n }); }} placeholder="Projects Delivered" /></Field>
                    </div>
                )}
            />
        </div>
    );
};

const PortfolioGridEditor = ({ data, onChange }) => {
    const projects = data.projects || [];
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">🖼️</span><h3 className="text-xl font-bold text-[#111827]">Portfolio Grid</h3></div>
            <Field label="Section Title"><InputText value={data.title} onChange={v => onChange({ ...data, title: v })} placeholder="Featured Projects" /></Field>
            <Field label="Section Description"><InputText isTextarea value={data.description} onChange={v => onChange({ ...data, description: v })} /></Field>
            <ListManager
                title="Projects List" items={projects} template={{ name: '', category: '', tech: '', desc: '' }}
                onAdd={(t) => onChange({ ...data, projects: [...projects, t] })}
                onRemove={(i) => onChange({ ...data, projects: projects.filter((_, idx) => idx !== i) })}
                renderItem={(item, idx) => (
                    <div className="grid grid-cols-1 gap-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <Field label="Project Name"><InputText value={item.name} onChange={v => { const n = [...projects]; n[idx].name = v; onChange({ ...data, projects: n }); }} placeholder="Project Alpha" /></Field>
                            <Field label="Category"><InputText value={item.category} onChange={v => { const n = [...projects]; n[idx].category = v; onChange({ ...data, projects: n }); }} placeholder="Technology" /></Field>
                            <Field label="Tech Stack"><InputText value={item.tech} onChange={v => { const n = [...projects]; n[idx].tech = v; onChange({ ...data, projects: n }); }} placeholder="Custom" /></Field>
                            <Field label="Project Image"><InlineImageUploader value={item.image} onChange={v => { const n = [...projects]; n[idx].image = v; onChange({ ...data, projects: n }); }} /></Field>
                        </div>
                        <Field label="Description"><InputText isTextarea value={item.desc} onChange={v => { const n = [...projects]; n[idx].desc = v; onChange({ ...data, projects: n }); }} placeholder="Project description..." /></Field>
                    </div>
                )}
            />
        </div>
    );
};


const GenericSectionEditor = ({ data, onChange, title, icon }) => {
    const editorConfig = useMemo(() => ({ readonly: false, height: 400, toolbarButtonSize: 'small' }), []);
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6"><span className="text-2xl">{icon || '📝'}</span><h3 className="text-xl font-bold text-[#111827] capitalize">{title || 'Content'} Section</h3></div>
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"><JoditEditor value={data.content || ''} config={editorConfig} onBlur={(v) => onChange({ ...data, content: v })} /></div>
        </div>
    );
};


// Main Wrapper Switcher
const SectionEditor = ({ section, onChange }) => {
    const passProps = { data: section.data || {}, onChange };
    switch (section.type) {
        case 'hero': return <HeroSectionEditor {...passProps} />;
        case 'trusted': return <TrustedSectionEditor {...passProps} />;
        case 'why': return <WhySectionEditor {...passProps} />;
        case 'unlock': return <UnlockSectionEditor {...passProps} />;
        case 'case_studies': return <CaseStudiesSectionEditor {...passProps} />;
        case 'webinar': return <WebinarSectionEditor {...passProps} />;
        case 'clients': return <ClientsSectionEditor {...passProps} />;
        case 'business_serve': return <BusinessServeSectionEditor {...passProps} />;
        case 'brands': return <BrandsSectionEditor {...passProps} />;
        case 'tabs': return <TabsSectionEditor {...passProps} />;
        case 'industries': return <IndustriesSectionEditor {...passProps} />;
        case 'technology': return <TechnologySectionEditor {...passProps} />;
        case 'stats': return <StatsSectionEditor {...passProps} />;
        case 'news': return <NewsMediaSectionEditor {...passProps} />;
        case 'life': return <LifeSectionEditor {...passProps} />;

        // About Us Editors
        case 'about_hero': return <AboutHeroEditor {...passProps} />;
        case 'about_intro': return <AboutIntroEditor {...passProps} />;
        case 'about_why': return <AboutWhyEditor {...passProps} />;
        case 'about_team': return <AboutTeamEditor {...passProps} />;
        case 'about_process': return <AboutProcessEditor {...passProps} />;
        case 'about_stats': return <AboutStatsEditor {...passProps} />;
        case 'about_cta': return <AboutCTAEditor {...passProps} />;

        // Contact Page Editors
        case 'contact_section': return <ContactSectionEditor {...passProps} />;

        // Mission Page Editors
        case 'mission_details': return <MissionDetailsEditor {...passProps} />;

        case 'mission_clients': return <ListenFromClientsEditor {...passProps} />;

        // Why Us Page Editors
        case 'why_us_hero': return <WhyUsHeroEditor {...passProps} />;
        case 'why_us_stats': return <WhyUsStatsEditor {...passProps} />;
        case 'why_us_reasons': return <WhyUsReasonsEditor {...passProps} />;
        case 'why_us_cta': return <WhyUsCTAEditor {...passProps} />;

        // Clients Page Editors
        case 'clients_hero': return <ClientsHeroEditor {...passProps} />;
        case 'clients_stats': return <ClientsStatsEditor {...passProps} />;
        case 'clients_brands': return <ClientsBrandsEditor {...passProps} />;
        case 'clients_industries': return <ClientsIndustriesEditor {...passProps} />;

        // Testimonials Page Editors
        case 'testimonials_hero': return <TestimonialsHeroEditor {...passProps} />;
        case 'testimonials_stats': return <TestimonialsStatsEditor {...passProps} />;
        case 'testimonials_review': return <TestimonialsReviewEditor {...passProps} />;
        case 'testimonials_cta': return <TestimonialsCTAEditor {...passProps} />;

        // Awards Page Editors
        case 'awards_hero': return <AwardsHeroEditor {...passProps} />;
        case 'awards_grid': return <AwardsGridEditor {...passProps} />;
        case 'awards_milestones': return <AwardsMilestonesEditor {...passProps} />;

        // News Page Editors
        case 'news_hero': return <NewsHeroEditor {...passProps} />;
        case 'news_grid': return <NewsGridEditor {...passProps} />;
        case 'news_subscribe': return <NewsSubscribeEditor {...passProps} />;

        // Universal Service Editors
        case 'service_hero': return <ServiceHeroEditor {...passProps} />;
        case 'service_content': return <ServiceContentEditor {...passProps} />;
        case 'service_plans': return <ServicePlansEditor {...passProps} />;
        case 'service_features': return <ServiceFeaturesEditor {...passProps} />;
        case 'service_benefits': return <ServiceBenefitsEditor {...passProps} />;
        case 'service_our_work': return <ServiceOurWorkEditor {...passProps} />;
        // Note: service_clients defaults to ListenFromClients, which is fetched dynamically via the general API and 
        // doesn't have a customized page-level editor. It uses hideEditor: true.

        // Portfolio Pages Editors
        case 'portfolio_hero': return <PortfolioHeroEditor {...passProps} />;
        case 'portfolio_stats': return <PortfolioStatsEditor {...passProps} />;
        case 'portfolio_grid': return <PortfolioGridEditor {...passProps} />;

        case 'bottom': return <GenericSectionEditor {...passProps} title="Bottom Content" icon="📋" />;
        default: return <GenericSectionEditor {...passProps} title={section.type.replace('_', ' ')} />;
    }
};

export default SectionEditor;
