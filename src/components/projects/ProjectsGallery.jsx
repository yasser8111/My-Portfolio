"use client";

import React from "react";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { useLanguage } from "@/context/LanguageContext";

const ProjectsGallery = ({ projects, onSelectProject }) => {
  const { dir, t, isRTL } = useLanguage();
  return (
    <div
      className="w-full bg-white py-12 px-4 md:px-8"
      dir={dir}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => onSelectProject && onSelectProject(project)}
            className="group cursor-pointer bg-white border border-slate-100 overflow-hidden transition-all duration-300 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-900/5 flex flex-col"
          >
            {/* Image Container */}
            <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-100">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 group-hover:scale-102 transition-transform duration-500 ease-out"
                loading="lazy"
              />
            </div>

            {/* Content Container */}
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] text-white bg-blue-600 px-2 py-0.5 uppercase tracking-widest font-bold">
                  {project.tech?.split("/")[0].trim()}
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-wider">
                  {project.year}
                </span>
              </div>

              <h3 className="text-slate-900 text-xl md:text-2xl font-black mb-3 uppercase tracking-tight group-hover:text-blue-600 transition-colors duration-200">
                {project.title}
              </h3>

              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium line-clamp-3 mb-6 flex-1">
                {project.desc}
              </p>

              <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-widest mt-auto group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-200">
                <span>{t("gallery.viewProject")}</span>
                <MaterialIcon icon={isRTL ? "arrow_back" : "arrow_forward"} size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGallery;
