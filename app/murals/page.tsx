
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PaintStroke } from "@/components/paint-stroke";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Paintbrush, HomeIcon, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const themes = [
  {
    name: "Space & Stars",
    description:
      "Dreamy night skies, twinkling stars, and celestial wonders.",
    colors: ["Deep blue", "Purple", "Silver", "Gold"],
  },
  {
    name: "Jungle Adventure",
    description:
      "Vibrant rainforests, exotic animals, and hidden treasures.",
    colors: ["Emerald", "Teal", "Orange", "Yellow"],
  },
  {
    name: "Underwater World",
    description:
      "Colorful coral reefs, swimming fish, and ocean mysteries.",
    colors: ["Coral", "Turquoise", "Blue", "Pink"],
  },
  {
    name: "Fantasy & Magic",
    description:
      "Whimsical creatures, magical forests, and enchanted gardens.",
    colors: ["Lavender", "Gold", "Teal", "Pink"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Design Consultation",
    description:
      "We discuss your child's interests, favorite colors, and room layout to create a personalized concept.",
  },
  {
    step: "02",
    title: "Sketch & Approval",
    description:
      "We create a detailed sketch of the mural design for your approval before any painting begins.",
  },
  {
    step: "03",
    title: "Surface Preparation",
    description:
      "We carefully prepare the wall surface to ensure a smooth, long-lasting finish.",
  },
  {
    step: "04",
    title: "Paint & Create",
    description:
      "Our artists bring the design to life with bright, safe, non-toxic paints.",
  },
  {
    step: "05",
    title: "Final Touches",
    description:
      "We add finishing details and ensure every color is perfect before stepping back.",
  },
];

export default function MuralsPage() {
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
              Custom Murals
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 leading-tight">
              Your walls, your
              <br />
              <PaintStroke delay={0.3} className="text-[#ff9e6b]">
                imagination
              </PaintStroke>
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-lg text-[#6e6b5c] max-w-xl mb-8 leading-relaxed">
              Custom murals transform children&apos;s bedrooms into
              imaginative worlds. Each piece is designed with your child in
              mind, using safe, non-toxic paints and bright, engaging imagery.
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href="/contact">
                  Book a consultation
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/gallery">
                  View our work
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Themes */}
      <section className="py-24 md:py-32 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Reveal delay={0.1} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff9e6b]/10 text-[#ff9e6b] text-sm font-medium mb-4">
              <Paintbrush className="size-4" />
              Theme Ideas
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                A little something for
                <br />
                every imagination
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-lg text-[#6e6b5c] max-w-2xl mx-auto">
                From space adventures to magical forests, we create murals that
                spark wonder and joy.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {themes.map((theme, index) => (
              <Reveal
                key={theme.name}
                delay={0.4 + index * 0.1}
                className={cn(
                  "group p-6 rounded-2xl bg-[#f4f2ec] hover:bg-[#efe6d3] transition-colors",
                  index > 0 && "md:-mt-4 lg:-mt-8",
                )}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#ff9e6b]/10 flex items-center justify-center text-[#ff9e6b] shrink-0 group-hover:scale-110 transition-transform">
                    <Paintbrush className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {theme.name}
                    </h3>
                    <p className="text-sm text-[#6e6b5c] leading-relaxed mb-3">
                      {theme.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {theme.colors.map((color) => (
                        <Badge
                          key={color}
                          variant="secondary"
                          className="bg-[#ff9e6b]/10 text-[#ff9e6b]"
                        >
                          {color}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 scroll-mt-12 bg-[#f4f2ec]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Reveal delay={0.1} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff9e6b]/10 text-[#ff9e6b] text-sm font-medium mb-4">
              <HomeIcon className="size-4" />
              How It Works
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                From idea to masterpiece
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-lg text-[#6e6b5c] max-w-2xl mx-auto">
                A simple, transparent process that brings your vision to life.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <Reveal
                key={step.step}
                delay={0.4 + index * 0.1}
                className="p-6 rounded-2xl bg-[#f4f2ec] hover:bg-[#efe6d3] transition-colors"
              >
                <div className="text-4xl font-semibold text-[#ff9e6b] mb-2">
                  {step.step}
                </div>
                <h3 className="font-semibold text-[#22211b] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#6e6b5c] leading-relaxed">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-[#ff9e6b] px-8 py-16 md:px-16 md:py-24 text-center">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;20&quot; height=&quot;20&quot; viewBox=&quot;0 0 20 20&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.1&quot;%3E%3Cpath d=&quot;M0 0h20v20H0z&quot;/%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
            <div className="relative">
              <Reveal delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
                  Ready to bring color to your home?
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-lg text-white/90 max-w-xl mx-auto mb-8">
                  Let&apos;s discuss your project and create a plan that brings
                  your vision to life.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <Button size="lg" variant="secondary" asChild>
                  <a href="/contact">
                    Book a consultation
                    <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
