import Link from "next/link";
import { Mail, MapPin, Paintbrush, Phone } from "lucide-react";

const footerLinks = {
  services: [
    { href: "/services", label: "Interior Painting" },
    { href: "/services", label: "Exterior Painting" },
    { href: "/murals", label: "Custom Murals" },
    { href: "/services", label: "Color Consultation" },
  ],
  company: [
    { href: "/about", label: "Our Story" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="bg-[#f4f2ec] border-t border-[#efe6d3] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="size-10 rounded-full bg-[#ff9e6b] flex items-center justify-center text-white">
                <Paintbrush className="size-5" />
              </div>
              <span className="text-xl font-semibold tracking-tight">
                PRISM & PINE
              </span>
            </Link>
            <p className="text-sm text-[#6e6b5c] leading-relaxed mb-6">
              Residential painting, custom children's bedroom murals, and
              professional color consultation. Your home, beautifully remade.
            </p>
            <div className="flex items-center gap-2 text-sm text-[#6e6b5c]">
              <MapPin className="size-4" />
              Seattle, WA
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-[#22211b] mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#6e6b5c] hover:text-[#ff9e6b] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-[#22211b] mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#6e6b5c] hover:text-[#ff9e6b] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-[#22211b] mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-[#6e6b5c]">
                <Mail className="size-4 shrink-0 mt-0.5" />
                hello@prismandpine.example
              </li>
              <li className="flex items-start gap-2.5 text-sm text-[#6e6b5c]">
                <Phone className="size-4 shrink-0 mt-0.5" />
                (555) 021-8940
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#efe6d3] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#6e6b5c]">
          <p>&copy; 2026 PRISM & PINE. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-[#22211b]">Privacy</Link>
            <Link href="#" className="hover:text-[#22211b]">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
