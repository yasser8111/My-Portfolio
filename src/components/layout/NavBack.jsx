"use client";

import { useState, useEffect } from "react";
import MaterialIcon from "@/components/ui/MaterialIcon";

/**
 * Lightweight back-navigation bar for sub-pages (about, projects, services).
 * Separate from Navbar because sub-pages don't need scroll-aware logic
 * or the full navigation links.
 */
const NavBack = ({ onBack, backText }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-60 transition-all duration-300 px-4 md:px-12 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md py-2 md:py-3"
          : "bg-transparent py-2 md:py-3"
      }`}
    >
      <div className="flex justify-between items-center">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
        >
          <MaterialIcon icon="arrow_back" size={16} className="rtl:rotate-180" />
          {backText}
        </button>
      </div>
    </nav>
  );
};

export default NavBack;
