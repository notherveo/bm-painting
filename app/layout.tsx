import * as React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "PRISM & PINE | House Painting & Custom Murals",
  description:
    "Residential painting, custom children's bedroom murals, and professional color consultation. Your home, beautifully remade.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="bg-[#FFFDF8] text-[#22211b] antialiased font-sans selection:bg-[#ff9e6b] selection:text-white">
        <header className="site-header" />
        <main>{children}</main>
        <footer className="site-footer" />
      </body>
    </html>
  );
}
