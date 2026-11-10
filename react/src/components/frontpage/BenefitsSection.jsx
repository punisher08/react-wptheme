import { Heading } from "./FrontpageUi";
import { benefits } from "../../data/frontpage";

export default function BenefitsSection() {
  return (
      <section className="bg-[#F4F7FC] py-20 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Heading
            eyebrow="Why work with us"
            title={
              <>
                Digital solutions with{" "}
                <span className="text-blue-600">purpose.</span>
              </>
            }
            description="Your website should do more than establish a presence. It should help your customers understand your offer and take the next step."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5 sm:p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700">
                  0{index + 1}
                </span>
                <h3 className="mt-6 text-lg font-semibold tracking-tight text-slate-950">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
  );
}
