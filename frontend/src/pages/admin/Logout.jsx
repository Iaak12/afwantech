import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
    }, [navigate]);

    return null;
};

export default Logout;

