import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Menu,
  Palette,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import "./landingpagev2.css";

const services = [
  {
    number: "01",
    icon: Palette,
    title: "Brand & web design",
    description:
      "A thoughtful visual identity and a clear, easy-to-use website that feels unmistakably yours.",
    label: "Design",
  },
  {
    number: "02",
    icon: Code2,
    title: "Website development",
    description:
      "Responsive, reliable websites built around your business and the people you want to reach.",
    label: "Development",
  },
  {
    number: "03",
    icon: Search,
    title: "Search visibility",
    description:
      "A strong SEO foundation that helps the right customers find you and take the next step.",
    label: "Growth",
  },
];

const projects = [
  {
    name: "A thoughtful studio",
    type: "Design study · Brand and website",
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=85",
    alt: "Warm, minimal interior concept with natural light",
    className: "lpv2-project-image--fieldnotes",
  },
  {
    name: "A brighter storefront",
    type: "Design study · E-commerce",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1200&q=85",
    alt: "Colorful product display concept",
    className: "lpv2-project-image--sunday",
  },
  {
    name: "A welcoming practice",
    type: "Design study · Local business website",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85",
    alt: "Bright, contemporary workspace concept",
    className: "lpv2-project-image--northline",
  },
];

const steps = [
  ["01", "Get to know you", "We start with a conversation about your business, audience, and goals."],
  ["02", "Shape the direction", "Together, we set the visual direction and map out the experience."],
  ["03", "Make it real", "We design, build, and refine your site with your feedback along the way."],
  ["04", "Launch & grow", "We launch with care and give you the tools and support to move forward."],
];

const testimonials = [
  {
    quote:
      "Thank you so much for creating this beautiful website for my crochet business. I really appreciate the time and effort you put into it!",
    name: "Keya Islam",
    role: "Small business owner",
  },
  {
    quote:
      "Summit Web Solutions got right to work on my website. They finished quickly, listened to my preferences, and have been readily available for updates.",
    name: "Andrew Cunich",
    role: "Small business owner",
  },
  {
    quote:
      "Great with communication and very easy to work with. I would recommend to anyone trying to get a website for their business!",
    name: "Joseph Turk",
    role: "Small business owner",
  },
];

const faqs = [
  {
    question: "How long does a website project take?",
    answer:
      "Most projects take between four and eight weeks, depending on the scope, content, and feedback schedule. We’ll agree on a clear timeline before work begins.",
  },
  {
    question: "Can you work with my existing brand?",
    answer:
      "Absolutely. We can build around your existing identity or help refine it as part of the project.",
  },
  {
    question: "Will I be able to update the website myself?",
    answer:
      "Yes. We build with practical editing in mind and walk you through the parts you’ll want to manage after launch.",
  },
];

function BrandMark() {
  return (
    <a className="lpv2-brand" href="#home" aria-label="Summit Web Solutions home">
      <span className="lpv2-brand-mark" aria-hidden="true">S</span>
      <span>
        <strong>Summit</strong>
        <small>Web solutions</small>
      </span>
    </a>
  );
}

export default function Landingpagev2() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="lpv2-page" id="home">
      <header className="lpv2-header">
        <div className="lpv2-container lpv2-header-inner">
          <BrandMark />
          <button
            className="lpv2-menu-toggle"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="lpv2-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav
            id="lpv2-navigation"
            className={`lpv2-nav${menuOpen ? " is-open" : ""}`}
            aria-label="Main navigation"
          >
            <a href="#services" onClick={closeMenu}>What we do</a>
            <a href="#work" onClick={closeMenu}>Selected work</a>
            <a href="#about" onClick={closeMenu}>Our approach</a>
            <a className="lpv2-nav-cta" href="#contact" onClick={closeMenu}>
              Let’s talk <ArrowUpRight size={15} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="lpv2-hero">
          <div className="lpv2-container lpv2-hero-grid">
            <div className="lpv2-hero-copy">
              <p className="lpv2-eyebrow"><span /> Independent digital studio</p>
              <h1>Good work deserves a <em>great website.</em></h1>
              <p className="lpv2-lede">
                We help ambitious small businesses turn their next big idea into
                a thoughtful online experience that feels like them.
              </p>
              <div className="lpv2-hero-actions">
                <a className="lpv2-button lpv2-button-dark" href="#contact">
                  Tell us about your project <ArrowUpRight size={17} />
                </a>
                <a className="lpv2-text-link" href="#work">
                  See what we make <ArrowDown size={15} />
                </a>
              </div>
              <div className="lpv2-hero-note">
                <span className="lpv2-note-stars" aria-hidden="true">✳</span>
                <span>Small team. Thoughtful work. No one-size-fits-all.</span>
              </div>
            </div>

            <div className="lpv2-hero-art">
              <div className="lpv2-art-backdrop" />
              <div className="lpv2-hero-photo">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
                  alt="Sunlit creative workspace with a large shared table"
                />
                <div className="lpv2-photo-caption">
                  <span>Independent by design</span>
                  <span>01 — 04</span>
                </div>
              </div>
              <div className="lpv2-float-card">
                <Sparkles size={18} aria-hidden="true" />
                <span>Made for the<br /><strong>next chapter.</strong></span>
              </div>
              <div className="lpv2-art-stamp" aria-hidden="true">MAKE<br />IT<br />MATTER</div>
            </div>
          </div>
          <div className="lpv2-container lpv2-hero-bottom">
            <span>Websites with intention, built for what’s next.</span>
            <a href="#services">Scroll to explore <ArrowDown size={14} /></a>
          </div>
        </section>

        <section className="lpv2-trust" aria-label="Our focus">
          <div className="lpv2-container lpv2-trust-inner">
            <span>Good digital work, from first thought to launch</span>
            <div><i>Strategy</i><b>·</b><i>Design</i><b>·</b><i>Development</i><b>·</b><i>Growth</i></div>
          </div>
        </section>

        <section className="lpv2-section lpv2-services" id="services">
          <div className="lpv2-container">
            <div className="lpv2-section-heading">
              <div>
                <p className="lpv2-eyebrow">01 / What we do</p>
                <h2>Everything you need.<br /><em>Nothing you don’t.</em></h2>
              </div>
              <p>From the first sketch to the final click, we make the digital side of your business feel simpler.</p>
            </div>
            <div className="lpv2-service-grid">
              {services.map(({ number, icon: Icon, title, description, label }) => (
                <article className="lpv2-service-card" key={number}>
                  <div className="lpv2-service-top">
                    <span className="lpv2-service-icon"><Icon size={20} strokeWidth={1.7} /></span>
                    <span>{number}</span>
                  </div>
                  <p className="lpv2-card-label">{label}</p>
                  <h3>{title}</h3>
                  <p className="lpv2-card-description">{description}</p>
                  <a href="#contact" aria-label={`Learn about ${title}`}>Explore service <ArrowUpRight size={15} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="lpv2-section lpv2-work" id="work">
          <div className="lpv2-container">
            <div className="lpv2-section-heading lpv2-work-heading">
              <div>
                <p className="lpv2-eyebrow">02 / A few good projects</p>
                <h2>Built with care.<br /><em>Made to work.</em></h2>
              </div>
              <a className="lpv2-text-link" href="#contact">Have a project in mind? <ArrowUpRight size={15} /></a>
            </div>
            <div className="lpv2-project-grid">
              {projects.map(({ name, type, image, alt, className }, index) => (
                <article className={`lpv2-project ${className}`} key={name}>
                  <a className="lpv2-project-link" href="#contact" aria-label={`Discuss a project like ${name}`}>
                    <div className="lpv2-project-image">
                      <img src={image} alt={alt} loading="lazy" />
                      <span className="lpv2-project-index">0{index + 1}</span>
                      <span className="lpv2-project-arrow"><ArrowUpRight size={19} /></span>
                    </div>
                    <div className="lpv2-project-meta">
                      <div><h3>{name}</h3><span>{type}</span></div>
                      <ArrowRight size={18} />
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="lpv2-about" id="about">
          <div className="lpv2-container lpv2-about-grid">
            <div className="lpv2-about-visual">
              <div className="lpv2-about-photo">
                <img
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=85"
                  alt="A calm, light-filled workspace ready for creative work"
                  loading="lazy"
                />
              </div>
              <div className="lpv2-about-sticker"><span>GOOD<br />THINGS<br />TAKE A<br />TEAM</span><Sparkles size={20} /></div>
            </div>
            <div className="lpv2-about-copy">
              <p className="lpv2-eyebrow">03 / A little about us</p>
              <h2>We believe the web can feel <em>more human.</em></h2>
              <p>
                We’re a small, hands-on team that pairs smart strategy with
                considered design and dependable development. No bloated
                process or off-the-shelf answers—just good people making useful
                things together.
              </p>
              <ul className="lpv2-check-list">
                <li><Check size={16} /> Direct collaboration from day one</li>
                <li><Check size={16} /> Clear decisions and honest timelines</li>
                <li><Check size={16} /> A site you can confidently grow</li>
              </ul>
              <a className="lpv2-button lpv2-button-outline" href="#process">How we work <ArrowRight size={16} /></a>
            </div>
          </div>
          <div className="lpv2-container lpv2-stats">
            <div><strong>01</strong><span>Close-knit team</span></div>
            <div><strong>100%</strong><span>Made for your goals</span></div>
            <div><strong>0</strong><span>Cookie-cutter builds</span></div>
            <p>Big-agency care,<br />without the agency layers.</p>
          </div>
        </section>

        <section className="lpv2-section lpv2-process" id="process">
          <div className="lpv2-container">
            <div className="lpv2-section-heading">
              <div>
                <p className="lpv2-eyebrow">04 / The process</p>
                <h2>Clear steps.<br /><em>Good momentum.</em></h2>
              </div>
              <p>We keep the process collaborative, transparent, and focused on what will make the biggest difference.</p>
            </div>
            <div className="lpv2-step-grid">
              {steps.map(([number, title, description]) => (
                <article className="lpv2-step" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="lpv2-testimonials">
          <div className="lpv2-container">
            <div className="lpv2-section-heading">
              <div>
                <p className="lpv2-eyebrow">05 / Kind words</p>
                <h2>Good work is<br /><em>a team effort.</em></h2>
              </div>
              <span className="lpv2-quote-mark" aria-hidden="true">“</span>
            </div>
            <div className="lpv2-testimonial-grid">
              {testimonials.map(({ quote, name, role }) => (
                <figure className="lpv2-testimonial" key={name}>
                  <blockquote>{quote}</blockquote>
                  <figcaption><span className="lpv2-avatar">{name.split(" ").map((part) => part[0]).join("")}</span><span><strong>{name}</strong><small>{role}</small></span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="lpv2-section lpv2-faq">
          <div className="lpv2-container lpv2-faq-grid">
            <div>
              <p className="lpv2-eyebrow">06 / A few answers</p>
              <h2>Wondering<br /><em>how it works?</em></h2>
              <p>Have another question? We’re always happy to talk it through.</p>
              <a className="lpv2-text-link" href="mailto:summitwebsolution18@gmail.com">Send us a note <ArrowUpRight size={15} /></a>
            </div>
            <div className="lpv2-faq-list">
              {faqs.map(({ question, answer }) => (
                <details key={question}>
                  <summary>{question}<span aria-hidden="true">+</span></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="lpv2-contact" id="contact">
          <div className="lpv2-container lpv2-contact-inner">
            <div className="lpv2-contact-decoration" aria-hidden="true">✳</div>
            <p className="lpv2-eyebrow">07 / Your next chapter</p>
            <h2>Let’s make<br /><em>something good.</em></h2>
            <p>Tell us what you’re working on. We’ll bring the coffee and a few good questions.</p>
            <a className="lpv2-button lpv2-button-dark" href="mailto:summitwebsolution18@gmail.com?subject=Let%27s%20build%20something%20good">
              Start a conversation <ArrowUpRight size={17} />
            </a>
            <span className="lpv2-contact-email">summitwebsolution18@gmail.com</span>
          </div>
        </section>
      </main>

      <footer className="lpv2-footer">
        <div className="lpv2-container lpv2-footer-inner">
          <BrandMark />
          <span>Thoughtful websites for what’s next.</span>
          <a href="#home">Back to top <ArrowUpRight size={14} /></a>
          <small>© {new Date().getFullYear()} Summit Web Solutions</small>
        </div>
      </footer>
    </div>
  );
}
