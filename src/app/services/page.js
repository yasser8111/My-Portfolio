"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createSlug } from "@/lib/utils";
import MaterialIcon from "@/components/ui/MaterialIcon";
import NavBack from "@/components/layout/NavBack";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import PageBanner from "@/components/ui/PageBanner";
import { TextBlock } from "@/components/ui/TextBlockEffect";
import { useLanguage } from "@/context/LanguageContext";
import { SERVICE_PALETTES, SERVICE_ICONS } from "@/lib/constants";

const ServicesPage = () => {
  const router = useRouter();
  const { dir, t } = useLanguage();

  const sections = t("sections") || {};
  const services = t("services") || [];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScrollToHash = () => {
        const hash = window.location.hash;
        if (hash) {
          const id = decodeURIComponent(hash.replace("#", ""));
          const element = document.getElementById(id);
          if (element) {
            setTimeout(() => {
              element.scrollIntoView({ behavior: "smooth" });
            }, 100);
          }
        }
      };

      // Scroll on initial mount
      handleScrollToHash();

      // Listen for hash changes
      window.addEventListener("hashchange", handleScrollToHash);
      return () => window.removeEventListener("hashchange", handleScrollToHash);
    }
  }, []);

  return (
    <div
      dir={dir}
      className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white"
    >
      <div className="max-w-[1400px] mx-auto w-full min-h-screen flex flex-col">
        <NavBack
          onBack={() => router.back()}
          backText={t("buttons.backToHome")}
        />

        <main className="flex-1">
          {/* ── Page Banner ────────────────────────────────────────────────── */}
          <PageBanner
            title={sections.services}
            subtitle={sections.servicesSubtitle}
            // backgroundImage="/section-banner.svg"
          />

          {/* ── One section per service ───────────────────────────────────── */}
          {services.map((service, i) => {
            const p = SERVICE_PALETTES[i % 3];
            const iconName = SERVICE_ICONS[i % SERVICE_ICONS.length];
            const features = service.features || [];
            const isEven = i % 2 === 0;

            return (
              <section
                key={i}
                id={createSlug(service.title)}
                style={{ backgroundColor: p.bg }}
                className="scroll-mt-20"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 min-h-[420px]`}
                >
                  {/* ── Left / Right: Content ────────────────────────────── */}
                  <div
                    className={`flex flex-col justify-between p-10 md:p-16 ${
                      isEven ? "order-1" : "order-1 lg:order-2"
                    }`}
                    style={{ borderColor: p.border }}
                  >
                    {/* Icon + title */}
                    <div>
                      <div
                        className="w-14 h-14 flex items-center justify-center mb-10 rounded-none"
                        style={{ backgroundColor: p.bgLight, color: p.base }}
                      >
                        <MaterialIcon icon={iconName} size={26} />
                      </div>

                      <h2
                        className="text-[clamp(1.5rem,4vw,2.25rem)] font-black tracking-tight mb-6"
                        style={{ color: p.title }}
                      >
                        <TextBlock blockColor={p.base}>
                          {service.title}
                        </TextBlock>
                      </h2>

                      <p
                        className="text-base md:text-lg font-medium leading-relaxed max-w-md"
                        style={{ color: p.desc }}
                      >
                        <TextBlock blockColor={p.base} className="block">
                          {service.desc}
                        </TextBlock>
                      </p>
                    </div>
                  </div>

                  {/* ── Right / Left: feature list ────────────────────────── */}
                  <div
                    className={`flex flex-col justify-center p-6 md:p-16 ${
                      isEven ? "order-2" : "order-2 lg:order-1"
                    }`}
                    style={{ backgroundColor: p.bgLight }}
                  >
                    <h3
                      className="text-xs font-bold uppercase tracking-widest mb-8"
                      style={{ color: p.desc }}
                    >
                      {sections.whatYouGet}
                    </h3>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                      {features.map((feat, j) => (
                        <li key={j} className="flex items-start gap-4">
                          {/* Accent dot */}
                          <span
                            className="mt-1.5 w-2 h-2 rounded-none shrink-0"
                            style={{ backgroundColor: p.base }}
                          />
                          <span
                            className="text-base sm:text-lg font-semibold"
                            style={{ color: p.title }}
                          >
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>
              </section>
            );
          })}

          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default ServicesPage;
