import Header from "../components/Header";
import AboutSection from "../components/frontpage/AboutSection";
import BenefitsSection from "../components/frontpage/BenefitsSection";
import ContactSection from "../components/frontpage/ContactSection";
import FinalCtaSection from "../components/frontpage/FinalCtaSection";
import FooterSection from "../components/frontpage/FooterSection";
import Hero from "../components/frontpage/Hero";
import PricingSection from "../components/frontpage/PricingSection";
import ProcessSection from "../components/frontpage/ProcessSection";
import ServicesSection from "../components/frontpage/ServicesSection";
import TeamSection from "../components/frontpage/TeamSection";
import TestimonialsSection from "../components/frontpage/TestimonialsSection";

export default function Frontpage() {
  const links = [
    ["Services", "#services"],
    ["About", "#about"],
    ["Pricing", "#pricing"],
    ["Reviews", "#reviews"],
    ["Our Team", "#team"],
  ];

  return (
    <main
      id="home"
      className="overflow-hidden bg-white font-roboto text-slate-900 antialiased"
    >
      {/* Navigation */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* Introduction / mission */}
      <AboutSection />

      {/* Benefits */}
      <BenefitsSection />

      {/* Services */}
      <ServicesSection />

      {/* Process */}
      <ProcessSection />

      {/* Pricing */}
      <PricingSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Team */}
      <TeamSection />

      {/* Contact */}
      <ContactSection />

      {/* Final CTA */}
      <FinalCtaSection />

      {/* Footer */}
      <FooterSection links={links} />
    </main>
  );
}
