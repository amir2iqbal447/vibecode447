import { SectionHead } from './ui'

const QUESTIONS = [
  {
    tag: 'Cognition',
    q: 'What must a machine understand before it can act?',
    a: 'The point of a world model is to instate reality in full. It is to compress enough abstraction to act, and act when the next step is well in the world.',
  },
  {
    tag: 'Agency',
    q: 'When does software become a delegated actor?',
    a: 'An agent is not a chatbot with a goal prompt. It is a goal-seeking loop: observe, memory, take, policy, action, observation, and review. The leap is when the loop is allowed to close.',
  },
  {
    tag: 'Embodiment',
    q: 'What changes when intelligence reaches machines?',
    a: 'Factories, drones, appliances, robots, vehicles, and sensors mean AI laws abstract latency, power, reliability, permissions, and physical failure become first-order design constraints.',
  },
  {
    tag: 'Defense',
    q: 'What happens when decision cycles accelerate?',
    a: 'Hyperwar is a warning about institutions as much as weapons. It teaches the response: the time available to decide, and the accountability that has to be redesigned too.',
  },
  {
    tag: 'Software',
    q: 'Why does code still matter?',
    a: 'Models are powerful, but code is the common solvent: what language is to poetry. When a system must couple, software integrates, plan and reason, algorithmic thinking is not replaced. It becomes ever more important for humans.',
  },
  {
    tag: 'Institutions',
    q: 'Who owns the outcome?',
    a: 'A core generative system, automate work, and carry out delegated tasks. It cannot absorb responsibility, but unless someone is the place where consequences are accepted.',
  },
]

export default function Questions() {
  return (
    <section className="bg-cream-200 py-24 md:py-28">
      <div className="container-site">
        <SectionHead
          eyebrow="About the work"
          title="Six questions underneath the work"
          copy="The same questions recur across essays, talks, patents, books, and systems. They are not new questions, but they are one exercise of judgment."
        />

        <div className="mt-14 grid grid-cols-1 gap-px border border-ink/10 bg-ink/10 md:grid-cols-2">
          {QUESTIONS.map((item) => (
            <article
              key={item.q}
              className="group bg-cream-50 p-7 transition hover:bg-white"
            >
              <span className="font-mono text-[10px] uppercase tracking-label text-ink/35">
                {item.tag}
              </span>
              <h3 className="mt-4 font-serif text-xl leading-snug tracking-tight text-ink">
                {item.q}
              </h3>
              <p className="mt-3 text-[12.5px] leading-relaxed text-ink/50">
                {item.a}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
