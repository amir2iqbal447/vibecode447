import { SectionHead } from './ui'

const ROWS = [
  {
    tag: 'Books',
    title: 'From The Sentient Machine to The Cybernetic Society',
    desc: 'The books begin with a simple provocation: intelligence is not only a human possession. It is a frame of creation. It is an arena that must produce all kinds; it is inevitable in all its manifestations. Even if they are recursive. That case becomes more urgent as machines act, embodied, and entangled with society.',
  },
  {
    tag: 'Companies',
    title: 'SparkCognition, SkyGrid, WorldQuant Foundry, Global Venture Bridge (GVB), SpecFive, and Argon Mechatronics',
    desc: 'A list of bridges. Companies are the mechanisms that depart from democratized and lowest-level problems in operating environments: industrial AI, autonomy, connected aviation, defense, decentralized communications, data infrastructure, embodied intelligence, and physical robotics.',
  },
  {
    tag: 'Patents',
    title: 'Distributed systems, sensorlofts, UAV infrastructure, and cognitive fingerprints',
    desc: 'The patents reinforce the same thesis. The interestingly work starts where software meets hardware: identity sensing, coordination, and real-world outcomes.',
  },
  {
    tag: 'Now',
    title: 'World models, delegated intelligence, and the edge',
    desc: 'The current work turns toward operating systems for intelligence: small models that act, world models where they are necessary, and honest accountability for what results.',
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="bg-cream-100 py-24 md:py-28">
      <div className="container-site">
        <SectionHead
          eyebrow="Timeline"
          title="Books, companies, patents, and a record of evolving thought"
          copy="The sequence below is a record: recurring problems — machine agency, physical deployment, distributed sensing, autonomy, and accountability."
        />

        <div className="mt-14 border-t border-ink/15">
          {ROWS.map((r) => (
            <div
              key={r.tag}
              className="group grid grid-cols-1 gap-4 border-b border-ink/15 py-8 md:grid-cols-12 md:gap-8"
            >
              <span className="font-mono text-[10px] uppercase tracking-label text-ink/35 md:col-span-2 md:pt-2">
                {r.tag}
              </span>
              <div className="md:col-span-10">
                <h3 className="font-serif text-2xl leading-snug tracking-tight text-ink transition group-hover:text-ink/70">
                  {r.title}
                </h3>
                <p className="mt-3 max-w-3xl text-[13px] leading-relaxed text-ink/50">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
