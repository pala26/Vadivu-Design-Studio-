"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-canvas/90 backdrop-blur border-b border-ink/10"
          : "bg-canvas border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          className="font-display text-xl font-semibold tracking-tight text-ink focus-ring rounded-sm"
        >
          Vadivu Design Studio<span className="text-clay">.</span>
        </a>
        <ul className="hidden items-center gap-8 font-mono text-sm uppercase tracking-wide text-ink-soft md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-clay focus-ring rounded-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full border border-ink px-4 py-2 font-mono text-xs uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-canvas focus-ring"
        >
          Start a project
        </a>
      </nav>
    </header>
  );
}
