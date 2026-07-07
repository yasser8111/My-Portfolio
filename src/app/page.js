"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import Preloader from "@/components/layout/Preloader";
import { useLanguage } from "@/context/LanguageContext";

const CONFIG = {
  isUnderConstruction: false,
};

export default function Home() {
  const { dir } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 150);
    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => setIsLoading(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: id === "projects" ? "start" : "center",
      });
    }
  };

  return (
    <div
      dir={dir}
      className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white relative animate-fadeIn"
    >
      <Preloader isLoading={isLoading} onComplete={handleLoadingComplete} />

      <div className="mx-auto w-full min-h-screen flex flex-col">
        <Navbar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          scrollToSection={scrollToSection}
          showBanner={CONFIG.isUnderConstruction}
        />

        <main className="flex-1">
          <HeroSection scrollToSection={scrollToSection} />
          <ProjectsSection />
          <AboutSection />
          <ServicesSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}
