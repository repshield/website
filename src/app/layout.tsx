import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RepShield — AI-Powered Reputation Management",
  description:
    "RepShield drafts perfect responses to every Google review in seconds. Human-in-the-loop AI keeps your brand voice consistent while you approve in under 3 seconds.",
  keywords: ["reputation management", "Google reviews", "AI responses", "review management", "RepShield"],
  openGraph: {
    title: "RepShield — AI-Powered Reputation Management",
    description: "Your brand's reputation, on autopilot.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased" style={{ backgroundColor: '#060913', color: '#F8FAFC' }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
