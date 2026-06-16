import { Eyebrow } from './ui'

const TALKS = [
  {
    tag: 'UT Austin / 2025',
    title: 'Lessons for a Life Well Lived',
    desc: 'A commencement address, but also a careful statement of method: seriousness, gratitude, ambition, and the habit of building things that can outlast a moment.',
    img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1600&auto=format&fit=crop',
  },
  {
    tag: 'Saab',
    title: 'The Power of Human Curiosity',
    desc: 'A public conversation about curiosity, invention, AI, and the human questions that remain constant as technology accelerates.',
    img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Talks() {
  return (
    <section id="talks" className="bg-ink-900 py-24 text-cream-50 md:py-28">
      <div className="container-site">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Eyebrow dark>Talks</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-normal leading-[1.05] tracking-tight md:text-[2.7rem]">
              Selected talks and conversations
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-white/45 md:col-span-5">
            Two public conversations that are central themes: serious work, and a
            curiosity that keeps the questions human and useful.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px border border-white/10 bg-white/5 md:grid-cols-2">
          {TALKS.map((t) => (
            <article key={t.title} className="bg-ink-850">
              <a
                href="#"
                className="group relative block aspect-video overflow-hidden"
              >
                <img
                  src={t.img}
                  alt={t.title}
                  className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600/90 transition group-hover:scale-110">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white" aria-hidden>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
              </a>
              <div className="p-7">
                <span className="font-mono text-[10px] uppercase tracking-label text-white/35">
                  {t.tag}
                </span>
                <h3 className="mt-3 font-serif text-2xl tracking-tight text-cream-50">
                  {t.title}
                </h3>
                <p className="mt-3 text-[12.5px] leading-relaxed text-white/45">
                  {t.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
