import { useState } from "react";
import { Arrow, Heading } from "./FrontpageUi";

export default function ContactSection() {
  const [formSent, setFormSent] = useState(false);
  return (
      <section id="contact" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
          <div>
            <Heading
              eyebrow="Let’s work together"
              title={
                <>
                  Have an idea?
                  <br />
                  <span className="text-blue-600">Let’s make it happen.</span>
                </>
              }
              description="Tell us about your business, your goals, or the website you have in mind. We’d love to hear what you’re working on."
            />

            <div className="mt-8 space-y-5">
              <a
                href="mailto:summitwebsolution18@gmail.com"
                className="flex items-start gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-blue-300"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </span>
                <span>
                  <span className="block text-sm font-semibold text-slate-950">
                    Email us
                  </span>
                  <span className="mt-1 block break-all text-sm text-slate-500">
                    summitwebsolution18@gmail.com
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4 rounded-xl border border-slate-200 p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <span>
                  <span className="block text-sm font-semibold text-slate-950">
                    Our location
                  </span>
                  <span className="mt-1 block text-sm text-slate-500">
                    Coraopolis, Pennsylvania
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-8">
            {formSent ? (
              <div className="py-12 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                </span>
                <h3 className="mt-5 text-2xl font-semibold text-slate-950">
                  Thanks for reaching out!
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  This is a front-end demo. Connect the form to WordPress,
                  email, or your CRM to receive real enquiries.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSent(false)}
                  className="mt-6 text-sm font-semibold text-blue-700"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setFormSent(true);
                }}
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600">
                  Message us
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  Let’s talk about your project.
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Fill out the form and tell us a little about what you need.
                </p>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-2 block text-xs font-semibold text-slate-700">
                      Your name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="Full name"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-2 block text-xs font-semibold text-slate-700">
                      Email address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="you@example.com"
                      className="form-input"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="contact-service" className="mb-2 block text-xs font-semibold text-slate-700">
                      What can we help you with?
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      defaultValue=""
                      className="form-input"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option>Landing page design</option>
                      <option>Custom website development</option>
                      <option>SEO optimization</option>
                      <option>Website maintenance and support</option>
                      <option>Other project</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="contact-message" className="mb-2 block text-xs font-semibold text-slate-700">
                      Tell us about your project *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="What are you looking to build or improve?"
                      className="form-input resize-y"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Send message <Arrow />
                </button>
                <p className="mt-4 text-center text-[10px] leading-5 text-slate-500">
                  Your message form must be connected to a backend before
                  launch to deliver enquiries.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
  );
}
