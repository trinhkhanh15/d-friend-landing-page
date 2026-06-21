"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LINES = [
  "...stays up late with you.",
  "...doesn't judge when you get it wrong.",
  "...figures out the hard stuff right beside you.",
];

const PREFIX = "Everyone wants to have the friend that";

type Phase = "typing" | "morph" | "logo";

export default function Hero() {
  const [phase, setPhase] = useState<Phase>("typing");
  const [lineIdx, setLineIdx] = useState(0);
  const [typed, setTyped] = useState("");

  // Type out the rotating lines, then advance to the morph.
  useEffect(() => {
    if (phase !== "typing") return;
    const full = LINES[lineIdx];
    if (typed.length < full.length) {
      const t = setTimeout(() => setTyped(full.slice(0, typed.length + 1)), 45);
      return () => clearTimeout(t);
    }
    const hold = setTimeout(() => {
      if (lineIdx < LINES.length - 1) {
        setTyped("");
        setLineIdx((i) => i + 1);
      } else {
        setPhase("morph");
      }
    }, 1100);
    return () => clearTimeout(hold);
  }, [typed, lineIdx, phase]);

  // morph -> logo
  useEffect(() => {
    if (phase !== "morph") return;
    const t = setTimeout(() => setPhase("logo"), 1400);
    return () => clearTimeout(t);
  }, [phase]);

  const reveal = phase === "logo";

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-brand/15 blur-[140px]" />
      <div className="pointer-events-none absolute left-1/4 top-2/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center">
        {/* Typing phase */}
        <AnimatePresence mode="wait">
          {phase === "typing" && (
            <motion.div
              key="typing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex min-h-[10rem] flex-col items-center justify-center"
            >
              <p className="text-lg text-muted sm:text-xl">{PREFIX}</p>
              <p className="mt-3 text-2xl font-medium text-text sm:text-4xl">
                {typed}
                <span className="caret">&nbsp;</span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Morph phase: zoom in on "the friend", transform "the" -> "D" */}
        {(phase === "morph" || phase === "logo") && (
          <motion.div
            key="morph"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="flex items-baseline justify-center text-6xl font-bold tracking-tight sm:text-8xl">
              <motion.span
                layout
                animate={
                  reveal
                    ? { color: "#ff735c", scale: 1 }
                    : { color: "#f8fafc", scale: [1, 1.6, 1.2] }
                }
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="inline-block"
              >
                {reveal ? "D" : "the"}
              </motion.span>
              <motion.span
                layout
                animate={{ opacity: reveal ? 1 : 0.4, x: reveal ? 0 : 8 }}
                transition={{ duration: 0.6 }}
                className="text-text"
              >
                {reveal ? "-Friend" : " friend"}
              </motion.span>
            </div>
          </motion.div>
        )}

        {/* Sub-headline + CTA reveal after logo locks */}
        <AnimatePresence>
          {reveal && (
            <motion.div
              key="sub"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 flex flex-col items-center"
            >
              <p className="max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg">
                Not a teacher. Not a tutor.{" "}
                <span className="text-text">Your ultimate study buddy.</span>{" "}
                A new learning engine designed to completely refactor how your
                mind processes difficult concepts.
              </p>
              <a
                href="#demo"
                className="mt-8 rounded-full bg-brand px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand/25 transition hover:scale-[1.03] hover:bg-brand/90"
              >
                Meet Your D-Friend — Try the Demo
              </a>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="mt-16 text-sm text-muted"
              >
                <span className="inline-block animate-bounce">↓</span> scroll to
                meet your friend
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
