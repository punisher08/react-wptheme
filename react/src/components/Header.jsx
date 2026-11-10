
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowUpRight,
  Mail,
  Menu,
  X,
  ChevronDown,
  Code2,
  Search,
  PanelsTopLeft,
} from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Services", "#services"],
    ["Our Work", "#portfolio"],
    ["Contact", "#contact"],
  ];

  return (
    <>
      <header className={`site-header fixed left-0 right-0 top-0 z-50 backdrop-blur-xl transition-all duration-300 ${scrolled ? "bg-slate-950/90 py-2 shadow-md" : "bg-transparent py-3 lg:py-4"}`}>
      <div className="mx-auto flex min-h-[70px] max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:min-h-[78px] lg:px-12">

        {/* Logo */}
        <a
          href="#home"
          className="header-brand group flex shrink-0 items-center gap-3"
          aria-label="Summit Web Solutions - Home"
        >
          <img src="https://joinsummitwebsolutions.com/wp-content/uploads/2026/08/sws-logo.png" alt="Summit Web Solutions Logo" className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
        </a>


        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map(([label, href], index) => (
            <a
              key={label}
              href={href}
              style={{ "--nav-index": index }}
              className="header-nav-link group relative flex items-center gap-1 rounded-lg px-3 py-2.5 text-[15px] font-medium tracking-[-0.01em] text-white transition-colors duration-300 hover:text-blue-600"
            >
              {label}
              {label === "Services" && (
                <ChevronDown
                  size={13}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              )}
              <span className="absolute bottom-1 left-3 right-3 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 xl:flex">
          <a
            href="mailto:summitwebsolution18@gmail.com"
            className="header-email group inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-[14px] font-medium text-white transition-colors hover:text-blue-600"
          >
            <Mail
              size={15}
              className="text-slate-400 transition-colors group-hover:text-blue-600"
            />
            Email us
          </a>

          <a
            href="#services"
            className="header-secondary-btn inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-[14px] font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
          >
            <PanelsTopLeft size={15} />
            Our services
          </a>

          <a
            href="#contact"
            className="header-primary-btn group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-[14px] font-semibold text-white shadow-md shadow-blue-600/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/25"
          >
            Start a project
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Compact desktop actions for medium screens */}
        <div className="hidden items-center gap-2 lg:flex xl:hidden">
          <a
            href="#contact"
            aria-label="Email Summit Web Solutions"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          >
            <Mail size={17} />
          </a>
          <a
            href="#contact"
            className="header-primary-btn group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-[12px] font-semibold text-white transition hover:bg-blue-500"
          >
            Let's Talk <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 active:scale-95 lg:hidden"
        >
          <span className="relative flex h-5 w-5 items-center justify-center">
            <Menu
              size={21}
              className={`absolute transition-all duration-300 ${menuOpen
                  ? "rotate-90 scale-50 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
                }`}
            />
            <X
              size={21}
              className={`absolute transition-all duration-300 ${menuOpen
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-50 opacity-0"
                }`}
            />
          </span>
        </button>
      </div>

      </header>
      {createPortal(
        <div
          id="mobile-navigation"
          aria-hidden={!menuOpen}
          inert={!menuOpen}
          className="pointer-events-none fixed inset-0 z-[60] lg:hidden"
        >
        <button
          type="button"
          aria-label="Close navigation"
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-x-0 bottom-0 top-[94px] transition-opacity duration-300 ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} bg-slate-950/45 backdrop-blur-[2px]`}
        />
        <div
          role="dialog"
          aria-modal={menuOpen}
          aria-label="Mobile navigation"
          className={`mobile-nav-panel absolute bottom-0 right-0 top-[94px] flex w-[min(88vw,24rem)] flex-col overflow-y-auto border-l border-slate-200 bg-white shadow-2xl shadow-slate-950/20 transition-transform duration-300 ease-out ${menuOpen ? "pointer-events-auto translate-x-0" : "pointer-events-none translate-x-full"}`}
        >
          <nav className="flex min-h-full flex-col gap-1 px-5 py-6 sm:px-8">
            {links.map(([label, href], index) => {
              const Icon =
                label === "Home"
                  ? PanelsTopLeft
                  : label === "About"
                    ? Code2
                    : label === "Services"
                      ? Search
                      : label === "Our Work"
                        ? PanelsTopLeft
                        : Mail;

              return (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  style={{ "--nav-index": index }}
                  className={`mobile-nav-link group flex items-center gap-3 rounded-xl px-4 py-3 text-[13px] font-medium text-slate-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 ${menuOpen ? "mobile-nav-link-open" : ""
                    }`}
                >
                  <Icon size={17} className="text-slate-400" />
                  <span>{label}</span>
                  <ArrowUpRight
                    size={14}
                    className="ml-auto text-slate-300 transition-transform group-hover:-translate-y-0.5"
                  />
                </a>
              );
            })}

            {/* Mobile CTA buttons */}
            <div className="mt-3 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
              <a
                href="mailto:summitwebsolution18@gmail.com"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-3 text-[12px] font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50"
              >
                <Mail size={15} />
                Email us
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-3 py-3 text-[12px] font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-500"
              >
                Start a project
                <ArrowUpRight size={15} />
              </a>
            </div>

            <p className="pb-1 pt-4 text-center text-[10px] tracking-wide text-slate-400">
              WEB DESIGN · DEVELOPMENT · SEO
            </p>
          </nav>
        </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default Header;
