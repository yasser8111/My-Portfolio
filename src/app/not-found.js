"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";

/** Generate a grid of dots with one "missing" cell. */
function MissingDotGrid({ dir }) {
  const rows = 5;
  const cols = 9;
  const missingIndex = useMemo(() => Math.floor(Math.random() * (rows * cols)), []);

  return (
    <div
      className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
      aria-hidden
    >
      <div
        className="grid w-[270px] sm:w-[360px]"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: "clamp(12px, 2.5vw, 24px)",
        }}
      >
        {Array.from({ length: rows * cols }).map((_, i) => (
          <div
            key={i}
            className={`aspect-square w-[clamp(6px,1.2vw,12px)] rounded-full transition-all duration-700 ${
              i === missingIndex
                ? "opacity-0 scale-0"
                : "bg-slate-200/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function NotFound() {
  const { dir, t } = useLanguage();
  const notFound = t("notFound") || {};
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      dir={dir}
      className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-blue-600 selection:text-white"
    >
      <div className="max-w-[1400px] mx-auto w-full min-h-screen flex flex-col relative">
        <Navbar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          scrollToSection={() => {}}
        />

        {/* ——— Dot-grid signature ——— */}
        <MissingDotGrid dir={dir} />

        <main className="flex-1 flex items-center justify-center px-6 relative z-10">
          <div className="text-center max-w-md">
            {/* Accent dot — animated pulse */}
            <div className="w-2 h-2 bg-blue-600 rounded-full mx-auto mb-10 animate-pulse" />

            {/* Heading — plain and deliberate */}
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-slate-900 mb-5 leading-[0.95]">
              {notFound.title || "Nowhere"}
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-2">
              {notFound.subtitle || "This page isn't part of the plan."}
            </p>

            {/* Body */}
            <p className="text-slate-400 leading-relaxed mb-12 max-w-sm mx-auto">
              {notFound.message ||
                "The link you followed leads somewhere that doesn't exist — at least not yet. The homepage is always a good place to regroup."}
            </p>

            {/* CTA */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 px-7 py-3.5"
            >
              {notFound.button || "Back to base"}
            </Link>

            {/* 404 as quiet detail */}
            <div className="mt-14 text-slate-300 text-xs font-mono tracking-wider select-none">
              404 · site:portfolio
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
