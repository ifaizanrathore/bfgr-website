import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { contactInfo } from "@/data";
import { Mail, Phone, MapPin, MessageCircle, Globe } from "lucide-react";

const quickLinks = [
  { label: "About BFGR", href: "#overview" },
  { label: "Vision & Mission", href: "#vision" },
  { label: "Business Sectors", href: "#sectors" },
  { label: "Leadership", href: "#leadership" },
  { label: "Partnerships", href: "#partnership" },
  { label: "Contact", href: "#contact" },
];

const sectors = [
  "Mining & Natural Resources",
  "Real Estate Development",
  "Garments & Textiles",
  "Pharmaceuticals",
  "Surgical Equipment",
  "Import & Export",
  "Strategic Investments",
];

export function Footer() {
  return (
    <footer
      className="relative"
      style={{
        background: "linear-gradient(160deg, #030f08 0%, #072318 100%)",
      }}
    >
      {/* Top border accent */}
      <div className="h-px bg-linear-to-r from-transparent via-gold/40 to-transparent" />

      <Container className="py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="BFGR Logo"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div>
                <p className="text-gold font-serif text-xl font-medium leading-none">
                  BFGR
                </p>
                <p className="text-cream/40 text-[10px] tracking-widest uppercase font-sans">
                  Global Resources
                </p>
              </div>
            </Link>
            <p className="text-cream/50 text-sm leading-relaxed font-sans mb-5">
              Baba Farid Global Resources — Transforming Resources into
              Sustainable Prosperity.
            </p>
            <p className="text-gold/50 text-[10px] tracking-[0.25em] uppercase font-sans leading-relaxed">
              BUILDING PROSPERITY<br />
              SERVING HUMANITY<br />
              INSPIRING FUTURES
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-gold text-xs tracking-widest uppercase font-sans font-medium mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream/55 text-sm font-sans hover:text-gold transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-gold group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h4 className="text-gold text-xs tracking-widest uppercase font-sans font-medium mb-5">
              Sectors
            </h4>
            <ul className="space-y-2.5">
              {sectors.map((s) => (
                <li key={s}>
                  <a
                    href="#sectors"
                    className="text-cream/55 text-sm font-sans hover:text-gold transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold text-xs tracking-widest uppercase font-sans font-medium mb-5">
              Contact
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5">
                <MapPin className="text-gold/50 shrink-0 mt-0.5" size={14} />
                <span className="text-cream/55 text-xs font-sans leading-snug">
                  {contactInfo.address}
                </span>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2.5 text-cream/55 text-xs font-sans hover:text-gold transition-colors duration-200"
                >
                  <Mail className="text-gold/50 shrink-0" size={14} />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 text-cream/55 text-xs font-sans hover:text-gold transition-colors duration-200"
                >
                  <Phone className="text-gold/50 shrink-0" size={14} />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-cream/55 text-xs font-sans hover:text-gold transition-colors duration-200"
                >
                  <MessageCircle className="text-gold/50 shrink-0" size={14} />
                  {contactInfo.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={`https://${contactInfo.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-cream/55 text-xs font-sans hover:text-gold transition-colors duration-200"
                >
                  <Globe className="text-gold/50 shrink-0" size={14} />
                  {contactInfo.website}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-gold/10">
        <Container className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/30 text-xs font-sans">
            © 2025 Baba Farid Global Resources. All rights reserved.
          </p>
          <p className="text-cream/20 text-xs font-sans">
            TOGETHER FOR A BETTER WORLD
          </p>
        </Container>
      </div>
    </footer>
  );
}
