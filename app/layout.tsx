import type { Metadata } from "next";

import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Doréa Mokhtari ⸱ Développeuse Front End",
  description: "Intégratrice Web spécialisée React",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.className} h-full bg-background text-foreground ${openSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
