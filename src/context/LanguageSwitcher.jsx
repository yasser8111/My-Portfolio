"use client";

import { useLanguage, SUPPORTED_LANGUAGES } from "@/context/LanguageContext";

export default function LanguageSwitcher({ className = "" }) {
  const { lang, setLang } = useLanguage();

  const nextLang = SUPPORTED_LANGUAGES.find((l) => l.code !== lang) || SUPPORTED_LANGUAGES[0];

  return (
    <button
      onClick={() => setLang(nextLang.code)}
      className={`text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-blue-600 transition-colors ${className}`}
      aria-label={`Switch to ${nextLang.name}`}
    >
      {nextLang.code}
    </button>
  );
}
