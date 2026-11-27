
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BeforeAfter } from "@/components/before-after";
import { FloatingShapes } from "@/components/floating-shapes";
import { PaintStroke } from "@/components/paint-stroke";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  Paintbrush,
  Palette,
  Home,
  PaintRoller,
  HomeIcon,
  ArrowRight,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: PaintRoller,
    title: "Interior Painting",
    description:
      "Precision prep, smooth finishes, and a color palette that brings your home to life.",
  },
  {
    icon: Paintbrush,
    title: "Exterior Painting",
    description:
      "Weather-resistant coatings that protect and beautify your home's exterior.",
  },
  {
    icon: Palette,
    title: "Custom Murals",
    description:
      "Imaginative, hand-painted murals that turn walls into windows to new worlds.",
  },
  {
    icon: HomeIcon,
    title: "Color Consultation",
    description:
      "Expert guidance to find the perfect colors for your space and style.",
  },
];

const testimonials = [
  {
    quote:
      "The mural transformed our daughter's room into her favorite place in the house. Every detail was perfect.",
    name: "Elena Martinez",
    role: "Homeowner",
  },
  {
    quote:
      "Professional, creative, and incredibly skilled. They brought our vision to life with precision and care.",
    name: "Marcus Chen",
    role: "Interior Designer",
  },
  {
    quote:
      "Our home looks completely new. The team was punctual, clean, and left us with a beautiful finish.",
    name: "Sarah Thompson",
    role: "Homeowner",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFDF8] text-[#22211b]">
      <FloatingShapes />
      <SiteHeader />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#ff9e6b]/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#ffcc80]/15 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-12">
            <Reveal delay={0.1} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff9e6b]/10 text-[#ff9e6b] text-sm font-medium mb-6">
              <Paintbrush className="size-4" />
              Your home, beautifully remade
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 leading-tight">
                Color that
                <br />
                <PaintStroke delay={0.3} className="text-[#ff9e6b]">
                  inspires
                </PaintStroke>
                <br />
                imagination
              </h1>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-lg text-[#6e6b5c] max-w-xl mb-8 leading-relaxed">
                PRISM & PINE brings residential painting, custom children&apos;s
                bedroom murals, and professional color consultation to life.
                Your walls deserve a little magic.
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
            <Reveal delay={0.7}>
              <div className="mt-10 flex items-center gap-6 text-sm text-[#6e6b5c]">
                <div className="flex items-center gap-1.5">
                  <Check className="size-4 text-[#ff9e6b]" />
                  Licensed & insured
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="size-4 text-[#ff9e6b]" />
                  5-star rated
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="size-4 text-[#ff9e6b]" />
                  Free color consultation
                </div>
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/hero1/1200/1200"
                alt="A beautifully painted children's bedroom with a custom mural"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-[#ff9e6b] text-white">
                    Featured
                  </Badge>
                  <span className="text-white/90 text-sm">Custom mural</span>
                </div>
                <p className="text-white text-lg font-medium">
                  Whimsical Forest
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#ffcc80] rounded-full opacity-20 blur-3xl" />
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#ff9e6b] rounded-full opacity-20 blur-3xl" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Reveal delay={0.1} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff9e6b]/10 text-[#ff9e6b] text-sm font-medium mb-4">
              <PaintRoller className="size-4" />
              What we do
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                A little something for every space
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-lg text-[#6e6b5c] max-w-2xl mx-auto">
                From precision interior painting to imaginative murals, we bring
                color and care to every project.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Reveal
                key={service.title}
                delay={0.4 + index * 0.1}
                className={cn(
                  "group p-6 rounded-2xl bg-[#f4f2ec] hover:bg-[#efe6d3] transition-colors",
                  index > 0 && "md:-mt-4 lg:-mt-8",
                )}
              >
                <div className="w-12 h-12 rounded-full bg-[#ff9e6b]/10 flex items-center justify-center text-[#ff9e6b] mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="size-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-[#6e6b5c] leading-relaxed">
                  {service.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mural Gallery Teaser */}
      <section className="py-24 md:py-32 scroll-mt-12 bg-[#f4f2ec]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal delay={0.1} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff9e6b]/10 text-[#ff9e6b] text-sm font-medium mb-4">
                <Paintbrush className="size-4" />
                Murals
              </Reveal>
              <Reveal delay={0.2}>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                  Your walls, your
                  <br />
                  <PaintStroke delay={0.3} className="text-[#ff9e6b]">
                    imagination
                  </PaintStroke>
                </h2>
              </Reveal>
              <Reveal delay={0.4}>
                <p className="text-lg text-[#6e6b5c] max-w-xl mb-8 leading-relaxed">
                  Custom murals transform children&apos;s bedrooms into
                  imaginative worlds. Each piece is designed with your child in
                  mind, using safe, non-toxic paints and bright, engaging
                  imagery.
                </p>
              </Reveal>
              <Reveal delay={0.6}>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" asChild>
                    <a href="/murals">
                      Explore murals
                      <ArrowRight className="ml-2 size-4" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/gallery">
                      See more work
                    </a>
                  </Button>
                </div>
              </Reveal>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <img
                    src="https://picsum.photos/seed/mural1/600/750"
                    alt="A whimsical forest mural in a children's bedroom"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src="https://picsum.photos/seed/mural2/600/800"
                    alt="A starry night sky mural"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src="https://picsum.photos/seed/mural3/600/800"
                    alt="An underwater world mural"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <img
                    src="https://picsum.photos/seed/mural4/600/750"
                    alt="A jungle adventure mural"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-24 md:py-32 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <BeforeAfter />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Reveal delay={0.1} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff9e6b]/10 text-[#ff9e6b] text-sm font-medium mb-4">
                <PaintRoller className="size-4" />
                Transformations
              </Reveal>
              <Reveal delay={0.2}>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                From drab to dazzling
                </h2>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-lg text-[#6e6b5c] max-w-xl mb-8 leading-relaxed">
                  See the difference professional painting and creative design
                  can make. Our team brings attention to detail and a fresh
                  perspective to every project.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" asChild>
                    <a href="/contact">
                      Get a free estimate
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
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 scroll-mt-12 bg-[#f4f2ec]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Reveal delay={0.1} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff9e6b]/10 text-[#ff9e6b] text-sm font-medium mb-4">
              <HomeIcon className="size-4" />
              Kind words
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                Homeowners love us
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-lg text-[#6e6b5c] max-w-2xl mx-auto">
                Real homes, real transformations, real satisfaction.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <Reveal
                key={item.name}
                delay={0.4 + index * 0.15}
                className="p-6 rounded-2xl bg-[#f4f2ec] hover:bg-[#efe6d3] transition-colors"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#ff9e6b]">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-[#22211b] mb-4 leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-[#22211b]">{item.name}</p>
                  <p className="text-sm text-[#6e6b5c]">{item.role}</p>
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
