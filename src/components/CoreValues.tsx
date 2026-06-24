import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerChildren, StaggerItem, AnimateOnScroll } from "@/components/AnimateOnScroll";
import { coreValues } from "@/data";

export function CoreValues() {
  const foundational = coreValues.filter((v) => v.category === "foundational");
  const operational = coreValues.filter((v) => v.category === "operational");

  return (
    <section id="values" className="py-20 md:py-28 bg-white">
      <Container>
        <AnimateOnScroll>
          <SectionHeading
            number="03"
            label="Core Values"
            title="Principles That Guide Everything We Do"
            subtitle="Our values are not just words — they are the foundation upon which every decision, partnership, and enterprise is built."
            align="center"
          />
        </AnimateOnScroll>

        {/* ── Foundational values ──────────────────────────────────────── */}
        <AnimateOnScroll delay={0.1}>
          <p className="text-xs tracking-widest uppercase text-gold font-sans font-semibold mb-6 text-center">
            Foundational Values
          </p>
        </AnimateOnScroll>

        <StaggerChildren
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
          staggerDelay={0.07}
        >
          {foundational.map((value) => (
            <StaggerItem key={value.title} className="h-full">
              <div className="group h-full flex flex-col items-center text-center p-5 rounded-xl border border-slate/10 hover:border-gold/40 hover:shadow-[0_8px_32px_rgba(201,162,39,0.12)] transition-all duration-300 cursor-default bg-cream/50 hover:bg-white">
                <div className="w-12 h-12 rounded-full bg-forest/5 flex items-center justify-center mb-4 group-hover:bg-gold/10 group-hover:scale-110 transition-all duration-300">
                  <value.icon
                    className="text-forest group-hover:text-gold transition-colors duration-300"
                    size={20}
                  />
                </div>
                <h4 className="font-serif text-[15px] font-semibold text-forest-dark leading-snug">
                  {value.title}
                </h4>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* ── Operational values ───────────────────────────────────────── */}
        <AnimateOnScroll delay={0.1}>
          <p className="text-xs tracking-widest uppercase text-gold font-sans font-semibold mb-6 text-center">
            Operational Values
          </p>
        </AnimateOnScroll>

        <StaggerChildren
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch"
          staggerDelay={0.08}
        >
          {operational.map((value) => (
            <StaggerItem key={value.title} className="h-full">
              <div className="group h-full flex flex-col p-6 rounded-xl border border-slate/10 hover:border-gold/30 hover:shadow-[0_8px_28px_rgba(201,162,39,0.11)] transition-all duration-300 bg-cream/50 hover:bg-white">
                {/* Icon */}
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-forest/5 border border-forest/8 flex items-center justify-center mb-4 group-hover:bg-gold/10 group-hover:border-gold/20 transition-all duration-300">
                  <value.icon
                    className="text-forest group-hover:text-gold transition-colors duration-300"
                    size={19}
                  />
                </div>

                {/* Title — serif, prominent */}
                <h4 className="font-serif text-lg font-semibold text-forest-dark leading-tight mb-2">
                  {value.title}
                </h4>

                {/* Gold rule */}
                <div className="h-px w-8 bg-gold/35 mb-3 group-hover:bg-gold/60 transition-colors duration-300" />

                {/* Description */}
                <p className="font-serif text-[13px] text-slate leading-relaxed flex-1 italic">
                  {value.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
