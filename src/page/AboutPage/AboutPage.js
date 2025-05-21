import React from 'react';
import './index.css';

import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import AboutBlock from "../../components/AboutBlock/AboutBlock";
import TeamMemberCard from "../../components/TeamMemberCard/TeamMemberCard";
import Footer from "../../components/Footer";
import ContactInfoSection from "../../components/ContactInfoSection/ContactInfoSection";

export default function AboutPage() {
    return (
        <div className="about-page">

            <HeroSection
                title="Про нас"
                description="Наша місія — забезпечити дітям-сиротам безпечне середовище для розвитку та щасливого життя. Ми прагнемо створити спільноту, де кожна дитина відчуває любов і підтримку."
                primaryLink="#"
                secondaryLink="#"
            />
            <AboutBlock
                title="Історія створення та місія нашого закладу"
                text="Hope – Orphanage був заснований з метою забезпечення безпеки та підтримки дітей-сиріт. Наша місія полягає в створенні комфортного середовища, де кожна дитина може відчувати любов і турботу."
                primaryAction="Дізнатися"
                secondaryAction="Приєднатися"
            />

            {/* Секція статистики */}
            <section className="statistics-section">
                <div className="statistics-wrapper">
                    <div className="statistics-left">
                        <h2>Важливі статистичні дані про досягнення нашого дитячого будинку</h2>
                    </div>
                    <div className="statistics-right">
                        <p>
                            Наш дитячий будинок досяг значних успіхів у вихованні дітей. Ми забезпечуємо їм безпечне та
                            любляче середовище для розвитку.
                        </p>
                        <div className="statistics-values">
                            <div className="stat-block">
                                <div className="stat-percent">80%</div>
                                <div className="stat-text">Діти отримують освіту та підтримку</div>
                            </div>
                            <div className="stat-block">
                                <div className="stat-percent">70%</div>
                                <div className="stat-text">Діти знаходять нові родини через усиновлення</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-section">
                <div className="team-container">
                    <span className="team-label">Команда</span>
                    <h2 className="team-heading">Наша команда</h2>
                    <p className="team-subtitle">Ми об'єднуємо зусилля для дітей-сиріт</p>
                    <div className="team-grid">
                        <TeamMemberCard name="Марія Іваненко" position="Директорка"
                                        description="Відповідає за загальне управління та розвиток організації."
                                        socials={{linkedin: '#', x: '#', dribbble: '#'}}/>
                        <TeamMemberCard name="Олександр Петров" position="Волонтер"
                                        description="Допомагає з організацією заходів для дітей."
                                        socials={{linkedin: '#', x: '#', dribbble: '#'}}/>
                        <TeamMemberCard name="Анна Сидоренко" position="Психолог"
                                        description="Підтримує емоційний стан дітей через консультації."
                                        socials={{linkedin: '#', x: '#', dribbble: '#'}}/>
                        <TeamMemberCard name="Ігор Коваленко" position="Соціальний працівник"
                                        description="Допомагає дітям інтегруватися в суспільство."
                                        socials={{linkedin: '#', x: '#', dribbble: '#'}}/>
                        <TeamMemberCard name="Тетяна Левченко" position="Координатор проєктів"
                                        description="Організовує програми для розвитку дітей у притулку."
                                        socials={{linkedin: '#', x: '#', dribbble: '#'}}/>
                        <TeamMemberCard name="Сергій Гончар" position="Фінансист"
                                        description="Відповідає за бюджет та фінансову звітність."
                                        socials={{linkedin: '#', x: '#', dribbble: '#'}}/>
                    </div>
                </div>
            </section>

           <ContactInfoSection/>

        </div>
    );
}