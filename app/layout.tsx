import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "We hit $10. Now the goal is $10k. | That's the site.",
  description:
    "A transparent, no-BS parody site. We crossed $10. Internet restored. Now going viral on Reddit and aiming for $10k. No begging. Just vibes and a donor leaderboard.",
  openGraph: {
    title: "We hit $10. Now the goal is $10k.",
    description:
      "Internet restored. Site went viral. Goal: $10,000. Top donors leaderboard. No pressure. (Some pressure.)",
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
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
