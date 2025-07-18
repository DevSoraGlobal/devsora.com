
"use client";

import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import CoursesSection from '@/components/CoursesSection';
import ProjectsSection from '@/components/ProjectsSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutUsSection from '@/components/AboutUsSection';
import InsightsSection from '@/components/InsightsSection';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import LoadingScreen2 from '@/components/LoadingScreen2';

export default function Home() {
  const [loadingStep, setLoadingStep] = useState(1);

  const handleFirstScreenExited = () => {
    setLoadingStep(2);
  };
  
  const handleSecondScreenExited = () => {
    setLoadingStep(3);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {loadingStep === 1 && <LoadingScreen onExited={handleFirstScreenExited} />}
      {loadingStep === 2 && <LoadingScreen2 onExited={handleSecondScreenExited} />}
      
      {loadingStep === 3 && (
        <>
          <NavBar />
          <main className="flex-grow pt-0">
            <HeroSection />
            <IntroSection />
            <CoursesSection />
            <ProjectsSection />
            <FeaturesSection />
            <AboutUsSection />
            <InsightsSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
