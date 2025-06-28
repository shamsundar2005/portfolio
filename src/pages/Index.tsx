
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import BlogSection from '@/components/BlogSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificationsSection from '@/components/CertificationsSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';
import ResumeSection from '@/components/ResumeSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <BlogSection />
      <ProjectsSection />
      <CertificationsSection />
      <AchievementsSection />
      <ContactSection />
      <ResumeSection />
      <Footer />
    </div>
  );
};

export default Index;
