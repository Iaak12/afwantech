import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaFileAlt, FaPenNib, FaQuestionCircle, FaEnvelopeOpenText, FaSignOutAlt, FaShareAlt } from 'react-icons/fa';

const AdminSidebar = () => {
    const links = [
        { title: 'Dashboard', path: '/admin/dashboard', icon: <FaTachometerAlt /> },
        { title: 'Manage Pages', path: '/admin/pages', icon: <FaFileAlt /> },
        { title: 'Blogs & Articles', path: '/admin/blogs', icon: <FaPenNib /> },
        { title: 'Help & FAQs', path: '/admin/faqs', icon: <FaQuestionCircle /> },
        { title: 'Social Media', path: '/admin/social', icon: <FaShareAlt /> },
        { title: 'Inquiries', path: '/admin/contact-submissions', icon: <FaEnvelopeOpenText /> },
    ];

    return (
        <div className="w-72 bg-[#123447] min-h-screen p-8 flex flex-col justify-between shadow-2xl sticky top-0">
            <div>
                <div className="mb-12 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#fbbf24] rounded-xl flex items-center justify-center text-[#123447] font-black text-2xl shadow-lg transform rotate-3">
                        AT
                    </div>
                    <div>
                        <h2 className="text-white text-xl font-bold tracking-tight">Afwan Tech</h2>
                        <p className="text-blue-300/60 text-[10px] uppercase font-bold tracking-widest leading-none mt-1">Admin Control</p>
                    </div>
                </div>

                <nav>
                    <ul className="space-y-3">
                        {links.map((link) => (
                            <li key={link.path}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `flex items-center p-4 rounded-xl transition-all duration-300 border border-transparent ${isActive
                                            ? 'bg-white/10 text-white border-white/20 shadow-inner'
                                            : 'text-blue-100/60 hover:bg-white/5 hover:text-white'
                                        }`
                                    }
                                >
                                    <span className={`mr-4 text-xl ${link.path === window.location.pathname ? 'text-[#fbbf24]' : ''}`}>{link.icon}</span>
                                    <span className="font-semibold tracking-wide">{link.title}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10">
                <p className="text-[10px] text-blue-200/30 uppercase font-black tracking-widest mb-4">Account</p>
                <NavLink
                    to="/admin/logout"
                    className="flex items-center p-4 rounded-xl text-red-300 hover:bg-red-500/10 transition-all border border-transparent hover:border-red-500/20"
                >
                    <FaSignOutAlt className="mr-4 text-xl" />
                    <span className="font-bold">Logout Session</span>
                </NavLink>
            </div>
        </div>
    );
};

export default AdminSidebar;


