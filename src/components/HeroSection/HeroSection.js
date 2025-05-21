import React from 'react';
import './index.css';

export default function HeroSection({ title, description, primaryLink, secondaryLink }) {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-left">
                    <h1 className="hero-title">{title}</h1>
                </div>
                <div className="hero-right">
                    <p className="hero-description">{description}</p>
                    <div className="hero-buttons">
                        <a href={primaryLink} className="btn primary">Button</a>
                        <a href={secondaryLink} className="btn secondary">Button</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
