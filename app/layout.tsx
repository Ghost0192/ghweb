import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "../components/shared";
import { Inter } from "next/font/google";

import { ThemeLanguageProvider } from "../context/language";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grupo Hijuelas",
  description:
    "Desarrollamos con excelencia productos y servicios agrícolas a gran escala",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <ThemeLanguageProvider>
          <Header />
          {children}
        </ThemeLanguageProvider>
      </body>
    </html>
  );
}
