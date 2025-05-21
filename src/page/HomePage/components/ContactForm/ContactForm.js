import React from 'react';
import './index.css';

export default function ContactForm() {
    return (
        <section className="contact-form">
            <span className="contact-label">Зв'язок</span>
            <h2>Зв'яжіться з нами</h2>
            <p>Ми завжди раді почути ваші думки та запитання.</p>
            <form>
                <label htmlFor="name">Ім'я</label>
                <input type="text" id="name" name="name" placeholder="Ваше ім'я"/>

                <label htmlFor="email">Електронна пошта</label>
                <input type="email" id="email" name="email" placeholder="email@example.com"/>

                <label htmlFor="message">Повідомлення</label>
                <textarea id="message" name="message" placeholder="Введіть ваше повідомлення..."></textarea>


                <div className="form-checkbox">
                    <input type="checkbox" id="terms"/>
                    <p className={'checkbox'}>Я приймаю умови</p>
                </div>


                <button type="submit">Відправити</button>
            </form>
        </section>
    );
}