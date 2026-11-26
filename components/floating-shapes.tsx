"use client";

import { motion, useReducedMotion } from "motion/react";

const shapes = [
  { id: 1, x: 10, y: 20, size: 120, color: "#ff9e6b", delay: 0 },
  { id: 2, x: 85, y: 15, size: 160, color: "#ffcc80", delay: 2 },
  { id: 3, x: 45, y: 75, size: 100, color: "#ff9e6b", delay: 4 },
  { id: 4, x: 75, y: 80, size: 140, color: "#ffcc80", delay: 6 },
];

export function FloatingShapes() {
  const reduced = useReducedMotion();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full opacity-20"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
            backgroundColor: shape.color,
          }}
          animate={{
            y: reduced ? 0 : [0, -20, 0],
            rotate: reduced ? 0 : [0, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
}
