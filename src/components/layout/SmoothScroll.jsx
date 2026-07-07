"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

const SmoothScroll = ({ children }) => {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);
  const pathname = usePathname();

  // Initialize Lenis once on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Prevent native scroll restoration — we control scroll position
    history.scrollRestoration = "manual";

    const isDesktop = window.innerWidth >= 1024;

    if (isDesktop) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      lenisRef.current = lenis;

      const raf = (time) => {
        lenis.raf(time);
        rafRef.current = requestAnimationFrame(raf);
      };

      rafRef.current = requestAnimationFrame(raf);
    }

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      history.scrollRestoration = "auto";
    };
  }, []);

  // Scroll to top on every route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <>{children}</>;
};

export default SmoothScroll;
