import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Playfair_Display } from "next/font/google";
import { Navigation } from "@/components/layout/Navigation";
import { TechnicalGrid } from "@/components/layout/TechnicalGrid";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Swinburne Engineering Student Society (SESS)",
  description: "The central industry-facing engineering body connecting multidisciplinary student talent with professional opportunity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${playfair.variable} font-sans antialiased bg-sess-bg text-sess-text-primary min-h-screen flex flex-col`}
      >
        <TechnicalGrid />
        <Navigation />
        <main className="flex-grow flex flex-col">{children}</main>
        {/* Footer will be added in a later phase */}
      </body>
    </html>
  );
}
