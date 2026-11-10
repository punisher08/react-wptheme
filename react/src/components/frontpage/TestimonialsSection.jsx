import { Heading } from "./FrontpageUi";
import { reviews } from "../../data/frontpage";

export default function TestimonialsSection() {
  return (
      <section id="reviews" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Heading
            eyebrow="Client feedback"
            title={
              <>
                What our clients{" "}
                <span className="text-blue-600">say about us.</span>
              </>
            }
            description="We value clear communication, attention to detail, and being available to help clients with their websites."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 sm:p-8"
              >
                <div className="text-lg tracking-[0.12em] text-amber-500">
                  ★★★★★
                </div>
                <blockquote className="mt-5 min-h-[135px] text-base leading-7 text-slate-700">
                  “{review.quote.replace(/^“|”$/g, "")}”
                </blockquote>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-700">
                    {review.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      {review.name}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Summit Web Solutions client
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
  );
}
