import Header from './components/Header';
import Hero from './components/Hero';

export default function App() {
    return (
        <div className="react-app">
            <Header />

            <main>
                <Hero />
                <h1>Hello from React</h1>
                <p>
                    This React application is running inside WordPress.
                </p>
            </main>
        </div>
    );
}