"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import MaterialIcon from "@/components/ui/MaterialIcon";
import Button from "@/components/ui/Button";
import { NavBack } from "@/components/layout/Navbar";
import ProjectsGallery from "@/components/projects/ProjectsGallery";
import { createSlug } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

const AllProjectsPage = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const { dir, t } = useLanguage();

  const projects = t("projects") || [];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  useEffect(() => {
    if (isMobile) {
      gsap.fromTo(
        ".mobile-project-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power4.out",
          delay: 0.2,
        },
      );
    }
  }, [isMobile]);

  const handleSelectProject = (project) => {
    const slug = createSlug(project.title);
    router.push(`/projects/${slug}`);
  };

  if (isMobile) {
    return (
      <div
        className="w-full min-h-screen bg-slate-50 flex flex-col"
        dir={dir}
      >
        <NavBack
          onBack={() => router.back()}
          backText={t("buttons.backToHome")}
        />

        <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
          <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-8 animate-bounce">
            <MaterialIcon icon="desktop_windows" size={40} />
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6 leading-tight">
            {t("galleryMobile.title")}
          </h1>

          <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-sm mb-10">
            {t("galleryMobile.description")}
          </p>

          <Button
            onClick={() => router.back()}
            variant="primary"
            className="px-8"
          >
            {t("buttons.backToHome")}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full h-screen bg-white overflow-hidden flex flex-col relative"
      dir={dir}
    >
      <NavBack
        onBack={() => router.back()}
        backText={t("buttons.backToHome")}
      />

      <main className="flex-1 w-full h-full relative overflow-y-auto">
        <ProjectsGallery
          projects={projects}
          onSelectProject={handleSelectProject}
        />
      </main>
    </div>
  );
};

export default AllProjectsPage;
