import type { Metadata } from "next";

import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.className} ${openSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
