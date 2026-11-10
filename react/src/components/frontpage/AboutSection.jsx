import { Arrow, Button, Heading } from "./FrontpageUi";

export default function AboutSection() {
  return (
      <section id="about" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <Heading
              eyebrow="About Summit Web Solutions"
              title={
                <>
                  Helping brands grow in a{" "}
                  <span className="text-blue-600">digital world.</span>
                </>
              }
              description="Founded by Eric Hartman, Summit Web Solutions grew from a passion for marketing and a mission to help businesses and entrepreneurs achieve success."
            />
            <p className="text-sm leading-7 text-slate-600">
              We bring together thoughtful design, practical development,
              and search-focused strategy to create digital experiences
              that work for your business—not just look good.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="#team">Meet the team</Button>
              <Button href="#contact" secondary>
                Talk to us
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
              alt="Creative team collaborating on a project"
              loading="lazy"
              className="h-[320px] w-full rounded-2xl object-cover sm:h-[430px]"
            />
            <div className="absolute -bottom-5 -left-3 max-w-[260px] rounded-xl border border-slate-100 bg-white p-5 shadow-xl sm:-left-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600">
                Our mission
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-900">
                Help businesses increase visibility, generate leads, and
                achieve measurable growth.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}
