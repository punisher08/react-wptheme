import { Arrow, Button, Heading } from "./FrontpageUi";
import { services } from "../../data/frontpage";

export default function ServicesSection() {
  return (
      <section id="services" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <Heading
              eyebrow="What we do"
              title={
                <>
                  Everything you need to{" "}
                  <span className="text-blue-600">grow online.</span>
                </>
              }
              description="From a focused campaign landing page to a complete business website, we build digital experiences around your needs."
            />
            <div className="mb-9">
              <Button href="#contact" secondary>
                Discuss your project
              </Button>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-[230px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[260px]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-2 text-[10px] font-semibold text-blue-700 shadow">
                    {service.tag}
                  </span>
                </div>
                <div className="p-6 sm:p-7">
                  <p className="text-[10px] font-bold tracking-widest text-blue-600">
                    SERVICE {service.number}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900"
                  >
                    Let’s talk about it <Arrow />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
  );
}
