import type { Metadata } from "next";
import { Archivo, Public_Sans } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/content/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["600", "700", "800"],
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Civil Engineering & Multi-services`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "en_RW",
    siteName: site.name,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${publicSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-navy">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <JsonLd />
        <Analytics />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
