import React from 'react';
import { createRoot } from 'react-dom/client';
import Frontpage from './pages/Frontpage';
import Services from './pages/Services';

import App from './App';
import './style.css';

const pages = [
    {
        id: 'landingpage-app',
        Component: Frontpage,
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