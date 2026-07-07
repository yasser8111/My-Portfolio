"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { TextBlock } from "@/components/ui/TextBlockEffect";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { dir, t } = useLanguage();
  const notFound = t("notFound") || {};

  return (
    <div
      dir={dir}
      className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white"
    >
      <div className="max-w-[1400px] mx-auto w-full min-h-screen flex flex-col">
        <Navbar
          isMenuOpen={false}
          setIsMenuOpen={() => {}}
          scrollToSection={() => {}}
        />

        <main className="flex-1 flex items-center justify-center relative overflow-hidden px-6">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-50 rounded-full blur-[100px] -z-10 opacity-50" />

          <div className="text-center max-w-2xl relative z-10">
            <div className="mb-6">
              <h1 className="text-[120px] md:text-[200px] font-black leading-none tracking-tighter text-slate-900 flex justify-center">
                <TextBlock blockColor="#2563eb">{notFound.title}</TextBlock>
              </h1>
            </div>

            <div className="mb-10 space-y-4">
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 uppercase tracking-tight">
                <TextBlock blockColor="#cbd5e1">{notFound.subtitle}</TextBlock>
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">
                <TextBlock blockColor="#cbd5e1" className="block">
                  {notFound.message}
                </TextBlock>
              </p>
            </div>

            <div className="flex justify-center">
              <Link href="/">
                <Button
                  variant="primary"
                  size="lg"
                  className="px-12 py-5 text-xl uppercase tracking-wider"
                  icon={({ className }) => (
                    <MaterialIcon icon="home" className={className} size={24} />
                  )}
                  iconPosition="start"
                >
                  {notFound.button}
                </Button>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
