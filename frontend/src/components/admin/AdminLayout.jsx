import React from 'react';
import AdminSidebar from './AdminSidebar';

const AdminLayout = ({ children }) => {
    return (
        <div className="flex bg-gray-100 min-h-screen">
            <AdminSidebar />
            <main className="flex-1 p-10">
                <div className="max-w-6xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;


