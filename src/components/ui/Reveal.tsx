"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Scroll reveal as progressive enhancement: content is fully visible in the
 * server HTML and without JavaScript. After hydration, elements that are
 * below the fold fade in as they scroll into view. Skipped for reduced motion.
 */
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return; // already on screen

    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        el.style.transition = `opacity 500ms ease-out ${delay}s, transform 500ms ease-out ${delay}s`;
        el.style.opacity = "1";
        el.style.transform = "none";
        io.disconnect();
      },
      { rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
