export default function Header() {
    return (
        <header className="bg-white shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                {/* Logo */}
                <a href="/" className="text-2xl font-bold tracking-tight text-gray-900">
                    My<span className="text-blue-600">Website</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    <a href="/" className="text-sm font-medium text-gray-700 transition hover:text-blue-600">
                        Home
                    </a>
                    <a href="/about" className="text-sm font-medium text-gray-700 transition hover:text-blue-600">
                        About
                    </a>
                    <a href="/services" className="text-sm font-medium text-gray-700 transition hover:text-blue-600">
                        Services
                    </a>
                    <a href="/contact" className="text-sm font-medium text-gray-700 transition hover:text-blue-600">
                        Contact
                    </a>
                </nav>

                {/* CTA Button */}
                <a
                    href="/contact"
                    className="hidden rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 md:inline-flex"
                >
                    Get Started
                </a>
            </div>
        </header>
    );
}