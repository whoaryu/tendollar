import Hero from "./components/Hero";
import HowToHelp from "./components/HowToHelp";
import DonorLeaderboard from "./components/DonorLeaderboard";
import ProblemSection from "./components/ProblemSection";
import ProjectsSection from "./components/ProjectsSection";
import ProgressBar from "./components/ProgressBar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen min-w-0 overflow-x-hidden bg-background">
      <Hero />
      <HowToHelp />
      <DonorLeaderboard />
      <ProblemSection />
      <ProjectsSection />
      <ProgressBar />
      <Footer />
    </main>
  );
}
