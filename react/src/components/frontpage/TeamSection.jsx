import { Arrow, Heading } from "./FrontpageUi";
import { team } from "../../data/frontpage";

export default function TeamSection() {
  return (
      <section id="team" className="scroll-mt-20 bg-[#F4F7FC] py-20 sm:py-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <Heading
            eyebrow="Meet the team"
            title={
              <>
                The people behind{" "}
                <span className="text-blue-600">the pixels.</span>
              </>
            }
            description="A team focused on helping businesses turn their ideas into practical, effective digital experiences."
          />

          <div className="grid gap-6 sm:grid-cols-2">
            {team.map((person) => (
              <article
                key={person.name}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <div className="grid sm:grid-cols-[0.8fr_1.2fr]">
                  <div className="overflow-hidden">
                    <img
                      src={person.image}
                      alt={`${person.name} portrait`}
                      loading="lazy"
                      className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-full"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600">
                      {person.role}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                      {person.name}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {person.description}
                    </p>
                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700"
                    >
                      Get in touch <Arrow />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
  );
}
