import React from 'react';
import { createRoot } from 'react-dom/client';
import Landingpagev2 from './pages/landingpagev2';
import Header from './components/Header';

import AboutSection from "./components/frontpage/AboutSection";
import BenefitsSection from "./components/frontpage/BenefitsSection";
import ContactSection from "./components/frontpage/ContactSection";
import FinalCtaSection from "./components/frontpage/FinalCtaSection";
import FooterSection from "./components/frontpage/FooterSection";
import Hero from "./components/frontpage/Hero";
import PricingSection from "./components/frontpage/PricingSection";
import ProcessSection from "./components/frontpage/ProcessSection";
import ServicesSection from "./components/frontpage/ServicesSection";
import TeamSection from "./components/frontpage/TeamSection";
import TestimonialsSection from "./components/frontpage/TestimonialsSection";

import App from './App';
import './style.css';

const routerRoot = document.getElementById('react-router-app');
if (routerRoot) {
    createRoot(routerRoot).render(<App />);
}

const contactRoot = document.getElementById('landingpage-contact-root');
const contactFormProps = contactRoot
    ? {
        fields: JSON.parse(contactRoot.dataset.contactFields),
        endpoint: contactRoot.dataset.contactEndpoint,
    }
    : {};

const pages = [
    {
        id: 'site-header',
        Component:Header
    },
    {
        id: 'landingpage-v2-app',
        Component: Landingpagev2,
    },
    {
        id: 'landingpage-about-root',
        Component: AboutSection,
    },
    {
        id: 'landingpage-benefits-root',
        Component: BenefitsSection,
    },
    {
        id: 'landingpage-contact-root',
        Component: ContactSection,
        props: contactFormProps,
    },
    {
        id: 'landingpage-final-cta-root',
        Component: FinalCtaSection,
    },
    {
        id: 'landingpage-footer-root',
        Component: FooterSection,
        props: {
            links: [
                ["Services", "#services"],
                ["About", "#about"],
                ["Pricing", "#pricing"],
                ["Reviews", "#reviews"],
                ["Our Team", "#team"],
            ],
        },
    },
    {
        id: 'landingpage-hero-root',
        Component: Hero,
    },
    {
        id: 'landingpage-pricing-root',
        Component: PricingSection,
    },
    {
        id: 'landingpage-process-root',
        Component: ProcessSection,
    },
    {
        id: 'landingpage-services-root',
        Component: ServicesSection,
    },
    {
        id: 'landingpage-team-root',
        Component: TeamSection,
    },
    {
        id: 'landingpage-testimonials-root',
        Component: TestimonialsSection,
    }
];

pages.forEach(({ id, Component, props = {} }) => {
    const rootElement = document.getElementById(id);
    if (rootElement) {
        createRoot(rootElement).render(<Component {...props} />);
    }
});