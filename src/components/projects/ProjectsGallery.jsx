"use client";

import { useLanguage } from "@/context/LanguageContext";
import ProjectCard from "@/components/projects/ProjectCard";

const ProjectsGallery = ({ projects, onSelectProject }) => {
  const { dir } = useLanguage();
  return (
    <div className="w-full bg-white py-12 px-4 md:px-8" dir={dir}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => onSelectProject && onSelectProject(project)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsGallery;
