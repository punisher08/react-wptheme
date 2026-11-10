import { Button, Heading } from "./FrontpageUi";

export default function ProcessSection() {
  return (
      <section className="bg-[#0B1024] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <Heading
              eyebrow="A clear, collaborative process"
              title={
                <>
                  Good ideas deserve{" "}
                  <span className="text-cyan-300">great execution.</span>
                </>
              }
              description="We keep the process straightforward, from understanding your requirements to building and improving your digital presence."
              light
            />
            <Button>Start your project</Button>
          </div>

          <div className="space-y-0">
            {[
              {
                n: "01",
                title: "Discover",
                text: "We learn about your business, audience, goals, and the features your website needs.",
              },
              {
                n: "02",
                title: "Design and build",
                text: "We shape the structure, visual direction, content, and responsive experience around your requirements.",
              },
              {
                n: "03",
                title: "Launch",
                text: "We prepare your website for launch, including essential checks and agreed setup.",
              },
              {
                n: "04",
                title: "Support and improve",
                text: "We can help with updates, maintenance, and improvements as your business grows.",
              },
            ].map((step) => (
              <div
                key={step.n}
                className="flex gap-5 border-b border-white/15 py-6 first:pt-0"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-xs font-bold text-cyan-300">
                  {step.n}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
