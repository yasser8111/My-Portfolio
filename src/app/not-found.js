"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { dir, t } = useLanguage();
  const notFound = t("notFound") || {};
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      dir={dir}
      className="min-h-screen bg-[#fafbfc] text-slate-900 font-sans selection:bg-blue-600 selection:text-white"
    >
      <div className="max-w-[1400px] mx-auto w-full min-h-screen flex flex-col">
        <Navbar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          scrollToSection={() => {}}
        />

        <main className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-sm py-20">
            {/* Illustration */}
            <div className="mb-12 flex justify-center">
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Face circle */}
                <circle
                  cx="60"
                  cy="60"
                  r="56"
                  stroke="#E2E8F0"
                  strokeWidth="1.5"
                />
                {/* Eyes */}
                <circle cx="44" cy="54" r="5" fill="#94A3B8" />
                <circle cx="76" cy="54" r="5" fill="#94A3B8" />
                {/* Confused mouth */}
                <path
                  d="M44 78 Q60 68 76 78"
                  stroke="#94A3B8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Floating question mark */}
                <text
                  x="60"
                  y="22"
                  textAnchor="middle"
                  fontSize="28"
                  fontWeight="700"
                  fill="#3B82F6"
                  fontFamily="system-ui, sans-serif"
                >
                  ?
                </text>
              </svg>
            </div>

            {/* 404 label */}
            <p className="text-sm font-semibold text-blue-500 mb-4 tracking-[0.2em] uppercase">
              {notFound.title}
            </p>

            {/* Main heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              {notFound.subtitle}
            </h1>

            {/* Message */}
            <p className="text-slate-500 leading-relaxed mb-12">
              {notFound.message}
            </p>

            {/* Back button */}
            <Link href="/">
              <Button
                variant="primary"
                size="lg"
                className="px-8 py-3"
                icon={({ className }) => (
                  <MaterialIcon
                    icon="arrow_back"
                    size={20}
                    className={`${className} rtl:rotate-180`}
                  />
                )}
                iconPosition="start"
              >
                {notFound.button}
              </Button>
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
