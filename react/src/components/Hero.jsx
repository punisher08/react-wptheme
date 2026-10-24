
export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-white text-zinc-900">
            {/* Background decoration */}
            <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-violet-100/70 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-40 right-0 h-[450px] w-[450px] rounded-full bg-fuchsia-100/60 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* LEFT CONTENT */}
                    <div className="max-w-2xl">
                        {/* Badge */}
                        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">
                            <span className="h-2 w-2 rounded-full bg-violet-600" />
                            Web Development Agency
                        </div>

                        {/* Heading */}
                        <h1 className="font-['Poppins'] text-5xl font-bold leading-[1.08] tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
                            We build
                            <span className="block text-violet-600">
                                digital experiences.
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-7 max-w-xl font-['Poppins'] text-lg leading-8 text-zinc-600">
                            We design and develop modern, high-performing
                            websites that help businesses stand out, connect
                            with customers, and grow online.
                        </p>

                        {/* Buttons */}
                        <div className="mt-9 flex flex-wrap gap-4">
                            <a
                                href="#contact"
                                className="rounded-xl bg-violet-600 px-7 py-4 font-['Poppins'] text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5 hover:bg-violet-700"
                            >
                                Start a Project
                            </a>

                            <a
                                href="#work"
                                className="rounded-xl border border-zinc-200 bg-white px-7 py-4 font-['Poppins'] text-sm font-semibold text-zinc-800 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-200 hover:bg-violet-50"
                            >
                                View Our Work
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="mt-14 grid max-w-lg grid-cols-3 border-t border-zinc-200 pt-8">
                            <div>
                                <p className="font-['Poppins'] text-2xl font-bold text-zinc-950">
                                    50+
                                </p>
                                <p className="mt-1 font-['Poppins'] text-sm text-zinc-500">
                                    Projects
                                </p>
                            </div>

                            <div className="border-l border-zinc-200 pl-6">
                                <p className="font-['Poppins'] text-2xl font-bold text-zinc-950">
                                    5+
                                </p>
                                <p className="mt-1 font-['Poppins'] text-sm text-zinc-500">
                                    Years Experience
                                </p>
                            </div>

                            <div className="border-l border-zinc-200 pl-6">
                                <p className="font-['Poppins'] text-2xl font-bold text-zinc-950">
                                    100%
                                </p>
                                <p className="mt-1 font-['Poppins'] text-sm text-zinc-500">
                                    Custom Builds
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT VISUAL */}
                    <div className="relative mx-auto w-full max-w-xl">
                        {/* Purple glow */}
                        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-200/60 blur-3xl" />

                        {/* Main image */}
                        <div className="relative z-10 overflow-hidden rounded-3xl border border-zinc-200 bg-white p-3 shadow-2xl shadow-violet-900/10">
                            <div className="overflow-hidden rounded-2xl bg-zinc-100">
                                <img
                                    src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=85"
                                    alt="Web design and development"
                                    className="h-[420px] w-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Floating analytics card */}
                        <div className="absolute -left-8 bottom-12 z-20 w-52 rounded-2xl border border-zinc-200 bg-white p-5 shadow-xl shadow-zinc-900/10">
                            <div className="mb-4 flex items-center justify-between">
                                <div>
                                    <p className="font-['Poppins'] text-xs text-zinc-500">
                                        Website Growth
                                    </p>
                                    <p className="mt-1 font-['Poppins'] text-2xl font-bold text-zinc-900">
                                        +84%
                                    </p>
                                </div>

                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                                    ↗
                                </div>
                            </div>

                            {/* Mini chart */}
                            <div className="flex h-14 items-end gap-1.5">
                                <span className="h-4 w-full rounded-sm bg-violet-200" />
                                <span className="h-7 w-full rounded-sm bg-violet-300" />
                                <span className="h-5 w-full rounded-sm bg-violet-300" />
                                <span className="h-9 w-full rounded-sm bg-violet-400" />
                                <span className="h-11 w-full rounded-sm bg-violet-500" />
                                <span className="h-14 w-full rounded-sm bg-violet-600" />
                            </div>
                        </div>

                        {/* Floating code card */}
                        <div className="absolute -right-5 top-10 z-20 rounded-2xl border border-zinc-200 bg-zinc-950 px-5 py-4 shadow-xl shadow-zinc-900/20">
                            <code className="font-mono text-sm text-violet-300">
                                &lt;React /&gt;
                            </code>

                            <div className="mt-1 font-['Poppins'] text-xs text-zinc-400">
                                Modern & scalable
                            </div>
                        </div>

                        {/* Floating design card */}
                        <div className="absolute -right-8 bottom-20 z-20 flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-xl shadow-zinc-900/10">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white">
                                ✦
                            </div>

                            <div>
                                <p className="font-['Poppins'] text-xs text-zinc-500">
                                    Design
                                </p>
                                <p className="font-['Poppins'] text-sm font-semibold text-zinc-900">
                                    Pixel Perfect
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

