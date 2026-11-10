
export default function Hero() {
    return (
        <section
            id="home"
            className="relative isolate overflow-hidden bg-[#fafafa] text-zinc-950"
        >
            {/* Subtle background grid */}
            <div
                className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
                style={{
                    backgroundImage:
                        "linear-gradient(#18181b 1px, transparent 1px), linear-gradient(90deg, #18181b 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />

            <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[500px] w-[500px] rounded-full bg-violet-200/30 blur-[120px]" />

            <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
                <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">

                    {/* LEFT: EDITORIAL CONTENT */}
                    <div className="relative z-10">
                        {/* Eyebrow */}
                        <div className="mb-8 flex items-center gap-3">
                            <span className="h-px w-8 bg-violet-600" />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                                Summit Web Solutions
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="max-w-2xl text-[clamp(3.25rem,6.5vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.075em]">
                            Good ideas.
                            <br />
                            <span className="text-zinc-400">
                                Better websites.
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-8 max-w-lg text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
                            We design and build thoughtful digital experiences
                            that make businesses easier to find, use, and trust.
                            From custom websites to powerful web applications,
                            we make the complex feel simple.
                        </p>

                        {/* CTAs */}
                        <div className="mt-9 flex flex-wrap items-center gap-3">
                            <a
                                href="#contact"
                                className="group inline-flex items-center gap-5 rounded-full bg-zinc-950 px-6 py-4 text-sm font-medium text-white transition duration-300 hover:bg-violet-700"
                            >
                                Let's talk about your project
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </a>

                            <a
                                href="#work"
                                className="inline-flex items-center gap-2 rounded-full px-5 py-4 text-sm font-medium text-zinc-700 transition hover:text-violet-700"
                            >
                                Explore our work
                                <span aria-hidden="true">↗</span>
                            </a>
                        </div>

                        {/* Services index */}
                        <div className="mt-12 border-t border-zinc-200 pt-5">
                            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                                What we work with
                            </p>

                            <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-zinc-600">
                                <span>WordPress</span>
                                <span className="text-zinc-300">/</span>
                                <span>Shopify</span>
                                <span className="text-zinc-300">/</span>
                                <span>Laravel</span>
                                <span className="text-zinc-300">/</span>
                                <span>React</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: CUSTOM WEBSITE PREVIEW */}
                    <div className="relative mx-auto w-full max-w-[600px] lg:ml-auto">

                        {/* Background accent */}
                        <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-violet-200/50 blur-3xl" />

                        {/* Small project label */}
                        <div className="relative mb-4 flex items-center justify-between">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                                The digital workshop
                            </span>

                            <span className="flex items-center gap-2 text-xs text-zinc-500">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                Design meets development
                            </span>
                        </div>

                        {/* Browser frame */}
                        <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_30px_100px_-35px_rgba(24,24,27,0.22)] transition-transform duration-500 hover:-translate-y-1">

                            {/* Browser toolbar */}
                            <div className="flex items-center gap-2 border-b border-zinc-100 px-4 py-3">
                                <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
                                <span className="h-2.5 w-2.5 rounded-full bg-[#f6bd4f]" />
                                <span className="h-2.5 w-2.5 rounded-full bg-[#52c77a]" />

                                <div className="ml-4 flex-1 rounded-md bg-zinc-50 px-3 py-1.5 text-center text-[10px] text-zinc-400">
                                    your-next-project.com
                                </div>

                                <span className="ml-1 text-xs text-zinc-400">
                                    ↗
                                </span>
                            </div>

                            {/* Website preview */}
                            <div className="p-4 sm:p-6">
                                <div className="overflow-hidden rounded-xl bg-[#f4f1eb]">

                                    {/* Preview navigation */}
                                    <div className="flex items-center justify-between px-5 py-4 sm:px-7">
                                        <div className="flex items-center gap-2">
                                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-950 text-xs font-bold text-white">
                                                S
                                            </div>
                                            <span className="text-xs font-semibold tracking-tight text-zinc-900">
                                                STUDIO / CO.
                                            </span>
                                        </div>

                                        <div className="hidden items-center gap-4 text-[9px] text-zinc-500 sm:flex">
                                            <span>About</span>
                                            <span>Services</span>
                                            <span>Projects</span>
                                        </div>

                                        <div className="rounded-full bg-zinc-950 px-3 py-2 text-[9px] font-medium text-white">
                                            Get in touch ↗
                                        </div>
                                    </div>

                                    {/* Preview hero */}
                                    <div className="grid grid-cols-2 gap-3 px-5 pb-5 pt-5 sm:gap-5 sm:px-7 sm:pb-7 sm:pt-8">
                                        <div className="flex flex-col justify-center">
                                            <p className="mb-4 text-[8px] font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:text-[9px]">
                                                Independent creative studio
                                            </p>

                                            <h2 className="text-3xl font-semibold leading-[0.95] tracking-[-0.07em] text-zinc-950 sm:text-5xl">
                                                Make
                                                <br />
                                                room for
                                                <br />
                                                <span className="text-violet-600">
                                                    better.
                                                </span>
                                            </h2>

                                            <p className="mt-4 max-w-[180px] text-[9px] leading-4 text-zinc-500 sm:text-[11px] sm:leading-5">
                                                Thoughtful design for brands
                                                moving forward.
                                            </p>

                                            <div className="mt-5 flex items-center gap-2 text-[9px] font-semibold text-zinc-900">
                                                Discover the studio
                                                <span className="text-violet-600">
                                                    ↗
                                                </span>
                                            </div>
                                        </div>

                                        {/* Abstract art direction */}
                                        <div className="relative min-h-[220px] overflow-hidden rounded-lg bg-[#d9d0c5] sm:min-h-[300px]">
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#e9e0d4] via-[#bcb0a4] to-[#80776f]" />

                                            <div className="absolute -right-8 top-8 h-36 w-36 rounded-full border-[22px] border-[#f3eee6] sm:-right-10 sm:h-52 sm:w-52 sm:border-[32px]" />

                                            <div className="absolute -bottom-10 -left-7 h-40 w-40 rotate-[-18deg] rounded-[45%] bg-violet-600 shadow-2xl sm:h-52 sm:w-52" />

                                            <div className="absolute left-4 top-5 text-[9px] font-medium uppercase tracking-[0.15em] text-zinc-700">
                                                Fig. 001
                                            </div>

                                            <div className="absolute bottom-4 right-4 rounded-full border border-white/40 bg-white/20 px-3 py-1.5 text-[9px] text-white backdrop-blur-md">
                                                Creative direction
                                            </div>
                                        </div>
                                    </div>

                                    {/* Preview footer */}
                                    <div className="flex items-center justify-between border-t border-zinc-300/50 px-5 py-3 sm:px-7">
                                        <span className="text-[8px] uppercase tracking-[0.15em] text-zinc-500">
                                            Design / Development / Strategy
                                        </span>

                                        <span className="text-[9px] font-medium text-zinc-700">
                                            01 — 04
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom caption */}
                            <div className="flex items-center justify-between border-t border-zinc-100 px-4 py-3 sm:px-6">
                                <div>
                                    <p className="text-xs font-semibold text-zinc-800">
                                        Every detail has a purpose.
                                    </p>
                                    <p className="mt-1 text-[10px] text-zinc-400">
                                        From first sketch to final build.
                                    </p>
                                </div>

                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 text-lg text-white">
                                    ↗
                                </div>
                            </div>
                        </div>

                        {/* Small side annotation */}
                        <div className="mt-5 flex items-center justify-end gap-3">
                            <div className="h-px w-10 bg-violet-300" />
                            <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400">
                                Built around your business
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom statement */}
                <div className="mt-16 flex flex-col gap-4 border-t border-zinc-200 pt-6 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-md text-sm leading-6 text-zinc-500">
                        Good design gets attention. Good development makes it work.
                    </p>

                    <a
                        href="#services"
                        className="group inline-flex w-fit items-center gap-3 text-sm font-medium text-zinc-800 transition hover:text-violet-700"
                    >
                        See what we can build together
                        <span className="transition-transform group-hover:translate-x-1">
                            →
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
