import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.company.name} - ${siteConfig.company.tagline}`,
    template: `%s | ${siteConfig.company.name}`,
  },
  description: siteConfig.company.description,
  keywords: [
    "broadband Gujarat",
    "fiber internet Ahmedabad",
    "FTTH Vadodara",
    "leased line Surat",
    "ILL Gujarat",
    "ISP Rajkot",
    "internet service provider",
    "high speed internet",
    "fiber broadband",
    "enterprise bandwidth",
  ],
  authors: [{ name: siteConfig.company.legalName }],
  creator: siteConfig.company.legalName,
  metadataBase: new URL(siteConfig.urls.base),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.urls.base,
    title: `${siteConfig.company.name} - ${siteConfig.company.tagline}`,
    description: siteConfig.company.description,
    siteName: siteConfig.company.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.company.name} - ${siteConfig.company.tagline}`,
    description: siteConfig.company.description,
    creator: "@bitconnect",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <WhatsAppButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
