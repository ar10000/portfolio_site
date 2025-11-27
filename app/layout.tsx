import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

// Dynamically import VoiceAIChatbot to avoid SSR issues
const VoiceAIChatbot = dynamic(() => import("@/components/VoiceAIChatbot"), {
  ssr: false,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://andrewryan.dev";

export const metadata: Metadata = {
  title: {
    default: "Andrew Ryan - AI Solutions Developer | Custom AI Tools & Workflow Automation",
    template: "%s | Andrew Ryan",
  },
  description:
    "AI Solutions Developer in Brussels. I build custom AI tools, workflow automations, and rapid prototypes for businesses in days, not months. No enterprise pricing, just fast, practical solutions.",
  keywords: [
    "AI product builder",
    "automation specialist",
    "AI tools",
    "workflow automation",
    "rapid prototyping",
    "Claude AI",
    "Make.com",
    "Next.js developer",
  ],
  authors: [{ name: "Andrew Ryan" }],
  creator: "Andrew Ryan",
  publisher: "Andrew Ryan",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Andrew Ryan - AI Product Builder",
    title: "Andrew Ryan - AI Product Builder",
    description:
      "AI Solutions Developer in Brussels. I build custom AI tools, workflow automations, and rapid prototypes for businesses in days, not months. No enterprise pricing, just fast, practical solutions.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Andrew Ryan - AI Product Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Ryan - AI Product Builder",
    description:
      "AI Solutions Developer in Brussels. I build custom AI tools, workflow automations, and rapid prototypes for businesses in days, not months. No enterprise pricing, just fast, practical solutions.",
    images: [`${siteUrl}/og-image.jpg`],
    creator: "@AndrewR53368303",
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
  verification: {
    // Add your verification codes here
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body>
        {/* Google Analytics - Uncomment and add your GA ID */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
        <Navigation />
        <main id="main-content" className="min-h-screen" role="main">
          {children}
        </main>
        <Footer />
        <VoiceAIChatbot position="bottom-right" />
      </body>
    </html>
  );
}

