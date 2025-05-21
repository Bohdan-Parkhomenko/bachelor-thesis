import React from 'react';
import './index.css';

export default function TeamMemberCard({ imageSrc, name, position, description, socials = {} }) {
    return (
        <div className="team-card">
            <div
                className="team-image"
                style={{ backgroundImage: `url(${imageSrc || 'https://via.placeholder.com/100'})` }}
                role="img"
                aria-label={name}
            ></div>
            <div className="team-info">
                <h4 className="team-name">{name}</h4>
                <p className="team-position">{position}</p>
                <p className="team-description">{description}</p>
                <div className="team-socials">
                    {socials.linkedin && <a href={socials.linkedin} target="_blank" rel="noreferrer" className="icon">in</a>}
                    {socials.x && <a href={socials.x} target="_blank" rel="noreferrer" className="icon">X</a>}
                    {socials.dribbble && <a href={socials.dribbble} target="_blank" rel="noreferrer" className="icon">⭘</a>}
                </div>
            </div>
        </div>
    );
}
