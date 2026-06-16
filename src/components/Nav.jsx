const LINKS = [
  { label: 'Writing', href: '#writing' },
  { label: 'Book', href: '#timeline' },
  { label: 'Systems', href: '#work' },
  { label: 'Archive', href: '#talks' },
]

export default function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="container-site flex items-center justify-between py-6">
        <div className="flex items-center gap-4">
          <a href="#" className="font-serif text-lg tracking-tight text-cream-50">
            inventera
          </a>
          <span className="hidden font-mono text-[10px] uppercase tracking-label text-white/35 sm:inline">
            The mind of Amir Husain
          </span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-mono text-[12px] uppercase tracking-label text-white/55 transition hover:text-cream-50"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#writing"
          className="border border-white/20 px-4 py-2 font-mono text-[11px] uppercase tracking-label text-cream-50 transition hover:border-white/50"
        >
          Latest essays
        </a>
      </div>
    </header>
  )
}
