import React from 'react';
import logo from '../headerLogo.png'
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className='header-container'>
                <img src={logo} alt="" />
            </div>
            <nav className = 'menu-container'>
                <div className="menu d-flex justify-content-start">
                <a href="Courses">Courses</a>
                <a href="Shop">Shop</a>
                <a href="Content">Content</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;