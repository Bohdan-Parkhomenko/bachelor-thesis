import React from 'react';
import './index.css';

export default function ContactInfoSection() {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <div className="contact-info">
                    <span className="contact-label">Зв'язок</span>
                    <h2 className="contact-heading">Зв'яжіться з нами</h2>
                    <p className="contact-subtitle">
                        Ми завжди готові відповісти на ваші запитання та надати підтримку.
                    </p>
                </div>
                <div className="contact-details">
                    <div className="contact-item">
                        <strong>📧 Електронна пошта</strong>
                        <a href="mailto:hello@hope-orphanage.ua">hello@hope-orphanage.ua</a>
                    </div>
                    <div className="contact-item">
                        <strong>📞 Телефон</strong>
                        <a href="tel:+380441234567">+380 (44) 123-4567</a>
                    </div>
                    <div className="contact-item">
                        <strong>📍 Офіс</strong>
                        <p>вул. Прикладна, 123, Київ, 01001, Україна</p>
                    </div>
                </div>
            </div>
            <div className="contact-map">
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.755967316554!2d30.523400715735158!3d50.450099979474095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce5655e39e15%3A0x5014f3e83d9db4f1!2z0JrQsNC30LDRgNCw0LvRjNGB0LrQsNGPINCn0LXRgNC90LDRgNC60LDRjyDQvtCx0LvQsNGB0YLRjCwgMTIzLCDQmtC40ZfQsiwg0KPQutGA0LDQuNC90LAsIDAxMDAx!5e0!3m2!1suk!2sua!4v1716298620001!5m2!1suk!2sua"
                    width="100%"
                    height="360"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
}
