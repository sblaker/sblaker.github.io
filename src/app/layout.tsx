import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Antonino Trifirò | Cybersecurity Engineer",
  description: "Portfolio of Antonino Trifirò, Computer Engineering student specializing in Cybersecurity. SOC Analyst, Blue Team, Machine Learning for IDS detection.",
  keywords: ["Cybersecurity", "SOC Analyst", "Blue Team", "IDS", "Machine Learning", "Zero-Day Detection", "Wazuh SIEM", "Python"],
  authors: [{ name: "Antonino Trifirò" }],
  creator: "Antonino Trifirò",
  openGraph: {
    type: "website",
    url: "https://sblaker.github.io",
    title: "Antonino Trifirò | Cybersecurity Engineer",
    description: "Portfolio of Antonino Trifirò, Computer Engineering student specializing in Cybersecurity. SOC Analyst, Blue Team, Machine Learning for IDS detection.",
    siteName: "Antonino Trifirò Portfolio",
    images: [
      {
        url: "https://sblaker.github.io/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Antonino Trifirò",
      },
    ],
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antonino Trifirò | Cybersecurity Engineer",
    description: "Portfolio of Antonino Trifirò, Computer Engineering student specializing in Cybersecurity.",
    images: ["https://sblaker.github.io/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://sblaker.github.io",
  },
  verification: {
    google: "google8d8c25c91d303331",
  },
  icons: {
    icon: "/favicon.ico?v=2",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ParticlesBackground />
        
        <div className="relative z-10">
          <div className="w-full max-w-5xl mx-auto px-4 pt-4">
            <Navbar />
          </div>
          {children}
        </div>
        
      </body>
    </html>
  );
}