import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import WorkflowsSection from "@/components/WorkflowsSection";
import ExperienceSection from "@/components/ExperienceSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <SkillsSection />
    <TechStackSection />
    <ProjectsSection />
    <WorkflowsSection />
    <ExperienceSection />
    <FooterSection />
  </div>
);

export default Index;
