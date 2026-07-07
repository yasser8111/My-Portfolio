"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createSlug } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import { TextBlock } from "@/components/ui/TextBlockEffect";
import Title from "@/components/ui/Title";
import MaterialIcon from "@/components/ui/MaterialIcon";
import Preloader from "@/components/layout/Preloader";
import { useLanguage } from "@/context/LanguageContext";

const CONFIG = {
  isUnderConstruction: false
};

const ArrowIcon = ({ size = 16, className = "" }) => (
  <MaterialIcon
    icon="arrow_back"
    size={size}
    className={`rtl:rotate-180 ${className}`}
  />
);

const HeroSection = ({ scrollToSection }) => {
  const { t } = useLanguage();
  const heroTitle = t("hero.title") || "";
  const heroSubtitle = t("hero.subtitle") || "";
  const viewProjectsBtn = t("buttons.viewProjects") || "";
  const contactMeBtn = t("buttons.contactMe") || "";

  return (
    <section className="relative overflow-hidden min-h-dvh bg-white flex items-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-[6fr_4fr] items-stretch min-h-dvh relative z-10">
        <div className="relative z-10 w-full flex items-center px-4 md:px-12">
          <div className="flex flex-col items-center text-center md:items-start md:text-start w-full max-w-4xl">
            <h2 className="text-[clamp(2rem,6vw,4rem)] font-black tracking-tighter leading-[1.2] mb-8 text-slate-900 text-balance max-w-3xl mx-auto md:mx-0">
              {heroTitle.split("\n").map((line, i) => (
                <span key={i} className="block w-full">
                  <TextBlock blockColor="#2563eb" className="block">
                    {line.split(/(grow|تنمو)/g).map((part, j) =>
                      part === "grow" || part === "تنمو" ? (
                        <span key={j} className="text-blue-600">
                          {part}
                        </span>
                      ) : (
                        part
                      )
                    )}
                  </TextBlock>
                </span>
              ))}
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center md:justify-start">
              <Button
                href="#projects"
                onClick={(e) => scrollToSection(e, "projects")}
                variant="primary"
                size="lg"
                className="px-10 py-4 text-lg"
              >
                {viewProjectsBtn}
              </Button>
              <Button
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                variant="outline"
                size="lg"
                className="px-10 py-4 text-lg"
              >
                {contactMeBtn}
              </Button>
            </div>

            {/* <div className="mt-12 pt-8 flex flex-wrap w-full items-center justify-center md:justify-start gap-x-6 gap-y-4 sm:gap-x-8 text-sm font-semibold text-slate-600">
              <div className="flex items-center gap-2">
                <MaterialIcon icon="check_circle" size={18} className="text-blue-600" />
                <span>{t("hero.stats.completedProjects")}</span>
              </div>
              <div className="flex items-center gap-2">
                <MaterialIcon icon="speed" size={18} className="text-blue-600" />
                <span>{t("hero.stats.focusPerformance")}</span>
              </div>
              <div className="flex items-center gap-2">
                <MaterialIcon icon="design_services" size={18} className="text-blue-600" />
                <span>{t("hero.stats.bestPractice")}</span>
              </div>
            </div> */}
          </div>
        </div>

        <div className="relative overflow-hidden bg-slate-50 hidden md:flex items-center justify-center min-h-[400px] md:min-h-0">
          <img
             src="/me.jpeg"
             alt="Hero"
             className="w-full h-full object-cover"
           />
          <div className="absolute inset-0 bg-blue-600/5 mix-blend-multiply pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const { t } = useLanguage();
  const projects = t("projects") || [];
  const sections = t("sections") || {};
  const buttons = t("buttons") || {};

  // Filter to only Airtiqa for the featured section
  const airtiqa = projects.find((p) => p.title === "Airtiqa");

  return (
    <section id="projects">
      <div className="w-full">
        <Title>{sections.selectedWorks}</Title>

        {airtiqa && (
          <div className="px-4 md:px-12 pb-8">
            <Link
              href={`/projects/${createSlug(airtiqa.title)}`}
              className="group block"
            >
              <div className="relative overflow-hidden bg-slate-50 border border-slate-100 transition-all duration-500 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-900/5">
                <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
                  {/* Content Side */}
                  <div className="flex flex-col justify-center p-8 md:p-12 order-2 md:order-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] text-white bg-blue-600 px-2 py-0.5 uppercase tracking-widest font-bold">
                        Featured
                      </span>
                      <span className="text-xs font-mono font-medium text-slate-400 tracking-wider">
                        {airtiqa.year}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                      {airtiqa.title}
                    </h3>
                    <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed mb-6">
                      {airtiqa.desc}
                    </p>
                    <p className="text-sm font-semibold text-blue-600 tracking-wide">
                      {airtiqa.tech}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-widest group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-200">
                      <span>View Details</span>
                      <MaterialIcon icon="arrow_forward" size={16} />
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="relative overflow-hidden bg-slate-100 order-1 md:order-2">
                    <img
                      src={airtiqa.image}
                      alt={airtiqa.title}
                      className="w-full h-full object-cover aspect-4/3 md:aspect-auto md:absolute md:inset-0 transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        <div className="py-12 px-6 md:px-12 flex justify-center">
          <Link href="/projects">
            <Button
              variant="primary"
              icon={({ className }) => <ArrowIcon size={16} className={className} />}
              iconPosition="start"
              className="uppercase"
            >
              {buttons.viewAll}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const AboutAndSkillsSection = () => {
  const { t } = useLanguage();
  const sections = t("sections") || {};
  const about = t("about") || {};
  const expertise = t("expertise") || [];
  const buttons = t("buttons") || {};

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div id="about" className="md:col-span-5 py-10 ps-4 md:ps-12 pe-4 flex flex-col">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-8">
            <TextBlock blockColor="#2563eb">{sections.about}</TextBlock>
          </h3>
          {about.greeting && (
            <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
              <TextBlock blockColor="#2563eb" className="block">
                {about.greeting}
              </TextBlock>
            </h4>
          )}
          {about.text?.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-base md:text-lg leading-relaxed text-slate-500 mb-5 last:mb-8 text-balance">
              <TextBlock blockColor="#cbd5e1" className="block">
                {paragraph.split(/(\*\*[^*]+\*\*)/g).map((part, j) =>
                  part.startsWith("**") && part.endsWith("**") ? (
                    <strong key={j} className="font-bold text-slate-700">
                      {part.slice(2, -2)}
                    </strong>
                  ) : (
                    part
                  )
                )}
              </TextBlock>
            </p>
          ))}

          <div className="mt-auto flex justify-end pt-10">
            <Link href="/about">
              <Button
                variant="outline"
                icon={({ className }) => <ArrowIcon size={16} className={className} />}
                iconPosition="start"
                className="uppercase"
              >
                {buttons.aboutMe}
              </Button>
            </Link>
          </div>
        </div>

        <div id="skills" className="hidden md:block md:col-span-7 py-16 ps-12 pe-6 md:pe-12">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-8">
            <TextBlock blockColor="#2563eb">{sections.expertise}</TextBlock>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
            {expertise.slice(0, 4).map((item, i) => (
              <div key={i}>
                <h4 className="font-bold text-slate-900 mb-4 pb-2 uppercase tracking-wide text-sm">
                  <TextBlock blockColor="#2563eb">{item.category}</TextBlock>
                </h4>
                <ul className="space-y-3 text-base text-slate-500 font-medium">
                  {item.skills?.slice(0, 3).map((skill, j) => (
                    <li key={j}>
                      <TextBlock blockColor="#cbd5e1">{skill}</TextBlock>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const { t } = useLanguage();
  const router = useRouter();
  const sections = t("sections") || {};
  const services = t("services") || [];
  const buttons = t("buttons") || {};

  const palettes = [
    { base: "#0284c7", bg: "#f0f9ff", title: "#0c4a6e", desc: "#0369a1" },
    { base: "#db2777", bg: "#fdf2f8", title: "#831843", desc: "#be185d" },
    { base: "#059669", bg: "#ecfdf5", title: "#064e3b", desc: "#047857" },
  ];

  return (
    <section id="services" className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-3">
          {services.map((service, i) => {
            const palette = palettes[i % 3];
            return (
              <div
                key={i}
                onClick={() => router.push(`/services#${createSlug(service.title)}`)}
                className="p-6 md:p-12 cursor-pointer group"
                style={{ backgroundColor: palette.bg }}
              >
                <div className="mb-8">
                  <span
                    className="text-5xl font-mono font-bold tracking-tighter opacity-30 transition-all duration-500"
                    style={{ color: palette.base }}
                  >
                    0{i + 1}
                  </span>
                </div>
                <h4 className="text-xl md:text-2xl font-bold mb-4" style={{ color: palette.title }}>
                  <TextBlock blockColor={palette.base}>{service.title}</TextBlock>
                </h4>
                <p className="text-base font-medium leading-relaxed" style={{ color: palette.desc }}>
                  <TextBlock blockColor={palette.base} className="block">
                    {service.desc}
                  </TextBlock>
                </p>
              </div>
            );
          })}
        </div>

        <div className="md:col-span-3 py-6 md:py-16 pe-4 md:pe-12 ps-4 flex flex-row md:flex-col justify-between items-center md:items-end gap-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 md:mb-8">
            <TextBlock blockColor="#2563eb">{sections.services}</TextBlock>
          </h3>
          <div className="hidden md:flex justify-end">
            <Link href="/services">
              <Button
                variant="primary"
                icon={({ className }) => <ArrowIcon size={16} className={className} />}
                iconPosition="start"
                className="uppercase"
              >
                {buttons.moreServices}
              </Button>
            </Link>
          </div>
        </div>

        <div className="md:hidden py-12 px-6 flex justify-end">
          <Link href="/services">
            <Button
              variant="primary"
              icon={({ className }) => <ArrowIcon size={16} className={className} />}
              iconPosition="start"
              className="uppercase"
            >
              {buttons.moreServices}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const { dir } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 150);
    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

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
      <Preloader
        isLoading={isLoading}
        onComplete={handleLoadingComplete}
      />

      <div className="mx-auto w-full min-h-screen flex flex-col">
        <Navbar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          scrollToSection={scrollToSection}
          showBanner={CONFIG.isUnderConstruction}
        />

        <main className="flex-1">

          <HeroSection
            scrollToSection={scrollToSection}
          />

          <ProjectsSection />

          <AboutAndSkillsSection />

          <ServicesSection />

          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}
