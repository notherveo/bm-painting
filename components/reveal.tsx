"use client";
import * as React from "react";

import { useRef, useEffect } from "react";
import { useReducedMotion } from "motion/react";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          el.style.transition = "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.8s ease";
          el.style.transform = "translateY(0)";
          el.style.opacity = "1";
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: "translateY(32px)",
        opacity: 0,
        transition: reduced ? "none" : "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.8s ease",
      }}
    >
      {children}
    </div>
  );
}
