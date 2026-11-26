"use client";

import * as React from "react";


import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PaintStroke } from "@/components/paint-stroke";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  Paintbrush,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@prismandpine.example",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(555) 021-8940",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Seattle, WA",
  },
];

const projectTypes = [
  "Interior Painting",
  "Exterior Painting",
  "Custom Murals",
  "Color Consultation",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Interior Painting",
    room: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              Get in Touch
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 leading-tight">
              Let&apos;s create
              <br />
              <PaintStroke delay={0.3} className="text-[#ff9e6b]">
                something beautiful
              </PaintStroke>
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-lg text-[#6e6b5c] max-w-xl mb-8 leading-relaxed">
              Have a project in mind? We&apos;d love to hear from you. Fill out
              the form below, and we&apos;ll get back to you within 24 hours.
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href="#contact-form">
                  Send a message
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+15550218940">
                  Call us
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 md:py-32 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (
              <Reveal
                key={item.label}
                delay={0.4 + index * 0.1}
                className="p-6 rounded-2xl bg-[#f4f2ec] hover:bg-[#efe6d3] transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#ff9e6b]/10 flex items-center justify-center text-[#ff9e6b] mb-4">
                  <item.icon className="size-6" />
                </div>
                <h3 className="font-semibold text-[#22211b] mb-1">
                  {item.label}
                </h3>
                <p className="text-sm text-[#6e6b5c]">{item.value}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        id="contact-form"
        className="py-24 md:py-32 scroll-mt-12 bg-[#f4f2ec]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Reveal delay={0.1} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff9e6b]/10 text-[#ff9e6b] text-sm font-medium mb-4">
                <PaintRoll className="size-4" />
                Send us a message
              </Reveal>
              <Reveal delay={0.2}>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                  Tell us about your project
                </h2>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-lg text-[#6e6b5c] max-w-xl mb-8 leading-relaxed">
                  We&apos;re here to help. Fill out the form below, and we&apos;ll
                  get back to you within 24 hours with a response.
                </p>
              </Reveal>

              {submitted ? (
                <Reveal delay={0.4}>
                  <div className="p-6 rounded-2xl bg-[#ff9e6b]/10 border border-[#ff9e6b]/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#ff9e6b] flex items-center justify-center text-white">
                        <Check className="size-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#22211b]">
                          Message Sent!
                        </h3>
                        <p className="text-sm text-[#6e6b5c]">
                          Thank you for reaching out. We&apos;ll get back to you
                          within 24 hours.
                        </p>
                      </div>
                    </div>
                    <Button onClick={() => setSubmitted(false)}>
                      Send another message
                    </Button>
                  </div>
                </Reveal>
              ) : (
                <Reveal delay={0.5}>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#22211b] mb-1"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-[#efe6d3] focus:border-[#ff9e6b] focus:ring-2 focus:ring-[#ff9e6b]/20 outline-none transition-colors"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#22211b] mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-[#efe6d3] focus:border-[#ff9e6b] focus:ring-2 focus:ring-[#ff9e6b]/20 outline-none transition-colors"
                        placeholder="jane@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#22211b] mb-1"
                      >
                        Phone (optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-[#efe6d3] focus:border-[#ff9e6b] focus:ring-2 focus:ring-[#ff9e6b]/20 outline-none transition-colors"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-sm font-medium text-[#22211b] mb-1"
                      >
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-[#efe6d3] focus:border-[#ff9e6b] focus:ring-2 focus:ring-[#ff9e6b]/20 outline-none transition-colors"
                      >
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="room"
                        className="block text-sm font-medium text-[#22211b] mb-1"
                      >
                        Room / Area (optional)
                      </label>
                      <input
                        type="text"
                        id="room"
                        name="room"
                        value={formData.room}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-[#efe6d3] focus:border-[#ff9e6b] focus:ring-2 focus:ring-[#ff9e6b]/20 outline-none transition-colors"
                        placeholder="e.g., daughter&apos;s bedroom, front porch"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[#22211b] mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-[#efe6d3] focus:border-[#ff9e6b] focus:ring-2 focus:ring-[#ff9e6b]/20 outline-none transition-colors resize-none"
                        placeholder="Tell us about your project, timeline, and any specific ideas you have..."
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Send message
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </form>
                </Reveal>
              )}
            </div>

            <div className="lg:pl-12">
              <Reveal delay={0.1}>
                <div className="p-6 rounded-2xl bg-[#f4f2ec]">
                  <h3 className="font-semibold text-[#22211b] mb-4">
                    Why choose PRISM & PINE?
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Licensed and insured professionals",
                      "Free color consultation",
                      "Transparent pricing and estimates",
                      "Quality materials and finishes",
                      "Clean and efficient workflow",
                      "Satisfaction guaranteed",
                    ].map((item, index) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-[#6e6b5c]"
                      >
                        <Check className="size-4 text-[#ff9e6b] shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-6 p-6 rounded-2xl bg-[#ff9e6b]/10 border border-[#ff9e6b]/20">
                  <h3 className="font-semibold text-[#22211b] mb-2">
                    Need a quick estimate?
                  </h3>
                  <p className="text-sm text-[#6e6b5c] mb-4">
                    We&apos;d love to help! Call us directly for a quick
                    consultation.
                  </p>
                  <a
                    href="tel:+15550218940"
                    className="inline-flex items-center gap-2 text-[#ff9e6b] font-medium hover:text-[#ff9e6b]/80 transition-colors"
                  >
                    <Phone className="size-4" />
                    (555) 021-8940
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
