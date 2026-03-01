import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';

const Dashboard = () => {
    const [stats, setStats] = React.useState([
        { title: 'Total FAQs', value: '0', color: 'bg-blue-600' },
        { title: 'Total Blogs', value: '0', color: 'bg-green-500' },
        { title: 'Service Countries', value: '0', color: 'bg-purple-500' },
        { title: 'Contact Submissions', value: '0', color: 'bg-orange-500' },
    ]);

    React.useEffect(() => {
        // Fetch contact submissions count dynamically
        fetch('http://localhost:5005/api/contact', {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` }
        })
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setStats(prev => prev.map(s => s.title === 'Contact Submissions' ? { ...s, value: data.length.toString() } : s));
                }
            })
            .catch(err => console.error("Could not fetch submissions count", err));
    }, []);
    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {stats.map((stat) => (
                    <div key={stat.title} className={`${stat.color} p-6 rounded-2xl shadow-lg relative overflow-hidden`}>
                        {/* Decorative circle */}
                        <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="w-5 h-5 bg-white rounded-full block"></span>
                        </div>

                        <p className="text-white/90 text-sm font-bold uppercase tracking-wider mb-2 mt-4">{stat.title}</p>
                        <h2 className="text-5xl font-extrabold text-white">{stat.value}</h2>
                    </div>
                ))}
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Welcome back, Admin!</h2>
                <p className="text-gray-600 leading-relaxed">
                    From this panel, you can manage your website's blogs, FAQs, and other dynamic content.
                    Use the sidebar to navigate between different sections.
                </p>
            </div>
        </AdminLayout>
    );
};

export default Dashboard;

