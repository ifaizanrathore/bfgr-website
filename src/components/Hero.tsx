"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #072318 0%, #0b3d2e 45%, #0f5240 75%, #072318 100%)",
      }}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,162,39,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Soft glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] opacity-[0.07] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #c9a227 0%, transparent 65%)" }}
      />

      <Container className="relative z-10 py-28 md:py-36">
        <div className="max-w-3xl">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-px w-10 bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-sans font-medium">
                Islamabad, Pakistan
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[3.4rem] xl:text-[4rem] font-medium text-cream leading-[1.08] tracking-tight"
            >
              Transforming{" "}
              <span className="text-gold italic">Resources</span>
              <br />
              into Sustainable
              <br />
              Prosperity
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-6 h-0.5 w-16 bg-gold origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="mt-5 text-cream/65 text-base md:text-lg leading-relaxed font-sans max-w-md"
            >
              A diversified multinational business group bridging investment
              opportunities between Pakistan, Central Asia, the Middle East,
              and global markets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button variant="gold" size="lg" onClick={() => scrollToSection("sectors")}>
                Explore Our Sectors
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
                Get in Touch
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.05 }}
              className="mt-12 grid grid-cols-3 gap-5 max-w-xs"
            >
              {[
                { number: "7+",   label: "Sectors"     },
                { number: "5+",   label: "Markets"     },
                { number: "2024", label: "Established" },
              ].map((s) => (
                <div key={s.label} className="border-l border-gold/25 pl-4">
                  <p className="font-serif text-2xl text-gold font-medium">{s.number}</p>
                  <p className="text-cream/40 text-[10px] tracking-widest uppercase font-sans mt-0.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Slogan strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="relative z-10 border-t border-gold/15 mt-auto"
      >
        <div className="bg-forest-dark/50 backdrop-blur-sm py-4">
          <p className="text-center text-gold/65 text-[10px] tracking-[0.35em] uppercase font-sans font-medium px-4">
            BUILDING PROSPERITY
            <span className="text-gold/25 mx-3">•</span>
            SERVING HUMANITY
            <span className="text-gold/25 mx-3">•</span>
            INSPIRING FUTURES
          </p>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={() => scrollToSection("overview")}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 group"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-widest uppercase font-sans text-cream/30 group-hover:text-cream/50 transition-colors">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-gold/35 group-hover:text-gold/60 transition-colors"
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
