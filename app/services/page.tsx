
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PaintStroke } from "@/components/paint-stroke";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  PaintRoller,
  Paintbrush,
  Palette,
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
    features: [
      "Professional surface preparation",
      "Premium, low-VOC paints",
      "Clean and efficient workflow",
      "Detailed finish inspection",
    ],
  },
  {
    icon: Paintbrush,
    title: "Exterior Painting",
    description:
      "Weather-resistant coatings that protect and beautify your home's exterior.",
    features: [
      "Weather-resistant coatings",
      "Surface repair and prep",
      "Color consultation",
      "Long-lasting protection",
    ],
  },
  {
    icon: Palette,
    title: "Custom Murals",
    description:
      "Imaginative, hand-painted murals that turn walls into windows to new worlds.",
    features: [
      "Custom design process",
      "Safe, non-toxic paints",
      "Bright, engaging imagery",
      "Personalized to your child",
    ],
  },
  {
    icon: HomeIcon,
    title: "Color Consultation",
    description:
      "Expert guidance to find the perfect colors for your space and style.",
    features: [
      "Personalized color palette",
      "Lighting and space analysis",
      "Sample and test patches",
      "Complete project guidance",
    ],
  },
];

const faqs = [
  {
    question: "Do you work on weekends?",
    answer:
      "We typically schedule projects during weekdays, but we can accommodate weekend appointments for consultations and smaller projects. Please contact us to discuss your schedule.",
  },
  {
    question: "What kind of preparation is needed?",
    answer:
      "We handle all surface preparation, including cleaning, sanding, and repairing minor imperfections. For larger projects, we may recommend additional prep work based on the specific condition of your surfaces.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Interior painting projects typically take 3-7 days depending on the size and complexity. Exterior projects may take 1-2 weeks. Custom murals can take 2-5 days depending on the design and wall size.",
  },
  {
    question: "Do you offer warranties?",
    answer:
      "Yes, we offer warranties on our workmanship. The specific warranty terms depend on the type of project and materials used. We'll discuss warranty details during your consultation.",
  },
];

export default function ServicesPage() {
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
              <PaintRoller className="size-4" />
              Our Services
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 leading-tight">
              A little something for
              <br />
              <PaintStroke delay={0.3} className="text-[#ff9e6b]">
                every space
              </PaintStroke>
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-lg text-[#6e6b5c] max-w-xl mb-8 leading-relaxed">
              From precision interior painting to imaginative murals, we bring
              color and care to every project.
            </p>
          </Reveal>
          <Reveal delay={0.5}>
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
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Reveal
                key={service.title}
                delay={0.4 + index * 0.1}
                className={cn(
                  "group p-6 rounded-2xl bg-[#f4f2ec] hover:bg-[#efe6d3] transition-colors",
                  index > 0 && "md:-mt-4 lg:-mt-8",
                )}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#ff9e6b]/10 flex items-center justify-center text-[#ff9e6b] shrink-0 group-hover:scale-110 transition-transform">
                    <service.icon className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#6e6b5c] leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <Check className="size-4 text-[#ff9e6b] shrink-0 mt-0.5" />
                          <span className="text-[#22211b]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 scroll-mt-12 bg-[#f4f2ec]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Reveal delay={0.1} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff9e6b]/10 text-[#ff9e6b] text-sm font-medium mb-4">
              <HomeIcon className="size-4" />
              FAQ
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                Common questions
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-lg text-[#6e6b5c] max-w-2xl mx-auto">
                Everything you need to know about our services.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Reveal
                key={faq.question}
                delay={0.4 + index * 0.1}
                className="p-6 rounded-2xl bg-[#f4f2ec] hover:bg-[#efe6d3] transition-colors"
              >
                <h3 className="font-semibold text-[#22211b] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[#6e6b5c] leading-relaxed">
                  {faq.answer}
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
