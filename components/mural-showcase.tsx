"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCategoryIds, muralItems } from "@/lib/gallery";

export function MuralShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = muralItems[currentIndex];

  const next = () => {
    setCurrentIndex((i) => (i + 1) % muralItems.length);
  };

  const prev = () => {
    setCurrentIndex((i) => (i - 1 + muralItems.length) % muralItems.length);
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-white to-amber-50" />
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 20% 80%, #F59E0B 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-sm font-medium mb-4">
              Custom Murals
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              {current.title}
            </h2>
            <p className="text-lg text-amber-950/70 mb-6">
              {current.description}
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/murals">
                  Explore All Murals
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">
                  Book a Consultation
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={`https://picsum.photos/seed/${current.seed}/800/600`}
                alt={current.title}
                className="w-full h-auto"
              />
            </motion.div>

            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 rounded-full bg-white shadow-lg hover:bg-amber-50 transition-colors"
              aria-label="Previous mural"
            >
              <ArrowLeft className="size-6 text-amber-900" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 rounded-full bg-white shadow-lg hover:bg-amber-50 transition-colors"
              aria-label="Next mural"
            >
              <ArrowRight className="size-6 text-amber-900" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <span className="text-sm text-amber-900">
                {currentIndex + 1} / {muralItems.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
