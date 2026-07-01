const services = [
  {
    title: "Brand Identity",
    tag: "Branding",
    description:
      "Naming, logo systems, and visual language that hold up across packaging, product, and pitch decks.",
    icon: (
      <path
        d="M12 3v18M5 8h14M5 16h14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    ),
  },
  {
    title: "Web Development",
    tag: "Engineering",
    description:
      "Fast, accessible websites and product interfaces built on modern frameworks like Next.js and React.",
    icon: (
      <path
        d="M4 6h16v12H4z M4 10h16 M9 6v12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    title: "UI/UX Design",
    tag: "Product",
    description:
      "Interface design and research that turns complex flows into screens people understand instantly.",
    icon: (
      <path
        d="M12 21c4.97-4 8-7.58 8-11a8 8 0 10-16 0c0 3.42 3.03 7 8 11z M12 13a3 3 0 100-6 3 3 0 000 6z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Digital Marketing",
    tag: "Growth",
    description:
      "Campaign strategy, content systems, and analytics that keep the brand visible after launch day.",
    icon: (
      <path
        d="M4 19l5-6 4 4 7-9 M14 8h6v6"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-b border-ink/10 bg-canvas-dim px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            What we do
          </h2>
          <p className="max-w-sm text-ink-soft">
            Four disciplines, one team. We bring brand and build under the
            same roof so nothing gets lost in translation.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col gap-5 bg-canvas p-7 transition-colors hover:bg-canvas-dim"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors group-hover:border-clay group-hover:text-clay">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    {service.icon}
                  </svg>
                </span>
                <span className="font-mono text-xs uppercase tracking-wide text-ink-soft">
                  {service.tag}
                </span>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
