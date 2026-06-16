import { SectionHead } from './ui'

const ESSAYS = [
  {
    kind: 'Essay',
    date: 'May 2025',
    title: 'How Peculiar Humans Beat Fast Machines',
    desc: 'Why human judgment still outpaces faster systems when the stakes and the context shift underneath them.',
    foot: 'Technology',
  },
  {
    kind: 'Essay',
    date: 'May 2025',
    title: 'Bits, Atoms, and What Comes Next',
    desc: 'A bridge essay about the real decoctin of friction between computation, infrastructure, and the physical world.',
    foot: 'Embodiment',
  },
  {
    kind: 'Feature',
    date: 'Apr 2025',
    title: 'The Last Human Monopoly in the Age of AI',
    desc: 'An argument that scarce material, not output, generation, is what remains distinctly human in the age of delegated systems.',
    foot: 'Agency',
  },
  {
    kind: 'Essay',
    date: 'Mar 2025',
    title: "Why World Models Like Google's Project Genie Work",
    desc: 'An explanation of why a sense-based world representation is used to physics predictions — can matter as much as large-scale language models.',
    foot: 'World models',
  },
  {
    kind: 'Feature',
    date: 'Feb 2025',
    title: 'Humanoid Robotics Will Transform Manufacturing',
    desc: 'A constructive case for embodied intelligence on the factory floor, and what it asks of the systems around it.',
    foot: 'Robotics',
  },
]

export default function Essays() {
  return (
    <section id="writing" className="bg-cream-100 py-24 md:py-28">
      <div className="container-site">
        <SectionHead
          eyebrow="Latest writing"
          title="Recent essays and public debate"
          copy="Current essays, and recurring themes over years that follow the text. Arguments about models, agency, defense, embodiment, and the question of how to build well when the consequences are physical."
        />

        <div className="mt-14 grid grid-cols-1 gap-px border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-5">
          {ESSAYS.map((e) => (
            <article
              key={e.title}
              className="group flex flex-col bg-cream-50 p-6 transition hover:bg-white"
            >
              <span className="font-mono text-[10px] uppercase tracking-label text-ink/35">
                {e.kind} / {e.date}
              </span>
              <h3 className="mt-5 font-serif text-xl leading-snug tracking-tight text-ink">
                {e.title}
              </h3>
              <p className="mt-3 flex-1 text-[12.5px] leading-relaxed text-ink/50">
                {e.desc}
              </p>
              <span className="mt-6 font-mono text-[10px] uppercase tracking-label text-ink/30">
                {e.foot}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
