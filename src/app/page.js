"use client";

import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";
import ContactSection from "@/components/sections/ContactSection";
import ProjectCard from "@/components/projects/ProjectCard";
import { TextBlock } from "@/components/ui/TextBlockEffect";
import Button from "@/components/ui/Button";
import MaterialIcon from "@/components/ui/MaterialIcon";
import Title from "@/components/ui/Title";
import { useLanguage } from "@/context/LanguageContext";
import { createSlug, splitBoldMarkdown } from "@/lib/utils";
import { SERVICE_PALETTES } from "@/lib/constants";

// Register GSAP ScrollTrigger globally
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ─── Constants ────────────────────────────────────────────
const CONFIG = { isUnderConstruction: false };

// ─── Hero Section ─────────────────────────────────────────
const Hero = ({ scrollToSection }) => {
  const { t } = useLanguage();
  const heroTitle = t("hero.title") || "";

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-dvh bg-white flex items-center"
    >
      {/* Mobile background */}
      <div className="md:hidden absolute inset-0">
        <img src="/me.jpeg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-blue-600/5 mix-blend-multiply" />
        <span className="absolute top-14 left-1/2 -translate-x-1/2 z-20 text-xs font-bold uppercase tracking-[0.3em] text-white/60">
          {t("personal.fullName")}
        </span>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-[6fr_4fr] items-stretch min-h-dvh relative z-10">
        <div className="relative z-10 w-full flex items-end md:items-center px-5 md:px-12 pb-16 md:pb-0">
          <div className="flex flex-col items-center text-center md:items-start md:text-start w-full max-w-4xl">
            <span className="hidden md:block text-xs font-bold uppercase tracking-[0.3em] mb-6 text-slate-400">
              {t("personal.fullName")}
            </span>
            <h2 className="text-[clamp(1.9rem,6vw,4rem)] font-bold md:font-black tracking-tighter leading-[1.2] mb-8 text-white md:text-slate-900 md:text-balance max-w-3xl mx-auto md:mx-0 line-clamp-2 md:line-clamp-none">
              {heroTitle.split("\n").map((line, i) => (
                <span key={i} className="block w-full">
                  <TextBlock blockColor="#2563eb" className="block">
                    {line.split(/(grow|تنمو)/g).map((part, j) =>
                      part === "grow" || part === "تنمو" ? (
                        <span
                          key={j}
                          className="text-blue-400 md:text-blue-600"
                        >
                          {part}
                        </span>
                      ) : (
                        part
                      ),
                    )}
                  </TextBlock>
                </span>
              ))}
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
              <Button
                href="#projects"
                onClick={(e) => scrollToSection(e, "projects")}
                variant="primary"
                size="lg"
                className="px-8 py-4 text-base md:px-10 md:text-lg"
              >
                {t("buttons.viewProjects")}
              </Button>
              <Button
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                variant="outline"
                size="lg"
                className="px-8 py-4 text-base md:px-10 md:text-lg border-white/40 text-white hover:bg-white/10 hover:border-white md:border-slate-300 md:text-slate-900 md:hover:border-slate-900"
              >
                {t("buttons.contactMe")}
              </Button>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden bg-slate-50 hidden md:flex items-center justify-center min-h-0">
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

// ─── About Section (home version) ─────────────────────────
const About = () => {
  const { t } = useLanguage();
  const sections = t("sections") || {};
  const about = t("about") || {};
  const expertise = t("expertise") || [];

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* Left: greeting + bio */}
        <div
          id="about"
          className="md:col-span-5 py-10 ps-4 md:ps-12 pe-4 flex flex-col"
        >
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
            <p
              key={i}
              className="text-base md:text-lg leading-relaxed text-slate-500 mb-5 last:mb-8 text-balance"
            >
              <TextBlock blockColor="#cbd5e1" className="block">
                {splitBoldMarkdown(paragraph).map((part, i) =>
                  part.isBold ? (
                    <strong key={i} className="font-bold text-slate-700">
                      {part.text}
                    </strong>
                  ) : (
                    part.text
                  ),
                )}
              </TextBlock>
            </p>
          ))}

          <div className="mt-auto flex justify-end pt-10">
            <Link href="/about">
              <Button
                variant="outline"
                icon={({ className }) => (
                  <MaterialIcon
                    icon="arrow_back"
                    size={16}
                    className={`rtl:rotate-180 ${className}`}
                  />
                )}
                iconPosition="start"
                className="uppercase"
              >
                {t("buttons.aboutMe")}
              </Button>
            </Link>
          </div>
        </div>

        {/* Right: skills — hidden on mobile */}
        <div
          id="skills"
          className="hidden md:block md:col-span-7 py-16 ps-12 pe-6 md:pe-12"
        >
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

// ─── Projects Section (home: featured only) ───────────────
const FeaturedProjects = () => {
  const { t } = useLanguage();
  const projects = t("projects") || [];
  const featured = projects.filter(
    (p) => p.title === "Airtiqa University Center" || p.title === "ColorLab",
  );

  return (
    <section id="projects">
      <div className="w-full">
        <Title>{t("sections.selectedWorks")}</Title>

        {featured.length > 0 && (
          <div className="px-4 md:px-12 pb-8 grid grid-cols-1 md:grid-cols-2">
            {featured.map((project) => (
              <Link
                key={project.title}
                href={`/projects/${createSlug(project.title)}`}
              >
                <ProjectCard project={project} />
              </Link>
            ))}
          </div>
        )}

        <div className="py-12 px-6 md:px-12 flex justify-center">
          <Link href="/projects">
            <Button
              variant="primary"
              icon={({ className }) => (
                <MaterialIcon
                  icon="arrow_back"
                  size={16}
                  className={`rtl:rotate-180 ${className}`}
                />
              )}
              iconPosition="start"
              className="uppercase"
            >
              {t("buttons.viewAll")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// ─── Services Section (home: 3-card preview) ──────────────
const ServicesPreview = () => {
  const { t } = useLanguage();
  const services = t("services") || [];

  return (
    <section id="services" className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-3">
          {services.map((service, i) => {
            const palette = SERVICE_PALETTES[i % 3];
            return (
              <div
                key={i}
                onClick={() =>
                  (window.location.href = `/services#${createSlug(service.title)}`)
                }
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
                <h4
                  className="text-xl md:text-2xl font-bold mb-4"
                  style={{ color: palette.title }}
                >
                  <TextBlock blockColor={palette.base}>
                    {service.title}
                  </TextBlock>
                </h4>
                <p
                  className="text-base font-medium leading-relaxed"
                  style={{ color: palette.desc }}
                >
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
            <TextBlock blockColor="#2563eb">{t("sections.services")}</TextBlock>
          </h3>
          <div className="hidden md:flex justify-end">
            <Link href="/services">
              <Button
                variant="primary"
                icon={({ className }) => (
                  <MaterialIcon
                    icon="arrow_back"
                    size={16}
                    className={`rtl:rotate-180 ${className}`}
                  />
                )}
                iconPosition="start"
                className="uppercase"
              >
                {t("buttons.moreServices")}
              </Button>
            </Link>
          </div>
        </div>

        <div className="md:hidden py-12 px-6 flex justify-end">
          <Link href="/services">
            <Button
              variant="primary"
              icon={({ className }) => (
                <MaterialIcon
                  icon="arrow_back"
                  size={16}
                  className={`rtl:rotate-180 ${className}`}
                />
              )}
              iconPosition="start"
              className="uppercase"
            >
              {t("buttons.moreServices")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// ─── Home Page ────────────────────────────────────────────
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
          {/* ── Hero ─────────────────────────────────────────── */}
          <Hero scrollToSection={scrollToSection} />

          {/* ── About + Skills ───────────────────────────────── */}
          <About />

          {/* ── Featured Projects ────────────────────────────── */}
          <FeaturedProjects />

          {/* ── Services Preview ─────────────────────────────── */}
          <ServicesPreview />

          {/* ── Contact ──────────────────────────────────────── */}
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}
