import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll, StaggerChildren, StaggerItem } from "@/components/AnimateOnScroll";
import { Globe2, TrendingUp, MapPin } from "lucide-react";

const highlights = [
  {
    icon: Globe2,
    title: "Global Reach",
    body: "Bridging investment opportunities between Pakistan, Central Asia, North & South East Asia, the Middle East, and global markets.",
  },
  {
    icon: TrendingUp,
    title: "Diversified Portfolio",
    body: "Seven high-impact business sectors spanning mining, real estate, manufacturing, healthcare, trade, and strategic investments.",
  },
  {
    icon: MapPin,
    title: "Strategic Geography",
    body: "Leveraging Pakistan's unique geographic advantages to connect resource-rich regions with international markets and investors.",
  },
];

export function CompanyOverview() {
  return (
    <section id="overview" className="py-20 md:py-28 bg-cream">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: text */}
          <div>
            <AnimateOnScroll>
              <SectionHeading
                number="01"
                label="Company Overview"
                title="Building Sustainable Economic Value"
                subtitle="A diversified business enterprise committed to creating sustainable economic value across multiple sectors."
              />
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="text-slate leading-relaxed text-base mb-5 font-sans">
                Baba Farid Global Resources is a diversified business enterprise
                established with the vision of becoming a leading regional and
                international investment, trading, industrial, and development
                group.
              </p>
              <p className="text-slate leading-relaxed text-base mb-5 font-sans">
                The company creates sustainable economic value through strategic
                investments, responsible resource utilization, innovative
                business practices, and strong partnerships across multiple
                sectors.
              </p>
              <p className="text-slate leading-relaxed text-base font-sans">
                It aims to bridge investment opportunities between Pakistan,
                Central Asia, North & South East Asia, the Middle East, and
                other global markets — leveraging Pakistan&apos;s unique
                geographic advantages to connect resource-rich regions with
                international markets and investors.
              </p>
            </AnimateOnScroll>

            {/* Motto */}
            <AnimateOnScroll delay={0.25}>
              <div className="mt-8 pl-5 border-l-2 border-gold">
                <p className="font-serif text-xl text-forest-dark italic font-medium">
                  &ldquo;Together for a Better World&rdquo;
                </p>
                <p className="text-slate-light text-sm mt-1 font-sans tracking-wide uppercase">
                  — BFGR Motto
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right: highlight cards */}
          <StaggerChildren className="space-y-5" staggerDelay={0.12}>
            {highlights.map((item) => (
              <StaggerItem key={item.title}>
                <div className="group flex gap-5 p-6 bg-white rounded-xl border border-slate/10 hover:border-gold/30 hover:shadow-[0_8px_32px_rgba(201,162,39,0.1)] transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-forest/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
                    <item.icon
                      className="text-forest group-hover:text-gold transition-colors duration-300"
                      size={22}
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-forest-dark mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate text-sm leading-relaxed font-sans">
                      {item.body}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}

            {/* Geographic focus card */}
            <StaggerItem>
              <div
                className="rounded-xl p-6 text-cream"
                style={{
                  background:
                    "linear-gradient(135deg, #0b3d2e 0%, #072318 100%)",
                }}
              >
                <p className="text-gold text-xs tracking-widest uppercase font-sans font-medium mb-3">
                  Strategic Geographic Focus
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Pakistan",
                    "Central Asia",
                    "South East Asia",
                    "Middle East",
                    "Global Markets",
                  ].map((region) => (
                    <span
                      key={region}
                      className="px-3 py-1.5 rounded-full border border-gold/30 text-cream/80 text-xs font-sans"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </Container>
    </section>
  );
}
