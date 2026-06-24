import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CompanyOverview } from "@/components/CompanyOverview";
import { VisionMission } from "@/components/VisionMission";
import { CoreValues } from "@/components/CoreValues";
import { BusinessSectors } from "@/components/BusinessSectors";
import { Leadership } from "@/components/Leadership";
import { InvestmentPartnership } from "@/components/InvestmentPartnership";
import { CorporateCommitment } from "@/components/CorporateCommitment";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CompanyOverview />
        <VisionMission />
        <CoreValues />
        <BusinessSectors />
        <Leadership />
        <InvestmentPartnership />
        <CorporateCommitment />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
