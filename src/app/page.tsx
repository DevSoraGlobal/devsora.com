import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import CoursesSection from '@/components/CoursesSection';
import ProjectsSection from '@/components/ProjectsSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutUsSection from '@/components/AboutUsSection';
import InsightsSection from '@/components/InsightsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <HeroSection />
        <IntroSection />
        <CoursesSection />
        <ProjectsSection />
        <FeaturesSection />
        <AboutUsSection />
        <InsightsSection />
      </main>
      <Footer />
    </div>
  );
}
