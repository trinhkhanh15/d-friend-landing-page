"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { LandingCopy } from "@/content/landing";
import Hero from "@/components/Hero";
import TopBar from "@/components/TopBar";
import Philosophy from "@/components/Philosophy";
import Experience from "@/components/Experience";
import Differentiation from "@/components/Differentiation";
import CoreEngine from "@/components/CoreEngine";
import StudyBuddy from "@/components/StudyBuddy";
import Progress from "@/components/Progress";
import Footer from "@/components/Footer";

const SECTION_TOUR_STOPS = [
  { id: "landing-philosophy", block: "start" as const },
  { id: "landing-study-buddy", block: "start" as const },
  { id: "landing-experience", block: "center" as const },
  { id: "landing-core-engine", block: "start" as const },
  { id: "landing-differentiation", block: "start" as const },
  { id: "landing-progress", block: "start" as const },
  { id: "landing-footer", block: "start" as const },
] as const;

export default function LandingPage({ copy }: { copy: LandingCopy }) {
  const isTourRunningRef = useRef(false);
  const activeRunIdRef = useRef(0);
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  useEffect(() => {
    return () => {
      activeRunIdRef.current += 1;
      isTourRunningRef.current = false;
    };
  }, []);

  const handleDemoTour = useCallback(async () => {
    if (isTourRunningRef.current) return;

    isTourRunningRef.current = true;
    const runId = activeRunIdRef.current + 1;
    activeRunIdRef.current = runId;

    for (const stop of SECTION_TOUR_STOPS) {
      const section = document.getElementById(stop.id);
      if (!section || activeRunIdRef.current !== runId) {
        break;
      }

      section.scrollIntoView({ behavior: "smooth", block: stop.block });
      await new Promise((resolve) => window.setTimeout(resolve, 6000));
    }

    if (activeRunIdRef.current === runId) {
      isTourRunningRef.current = false;
    }
  }, []);

  const handleSectionNavigate = useCallback((href: string) => {
    const sectionId = href.startsWith("#") ? href.slice(1) : href;
    const section = document.getElementById(sectionId);

    if (!section) {
      window.location.hash = href;
      return;
    }

    section.scrollIntoView({ behavior: "smooth", block: "center" });
    window.history.replaceState(null, "", href);
  }, []);

  return (
    <main className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-80" />
      <div className="pointer-events-none absolute left-1/2 top-[12rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-brand/15 blur-[140px]" />
      <div className="pointer-events-none absolute left-[18%] top-[42rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-[12%] top-[78rem] h-[30rem] w-[30rem] rounded-full bg-brand/10 blur-[140px]" />
      <div className="pointer-events-none absolute left-[14%] top-[112rem] h-[34rem] w-[34rem] rounded-full bg-accent/12 blur-[150px]" />
      <div className="pointer-events-none absolute right-[10%] top-[142rem] h-[38rem] w-[38rem] rounded-full bg-brand/15 blur-[160px]" />
      <div className="pointer-events-none absolute left-1/2 top-[170rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[160px]" />
      <div className="pointer-events-none absolute left-[10%] top-[215rem] h-[30rem] w-[30rem] rounded-full bg-brand/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-[12%] top-[250rem] h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-[140px]" />
      <div className="pointer-events-none absolute left-[12%] top-[280rem] h-[30rem] w-[30rem] rounded-full bg-brand/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-[10%] top-[310rem] h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-[140px]" />
      <div className="relative z-10">
        <TopBar
          content={copy.navigation}
          actions={copy.hero.actions}
          onNavigate={handleSectionNavigate}
          visible={isIntroComplete}
        />
        <Hero
          content={copy.hero}
          onDemoClick={handleDemoTour}
          onIntroComplete={() => setIsIntroComplete(true)}
        />
        <Philosophy content={copy.philosophy} sectionId="landing-philosophy" />
        <StudyBuddy content={copy.studyBuddy} sectionId="landing-study-buddy" />
        <Experience content={copy.experience} sectionId="landing-experience" />
        <CoreEngine content={copy.coreEngine} sectionId="landing-core-engine" />
        <Differentiation
          content={copy.differentiation}
          sectionId="landing-differentiation"
        />
        <Progress content={copy.progress} sectionId="landing-progress" />
        <Footer content={copy.footer} sectionId="landing-footer" />
      </div>
    </main>
  );
}
