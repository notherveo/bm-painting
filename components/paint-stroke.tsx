"use client";
import * as React from "react";

import { motion } from "motion/react";

export function PaintStroke({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.span
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.22, 1, 0.36, 1],
        repeat: 0,
      }}
      className={className}
    >
      {children}
    </motion.span>
  );
}
