import Reveal from "./Reveal";

export default function Philosophy() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <Reveal className="mb-16 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          What&apos;s in a name?
        </span>
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
          Two letters. One promise.
        </h2>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        <Reveal className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-brand/40 sm:p-10">
          <div className="text-5xl font-bold text-brand">D</div>
          <h3 className="mt-6 text-2xl font-bold">
            The &ldquo;D&rdquo; stands for Done.
          </h3>
          <p className="mt-2 text-lg font-medium text-brand">Done &gt; Perfect.</p>
          <p className="mt-4 leading-relaxed text-muted">
            Most platforms punish you for failing. We reward you for trying. Our
            core <span className="text-text">P-D-E-O engine</span> (Problem →
            Done → Execute → Optimize) is built on the reality that completion
            matters more than perfection. Even an incorrect answer moves your
            progress bar forward — because a mistake is an active step toward
            mastery.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-accent/40 sm:p-10"
        >
          <div className="text-5xl font-bold text-accent">Friend</div>
          <h3 className="mt-6 text-2xl font-bold">
            The &ldquo;Friend&rdquo; stands for, well, a Friend.
          </h3>
          <p className="mt-2 text-lg font-medium text-accent">A peer, not a professor.</p>
          <p className="mt-4 leading-relaxed text-muted">
            Your D-Friend isn&apos;t programmed to lecture you. It&apos;s an AI
            designed to be your peer. It follows your lead, works alongside you,
            and never talks down to you. When you mess up, it doesn&apos;t
            judge — it simply figures it out with you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
