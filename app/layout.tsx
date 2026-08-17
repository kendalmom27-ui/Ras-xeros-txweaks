import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { site } from "../lib/site";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora-loaded",
});

export const metadata: Metadata = {
  title: `${site.fullName} - Optimize Your PC For Gaming`,
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-sora)]">
        {children}
      </body>
    </html>
  );
}
