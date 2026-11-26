"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Paintbrush, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { muralItems, muralCategories } from "@/lib/gallery";

const categories = muralCategories;

export function Gallery() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? muralItems
      : muralItems.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-24 md:py-32 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff9e6b]/10 text-[#ff9e6b] text-sm font-medium mb-4"
          >
            <Paintbrush className="size-4" />
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold text-[#22211b] tracking-tight mb-4"
          >
            A little color for every imagination
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-[#6e6b5c] max-w-2xl mx-auto"
          >
            From cozy bedrooms to vibrant exteriors, our murals turn walls
            into windows to new worlds.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                filter === cat
                  ? "bg-[#ff9e6b] text-white"
                  : "bg-[#efe6d3] text-[#22211b] hover:bg-[#e0d6c8]",
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, margin: "-80px" }}
              className="group relative overflow-hidden rounded-2xl bg-[#f4f2ec]"
            >
              <Link href={`/gallery/${item.id}`} className="block">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${item.seed}/800/1000`}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[#ff9e6b] text-xs font-medium uppercase tracking-wider mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-white/90 text-sm">
                    View project <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button size="lg" asChild>
            <Link href="/contact">
              Let&apos;s create something beautiful
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
