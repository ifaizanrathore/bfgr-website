import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll, StaggerChildren, StaggerItem } from "@/components/AnimateOnScroll";
import { LeadershipPhoto } from "@/components/LeadershipPhoto";
import { chairman } from "@/data";
import { CheckCircle2, Quote } from "lucide-react";

export function Leadership() {
  return (
    <section
      id="leadership"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #072318 0%, #0b3d2e 60%, #072318 100%)",
      }}
    >
      {/* Decorative bg */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,162,39,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <Container className="relative z-10">
        <AnimateOnScroll>
          <SectionHeading
            number="05"
            label="Leadership"
            title="Visionary Leadership at the Helm"
            light
          />
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Photo + name card */}
          <AnimateOnScroll className="lg:col-span-2" direction="left">
            <div className="relative">
              {/* Photo */}
              {/* TODO: replace /public/images/chairman.jpeg with actual client photo */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-gold/20 shadow-2xl max-w-sm mx-auto lg:mx-0">
                <LeadershipPhoto
                  src={chairman.imagePath}
                  alt={`${chairman.name} — ${chairman.title}`}
                  name={chairman.name}
                />
                {/* Gold frame accent */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-gold/10 pointer-events-none z-20" />
              </div>

              {/* Name card */}
              <div className="mt-6 p-5 rounded-xl bg-white/5 border border-gold/15 text-center lg:text-left">
                <p className="font-serif text-2xl text-cream font-medium">
                  {chairman.name}
                </p>
                <p className="text-gold text-sm font-sans font-medium mt-1">
                  {chairman.title}
                </p>
                <p className="text-cream/50 text-xs font-sans mt-0.5">
                  {chairman.subtitle}
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Bio & details */}
          <div className="lg:col-span-3 min-w-0">
            <AnimateOnScroll delay={0.1}>
              <p className="text-cream/70 text-base leading-relaxed font-sans mb-8">
                {chairman.bio}
              </p>
            </AnimateOnScroll>

            {/* Pull quote */}
            <AnimateOnScroll delay={0.2}>
              <blockquote className="relative my-8 pl-6 border-l-2 border-gold">
                <Quote
                  className="absolute -top-2 -left-1 text-gold/30"
                  size={32}
                />
                <p className="font-serif text-xl md:text-2xl text-gold/90 italic font-light leading-relaxed">
                  {chairman.pullQuote}
                </p>
              </blockquote>
            </AnimateOnScroll>

            {/* Areas of expertise */}
            <AnimateOnScroll delay={0.3}>
              <p className="text-gold text-xs tracking-widest uppercase font-sans font-medium mb-5">
                Areas of Expertise
              </p>
            </AnimateOnScroll>

            <StaggerChildren className="grid sm:grid-cols-2 gap-3" staggerDelay={0.06}>
              {chairman.expertise.map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="flex-shrink-0 text-gold/60 mt-0.5"
                      size={16}
                    />
                    <span className="text-cream/70 text-sm font-sans leading-snug">
                      {item}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </Container>
    </section>
  );
}
