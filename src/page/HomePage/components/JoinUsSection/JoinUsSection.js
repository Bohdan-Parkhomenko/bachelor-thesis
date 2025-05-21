import React from 'react';
import './index.css';

export default function JoinUsSection() {
    return (
        <section className="join-section">
            <div className="join-content">
                <h2>Долучайтеся до нашої справи</h2>
                <p>Станьте частиною нашої команди! Ваш внесок може змінити життя дітей.</p>
                <form className="join-form">
                    <input type="email" placeholder="Введіть ваш email" />
                    <button type="submit">Підписатися</button>
                </form>
                <p className="join-note">Натискаючи Підписатися, ви підтверджуєте свою згоду з нашими Умовами та Політикою.</p>
            </div>
        </section>
    );
}