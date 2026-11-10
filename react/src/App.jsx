import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Frontpage from './pages/Frontpage';
import Landingpagev2 from './pages/landingpagev2';
import Services from './pages/Services';

function NotFound() {
    return (
        <main className="react-route-not-found">
            <h1>Page not found</h1>
            <p>The page you’re looking for doesn’t exist.</p>
            <Link to="/">Return home</Link>
        </main>
    );
}

export default function App() {
    const root = document.getElementById('react-router-app');
    const basePath = root?.dataset.routerBase || '/';

    return (
        <BrowserRouter basename={basePath}>
            <Routes>
                <Route path="/" element={<Frontpage />} />
                <Route path="/landingpagev2" element={<Landingpagev2 />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}