export default function Footer() {
  return (
    <footer className="bg-ink px-6 py-6 text-canvas/60 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-xs uppercase tracking-wide sm:flex-row">
        <p>© {new Date().getFullYear()} Forma Studio</p>
        <p>Design &amp; build, Chennai</p>
      </div>
    </footer>
  );
}
