import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { ScrollToTop } from "@/constants";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Leaf Advocates LLC",
    template: "%s | Leaf Advocates LLC",
  },
  description:
    "Your trusted legal partner for businesses and individuals in Kenya. Expert legal counsel and representation.",
  keywords: [
    "law firm",
    "legal services",
    "Kenya law",
    "advocates",
    "legal counsel",
    "Nairobi lawyers",
  ],
  authors: [{ name: "Leaf Advocates LLC" }],
  creator: "Leaf Advocates LLC",
  publisher: "Leaf Advocates LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://leafadvocates.com"),
  openGraph: {
    title: "Leaf Advocates LLC",
    description: "Your trusted legal partner for businesses and individuals.",
    url: "https://leafadvocates.com",
    siteName: "Leaf Advocates LLC",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Leaf Advocates LLC - Your Trusted Legal Partner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leaf Advocates LLC",
    description: "Your trusted legal partner for businesses and individuals.",
    images: ["/og-image.jpg"],
    creator: "@leafadvocates",
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
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f3b2e" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-[var(--leaf-soft)] to-white`}
      >
        <div className="relative flex min-h-screen flex-col">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-md z-50"
          >
            Skip to main content
          </a>

          <Navbar />

          <main id="main-content" className="flex-1 w-full">
            {children}
          </main>

          <Footer />

          <ScrollToTop />

          <Toaster
            position="top-right"
            richColors
            closeButton
            expand={false}
            duration={4000}
          />
        </div>
      </body>
    </html>
  );
}
