import Hero from "./components/Hero";
import HowToHelp from "./components/HowToHelp";
import ProblemSection from "./components/ProblemSection";
import ProjectsSection from "./components/ProjectsSection";
import ProgressBar from "./components/ProgressBar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Hero />
      <HowToHelp />
      <ProblemSection />
      <ProjectsSection />
      <ProgressBar />
      <Footer />
    </main>
  );
}
