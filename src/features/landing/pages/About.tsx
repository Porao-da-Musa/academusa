import { Footer } from "@shared/ui/Footer";
import { AboutHeader } from "../components/AboutHeader";
import { TrainerShowcaseCard } from "../components/TrainerShowcaseCard";
import { TechnologySection } from "../components/TechnologySection";
import { CommitmentSection } from "../components/CommitmentSection";

export function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-200 py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-24">
        <AboutHeader />
        <TrainerShowcaseCard />
        <TechnologySection />
        <CommitmentSection />
        <Footer blackText />
      </div>
    </div>
  );
}
