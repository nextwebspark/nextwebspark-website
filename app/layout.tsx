import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextwebspark.com"),
  title: {
    default: "NextWebSpark — AI Agents & Automation for Business Growth",
    template: "%s | NextWebSpark",
  },
  description:
    "We build production-grade AI agents and automation systems that help SMEs and enterprises cut costs, boost productivity, and scale operations. Training, consultancy, and full deployment.",
  keywords: [
    "AI agents",
    "AI automation",
    "business automation",
    "AI consulting",
    "Claude AI",
    "n8n automation",
    "AI training",
    "lead generation AI",
    "customer support AI",
    "enterprise AI",
    "SME automation",
    "AI strategy",
  ],
  authors: [{ name: "NextWebSpark" }],
  creator: "NextWebSpark",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://nextwebspark.com",
    siteName: "NextWebSpark",
    title: "NextWebSpark — AI Agents & Automation for Business Growth",
    description:
      "Production-grade AI agents and automation systems for SMEs and enterprises. Training, consultancy, and full deployment.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NextWebSpark — AI Solutions for Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextWebSpark — AI Agents & Automation for Business Growth",
    description:
      "Production-grade AI agents and automation systems for SMEs and enterprises.",
    images: ["/og-image.png"],
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
