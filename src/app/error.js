"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Route-level error boundary.
 * Catches rendering errors and shows a recoverable fallback.
 */
export default function Error({ error, reset }) {
  const { dir, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      dir={dir}
      className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white"
    >
      <div className="max-w-[1400px] mx-auto w-full min-h-screen flex flex-col">
        <Navbar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          scrollToSection={() => {}}
        />

        <main className="flex-1 flex items-center justify-center px-6 relative overflow-hidden">
          {/* Large background "Error" indicator */}
          <div
            className="absolute select-none pointer-events-none text-[clamp(8rem,20vw,20rem)] font-black tracking-tighter leading-none"
            style={{
              color: "#fef2f2",
              transform: dir === "rtl" ? "translateX(15%)" : "translateX(-15%)",
              top: "50%",
              left: dir === "rtl" ? "auto" : "0",
              right: dir === "rtl" ? "0" : "auto",
              translate: "0 -50%",
            }}
          >
            !
          </div>

          <div className="relative z-10 text-center max-w-lg">
            {/* Small decorative dot */}
            <div className="w-2 h-2 bg-red-500 rounded-full mx-auto mb-8" />

            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 mb-4">
              {t("error")?.title || "Something went wrong"}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed mb-3">
              {t("error")?.subtitle || "An unexpected error occurred"}
            </p>

            {/* Message */}
            <p className="text-slate-400 leading-relaxed mb-10 max-w-sm mx-auto">
              {error?.message || t("error")?.message || "Please try again or go back to the homepage."}
            </p>

            {/* Buttons */}
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 px-6 py-3.5 cursor-pointer"
              >
                <MaterialIcon icon="refresh" size={16} />
                {t("error")?.button || "Try again"}
              </button>

              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-600 bg-slate-100 hover:bg-slate-200 transition-all duration-200 px-6 py-3.5"
              >
                <MaterialIcon
                  icon="arrow_back"
                  size={16}
                  className="rtl:rotate-180"
                />
                {t("error")?.home || "Go home"}
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
