import React from 'react';
import './index.css';
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header className="header-wrapper">
            <div className="header container">
                <div className="logo">Logo</div>
                <nav className="nav">
                    <Link to="/">Головна</Link>
                    <Link to="/about">Про нас</Link>
                    <Link to="/contacts">Контакти</Link>
                    <Link to="/blog">Блог</Link>
                    <button className="donate-button">Donate</button>
                </nav>
            </div>
        </header>
    );
}
