import Reveal from "./Reveal";

const PROBLEMS = [
  {
    tag: "P1",
    name: "The Warm-Up",
    role: "Reinforcement",
    desc: "Prove what you learned in Session 1.",
  },
  {
    tag: "P2",
    name: "The Push",
    role: "Challenge",
    desc: "Harder, heavier, but familiar. You sweat a little.",
  },
  {
    tag: "P3",
    name: "The Break",
    role: "Exploration",
    desc: "A non-standard curveball that intentionally breaks your old patterns and forces you to think differently.",
  },
  {
    tag: "P4",
    name: "The Build",
    role: "Extension",
    desc: "Apply your newly refactored mindset to a final problem — walking away with unshakeable confidence.",
  },
];

export default function Experience() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal className="mb-16 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          The experience
        </span>
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
          Stop memorizing. Start rewiring.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-balance text-lg text-muted">
          Learning isn&apos;t about cramming — it&apos;s about breaking old
          habits and building new mental models. D-Friend tackles every concept
          across a perfectly balanced two-session arc.
        </p>
      </Reveal>

      <div className="mb-12 grid gap-6 md:grid-cols-2">
        <Reveal className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <div className="text-sm font-semibold uppercase tracking-widest text-muted">
            Session 1
          </div>
          <h3 className="mt-2 text-2xl font-bold">The Foundation</h3>
          <p className="mt-3 leading-relaxed text-muted">
            Self-paced discovery. You explore the definitions, formulas, and
            methods until you understand enough to tackle the basics.
          </p>
        </Reveal>
        <Reveal
          delay={0.1}
          className="rounded-3xl border border-brand/30 bg-brand/[0.06] p-8"
        >
          <div className="text-sm font-semibold uppercase tracking-widest text-brand">
            Session 2
          </div>
          <h3 className="mt-2 text-2xl font-bold">The Mastery Matrix</h3>
          <p className="mt-3 leading-relaxed text-muted">
            You and your D-Friend sit down to solve exactly 4 precise problems,
            in order, each designed to rewire your brain.
          </p>
        </Reveal>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PROBLEMS.map((p, i) => (
          <Reveal
            key={p.tag}
            delay={i * 0.08}
            className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-accent/40"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-accent/20 px-2.5 py-1 text-sm font-bold text-accent">
                {p.tag}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                {p.role}
              </span>
            </div>
            <h4 className="mt-4 text-lg font-bold">{p.name}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
