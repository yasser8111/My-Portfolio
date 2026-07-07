"use client";

import { useParams, useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { createSlug } from "@/lib/utils";
import NavBack from "@/components/layout/NavBack";
import ProjectButtons from "@/components/projects/ProjectButtons";

export default function ProjectDetailsPage() {
  const { projectId } = useParams();
  const router = useRouter();
  const { dir, t } = useLanguage();
  const projects = t("projects") || [];

  const project = projects.find((p) => createSlug(p.title) === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          {t("projectNotFound") || "Project Not Found"}
        </h2>
        <button
          onClick={() => router.push("/projects")}
          className="bg-blue-600 text-white px-5 py-2.5 rounded-sm font-bold text-sm tracking-wider uppercase hover:bg-blue-700 transition-colors cursor-pointer"
        >
          {t("buttons.backToHome") || "Back"}
        </button>
      </div>
    );
  }

  return (
    <div
      className="max-w-[1400px] mx-auto w-full px-4 md:px-12 min-h-screen flex flex-col"
      dir={dir}
    >
      <NavBack onBack={() => router.back()} backText={t("buttons.backToHome")} />

      <main className="flex-1">
        <section className="py-8 md:py-16 lg:py-24 edge-to-edge">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="flex flex-col">
              <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tighter text-slate-900 leading-[1.1] mb-6">
                {project.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="text-sm font-mono font-medium px-3 py-1 bg-slate-100 text-slate-600">
                  {project.year}
                </span>
                <span className="text-sm font-semibold text-blue-600 tracking-wide">
                  {project.tech}
                </span>
              </div>
              <div className="text-base md:text-lg text-slate-600 leading-relaxed space-y-6">
                {project.desc?.split("\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <ProjectButtons project={project} buttons={t("buttons")} />
            </div>
            {project.image && (
              <div className="w-full bg-slate-50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-contain block mx-auto"
                />
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="py-8 mt-auto flex flex-col md:flex-row justify-center items-center gap-4 edge-to-edge">
        <p className="text-slate-500 font-medium text-[10px] md:text-sm tracking-wide text-center">
          &copy; {new Date().getFullYear()} {t("footer.text")}
        </p>
      </footer>
    </div>
  );
}
