import { Eyebrow } from './ui'

const CARDS = [
  {
    title: 'AI and agency',
    desc: 'Models matter less as chat platforms than as delegated actors. The hard question is where agency belongs, what it may touch, and who stays accountable.',
  },
  {
    title: 'Embodiment',
    desc: 'Robotics, autonomy, sensors, and edge devices give intelligence feet — an arena where mistakes have weight.',
  },
  {
    title: 'Strategy and defense',
    desc: 'Hyperwar was never only about weapons. It was about the speed at which institutions can decide and act.',
  },
  {
    title: 'Books and patents',
    desc: 'The books make the public argument in prose. The patents prove it worked in hardware, networks, and deployment.',
  },
]

export default function Thesis() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-24 text-cream-50 md:py-28">
      <div className="absolute inset-0 bg-grid-dark opacity-50" />
      <div className="container-site relative z-10 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-6">
          <Eyebrow dark>Core thesis</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl font-normal leading-[1.02] tracking-tight md:text-[3rem]">
            From code to consequence.
          </h2>
          <div className="mt-7 space-y-5 text-sm leading-relaxed text-white/55">
            <p>
              It is the system that must be studied. A model is not interesting
              because it produces language. It becomes interesting when it
              reasons, plans, uses tools, remembers enough to matter, interacts
              with other actors, and meets the resistance of the real world.
            </p>
            <p>
              The political lines are just as important: who decides, who
              concentrates control, who draws the circle of people who can build,
              own, and act. That is why the same themes keep recurring — world
              models, agents, code, memory, tools, robotics, sensors, military
              decision cycles — across a working life.
            </p>
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/5 sm:grid-cols-2">
            {CARDS.map((c) => (
              <div
                key={c.title}
                className="group bg-ink-850 p-7 transition hover:bg-ink-800"
              >
                <h3 className="font-serif text-xl tracking-tight text-cream-50">
                  {c.title}
                </h3>
                <p className="mt-3 text-[12.5px] leading-relaxed text-white/45">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
