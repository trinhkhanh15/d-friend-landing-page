"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Progress() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-28">
      <Reveal className="mb-12 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Momentum
        </span>
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
          The progress bar that respects you
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-balance text-lg text-muted">
          Your effort earns momentum. Progress only moves when you take a shot
          and hit submit.
        </p>
      </Reveal>

      <Reveal className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-text">Your progress</span>
          <span className="rounded-md bg-brand/20 px-2 py-0.5 text-xs font-semibold text-brand">
            Wrong answer — but you stepped forward
          </span>
        </div>
        <div className="mt-4 h-4 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "72%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="h-full rounded-full bg-gradient-to-r from-accent to-brand"
          />
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-lg font-bold text-text">Get it right?</div>
            <p className="mt-1 text-muted">A huge leap forward.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-lg font-bold text-text">Get it wrong?</div>
            <p className="mt-1 text-muted">
              You still step forward. You tried, and that counts.
            </p>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          D-Friend knows the difference between trying and guessing. Spamming
          answers pauses your progress — honest mistakes build your foundation.
        </p>
      </Reveal>
    </section>
  );
}
