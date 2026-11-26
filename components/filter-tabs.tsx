"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function FilterTabs({
  items,
  active,
  onChange,
}: {
  items: string[];
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            active === item
              ? "bg-[#ff9e6b] text-white"
              : "bg-[#efe6d3] text-[#22211b] hover:bg-[#e0d6c8]",
          )}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
