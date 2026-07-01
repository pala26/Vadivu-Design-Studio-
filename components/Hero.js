import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-ink/10 px-6 pb-20 pt-52 md:px-10 md:pb-28 md:pt-56"
    >
      {/* Signature element: oversized outlined wordmark bleeding behind the content */}
      <p
        aria-hidden="true"
        className="font-display select-none pointer-events-none absolute top-6 left-1/2 w-[160%] scale-x-105 -translate-x-1/2 text-center text-[18vw] font-semibold leading-none text-outline opacity-70 md:top-4 md:text-[14vw]"
      >
        DIVU VADI
      </p>

      <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            We give growing
            <br />
            brands a shape
            <br />
            <span className="italic text-clay">worth noticing.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
            Vadivu Design Studio partners with founders and product teams to design
            identities, websites, and digital products that feel considered
            from the first click.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-ink px-6 py-3 font-mono text-sm uppercase tracking-wide text-canvas transition-colors hover:bg-clay focus-ring"
            >
              Get started
            </a>
            <a
              href="#portfolio"
              className="rounded-full border border-ink/30 px-6 py-3 font-mono text-sm uppercase tracking-wide text-ink transition-colors hover:border-ink focus-ring"
            >
              View work
            </a>
          </div>
        </div>

        <div className="relative md:col-span-5">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-xs -rotate-2 overflow-hidden rounded-2xl border border-ink/10 shadow-[10px_10px_0_0_rgba(24,22,15,0.08)]">
            <Image
              src="/logo.png"
              alt="Abstract gradient artwork representing Vadivu Design Studio's visual style"
              fill
              priority
              sizes="(min-width: 768px) 24rem, 80vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rotate-3 rounded-xl border border-ink/10 bg-canvas px-3 py-2 shadow-[6px_6px_0_0_rgba(24,22,15,0.08)] sm:block">
            <p className="font-display text-xl font-semibold text-ink">40+</p>
            <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">
              Brands shaped since 2021
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
