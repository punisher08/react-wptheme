import { Arrow } from "./FrontpageUi";
import { includedFeatures } from "../../data/frontpage";

export default function PricingSection() {
  return (
      <section id="pricing" className="scroll-mt-20 bg-[#F4F7FC] py-20 sm:py-24">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
              Simple website pricing
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Invest in your online presence.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              A website package designed to give your business a professional
              foundation, with support to help you maintain it.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-[780px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-blue-900/5">
            <div className="grid md:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-[#0B1024] p-7 text-white sm:p-9">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">
                  Website package
                </p>
                <h3 className="mt-4 text-2xl font-semibold">
                  Your business website
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  A professional website with essential tools to help your
                  business get found and connect with customers.
                </p>

                <div className="mt-8 border-t border-white/15 pt-6">
                  <p className="text-xs text-slate-300">Website setup</p>
                  <p className="mt-1 text-5xl font-semibold tracking-tight">
                    $1,500
                  </p>
                  <p className="mt-2 text-xs text-slate-400">
                    One-time setup price as listed on the website.
                  </p>
                </div>

                <div className="mt-6 border-t border-white/15 pt-6">
                  <p className="text-xs text-slate-300">Ongoing plan</p>
                  <p className="mt-1 text-3xl font-semibold">$250 / month</p>
                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    Confirm the current package terms and inclusions with
                    Summit Web Solutions.
                  </p>
                </div>

                <a
                  href="#contact"
                  className="mt-8 flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Ask about this package <Arrow />
                </a>
              </div>

              <div className="p-7 sm:p-9">
                <h3 className="text-lg font-semibold text-slate-950">
                  What’s included
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Website essentials to help you get started.
                </p>

                <ul className="mt-6 space-y-4">
                  {includedFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                        <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <path d="m4 10 4 4 8-8" />
                        </svg>
                      </span>
                      <span className="text-sm text-slate-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mt-7 border-t border-slate-100 pt-5 text-xs leading-6 text-slate-500">
                  Final scope, payment terms, hosting details, and ongoing
                  support should be confirmed in your project agreement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
