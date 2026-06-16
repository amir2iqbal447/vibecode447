export function Eyebrow({ children, className = '', dark = false }) {
  return (
    <span
      className={`eyebrow ${dark ? 'text-white/40' : 'text-ink/40'} ${className}`}
    >
      {children}
    </span>
  )
}

// Two-column section header: big serif title on the left, supporting copy on the right.
export function SectionHead({ eyebrow, title, copy, dark = false }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
      <div className="md:col-span-7">
        <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
        <h2
          className={`mt-4 font-serif text-3xl font-normal leading-[1.05] tracking-tight md:text-[2.7rem] ${
            dark ? 'text-cream-50' : 'text-ink'
          }`}
        >
          {title}
        </h2>
      </div>
      {copy && (
        <p
          className={`text-sm leading-relaxed md:col-span-5 ${
            dark ? 'text-white/45' : 'text-ink/50'
          }`}
        >
          {copy}
        </p>
      )}
    </div>
  )
}

export function ArrowLink({ children, href = '#', filled = false, dark = false }) {
  if (filled) {
    return (
      <a
        href={href}
        className="group inline-flex items-center gap-2 bg-cream-50 px-5 py-2.5 font-mono text-[12px] uppercase tracking-label text-ink transition hover:bg-white"
      >
        {children}
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </a>
    )
  }
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 border px-5 py-2.5 font-mono text-[12px] uppercase tracking-label transition ${
        dark
          ? 'border-white/20 text-cream-50 hover:border-white/50'
          : 'border-ink/20 text-ink hover:border-ink/60'
      }`}
    >
      {children}
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </a>
  )
}
