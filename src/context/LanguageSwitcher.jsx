"use client";

import React from "react";
import { useLanguage, SUPPORTED_LANGUAGES } from "@/context/LanguageContext";

export default function LanguageSwitcher({ className = "", light = false }) {
  const { lang, setLang } = useLanguage();

  const nextLang = SUPPORTED_LANGUAGES.find((l) => l.code !== lang) || SUPPORTED_LANGUAGES[0];

  return (
    <button
      onClick={() => setLang(nextLang.code)}
      className={`text-xs font-bold uppercase tracking-widest transition-colors ${
        light
          ? "text-white/80 hover:text-white"
          : "text-slate-600 hover:text-blue-600"
      } ${className}`}
      aria-label={`Switch to ${nextLang.name}`}
    >
      {nextLang.code}
    </button>
  );
}
