import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  title: {
    default: "Akeguno Naturals — Banyak Manfaat dari Alam",
    template: "%s | Akeguno Naturals",
  },
  description:
    "Akeguno Naturals menghadirkan madu murni berkualitas tinggi. Honors nature's gift through authenticity and shared purpose.",
  icons: {
    icon: "https://res.cloudinary.com/dex0zf5nl/image/upload/f_auto,q_auto/v1773918245/Logo_Akeguno_dffs7q.png",
    shortcut: "https://res.cloudinary.com/dex0zf5nl/image/upload/f_auto,q_auto/v1773918245/Logo_Akeguno_dffs7q.png",
    apple: "https://res.cloudinary.com/dex0zf5nl/image/upload/f_auto,q_auto/v1773918245/Logo_Akeguno_dffs7q.png",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Akeguno Naturals",
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

  return (
    <html lang="id" className={`${cormorant.variable} ${raleway.variable}`}>
      <body className="min-h-screen font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer settings={settings} />
        <WhatsAppFloat />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
