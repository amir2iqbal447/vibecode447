import { SectionHead } from './ui'

const WORK = [
  {
    tag: 'SparkCognition · AI',
    title: 'A $1.4B industrial AI proving ground',
    desc: 'SparkCognition grew into a billion-dollar industrial AI company by taking the most interesting fact: the more interesting it is, the more resistance it meets in the world. Applied AI to factories, plants, aircraft, security, and operational risk.',
    foot: 'Industrial AI',
  },
  {
    tag: 'SkyGrid · Aviation',
    title: 'An operating system for autonomous flight',
    desc: 'An agent is not a chatbot until it can act. SkyGrid put the concept behind SkyGrid: an operating system for the skies — vehicle health, weather, airspace, and shared airspace all had to become software. The company began as a joint venture and was acquired in 2025.',
    foot: 'Autonomy',
  },
  {
    tag: 'Hyperwar',
    title: 'Decision cycles collapse on the battlefield',
    desc: 'Hyperwar names the moment when decision cycles collapse: sensing, analysis, and operational tempo compress until the risk is not only adversaries with faster machines, but our own that act without the leaders who comprehend.',
    foot: 'Defense',
  },
  {
    tag: 'Robotics',
    title: 'A place to test AI against physical systems',
    desc: 'A fifty-acre lab for physical autonomy. Algorithms work against concrete: robotics, UAVs, drones, sensors, autonomous starts could be tested together with partners. The physical world is the place where latency, weather, friction, and edge cases live.',
    foot: 'Edge',
  },
  {
    tag: 'Patents',
    title: 'From distributed computing to edge intelligence',
    desc: 'Work started decades ago with applications of intelligence to distributed compute, virtual storage, live clients, and sensor starts. It then moved into cognitive fingerprints, neural network optimization, UAV systems, and battery analytics.',
    foot: 'Full list',
  },
  {
    tag: 'Foundry and capital',
    title: 'WorldQuant Foundry and Global Venture Bridge (GVB)',
    desc: 'The newer operating platforms all focus on the same practical question: how do systems become intelligent and free? WorldQuant Foundry builds companies at the frontier, while the Global Venture Bridge connects investors and builders across geographies.',
    foot: 'Global venture',
  },
  {
    tag: 'Mesh',
    title: 'SpecFive and resilient mesh networking',
    desc: 'SpecFive belongs to the technologies of freedom thesis: the lesson is that the more communication is decentralized, the harder it is to interdict, contested. Secure mesh networking renews capability instant to individuals, municipal teams, industrial sites.',
    foot: 'Connectivity',
  },
  {
    tag: 'Robotics',
    title: 'Argon Mechatronics and practical robotics',
    desc: 'Argon brings AI into hardware that has to behave: mechatronics, mobility, manufacturing, and industrial robotics that meet real-world stakes. A public conversation about practical, embodied intelligence.',
    foot: 'Hardware',
  },
]

export default function Work() {
  return (
    <section id="work" className="bg-cream-100 py-24 md:py-28">
      <div className="container-site">
        <SectionHead
          eyebrow="Work"
          title="Progress so far…"
          copy="Industrial AI, airspace autonomy, defense systems, mesh networks, and capital. The work is not a demonstration; it is a record of good intentions."
        />

        <div className="mt-14 grid grid-cols-1 gap-px border border-ink/10 bg-ink/10 md:grid-cols-2">
          {WORK.map((w) => (
            <article
              key={w.title}
              className="group bg-cream-50 p-7 transition hover:bg-white"
            >
              <span className="font-mono text-[10px] uppercase tracking-label text-ink/35">
                {w.tag}
              </span>
              <h3 className="mt-4 font-serif text-2xl leading-snug tracking-tight text-ink">
                {w.title}
              </h3>
              <p className="mt-3 text-[12.5px] leading-relaxed text-ink/50">
                {w.desc}
              </p>
              <span className="mt-6 inline-block font-mono text-[10px] uppercase tracking-label text-ink/30">
                {w.foot}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
