import { useState } from "react";
import axios from "axios";
import { Arrow, Heading } from "./FrontpageUi";

const defaultFields = [
  { name: "name", label: "Your name", type: "text", required: true, placeholder: "Full name", autoComplete: "name" },
  { name: "email", label: "Email address", type: "email", required: true, placeholder: "you@example.com", autoComplete: "email" },
  {
    name: "service",
    label: "What can we help you with?",
    type: "select",
    required: false,
    options: [
      { label: "Landing page design", value: "Landing page design" },
      { label: "Custom website development", value: "Custom website development" },
      { label: "SEO optimization", value: "SEO optimization" },
      { label: "Website maintenance and support", value: "Website maintenance and support" },
      { label: "Other project", value: "Other project" },
    ],
  },
  { name: "message", label: "Tell us about your project", type: "textarea", required: true, rows: 5, placeholder: "What are you looking to build or improve?" },
];

export default function ContactSection({ fields = defaultFields, endpoint = "/wp-json/prowptheme/v1/contact" }) {
  const [formSent, setFormSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormError("");

    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());

    try {
      await axios.post(endpoint, values, {
        headers: { "Content-Type": "application/json" },
      });
      setFormSent(true);
    } catch (error) {
      setFormError(
        error.response?.data?.message ||
        "We couldn't send your message. Please try again or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  Your message has been sent. We’ll be in touch soon.
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
              <form onSubmit={handleSubmit}>
                <div className="absolute left-[-9999px]" aria-hidden="true">
                  <label htmlFor="contact-website">Leave this field empty</label>
                  <input
                    id="contact-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
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
                  {fields.map((field) => (
                    <div
                      key={field.name}
                      className={field.type === "text" || field.type === "email" ? "" : "sm:col-span-2"}
                    >
                      <label htmlFor={`contact-${field.name}`} className="mb-2 block text-xs font-semibold text-slate-700">
                        {field.label}{field.required ? " *" : ""}
                      </label>
                      {field.type === "select" ? (
                        <select
                          id={`contact-${field.name}`}
                          name={field.name}
                          required={field.required}
                          defaultValue=""
                          className="form-input"
                        >
                          <option value="" disabled>Select an option</option>
                          {field.options.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                        </select>
                      ) : field.type === "textarea" ? (
                        <textarea
                          id={`contact-${field.name}`}
                          name={field.name}
                          required={field.required}
                          rows={field.rows || 5}
                          placeholder={field.placeholder}
                          className="form-input resize-y"
                        />
                      ) : (
                        <input
                          id={`contact-${field.name}`}
                          name={field.name}
                          type={field.type}
                          autoComplete={field.autoComplete}
                          required={field.required}
                          placeholder={field.placeholder}
                          className="form-input"
                        />
                      )}
                    </div>
                  ))}
                </div>

                {formError && (
                  <p role="alert" className="mt-4 text-sm text-red-600">
                    {formError}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Send message"} {!isSubmitting && <Arrow />}
                </button>
                <p className="mt-4 text-center text-[10px] leading-5 text-slate-500">
                  Your details will only be used to respond to your enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
  );
}
