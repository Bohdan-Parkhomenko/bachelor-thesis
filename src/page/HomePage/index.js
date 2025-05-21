import React from 'react';
import './index.css';
import HeroSection from "../../components/HeroSection/HeroSection";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import AboutBlock from "../../components/AboutBlock/AboutBlock";


export default function HomePage() {
    return (
        <div className="container">

            <div className="hero-image" role="img" aria-label="Головне зображення"></div>
            {/* Hero Section */}
            <HeroSection
                title="Ласкаво просимо до Hope – Орфанату"
                description="Наша місія – забезпечити дітям, які залишилися без батьків, тепло, підтримку та можливості для розвитку. Ми віримо, що кожна дитина заслуговує на любов і турботу."
                primaryLink="#"
                secondaryLink="#"
            />

            {/* Features */}
            <section className="features">
                <h2>Основні функції та послуги</h2>
                <div className="features-grid">
                    <FeatureCard
                        imageSrc="https://via.placeholder.com/300x150"
                        title="Підтримка дітей"
                        text="Надаємо всебічну підтримку та ресурси."
                        link="#"
                    />
                    <FeatureCard
                        imageSrc="https://via.placeholder.com/300x150"
                        title="Освітні програми"
                        text="Організовуємо навчання та розвиток."
                        link="#"
                    />
                    <FeatureCard
                        imageSrc="https://via.placeholder.com/300x150"
                        title="Психологічна допомога"
                        text="Допомагаємо дітям долати травми."
                        link="#"
                    />
                </div>
            </section>

            <AboutBlock
                title="Історія та цінності нашого притулку"
                text="Hope – Orphanage був заснований з метою забезпечення безпеки та підтримки дітей-сиріт. Ми віримо в силу спільноти та любові, які допомагають дітям зростати щасливими."
                primaryAction="Дізнатися"
                secondaryAction="Приєднатися"
                imageSrc="https://via.placeholder.com/600x400"
            />

            <AboutBlock
                title="Чому обрати Hope – Orphanage для дітей?"
                text="Hope – Orphanage забезпечує тепле та безпечне середовище для дітей..."
                primaryAction="Дізнатися"
                secondaryAction="Зв'язатися"
                imageSrc="https://via.placeholder.com/600x400"
            >
                {/* ВСТАВКА: блок переваг */}
                <div className="benefits">
                    <div className="benefit">
                        <div className="icon">📦</div>
                        <h4>Безпечне середовище</h4>
                        <p>Наші діти живуть у комфортних умовах з професійним наглядом.</p>
                    </div>
                    <div className="benefit">
                        <div className="icon">📚</div>
                        <h4>Освітні можливості</h4>
                        <p>Ми пропонуємо різноманітні програми для розвитку та навчання дітей.</p>
                    </div>
                </div>
            </AboutBlock>


            {/* Testimonials */}
            <section className="testimonials">
                <h2>Відгуки клієнтів</h2>
                <div className="testimonial-grid">
                    <TestimonialCard
                        rating={5}
                        text="Hope змінив життя моєї дитини на краще. Велика подяка всьому персоналу!"
                        author="Анна К."
                    />
                    <TestimonialCard
                        rating={4}
                        text="Чудовий досвід! Дитина щаслива та в безпеці."
                        author="Ігор П."
                    />
                    <TestimonialCard
                        rating={5}
                        text="Вразила підтримка та атмосфера довіри."
                        author="Марія С."
                    />
                </div>
            </section>

        </div>
    );
}