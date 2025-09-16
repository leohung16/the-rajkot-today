import type { Metadata } from "next";
import { Geist, Geist_Mono, Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LocaleProvider } from "@/context/LocaleContext";
import StickyMobileAd from "@/components/StickyMobileAd";
import GoogleAdsProvider from "@/components/GoogleAdsProvider";
import Script from "next/script";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "The Rajkot Today",
    template: "%s | The Rajkot Today",
  },
  description: "Local Rajkot news, sports, business, entertainment and more.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://allzyapp.in"),
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    title: "The Rajkot Today",
    description: "Local Rajkot news, sports, business, entertainment and more.",
    url: "/",
    siteName: "The Rajkot Today",
    images: [
      { url: "/og-default.svg", width: 1200, height: 630, alt: "The Rajkot Today" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Rajkot Today",
    description: "Local Rajkot news, sports, business, entertainment and more.",
    images: ["/og-default.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} antialiased`}
      >
        <LocaleProvider>
          <Navbar />
          <main className="mx-auto max-w-6xl px-4 sm:px-6 pb-24 md:pb-0">{children}</main>
          <Footer />
          <StickyMobileAd />
          <GoogleAdsProvider />
          <Script id="org-jsonld" type="application/ld+json" strategy="afterInteractive">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NewsMediaOrganization',
              name: 'The Rajkot Today',
              url: siteConfig.siteUrl,
              email: siteConfig.email,
              telephone: siteConfig.phone,
              logo: `${siteConfig.siteUrl.replace(/\/$/, '')}/logo-publisher.svg`,
              parentOrganization: {
                '@type': 'Organization',
                name: siteConfig.teamName
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'University Marg',
                addressLocality: 'Rajkot',
                addressRegion: 'Gujarat',
                postalCode: '360005',
                addressCountry: 'IN'
              }
            })}
          </Script>
        </LocaleProvider>
      </body>
    </html>
  );
}
