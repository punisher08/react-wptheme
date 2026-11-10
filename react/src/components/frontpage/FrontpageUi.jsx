function Arrow({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Logo({ light = false }) {
  return (
    <a
      href="#home"
      aria-label="Summit Web Solutions home"
      className={`flex shrink-0 items-center gap-2.5 ${
        light ? "text-white" : "text-slate-950"
      }`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
        <svg
          viewBox="0 0 40 40"
          className="h-7 w-7"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 29 16 9l7 12 5-8 7 16H5Z"
            fill="currentColor"
          />
          <path
            d="M11 32h22"
            stroke="#38BDF8"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span>
        <span className="block text-[15px] font-bold leading-5 tracking-tight">
          Summit Web
        </span>
        <span
          className={`block text-[10px] tracking-[0.13em] ${
            light ? "text-slate-300" : "text-slate-500"
          }`}
        >
          SOLUTIONS
        </span>
      </span>
    </a>
  );
}

function Button({ children, href = "#contact", secondary = false }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 ${
        secondary
          ? "border border-slate-300 bg-white text-slate-900 hover:border-blue-500"
          : "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
      }`}
    >
      {children}
      <Arrow />
    </a>
  );
}

function Heading({ eyebrow, title, description, light = false }) {
  return (
    <div className="mb-9 max-w-2xl">
      <p
        className={`mb-3 text-[10px] font-bold uppercase tracking-[0.2em] ${
          light ? "text-cyan-300" : "text-blue-600"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-[46px] ${
          light ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-xl text-sm leading-7 ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export { Arrow, Button, Heading, Logo };
