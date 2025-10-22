import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.dispatchEvent(new Event('loginStatusChange')); // 🔔 trigger event
        navigate('/');
        // You might want to also call googleLogout() from '@react-oauth/google' if needed
    };

    return (
        <button
            onClick={handleLogout}
            className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300"
        >
            Logout
        </button>
    );
};

export default Logout;
