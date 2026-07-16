import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://loopwren.com"),
  title: "Loopwren | Custom Software & Ready-Made Business Solutions",
  description: "Small but precise software and app development studio.",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Loopwren | Custom Software & Ready-Made Business Solutions",
    description: "Small but precise software and app development studio.",
    url: "https://loopwren.com",
    siteName: "Loopwren",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Loopwren Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased font-sans flex flex-col min-h-screen bg-background text-foreground`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
