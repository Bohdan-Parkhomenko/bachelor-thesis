import './index.css';

export default function TestimonialCard({ rating, text, author, position = '' }) {
    const stars = '★'.repeat(Math.floor(rating)).padEnd(5, '☆');
    return (
        <div className="testimonial-card">
            <div className="stars">{stars}</div>
            <blockquote>{text}</blockquote>
            <div className="testimonial-author">
                <div className="avatar"></div>
                <div className="author-info">
                    <strong>{author}</strong>
                    <div className="position">{position}</div>
                </div>
            </div>
        </div>
    );
}