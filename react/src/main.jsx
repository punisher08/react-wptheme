import React from 'react';
import { createRoot } from 'react-dom/client';
import Frontpage from './pages/Frontpage';
import Landingpagev2 from './pages/landingpagev2';
import Services from './pages/Services';
import Header from './components/Header';

import App from './App';
import './style.css';

const routerRoot = document.getElementById('react-router-app');
if (routerRoot) {
    createRoot(routerRoot).render(<App />);
}

const pages = [
    {
        id: 'site-header',
        Component:Header
    },
    {
        id: 'landingpage-app',
        Component: Frontpage,
    },
    {
        id: 'landingpage-v2-app',
        Component: Landingpagev2,
    },
    {
        id: 'services',
        Component: Services,
    }
   
];

pages.forEach(({ id, Component }) => {
    const rootElement = document.getElementById(id);
    if (rootElement) {
        createRoot(rootElement).render(<Component />);
    }
});