import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Help me reach $10 | That's it. That's the site.",
  description:
    "A transparent, no-BS parody site. Someone paid $10 on Buy Me a Coffee. I got $8.77. This is about crossing the withdrawal threshold. No begging. Just vibes.",
  openGraph: {
    title: "Help me reach $10. That's it. That's the site.",
    description:
      "Someone paid $10. I received $8.77. This is about justice. No pressure. Just transparency.",
  },
  robots: "index, follow",
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
        {children}
      </body>
    </html>
  );
}
