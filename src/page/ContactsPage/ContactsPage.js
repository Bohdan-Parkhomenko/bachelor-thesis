import React from 'react';
import './index.css'
import HeroSection from "../../components/HeroSection/HeroSection";
import ContactInfoSection from "../../components/ContactInfoSection/ContactInfoSection";
import ContactForm from "../HomePage/components/ContactForm/ContactForm";
import JoinUsSection from "../HomePage/components/JoinUsSection/JoinUsSection";




export default function ContactsPage() {
    return (
        <div className="contacts-page">
            <HeroSection
                title="Зв’яжіться з нами"
                description="Тут ви знайдете всю необхідну контактну інформацію для зв'язку з нашим дитячим будинком."
                primaryLink="#info"
                secondaryLink="#form"
            />
            <ContactInfoSection />
            <ContactForm />
            <JoinUsSection />
        </div>
    );
}
