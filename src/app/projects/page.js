"use client";

import React from "react";
import { useRouter } from "next/navigation";
import MaterialIcon from "@/components/ui/MaterialIcon";
import Button from "@/components/ui/Button";
import { NavBack } from "@/components/layout/Navbar";
import ProjectsGallery from "@/components/projects/ProjectsGallery";
import { createSlug } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

const AllProjectsPage = () => {
  const router = useRouter();
  const { dir, t } = useLanguage();

  const projects = t("projects") || [];

  const handleSelectProject = (project) => {
    const slug = createSlug(project.title);
    router.push(`/projects/${slug}`);
  };

  return (
    <div
      className="w-full min-h-screen bg-white flex flex-col"
      dir={dir}
    >
      <NavBack
        onBack={() => router.back()}
        backText={t("buttons.backToHome")}
      />

      <main className="flex-1 w-full">
        <ProjectsGallery
          projects={projects}
          onSelectProject={handleSelectProject}
        />
      </main>
    </div>
  );
};

export default AllProjectsPage;
