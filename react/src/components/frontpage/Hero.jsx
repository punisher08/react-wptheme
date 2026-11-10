import { ArrowUpRight, Code2, Layers3, SearchCheck, Sparkles, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";
export default function Hero() {
  const heroTitles = [
    "Your Digital Growth Starts Here.",
    "Make Your First Impression Count.",
    "Professional Websites. Powerful Results.",
  ];
  const heroSubtitles = [
    "Websites built for business growth.",
    "Make your brand stand out.",
    "Modern websites. Better results.",
  ];
  const [heroTitleIndex, setHeroTitleIndex] = useState(heroTitles[0]);
  const [heroSubtitleIndex, setHeroSubtitleIndex] = useState(heroSubtitles[0]);

  const handleTitleChange = () => {
    setTimeout(() => {
      let nextTitleIndex = heroTitles.indexOf(heroTitleIndex) + 1;
      let nextSubTitleIndex = heroSubtitles.indexOf(heroSubtitleIndex) + 1;
      setHeroTitleIndex(heroTitles[nextTitleIndex % heroTitles.length]);
      setHeroSubtitleIndex(heroSubtitles[nextSubTitleIndex % heroSubtitles.length]);
    }, 3000);
  }
  // handleTitleChange();
  return (
    <section
      id="home"
      className="hero-section min-h-[900px] relative isolate overflow-hidden bg-[#070b14] text-white"
      style={{
        backgroundImage:
          "url('https://joinsummitwebsolutions.com/wp-content/uploads/2026/08/banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* Animated blue background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="hero-glow hero-glow-one absolute -right-32 -top-40 h-[550px] w-[550px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="hero-glow hero-glow-two absolute -bottom-40 left-1/4 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/80 via-[#0b1424]/60 to-[#070b14]/90" />
      </div>

      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-16 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:px-12 lg:py-28">
        {/* LEFT: Hero content */}
        <div className="hero-copy relative z-10">
          <div className="hero-reveal hero-delay-1 mb-8 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-400/[0.06] px-4 py-2 backdrop-blur">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
            </span>
            <span className="text-[12px] lg:text-sm font-medium tracking-wide text-blue-100/80">
              Web Design · Development · SEO
            </span>
          </div>

          <h1 className="hero-reveal hero-delay-2 max-w-2xl text-5xl font-semibold leading-[1.06] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[67px]">
         
            Your Digital Growth<br />
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
              Starts Here
            </span>
          </h1>

          <p className="hero-reveal hero-delay-3 mt-7 max-w-xl text-white leading-8 text-slate-400 sm:text-lg">
            We build high-performing websites and SEO strategies that help
            ambitious businesses stand out, attract the right customers,
            and turn more visits into opportunities.
          </p>

          {/* Hero CTA Buttons */}
          <div className="hero-reveal hero-delay-4 mt-10 flex flex-col gap-4 sm:flex-row">

            {/* Primary CTA */}
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/30 active:translate-y-0"
            >
              {/* Hover shine */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <Sparkles
                size={18}
                className="relative transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
              />

              <span className="relative">Let's Build</span>

              <span className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-white/15 transition-all duration-300 group-hover:bg-white/25">
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </a>

            {/* Secondary CTA */}
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-400/[0.08] active:translate-y-0"
            >
              <Layers3
                size={18}
                className="text-blue-300 transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-110"
              />

              <span>Our Services</span>

              <ArrowUpRight
                size={15}
                className="text-zinc-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-300"
              />
            </a>

          </div>

          {/* Trust Indicators */}
          <div className="hero-reveal hero-delay-5 mt-12 border-t border-white/10 pt-7">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Built for business growth
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-400/15">
                <Code2 size={21} strokeWidth={1.8} />
              </div>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10 text-violet-300 transition-all duration-300 group-hover:scale-110 group-hover:bg-violet-400/15">
                <SearchCheck size={21} strokeWidth={1.8} />
              </div>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-400/15">
                <TrendingUp size={21} strokeWidth={1.8} />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Desktop + mobile website mockups */}
        <div className="hero-visual relative mx-auto w-full max-w-[590px] lg:ml-auto">
          <div className="absolute inset-10 rounded-full bg-blue-500/20 blur-[100px]" />

          {/* Desktop browser */}
          <div className="desktop-float relative z-10 overflow-hidden rounded-xl border border-blue-200/15 bg-[#101827] shadow-2xl shadow-blue-950/50 sm:rounded-2xl">
            {/* Browser toolbar */}
            <div className="flex h-12 items-center justify-between border-b border-white/10 bg-[#111a2a] px-3 sm:h-14 sm:px-5">
              <div className="flex gap-1.5 sm:gap-2">
                <span className="h-2 w-2 rounded-full bg-red-400 sm:h-2.5 sm:w-2.5" />
                <span className="h-2 w-2 rounded-full bg-yellow-400 sm:h-2.5 sm:w-2.5" />
                <span className="h-2 w-2 rounded-full bg-green-400 sm:h-2.5 sm:w-2.5" />
              </div>

              <div className="mx-3 flex max-w-[230px] flex-1 items-center justify-center gap-2 rounded-md border border-white/5 bg-black/20 px-2 py-1.5 text-[9px] text-slate-400 sm:mx-8 sm:px-5 sm:text-xs">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-3 w-3 text-green-400"
                >
                  <rect x="5" y="10" width="14" height="11" rx="2" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                </svg>
                summitwebsolutions.com
              </div>

              <span className="text-xs text-slate-500">↗</span>
            </div>

            {/* Website content */}
            <div
              style={{
                backgroundImage:
                  "url('https://joinsummitwebsolutions.com/wp-content/uploads/2026/08/banner.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="relative min-h-[315px] overflow-hidden bg-gradient-to-br from-[#102344] via-[#101b32] to-[#09111f] p-5 sm:min-h-[390px] sm:p-8">
              {/* Decorative circles */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-blue-300/10" />
              <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full border border-cyan-300/10" />
              <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-blue-500/[0.06] to-transparent" />

              {/* Mock website navbar */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="text-[11px] font-bold tracking-wide sm:text-sm">
                  SUMMIT WEB SOLUTIONS<span className="text-blue-400"> </span>
                  <span className="ml-1 font-normal text-slate-400">
                    
                  </span>
                </div>

                <div className="hidden items-center gap-4 text-[9px] text-slate-400 sm:flex">
                  <span>Services</span>
                  <span>About</span>
                  <span>Contact</span>
                  <span className="rounded-md bg-blue-500 px-3 py-2 text-white">
                    Get Started
                  </span>
                </div>

                <span className="text-lg text-white sm:hidden">☰</span>
              </div>

              {/* Mock website hero */}
              <div className="relative z-10 mt-12 max-w-[340px] sm:mt-16">
                <div className="text-[9px] font-semibold uppercase tracking-[0.22em] text-cyan-300 sm:text-[10px]">
                  Digital experiences that deliver
                </div>

                <h2 className="mt-3 text-3xl font-semibold leading-[1.1] tracking-tight sm:mt-4 sm:text-4xl">
                  Build your
                  <br />
                  <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                    digital future.
                  </span>
                </h2>

                <p className="mt-3 max-w-[230px] text-[10px] leading-5 text-slate-400 sm:mt-4 sm:text-xs sm:leading-6">
                  Modern websites. Smarter strategy. Real opportunities for
                  business growth.
                </p>

                <div className="mt-5 inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-[10px] font-semibold text-white shadow-lg shadow-blue-600/20 sm:mt-6 sm:px-5">
                  Start Your Project <span>→</span>
                </div>
              </div>

              {/* Abstract artwork */}
              <div className="absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="absolute bottom-7 right-5 hidden w-32 rotate-3 rounded-xl border border-white/10 bg-white/[0.06] p-3 shadow-xl backdrop-blur-md sm:block">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-slate-300">Performance</span>
                  <span className="text-[9px] text-green-300">Good</span>
                </div>
                <div className="mt-3 flex h-12 items-end gap-1">
                  {[35, 55, 42, 72, 60, 88, 75, 100].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-600 to-cyan-300"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="mt-2 h-1.5 w-full rounded bg-white/10" />
                <div className="mt-1.5 h-1.5 w-2/3 rounded bg-white/10" />
              </div>
            </div>

            {/* Browser footer */}
            <div className="flex items-center justify-between border-t border-white/10 bg-[#101827] px-3 py-3 sm:px-5">
              <div className="flex items-center gap-2 text-[9px] text-slate-400 sm:text-xs">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                Responsive design
              </div>
              <span className="text-[9px] font-medium text-blue-300 sm:text-xs">
                Designed for growth ↗
              </span>
            </div>
          </div>

          {/* Mobile phone mockup */}
          <div className="phone-float absolute -bottom-12 right-1 z-20 w-[112px] rounded-[22px] border-[3px] border-slate-500/70 bg-[#080d17] p-1.5 shadow-2xl shadow-black/60 sm:-bottom-10 sm:right-0 sm:w-[220px] sm:rounded-[28px] sm:p-2 lg:-right-5">
            <div
              style={{
                backgroundImage:
                  "url('https://joinsummitwebsolutions.com/wp-content/uploads/2026/08/banner.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="relative overflow-hidden rounded-[16px] bg-[#101b32] sm:rounded-[21px]">
              {/* Phone status bar */}
              <div className="relative flex h-5 items-center justify-center bg-[#0c1424] sm:h-7">
                <div className="absolute left-3 text-[6px] font-semibold text-white sm:text-[8px]">
                  9:41
                </div>
                <div className="h-1.5 w-8 rounded-full bg-black sm:h-2 sm:w-10" />
                <div className="absolute right-2 text-[6px] text-white sm:text-[8px]">
                  ● ▰
                </div>
              </div>

              {/* Phone website navbar */}
              <div className="flex items-center justify-between border-b border-white/10 px-2 py-2 sm:px-3 sm:py-3">
                <span className="text-[7px] font-bold sm:text-[9px]">
                  SUMMIT<span className="text-blue-400">.</span>
                </span>
                <span className="text-[10px] text-slate-300">☰</span>
              </div>

              {/* Phone website hero */}
              <div className="relative min-h-[175px] overflow-hidden px-2.5 py-4 sm:min-h-[230px] sm:px-3.5 sm:py-6">
                <div className="absolute -right-10 top-8 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl" />

                <div className="relative text-[6px] font-semibold uppercase tracking-wider text-cyan-300 sm:text-[7px]">
                  Your digital future
                </div>

                <h3 className="relative mt-2 text-[17px] font-bold leading-[1.12] sm:mt-3 sm:text-[22px]">
                  Websites
                  <br />
                  that work
                  <br />
                  <span className="text-blue-300">for you.</span>
                </h3>

                <p className="relative mt-2 text-[7px] leading-3 text-slate-400 sm:mt-3 sm:text-[8px] sm:leading-4">
                  Beautiful design.
                  <br />
                  Better experiences.
                </p>

                <div className="relative mt-3 inline-flex rounded bg-blue-600 px-2 py-1.5 text-[6px] font-semibold sm:mt-4 sm:px-2.5 sm:text-[7px]">
                  Let's Talk →
                </div>

                <div className="relative mt-4 space-y-1.5 sm:mt-5 sm:space-y-2">
                  <div className="h-1 rounded-full bg-white/10" />
                  <div className="h-1 w-4/5 rounded-full bg-white/10" />
                  <div className="h-1 w-3/5 rounded-full bg-white/10" />
                </div>
              </div>

              {/* Phone bottom bar */}
              <div className="flex justify-center bg-[#0c1424] py-2">
                <div className="h-1 w-8 rounded-full bg-white/40" />
              </div>
            </div>
          </div>

          {/* Floating feature card */}
          <div className="feature-float absolute -left-2 top-1/4 z-20 hidden rounded-xl border border-blue-300/15 bg-[#101827]/95 p-3 shadow-xl backdrop-blur-xl sm:block sm:p-4 lg:-left-10">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/15 text-lg text-cyan-300">
                ↗
              </div>
              <div>
                <p className="text-[10px] text-slate-400 sm:text-xs">
                  Your next move
                </p>
                <p className="mt-1 text-xs font-semibold sm:text-sm">
                  Grow your online presence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
    </section>
  );
}
