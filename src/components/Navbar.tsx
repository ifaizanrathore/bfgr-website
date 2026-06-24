"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks
      .map((l) => l.href.replace("#", ""))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      const el = document.getElementById(href.replace("#", ""));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-forest-dark/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="relative w-10 h-10 shrink-0">
            <Image
              src="/images/logo.png"
              alt="BFGR Logo"
              fill
              className="object-contain"
              sizes="40px"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-gold font-serif text-lg font-medium leading-none tracking-wide">
              BFGR
            </p>
            <p className="text-cream/60 text-[10px] tracking-widest uppercase font-sans">
              Global Resources
            </p>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "px-4 py-2 text-sm font-sans font-medium tracking-wide transition-colors duration-200 rounded-sm relative group",
                    isActive
                      ? "text-gold"
                      : "text-cream/80 hover:text-gold"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gold transition-all duration-300",
                      isActive ? "w-4" : "w-0 group-hover:w-4"
                    )}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Button
            href="#contact"
            variant="gold"
            size="sm"
            className="hidden md:inline-flex"
            onClick={() => handleNavClick("#contact")}
          >
            Partner With Us
          </Button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-cream hover:text-gold transition-colors p-2"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-forest-dark/98 backdrop-blur-md border-t border-gold/10 px-4 py-4">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 text-cream/80 hover:text-gold hover:bg-white/5 rounded-sm text-sm font-sans font-medium tracking-wide transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-gold/10">
            <Button
              href="#contact"
              variant="gold"
              size="sm"
              className="w-full justify-center"
              onClick={() => handleNavClick("#contact")}
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
