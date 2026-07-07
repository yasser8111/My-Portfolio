"use client";

import Link from "next/link";
import { createSlug } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import MaterialIcon from "@/components/ui/MaterialIcon";
import ProjectCard from "@/components/projects/ProjectCard";
import Title from "@/components/ui/Title";
import Button from "@/components/ui/Button";

const ProjectsSection = () => {
  const { t } = useLanguage();
  const projects = t("projects") || [];
  const sections = t("sections") || {};
  const buttons = t("buttons") || {};

  const featured = projects.filter((p) => p.title === "Airtiqa" || p.title === "ColorLab");

  return (
    <section id="projects">
      <div className="w-full">
        <Title>{sections.selectedWorks}</Title>

        {featured.length > 0 && (
          <div className="px-4 md:px-12 pb-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
              icon={({ className }) => <MaterialIcon icon="arrow_back" size={16} className={`rtl:rotate-180 ${className}`} />}
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

export default ProjectsSection;
