import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll, StaggerChildren, StaggerItem } from "@/components/AnimateOnScroll";
import { sectors } from "@/data";

export function BusinessSectors() {
  return (
    <section
      id="sectors"
      className="py-20 md:py-28 bg-cream"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 90% 10%, rgba(11,61,46,0.04) 0%, transparent 60%)",
      }}
    >
      <Container>
        <AnimateOnScroll>
          <SectionHeading
            number="04"
            label="Business Sectors"
            title="Seven Pillars of Growth"
            subtitle="A diversified portfolio spanning high-impact industries — each chosen for its strategic potential and contribution to sustainable development."
          />
        </AnimateOnScroll>

        <StaggerChildren
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {sectors.map((sector, idx) => (
            <StaggerItem key={sector.id}>
              <div className="group h-full flex flex-col rounded-2xl overflow-hidden border border-slate/10 bg-white hover:border-gold/30 hover:shadow-[0_12px_48px_rgba(0,0,0,0.1)] transition-all duration-400 hover:-translate-y-1">
                {/* Card header */}
                <div
                  className="p-6 flex items-start gap-4"
                  style={{
                    background:
                      "linear-gradient(135deg, #f7f8f5 0%, #ffffff 100%)",
                  }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-forest/5 border border-forest/10 flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold/20 transition-all duration-300">
                    <sector.icon
                      className="text-forest group-hover:text-gold transition-colors duration-300"
                      size={22}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="section-number text-xs font-serif text-gold/60">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-lg font-medium text-forest-dark leading-tight mt-0.5 group-hover:text-forest transition-colors duration-200">
                      {sector.title}
                    </h3>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-slate/8 group-hover:bg-gold/20 transition-colors duration-300" />

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-slate text-sm leading-relaxed font-sans mb-5">
                    {sector.blurb}
                  </p>

                  <ul className="space-y-2 flex-1">
                    {sector.activities.map((activity) => (
                      <li
                        key={activity}
                        className="flex items-start gap-2 text-sm font-sans text-slate"
                      >
                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold/60 group-hover:bg-gold transition-colors duration-300" />
                        {activity}
                      </li>
                    ))}
                  </ul>

                  {/* Highlight badge */}
                  {sector.highlight && (
                    <div className="mt-5 pt-4 border-t border-slate/8">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-sans font-medium">
                        <span className="w-1 h-1 rounded-full bg-gold" />
                        {sector.highlight}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
