import React from 'react';
import './index.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-left">
                        <div className="footer-logo">Logo</div>

                        <p>
                            <strong>Адреса:</strong><br />
                            Поверх 1, 12 Прикладна вулиця, Сідней NSW 2000
                        </p>

                        <p>
                            <strong>Контакт:</strong><br />
                            <a href="tel:18001234567">1800 123 4567</a><br />
                            <a href="mailto:info@relume.io">info@relume.io</a>
                        </p>

                        <div className="social-icons">
                            <a href="#"><span>🌐</span></a>
                            <a href="#"><span>📘</span></a>
                            <a href="#"><span>📸</span></a>
                            <a href="#"><span>🎥</span></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <ul>
                            <li><a href="#">Посилання Один</a></li>
                            <li><a href="#">Посилання Два</a></li>
                            <li><a href="#">Посилання Три</a></li>
                            <li><a href="#">Посилання Чотири</a></li>
                            <li><a href="#">Посилання П’ять</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Посилання Шість</a></li>
                            <li><a href="#">Посилання Сім</a></li>
                            <li><a href="#">Посилання Вісім</a></li>
                            <li><a href="#">Посилання Дев’ять</a></li>
                            <li><a href="#">Посилання Десять</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2025 Relume. Усі права захищені.</p>
                    <div className="footer-policy-links">
                        <a href="#">Політика конфіденційності</a>
                        <a href="#">Умови обслуговування</a>
                        <a href="#">Налаштування Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
