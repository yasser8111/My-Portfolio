"use client";

import React, { useState, useEffect } from "react";
import MaterialIcon from "@/components/ui/MaterialIcon";
import LanguageSwitcher from "@/context/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = ({
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
  backMode = false,
  onBack,
  backText,
  showBanner = false,
}) => {
  const { dir, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-60 transition-all duration-300 px-4 md:px-12 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md py-2 md:py-3"
            : "bg-transparent py-2 md:py-3"
        }`}
      >
        <div className="flex justify-between items-center" dir={dir}>
          <div className="flex items-center gap-4 md:gap-6">
            <img
              src="/logo.svg"
              alt="Logo"
              className="w-8 h-8 md:w-9 md:h-9 object-contain pointer-events-none select-none"
              draggable="false"
            />

            {!backMode && (
              <>
                <a
                  href="#projects"
                  onClick={(e) => {
                    scrollToSection?.(e, "projects");
                    setIsMenuOpen?.(false);
                  }}
                  className="text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {t("nav.projects")}
                </a>

                <a
                  href="#about"
                  onClick={(e) => {
                    scrollToSection?.(e, "about");
                    setIsMenuOpen?.(false);
                  }}
                  className="text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {t("nav.about")}
                </a>
              </>
            )}
          </div>

          {backMode ? (
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-blue-600 transition-colors"
            >
              <MaterialIcon
                icon="arrow_back"
                size={16}
                className="rtl:rotate-180"
              />
              {backText}
            </button>
          ) : (
            <div className="flex items-center gap-2 md:gap-3">
              <LanguageSwitcher />

              <a
                href="#contact"
                onClick={(e) => {
                  scrollToSection?.(e, "contact");
                  setIsMenuOpen?.(false);
                }}
                className="text-xs font-bold uppercase tracking-widest text-white bg-blue-600 hover:bg-blue-700 transition-colors px-3 py-2"
              >
                {t("nav.contact")}
              </a>
            </div>
          )}
        </div>
      </nav>

      {showBanner && (
        <div className="fixed top-[52px] md:top-[60px] left-0 right-0 z-50 bg-blue-600 text-white py-2 px-4 text-center text-xs font-bold tracking-widest uppercase">
          {t("personal.underConstructionText")}
        </div>
      )}
    </>
  );
};

export const NavBack = ({ onBack, backText }) => (
  <Navbar backMode={true} onBack={onBack} backText={backText} />
);

export default Navbar;
