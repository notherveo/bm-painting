
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PaintStroke } from "@/components/paint-stroke";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Paintbrush, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Paintbrush,
    title: "Artistry First",
    description:
      "Every project is treated as an opportunity to create something truly special.",
  },
  {
    icon: PaintRoll,
    title: "Attention to Detail",
    description:
      "From the smallest brushstroke to the final cleanup, nothing is left to chance.",
  },
  {
    icon: Palette,
    title: "Creative Partnership",
    description:
      "We collaborate closely with our clients to bring their vision to life.",
  },
  {
    icon: HomeIcon,
    title: "Quality Materials",
    description:
      "We use only the finest paints and materials to ensure lasting results.",
  },
];

const stats = [
  { value: "1,500+", label: "Happy Clients" },
  { value: "850+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "5.0", label: "Average Rating" },
];

export default function AboutPage() {
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
              About Us
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 leading-tight">
              Bringing color and
              <br />
              <PaintStroke delay={0.3} className="text-[#ff9e6b]">
                imagination to life
              </PaintStroke>
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-lg text-[#6e6b5c] max-w-xl mb-8 leading-relaxed">
              PRISM & PINE is a residential painting and custom mural studio
              dedicated to transforming spaces with color, creativity, and
              professional craftsmanship.
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href="/contact">
                  Let&apos;s work together
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

      {/* Stats */}
      <section className="py-16 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={0.4 + index * 0.1}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-semibold text-[#ff9e6b] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[#6e6b5c]">{stat.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Reveal delay={0.1} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff9e6b]/10 text-[#ff9e6b] text-sm font-medium mb-4">
              <HomeIcon className="size-4" />
              Our Values
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                What drives us
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-lg text-[#6e6b5c] max-w-2xl mx-auto">
                We believe in creating spaces that inspire, protect, and bring
                joy to the people who live in them.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Reveal
                key={value.title}
                delay={0.4 + index * 0.1}
                className={cn(
                  "group p-6 rounded-2xl bg-[#f4f2ec] hover:bg-[#efe6d3] transition-colors",
                  index > 0 && "md:-mt-4 lg:-mt-8",
                )}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#ff9e6b]/10 flex items-center justify-center text-[#ff9e6b] shrink-0 group-hover:scale-110 transition-transform">
                    <value.icon className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-[#6e6b5c] leading-relaxed">
                      {value.description}
                    </p>
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
              <PaintRoll className="size-4" />
              Our Process
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                How we work
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-lg text-[#6e6b5c] max-w-2xl mx-auto">
                A simple, transparent process from first consultation to final
                reveal.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Free Consultation",
                description:
                  "We discuss your project, answer your questions, and provide a transparent estimate.",
              },
              {
                title: "Detailed Planning",
                description:
                  "We create a comprehensive plan including materials, timeline, and color selections.",
              },
              {
                title: "Professional Execution",
                description:
                  "Our skilled team brings your vision to life with precision and care.",
              },
              {
                title: "Quality Results",
                description:
                  "We deliver a beautiful, long-lasting finish that exceeds your expectations.",
              },
            ].map((step, index) => (
              <Reveal
                key={step.title}
                delay={0.4 + index * 0.1}
                className="p-6 rounded-2xl bg-[#f4f2ec] hover:bg-[#efe6d3] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#ff9e6b] flex items-center justify-center text-white shrink-0">
                    <span className="font-semibold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#22211b] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#6e6b5c] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
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
