import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Baba Farid Global Resources (BFGR) | Transforming Resources into Sustainable Prosperity",
  description:
    "BFGR is a diversified multinational business group based in Islamabad, Pakistan, operating across Mining, Real Estate, Garments, Pharmaceuticals, Surgical Equipment, Trade, and Strategic Investments.",
  keywords: [
    "BFGR",
    "Baba Farid Global Resources",
    "Pakistan investment",
    "mining Pakistan AJK",
    "real estate Islamabad",
    "pharmaceutical Pakistan",
    "surgical instruments Pakistan",
    "international trade Central Asia",
  ],
  authors: [{ name: "Baba Farid Global Resources" }],
  openGraph: {
    title: "Baba Farid Global Resources (BFGR)",
    description:
      "Transforming Resources into Sustainable Prosperity — a diversified multinational business group based in Islamabad, Pakistan.",
    type: "website",
    locale: "en_US",
    siteName: "Baba Farid Global Resources",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baba Farid Global Resources (BFGR)",
    description: "Transforming Resources into Sustainable Prosperity",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
