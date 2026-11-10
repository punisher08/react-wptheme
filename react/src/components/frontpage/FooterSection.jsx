import { Arrow, Logo } from "./FrontpageUi";
import { services } from "../../data/frontpage";

export default function FooterSection({ links }) {
  return (
      <footer className="bg-[#0B1024] text-white">
        <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Logo light />
              <p className="mt-5 max-w-xs text-xs leading-6 text-slate-400">
                Helping businesses build a stronger online presence through
                website design, development, SEO, and ongoing support.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-white">Explore</h3>
              <ul className="mt-4 space-y-3">
                {links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-xs text-slate-400 transition hover:text-cyan-300"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-white">Our services</h3>
              <ul className="mt-4 space-y-3">
                {services.map((service) => (
                  <li key={service.number}>
                    <a
                      href="#services"
                      className="text-xs text-slate-400 transition hover:text-cyan-300"
                    >
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-white">Get in touch</h3>
              <a
                href="mailto:summitwebsolution18@gmail.com"
                className="mt-4 block break-all text-xs leading-6 text-slate-400 transition hover:text-cyan-300"
              >
                summitwebsolution18@gmail.com
              </a>
              <p className="mt-3 text-xs leading-6 text-slate-400">
                Coraopolis, Pennsylvania
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-cyan-300"
              >
                Contact our team <Arrow />
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-[10px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Summit Web Solutions. All rights
              reserved.
            </p>
            <div className="flex gap-5">
              <a href="#contact" className="hover:text-white">
                Terms and Conditions
              </a>
              <a href="#contact" className="hover:text-white">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
}
