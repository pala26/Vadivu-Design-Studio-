import Image from "next/image";

const projects = [
  { slug: "riven-rebrand", title: "Riven Rebrand", category: "Branding" },
  {
    slug: "northfield-grocer",
    title: "Northfield Grocer",
    category: "Web Development",
  },
  { slug: "orbital-app", title: "Orbital App", category: "UI/UX Design" },
  {
    slug: "sundown-records",
    title: "Sundown Records",
    category: "Branding",
  },
  { slug: "plinth-studio", title: "Plinth Studio", category: "Web Development" },
  {
    slug: "kindred-market",
    title: "Kindred Market",
    category: "Digital Marketing",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="border-b border-ink/10 px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Selected work
          </h2>
          <p className="max-w-sm text-ink-soft">
            A handful of recent collaborations across branding, product, and
            web.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.slug}
              href="#contact"
              className="group focus-ring block rounded-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-ink/10">
                <Image
                  src={`/portfolio/${project.slug}.svg`}
                  alt={`${project.title} project artwork`}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-ink/0 p-5 transition-colors duration-300 group-hover:bg-ink/30">
                  <span className="translate-y-3 rounded-full bg-canvas px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    View case study
                  </span>
                </div>
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {project.title}
                </h3>
                <span className="font-mono text-xs uppercase tracking-wide text-ink-soft">
                  {project.category}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
