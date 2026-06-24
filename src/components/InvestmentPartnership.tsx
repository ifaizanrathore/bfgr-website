import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll, StaggerChildren, StaggerItem } from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { investmentPartners } from "@/data";
import { ArrowRight } from "lucide-react";

export function InvestmentPartnership() {
  return (
    <section id="partnership" className="py-20 md:py-28 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <AnimateOnScroll>
              <SectionHeading
                number="06"
                label="Investment & Partnerships"
                title="Unlocking Shared Growth & Prosperity"
                subtitle="We welcome strategic collaborations to unlock shared growth and prosperity across our diverse portfolio."
              />
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-slate leading-relaxed font-sans mb-8">
                BFGR offers a unique gateway to Pakistan&apos;s most promising
                growth sectors — backed by deep local market knowledge,
                established networks, and a commitment to transparent, ethical
                business. Whether you&apos;re a global investor, a multinational
                looking for on-ground partnerships, or an emerging company
                seeking access to South and Central Asian markets, we offer
                tailored engagement models.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <blockquote className="my-6 p-6 rounded-xl bg-cream border-l-4 border-gold">
                <p className="font-serif text-xl text-forest-dark italic font-medium leading-snug">
                  &ldquo;Together, we can transform potential into prosperity
                  and resources into sustainable development.&rdquo;
                </p>
              </blockquote>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.25}>
              <Button href="#contact" variant="gold" size="lg">
                Explore Partnership Opportunities
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </AnimateOnScroll>
          </div>

          {/* Right: partner tags */}
          <div>
            <AnimateOnScroll delay={0.1}>
              <p className="text-xs tracking-widest uppercase text-gold font-sans font-medium mb-6">
                We Welcome
              </p>
            </AnimateOnScroll>

            <StaggerChildren
              className="flex flex-wrap gap-3"
              staggerDelay={0.06}
            >
              {investmentPartners.map((partner) => (
                <StaggerItem key={partner}>
                  <div className="group px-4 py-2.5 rounded-full border border-forest/15 bg-cream hover:border-gold/60 hover:bg-gold/5 transition-all duration-300 cursor-default flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors duration-300" />
                    <span className="text-slate group-hover:text-forest-dark text-sm font-sans font-medium transition-colors duration-200">
                      {partner}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>

            {/* Why partner card */}
            <AnimateOnScroll delay={0.3}>
              <div
                className="mt-8 rounded-2xl p-6 text-cream"
                style={{
                  background:
                    "linear-gradient(135deg, #0b3d2e 0%, #072318 100%)",
                }}
              >
                <p className="text-gold text-xs tracking-widest uppercase font-sans font-medium mb-4">
                  Why Partner with BFGR
                </p>
                <ul className="space-y-3">
                  {[
                    "Deep expertise across 7 high-growth sectors",
                    "Established government & institutional relationships",
                    "Unique geographic gateway between Asia & global markets",
                    "Commitment to transparent, ethical governance",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm font-sans text-cream/75">
                      <ArrowRight
                        size={14}
                        className="flex-shrink-0 text-gold mt-0.5"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </Container>
    </section>
  );
}
