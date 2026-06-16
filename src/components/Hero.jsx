import { Eyebrow, ArrowLink } from './ui'

const RECENT = [
  { title: 'How Peculiar Humans Beat Fast Machines', kind: 'Essay', date: 'May 2025' },
  { title: 'Bits, Atoms, and What Comes Next', kind: 'Essay', date: 'May 2025' },
  { title: 'Humanoid Robotics Will Transform Manufacturing', kind: 'Feature', date: 'May 2025' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-cream-50">
      {/* atmospheric background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2400&auto=format&fit=crop")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/60" />
        <div className="absolute inset-0 bg-grid-dark opacity-60" />
      </div>

      <div className="container-site relative z-10 grid grid-cols-1 gap-12 pb-24 pt-36 md:grid-cols-12 md:gap-10 md:pb-28 md:pt-44">
        {/* Left: headline */}
        <div className="md:col-span-7">
          <Eyebrow dark>Amir Husain</Eyebrow>
          <h1 className="mt-6 font-serif text-5xl font-normal leading-[0.98] tracking-tight md:text-[4.6rem]">
            AI, embodiment,
            <br /> invention,
            <br /> and the physical
            <br /> world.
          </h1>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/55">
            Essays, books, patents, systems, and talks about AI as a practical
            technology: models that reason, software that acts, machines that
            move, and institutions that have to make choices under pressure. The
            recurring philosophy is one of technologies of freedom —
            decentralizing capability so people, communities, companies, and
            nations gain more ownership rather than less.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ArrowLink href="#writing" filled>
              Read essays
            </ArrowLink>
            <ArrowLink href="#work" dark>
              See the systems
            </ArrowLink>
          </div>
        </div>

        {/* Right: about card */}
        <div className="md:col-span-5">
          <div className="border border-white/10 bg-ink-850/60 p-7 backdrop-blur-sm">
            <Eyebrow dark>About</Eyebrow>
            <h2 className="mt-4 font-serif text-2xl tracking-tight text-cream-50">
              Amir Husain
            </h2>
            <p className="mt-3 text-[13px] leading-relaxed text-white/50">
              Inventor working on AI, autonomy, defense, invention, and the
              physical world. The recurring question is: what should we build,
              where should it run, and who is responsible when it acts?
            </p>

            <div className="mt-8 border-t border-white/10 pt-6">
              <Eyebrow dark>Recent thinking</Eyebrow>
              <ul className="mt-4 space-y-4">
                {RECENT.map((r) => (
                  <li
                    key={r.title}
                    className="group flex items-baseline justify-between gap-4 border-b border-white/5 pb-4 last:border-0"
                  >
                    <span className="text-[13px] leading-snug text-white/75 transition group-hover:text-cream-50">
                      {r.title}
                    </span>
                    <span className="shrink-0 font-mono text-[10px] uppercase tracking-label text-white/30">
                      {r.kind} · {r.date}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-white/10 pt-5">
              <Eyebrow dark>Follow / Subscribe</Eyebrow>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
