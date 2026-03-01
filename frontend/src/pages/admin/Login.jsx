import React, { useState } from 'react';
import API_BASE_URL from '../../config/api';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLock, FaEnvelope, FaChevronRight, FaShieldAlt } from 'react-icons/fa';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // fetch to deployed backend API
            const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('adminToken', data.token);
                navigate('/admin/dashboard');
            } else {
                setError(data.message || 'Verification failed. Please check credentials.');
            }
        } catch (err) {
            setError('Connection established but authentication failed.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#0A192F] flex items-center justify-center p-6 font-sans">
            {/* Animated Background Blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-md w-full relative z-10"
            >
                {/* Brand Logo / Identity */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#1E3A5F] to-[#2D5A91] rounded-[2rem] shadow-2xl mb-6 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <span className="text-3xl font-black text-white relative z-10">AT</span>
                    </motion.div>
                    <h1 className="text-4xl font-black text-white tracking-tighter mb-2">
                        Afwan <span className="text-yellow-500 italic">Tech</span>
                    </h1>
                    <p className="text-blue-200/50 font-bold uppercase tracking-[0.3em] text-[10px]">Command Center Access</p>
                </div>

                {/* Login Card */}
                <div className="bg-[#112240]/80 backdrop-blur-xl rounded-[3rem] shadow-2xl overflow-hidden border border-white/5 p-10">
                    <AnimatePresence mode="wait">
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded-xl mb-8 overflow-hidden"
                            >
                                <p className="text-red-400 text-xs font-bold flex items-center gap-2">
                                    <FaShieldAlt /> {error}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <form onSubmit={handleLogin} className="space-y-8">
                        <div className="space-y-2">
                            <label className="block text-[10px] font-black text-blue-200/40 uppercase tracking-widest pl-2">Security ID (Email)</label>
                            <div className="relative group">
                                <FaEnvelope className="absolute left-6 top-1/2 -translate-y-1/2 text-blue-400/30 group-focus-within:text-yellow-500 transition-colors" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-14 pr-6 py-5 bg-[#0A192F]/50 border-2 border-white/5 rounded-2xl focus:border-yellow-500/50 outline-none text-white font-bold transition-all placeholder:text-gray-600"
                                    placeholder="admin@afwantech.in"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-[10px] font-black text-blue-200/40 uppercase tracking-widest pl-2">Access Key (Password)</label>
                            <div className="relative group">
                                <FaLock className="absolute left-6 top-1/2 -translate-y-1/2 text-blue-400/30 group-focus-within:text-yellow-500 transition-colors" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-14 pr-6 py-5 bg-[#0A192F]/50 border-2 border-white/5 rounded-2xl focus:border-yellow-500/50 outline-none text-white font-bold transition-all placeholder:text-gray-600"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl shadow-blue-600/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 relative overflow-hidden group ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            {loading ? (
                                <span className="flex items-center gap-3">
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    Verifying...
                                </span>
                            ) : (
                                <>Verify Identity <FaChevronRight /></>
                            )}
                        </button>
                    </form>
                </div>

                {/* Footer Insight */}
                <div className="mt-12 text-center">
                    <p className="text-blue-200/20 text-[10px] uppercase font-black tracking-[0.5em] flex items-center justify-center gap-4">
                        <span className="w-8 h-[1px] bg-blue-200/10"></span>
                        Secure Encrypted Bridge
                        <span className="w-8 h-[1px] bg-blue-200/10"></span>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;

