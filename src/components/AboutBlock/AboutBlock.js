import React from 'react';
import './index.css';
import image from '../../assets/vidkryti-dveri.webp'

export default function AboutBlock({title, text, primaryAction, secondaryAction, imageSrc = image, children}) {
    return (
        <section className="about-block">
            <div className="about-content">
                <span className="about-label">Надія</span>
                <h2 className="about-title">{title}</h2>
                <p className="about-text">{text}</p>
                <div className="about-buttons">
                    <button className="btn outlined">{primaryAction}</button>
                    <button className="btn link">{secondaryAction} <span className="arrow">→</span></button>
                </div>

                {/* ⬇️ ВСТАВКА ДОДАТКОВОГО КОНТЕНТУ */}
                {children}
            </div>

            <div
                className="about-image"
                style={{backgroundImage: `url(${imageSrc})`}}
                role="img"
                aria-label={title}
            ></div>
        </section>
    );
}
