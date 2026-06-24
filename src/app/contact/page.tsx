import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Contact BFGR | Baba Farid Global Resources",
  description:
    "Get in touch with Baba Farid Global Resources for investment opportunities, partnerships, and business enquiries. Based in Islamabad, Pakistan.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
