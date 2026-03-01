import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { FaTrash, FaCheck, FaEnvelope } from 'react-icons/fa';
import API_BASE_URL from '../../config/api';

const ContactSubmissions = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/api/contact`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('adminToken')}` // Ensure we pass token if required
                }
            });
            const data = await res.json();
            if (Array.isArray(data)) {
                setMessages(data);
            }
        } catch (err) {
            console.error("Failed to fetch messages", err);
        } finally {
            setLoading(false);
        }
    };

    const markAsRead = async (id) => {
        try {
            await fetch(`${API_BASE_URL}/api/contact/${id}/read`, {
                method: 'PATCH',
                headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` }
            });
            setMessages(messages.map(m => m._id === id ? { ...m, isRead: true } : m));
        } catch (err) {
            alert("Failed to update status");
        }
    };

    const deleteMessage = async (id) => {
        if (!window.confirm("Are you sure you want to delete this message?")) return;

        try {
            await fetch(`${API_BASE_URL}/api/contact/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` }
            });
            setMessages(messages.filter(m => m._id !== id));
        } catch (err) {
            alert("Failed to delete message");
        }
    };

    return (
        <AdminLayout>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Contact Submissions</h1>
                <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-bold">
                    Total: {messages.length}
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {loading ? (
                    <div className="p-8 text-center text-gray-500">Loading messages...</div>
                ) : messages.length === 0 ? (
                    <div className="p-12 text-center">
                        <FaEnvelope className="mx-auto text-5xl text-gray-300 mb-4" />
                        <p className="text-xl text-gray-500 font-medium">No contact submissions yet</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 text-gray-600 text-sm uppercase tracking-wider">
                                    <th className="p-4 border-b font-semibold">Date</th>
                                    <th className="p-4 border-b font-semibold">Name</th>
                                    <th className="p-4 border-b font-semibold">Contact Info</th>
                                    <th className="p-4 border-b font-semibold w-1/3">Message</th>
                                    <th className="p-4 border-b font-semibold">Status</th>
                                    <th className="p-4 border-b font-semibold text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {messages.map((msg) => (
                                    <tr key={msg._id} className={`hover:bg-gray-50 transition-colors ${!msg.isRead ? 'bg-blue-50/30' : ''}`}>
                                        <td className="p-4 text-sm text-gray-500">
                                            {new Date(msg.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="p-4 font-medium text-gray-800">{msg.name}</td>
                                        <td className="p-4 text-sm text-gray-600">
                                            <div className="mb-1">{msg.email}</div>
                                            <div className="text-gray-400">{msg.phone || 'N/A'}</div>
                                        </td>
                                        <td className="p-4 text-sm text-gray-600">
                                            <p className="line-clamp-2" title={msg.message}>{msg.message}</p>
                                        </td>
                                        <td className="p-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${msg.isRead ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                                {msg.isRead ? 'Read' : 'Unread'}
                                            </span>
                                        </td>
                                        <td className="p-4 text-right">
                                            <div className="flex items-center justify-end space-x-2">
                                                {!msg.isRead && (
                                                    <button onClick={() => markAsRead(msg._id)} title="Mark as Read" className="p-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition">
                                                        <FaCheck />
                                                    </button>
                                                )}
                                                <button onClick={() => deleteMessage(msg._id)} title="Delete" className="p-2 bg-red-100 text-red-600 rounded hover:bg-red-200 transition">
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
};

export default ContactSubmissions;
