"use client";

import { useState } from "react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PaintStroke } from "@/components/paint-stroke";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Paintbrush, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { FilterTabs } from "@/components/filter-tabs";
import { muralItems, muralCategories } from "@/lib/gallery";

const categories = muralCategories;

export default function GalleryPage() {
  const [filter, setFilter] = React.useState("All");

  const filtered =
    filter === "All"
      ? muralItems
      : muralItems.filter((item) => item.category === filter);

  return (
    <div className="min-h-screen bg-[#FFFDF8] text-[#22211b]">
      <SiteHeader />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#ff9e6b]/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#ffcc80]/15 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff9e6b]/10 text-[#ff9e6b] text-sm font-medium mb-4">
              <Paintbrush className="size-4" />
              Our Work
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 leading-tight">
              A little color for
              <br />
              <PaintStroke delay={0.3} className="text-[#ff9e6b]">
                every imagination
              </PaintStroke>
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-lg text-[#6e6b5c] max-w-xl mb-8 leading-relaxed">
              From cozy bedrooms to vibrant exteriors, our murals turn walls
              into windows to new worlds.
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href="/contact">
                  Let&apos;s create something beautiful
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/murals">
                  Explore murals
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 md:py-32 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Reveal delay={0.1} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff9e6b]/10 text-[#ff9e6b] text-sm font-medium mb-4">
              <Paintbrush className="size-4" />
              Our Work
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                A little color for
                <br />
                <PaintStroke delay={0.3} className="text-[#ff9e6b]">
                  every imagination
                </PaintStroke>
              </h2>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-lg text-[#6e6b5c] max-w-2xl mx-auto">
                From cozy bedrooms to vibrant exteriors, our murals turn walls
                into windows to new worlds.
              </p>
            </Reveal>
          </div>

          {/* Filter Tabs */}
          <Reveal delay={0.5}>
            <FilterTabs
              items={categories}
              active={filter}
              onChange={setFilter}
            />
          </Reveal>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, index) => (
              <Reveal
                key={item.id}
                delay={0.6 + index * 0.08}
                className="group relative overflow-hidden rounded-2xl bg-[#f4f2ec]"
              >
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
                    View project <ArrowRight className="size-4" />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.7}>
            <div className="text-center mt-16">
              <Button size="lg" asChild>
                <a href="/contact">
                  Let&apos;s create something beautiful
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
