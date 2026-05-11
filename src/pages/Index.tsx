import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBanner from "@/components/StatsBanner";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import WorkflowsSection from "@/components/WorkflowsSection";
import ExperienceSection from "@/components/ExperienceSection";
import FooterSection from "@/components/FooterSection";
import BackToTop from "@/components/BackToTop";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <StatsBanner />
    <SkillsSection />
    <ProjectsSection />
    <WorkflowsSection />
    <ExperienceSection />
    <FooterSection />
    <BackToTop />
  </div>
);

export default Index;
