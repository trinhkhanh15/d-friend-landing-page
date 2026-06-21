import Reveal from "./Reveal";

export default function StudyBuddy() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <Reveal className="mb-16 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          The study buddy model
        </span>
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
          How your D-Friend actually thinks
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-balance text-lg text-muted">
          We stripped away the &ldquo;omniscient teacher&rdquo; AI. D-Friend
          interacts using a radically different approach.
        </p>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-3">
        <Reveal className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h3 className="text-xl font-bold">It follows, never leads.</h3>
          <p className="mt-3 leading-relaxed text-muted">
            You hold the pen. The AI only reacts to your approach — it never
            hijacks your reasoning with its own.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
        >
          <h3 className="text-xl font-bold">It voices doubt, not diagnosis.</h3>
          <div className="mt-5 space-y-3">
            <div className="rounded-2xl rounded-bl-sm bg-white/[0.04] p-3 text-sm text-muted line-through decoration-brand/60">
              &ldquo;You forgot to carry the 2, which caused an error.&rdquo;
            </div>
            <div className="rounded-2xl rounded-br-sm bg-accent/15 p-3 text-sm text-text">
              &ldquo;Hmm, I tried solving it that way, but I got stuck right
              after the second step… did we miss something?&rdquo;
            </div>
          </div>
        </Reveal>

        <Reveal
          delay={0.2}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
        >
          <h3 className="text-xl font-bold">It lets you fail safely.</h3>
          <p className="mt-3 leading-relaxed text-muted">
            Hit a wall three times? D-Friend initiates a{" "}
            <span className="text-text">Soft Intervention</span> — it steps
            back, points you in the right direction without giving the answer
            away, and lets you choose how to proceed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
