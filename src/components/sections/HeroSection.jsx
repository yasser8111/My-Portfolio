"use client";

import { useLanguage } from "@/context/LanguageContext";
import { TextBlock } from "@/components/ui/TextBlockEffect";
import Button from "@/components/ui/Button";

const HeroSection = ({ scrollToSection }) => {
  const { t } = useLanguage();
  const heroTitle = t("hero.title") || "";
  const viewProjectsBtn = t("buttons.viewProjects") || "";
  const contactMeBtn = t("buttons.contactMe") || "";
  const fullName = t("personal.fullName") || "";

  return (
    <section id="home" className="relative overflow-hidden min-h-dvh bg-white flex items-center">
      {/* Mobile background */}
      <div className="md:hidden absolute inset-0">
        <img src="/me.jpeg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-blue-600/5 mix-blend-multiply" />
        <span className="absolute top-14 left-1/2 -translate-x-1/2 z-20 text-xs font-bold uppercase tracking-[0.3em] text-white/60">
          {fullName}
        </span>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-[6fr_4fr] items-stretch min-h-dvh relative z-10">
        <div className="relative z-10 w-full flex items-end md:items-center px-5 md:px-12 pb-16 md:pb-0">
          <div className="flex flex-col items-center text-center md:items-start md:text-start w-full max-w-4xl">
            <span className="hidden md:block text-xs font-bold uppercase tracking-[0.3em] mb-6 text-slate-400">
              {fullName}
            </span>
            <h2 className="text-[clamp(2rem,6vw,4rem)] font-black tracking-tighter leading-[1.2] mb-8 text-white md:text-slate-900 md:text-balance max-w-3xl mx-auto md:mx-0 line-clamp-2 md:line-clamp-none">
              {heroTitle.split("\n").map((line, i) => (
                <span key={i} className="block w-full">
                  <TextBlock blockColor="#2563eb" className="block">
                    {line.split(/(grow|تنمو)/g).map((part, j) =>
                      part === "grow" || part === "تنمو" ? (
                        <span key={j} className="text-blue-400 md:text-blue-600">
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

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
              <Button
                href="#projects"
                onClick={(e) => scrollToSection(e, "projects")}
                variant="primary"
                size="lg"
                className="px-8 py-4 text-base md:px-10 md:text-lg"
              >
                {viewProjectsBtn}
              </Button>
              <Button
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                variant="outline"
                size="lg"
                className="px-8 py-4 text-base md:px-10 md:text-lg border-white/40 text-white hover:bg-white/10 hover:border-white md:border-slate-300 md:text-slate-900 md:hover:border-slate-900"
              >
                {contactMeBtn}
              </Button>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden bg-slate-50 hidden md:flex items-center justify-center min-h-0">
          <img src="/me.jpeg" alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-blue-600/5 mix-blend-multiply pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
