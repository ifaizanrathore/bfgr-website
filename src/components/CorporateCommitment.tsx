import { Container } from "@/components/ui/Container";
import { AnimateOnScroll, StaggerChildren, StaggerItem } from "@/components/AnimateOnScroll";
import { TrendingUp, Users, Leaf, Heart } from "lucide-react";

const pillars = [
  {
    icon: TrendingUp,
    title: "Economic Growth",
    body: "Catalysing investment flows, building industrial capacity, and expanding Pakistan's role in global trade networks.",
  },
  {
    icon: Users,
    title: "Employment Generation",
    body: "Creating sustainable livelihoods across our sectors — from skilled manufacturing to professional services.",
  },
  {
    icon: Leaf,
    title: "Responsible Investment",
    body: "Applying ESG principles and responsible resource utilization to every investment decision we make.",
  },
  {
    icon: Heart,
    title: "Community Development",
    body: "Reinvesting in the communities where we operate — supporting education, healthcare, and social infrastructure.",
  },
];

export function CorporateCommitment() {
  return (
    <section
      id="commitment"
      className="py-20 md:py-28 bg-cream"
    >
      <Container>
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <p className="text-gold text-xs tracking-widest uppercase font-sans font-medium mb-4">
              07 — Corporate Commitment
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-forest-dark font-medium leading-tight text-balance">
              Beyond Business — A Commitment
              <br className="hidden md:block" /> to Society & Sustainability
            </h2>
            <div className="mt-5 h-0.5 w-14 bg-gold mx-auto" />
          </div>
        </AnimateOnScroll>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <div className="group h-full p-7 rounded-2xl border border-slate/10 bg-white hover:border-gold/30 hover:shadow-[0_12px_40px_rgba(201,162,39,0.12)] hover:-translate-y-1 transition-all duration-400 flex flex-col">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-forest/5 border border-forest/10 flex items-center justify-center mb-5 group-hover:bg-gold/10 group-hover:border-gold/20 transition-all duration-300">
                  <pillar.icon
                    className="text-forest group-hover:text-gold transition-colors duration-300"
                    size={24}
                  />
                </div>
                <h3 className="font-serif text-xl font-medium text-forest-dark mb-3 group-hover:text-forest transition-colors duration-200">
                  {pillar.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed font-sans flex-1">
                  {pillar.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Tagline banner */}
        <AnimateOnScroll delay={0.2}>
          <div
            className="mt-16 rounded-2xl py-10 px-6 text-center"
            style={{
              background:
                "linear-gradient(135deg, #0b3d2e 0%, #072318 100%)",
            }}
          >
            <p className="font-serif text-2xl md:text-3xl text-cream font-medium leading-tight italic">
              Transforming Resources into Sustainable Prosperity
            </p>
            <p className="mt-4 text-gold/70 text-xs tracking-[0.3em] uppercase font-sans">
              BUILDING PROSPERITY • SERVING HUMANITY • INSPIRING FUTURES
            </p>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
