import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll, StaggerChildren, StaggerItem } from "@/components/AnimateOnScroll";
import { Eye, Target } from "lucide-react";

const items = [
  {
    icon: Eye,
    label: "Our Vision",
    title: "A Trusted Multinational Business Group",
    body: "To become a trusted multinational business group recognized for innovation, integrity, sustainability, and excellence in investment, industrial development, natural resource management, and international trade.",
    accent: "Vision",
  },
  {
    icon: Target,
    label: "Our Mission",
    title: "Profitable & Sustainable Enterprises",
    body: "To develop profitable and sustainable enterprises that contribute to economic growth, employment generation, technological advancement, and social development while maintaining the highest standards of corporate governance and ethical business practices.",
    accent: "Mission",
  },
];

export function VisionMission() {
  return (
    <section
      id="vision"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #072318 0%, #0b3d2e 50%, #0f5240 100%)",
      }}
    >
      {/* Decorative element */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 80%, #c9a227 0%, transparent 50%), radial-gradient(circle at 80% 20%, #c9a227 0%, transparent 50%)",
        }}
      />

      <Container className="relative z-10">
        <AnimateOnScroll>
          <SectionHeading
            number="02"
            label="Vision & Mission"
            title="Guided by Purpose"
            align="center"
            light
          />
        </AnimateOnScroll>

        <StaggerChildren
          className="mt-4 grid md:grid-cols-2 gap-6 lg:gap-10"
          staggerDelay={0.15}
        >
          {items.map((item) => (
            <StaggerItem key={item.label}>
              <div className="group relative h-full rounded-2xl p-6 md:p-10 border border-gold/15 bg-white/[0.04] hover:bg-white/[0.07] hover:border-gold/30 transition-all duration-400 flex flex-col">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold/15 transition-colors duration-300">
                  <item.icon className="text-gold" size={26} />
                </div>

                {/* Label */}
                <p className="text-gold text-xs tracking-widest uppercase font-sans font-medium mb-3">
                  {item.label}
                </p>

                {/* Title */}
                <h3 className="font-serif text-2xl md:text-3xl text-cream font-medium leading-snug mb-5">
                  {item.title}
                </h3>

                {/* Divider */}
                <div className="w-10 h-0.5 bg-gold/50 mb-5" />

                {/* Body */}
                <p className="text-cream/65 leading-relaxed text-base font-sans flex-1">
                  {item.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
