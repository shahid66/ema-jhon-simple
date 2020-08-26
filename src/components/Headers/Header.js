import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Review Product</a>
                <a href="/manage">Management</a>
            </nav>
        </div>
    );
};

export default Header;