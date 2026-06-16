export default function Footer() {
  return (
    <footer className="bg-ink-900 text-cream-50">
      <div className="container-site flex flex-col items-start justify-between gap-4 border-t border-white/10 py-8 md:flex-row md:items-center">
        <p className="max-w-md text-[12px] leading-relaxed text-white/40">
          Inventera brings together Amir Husain's essays, books, talks, patents,
          and systems thinking.
        </p>
        <nav className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-label text-white/45">
          <a href="#writing" className="transition hover:text-cream-50">
            Writing
          </a>
          <span className="text-white/20">/</span>
          <a href="#work" className="transition hover:text-cream-50">
            Systems
          </a>
          <span className="text-white/20">/</span>
          <a href="#talks" className="transition hover:text-cream-50">
            Archive
          </a>
        </nav>
      </div>
    </footer>
  )
}
