import Reveal from "./Reveal";

export default function Footer() {
  return (
    <section
      id="demo"
      className="relative overflow-hidden px-6 py-32 text-center"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-[150px]" />
      <Reveal className="relative z-10 mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold sm:text-6xl">
          Ready to change how you learn?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-muted">
          The curriculum is set. The concepts are waiting. Your buddy is online.
        </p>
        <a
          href="#"
          className="mt-10 inline-block rounded-full bg-brand px-10 py-5 text-lg font-semibold text-white shadow-lg shadow-brand/25 transition hover:scale-[1.03] hover:bg-brand/90"
        >
          Enter the D-Friend Demo
        </a>
      </Reveal>

      <div className="relative z-10 mt-24 text-sm text-muted">
        <span className="font-bold text-text">D-Friend</span> — Done &gt;
        Perfect.
      </div>
    </section>
  );
}
