import React from 'react'
import { useNavigate } from 'react-router-dom';
import './navbar.css';

export const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        
        localStorage.removeItem('token'); 

        
        navigate('/');
    };
    return (
        <nav>
            <div className="navbar">
                <div className="navbar-brand">ToDo List</div>
                <div className="navbar-icons">
                    <span className="logout-icon" onClick={handleLogout}>
                        Logout
                    </span>
                </div>
            </div>
        </nav>
    )
}
