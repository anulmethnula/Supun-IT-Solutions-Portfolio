import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/src/components/shell";

export const metadata: Metadata = {
  title: { default: "Supun IT Solutions", template: "%s | Supun IT Solutions" },
  description: "Digital solutions and business systems for the Supun Group of Companies.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/videos/hero-video.mp4" as="video" type="video/mp4" />
      </head>
      <body className="antialiased"><SiteShell>{children}</SiteShell></body>
    </html>
  );
}
