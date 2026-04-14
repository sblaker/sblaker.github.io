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
  description: "Portfolio of Antonino Trifirò, Computer Engineering student specializing in Cybersecurity.",
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