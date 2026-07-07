"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * A component that reveals its content with a colored block animation.
 * Triggered on scroll.
 */
const CardReveal = ({ children, delay = 0, className = "", color = "#2563eb" }) => {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      tl.set(contentRef.current, { opacity: 0 })
        .to(overlayRef.current, {
          scaleX: 1,
          duration: 0.6,
          ease: "expo.inOut",
          delay: delay,
        })
        .set(contentRef.current, { opacity: 1 })
        .to(overlayRef.current, {
          scaleX: 0,
          transformOrigin: "right",
          duration: 0.6,
          ease: "expo.inOut",
        });
    }, containerRef);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div ref={contentRef} className="h-full">
        {children}
      </div>
      <div
        ref={overlayRef}
        className="absolute inset-0 origin-left scale-x-0 z-50 pointer-events-none"
        style={{ backgroundColor: color }}
      />
    </div>
  );
};

export default CardReveal;
