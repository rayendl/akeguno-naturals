import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { client } from "@/sanity/client";
import { siteSettingsQuery } from "@/sanity/queries";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akegunonaturals.web.id"),
  title: {
    default: "Akeguno Naturals — Banyak Manfaat dari Alam",
    template: "%s | Akeguno Naturals",
  },
  description:
    "Akeguno Naturals menghadirkan madu murni berkualitas tinggi. Honors nature's gift through authenticity and shared purpose.",
  openGraph: {
    title: {
      default: "Akeguno Naturals — Banyak Manfaat dari Alam",
      template: "%s | Akeguno Naturals",
    },
    description: "Akeguno Naturals menghadirkan madu murni berkualitas tinggi. Honors nature's gift through authenticity and shared purpose.",
    url: "https://akegunonaturals.web.id",
    type: "website",
    locale: "id_ID",
    siteName: "Akeguno Naturals",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Akeguno Naturals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akeguno Naturals — Banyak Manfaat dari Alam",
    description: "Akeguno Naturals menghadirkan madu murni berkualitas tinggi.",
    images: ["/hero.jpg"],
  },
};

async function getSettings() {
  try {
    return await client.fetch(siteSettingsQuery);
  } catch {
    return null;
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSettings();
  const mode = await draftMode();

  return (
    <html lang="id" className={`${cormorant.variable} ${raleway.variable}`}>
      <body className="min-h-screen font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer settings={settings} />
        <WhatsAppFloat />
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-PKHCDQDYXY" />
        {mode.isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
