"use client";
import { useState } from "react";
import * as React from "react";

import Link from "next/link";
import { motion } from "motion/react";
import { Paintbrush, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/murals", label: "Murals" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-[#FFFDF8]/85 border-b border-[#efe6d3]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="size-10 rounded-full bg-[#ff9e6b] flex items-center justify-center text-white">
            <Paintbrush className="size-5" />
          </div>
          <span className="text-xl font-semibold tracking-tight">
            PRISM & PINE
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#6e6b5c] hover:text-[#22211b] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button size="sm" asChild>
            <Link href="/contact">
              Book a consultation
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="lg:hidden border-t border-[#efe6d3] overflow-hidden"
      >
        <nav className="px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-base font-medium text-[#22211b] hover:text-[#ff9e6b] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button
            size="sm"
            className="w-full mt-2"
            asChild
            onClick={() => setOpen(false)}
          >
            <Link href="/contact">
              Book a consultation
            </Link>
          </Button>
        </nav>
      </motion.div>
    </motion.header>
  );
}
