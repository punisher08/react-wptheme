import { Button } from "./FrontpageUi";

export default function FinalCtaSection() {
  return (
      <section className="relative isolate overflow-hidden bg-blue-700 py-20 sm:py-24">
        <img
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=85"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-800/95 via-blue-700/90 to-indigo-950/90" />

        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
            Your next chapter starts online
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build something great.
            <br />
            <span className="text-cyan-300">Let’s grow together.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
            From your first landing page to a complete digital presence,
            Summit Web Solutions can help turn your ideas into reality.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button>Start a project</Button>
            <a
              href="mailto:summitwebsolution18@gmail.com"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/50 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Send us an email
            </a>
          </div>
        </div>
      </section>
  );
}
