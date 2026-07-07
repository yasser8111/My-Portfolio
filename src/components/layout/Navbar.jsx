"use client";

import { useState, useEffect } from "react";
import MaterialIcon from "@/components/ui/MaterialIcon";
import LanguageSwitcher from "@/context/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

const NAV_LINKS = ["services", "about", "projects", "home"];

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

  // Auto-close mobile menu on large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen?.(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen, setIsMenuOpen]);

  const handleNavClick = (e, section) => {
    scrollToSection?.(e, section);
    setIsMenuOpen?.(false);
  };

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
            <a href="/" className="shrink-0">
              <img
                src="/logo.svg"
                alt="Logo"
                className={`w-8 h-8 md:w-9 md:h-9 object-contain select-none transition-all duration-300 ${
                  !scrolled ? "brightness-0 invert md:brightness-100 md:invert-0" : ""
                }`}
                draggable="false"
              />
            </a>

            {/* Desktop nav links — hidden on mobile */}
            {!backMode && (
              <div className="hidden md:flex items-center gap-4 md:gap-6">
                {NAV_LINKS.map((section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    onClick={(e) => handleNavClick(e, section)}
                    className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                      !scrolled
                        ? "text-white/80 hover:text-white md:text-slate-600 md:hover:text-blue-600"
                        : "text-slate-600 hover:text-blue-600"
                    }`}
                  >
                    {t(`nav.${section}`)}
                  </a>
                ))}
              </div>
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
              <LanguageSwitcher className={!scrolled ? "!text-white/80 hover:!text-white md:!text-slate-600 md:hover:!text-blue-600" : ""} />

              {/* Mobile menu toggle — styled like contact btn, shown only on small screens */}
              <button
                onClick={() => setIsMenuOpen?.(!isMenuOpen)}
                className="md:hidden text-xs font-bold uppercase tracking-widest text-white bg-blue-600 hover:bg-blue-700 transition-colors px-3 py-2 cursor-pointer"
              >
                {isMenuOpen ? (t("nav.close") || "Close") : (t("nav.menu") || "Menu")}
              </button>

              {/* Desktop contact button — hidden on mobile */}
              <a
                href="#contact"
                onClick={(e) => {
                  scrollToSection?.(e, "contact");
                  setIsMenuOpen?.(false);
                }}
                className="hidden md:inline-block text-xs font-bold uppercase tracking-widest text-white bg-blue-600 hover:bg-blue-700 transition-colors px-3 py-2"
              >
                {t("nav.contact")}
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile dropdown overlay — always mounted for animation */}
      {!backMode && (
        <div
          className={`fixed inset-0 z-50 bg-white flex flex-col items-center justify-center gap-10 transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none translate-y-3"
          }`}
        >
          <nav className="flex flex-col items-center gap-6">
            {NAV_LINKS.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => handleNavClick(e, section)}
                className="text-2xl font-bold uppercase tracking-widest text-slate-800 hover:text-blue-600 transition-colors"
              >
                {t(`nav.${section}`)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="text-2xl font-bold uppercase tracking-widest text-slate-800 hover:text-blue-600 transition-colors"
            >
              {t("nav.contact")}
            </a>
          </nav>

        </div>
      )}

      {showBanner && (
        <div className="fixed top-[52px] md:top-[60px] left-0 right-0 z-50 bg-blue-600 text-white py-2 px-4 text-center text-xs font-bold tracking-widest uppercase">
          {t("personal.underConstructionText")}
        </div>
      )}
    </>
  );
};

export default Navbar;
