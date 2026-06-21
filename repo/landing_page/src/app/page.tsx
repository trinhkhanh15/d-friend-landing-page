import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Experience from "@/components/Experience";
import StudyBuddy from "@/components/StudyBuddy";
import Progress from "@/components/Progress";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Philosophy />
      <Experience />
      <StudyBuddy />
      <Progress />
      <Footer />
    </main>
  );
}
