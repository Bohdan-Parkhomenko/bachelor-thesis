import './index.css';

export default function FeatureCard({ imageSrc, title, text, link }) {
    return (
        <div className="feature-card">
            <div
                className="feature-img"
                style={{ backgroundImage: `url(${imageSrc})` }}
                role="img"
                aria-label={title}
            ></div>
            <h3 className="feature-title">{title}</h3>
            <p className="feature-text">{text}</p>
            <a href={link} className="feature-link">
                Детальніше <span className="arrow">→</span>
            </a>
        </div>
    );
}
