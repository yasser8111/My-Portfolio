"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import ar from "@/translations/ar.json";
import en from "@/translations/en.json";

const translations = { ar, en };

// Supported languages configuration
export const SUPPORTED_LANGUAGES = [
  { code: "en", name: "English", nativeName: "English", dir: "ltr", flag: "🇺🇸" },
  { code: "ar", name: "Arabic", nativeName: "العربية", dir: "rtl", flag: "🇸🇦" }
];

const DEFAULT_LANG = "en";
const STORAGE_KEY = "portfolio_lang";

const LanguageContext = createContext(null);

// Helper to resolve nested keys using dot notation
const getNestedValue = (obj, path) => {
  if (!obj || !path) return undefined;
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(DEFAULT_LANG);

  // Initialize lang on mount to avoid SSR mismatch
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && translations[saved]) {
        setLangState(saved);
      }
    } catch {}
  }, []);

  const currentConfig = SUPPORTED_LANGUAGES.find((l) => l.code === lang) || { dir: "ltr" };
  const dir = currentConfig.dir;
  const isRTL = dir === "rtl";

  // Persist language preference and update document attributes
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {}
      document.documentElement.lang = lang;
      document.documentElement.dir = dir;
      document.body.dir = dir;
    }
  }, [lang, dir]);

  const setLang = useCallback((newLang) => {
    if (translations[newLang]) {
      setLangState(newLang);
    }
  }, []);

  // Translation function with fallback chain
  const t = useCallback((key) => {
    const currentTranslation = translations[lang] || translations[DEFAULT_LANG];
    let value = getNestedValue(currentTranslation, key);

    // Fallback to English if key missing in current language
    if (value === undefined && lang !== "en") {
      value = getNestedValue(translations["en"], key);
    }

    // Ultimate fallback to the key itself
    return value !== undefined ? value : key;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, dir, isRTL, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
