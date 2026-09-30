import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Alef, Heebo } from "next/font/google";

import { BlobDefs } from "@/components/Decor";
import { FloatingSocial } from "@/components/FloatingSocial";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";
import { websiteSchema } from "@/lib/schema";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-heebo",
});

const alef = Alef({
  subsets: ["hebrew", "latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-alef",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    url: "/",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#fffbf0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${alef.variable}`} suppressHydrationWarning>
      <head>
        {/* Marks JS as available so motion can start from hidden states; without JS everything stays visible. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <BlobDefs />
        <a className="skip-link" href="#main">
          דילוג לתוכן
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <FloatingSocial />
        <JsonLd data={websiteSchema()} />
      </body>
    </html>
  );
}
