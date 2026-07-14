"use client";

import "../globals.css";
import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { ThemeProvider } from "kd-ui/ui/theme-provider";
import { Analytics } from '@vercel/analytics/react'
import clsx from "clsx";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { SpeedInsights } from "@vercel/speed-insights/next"
import SiteNav from "./_components/site-nav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sourceSerif = Source_Serif_4({ subsets: ["latin"], variable: "--font-source-serif" });

const NAV_REFS = {
  "/": {
    name: "Home",
  },
  "/blog": {
    matcher: ["/blog?/*"],
    name: "Blog",
  },
  "/gallery": {
    matcher: ["/gallery?/*"],
    name: "Gallery",
  },
  "/resume": {
    matcher: ["/resume?/*"],
    name: "Resume",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          inter.variable,
          sourceSerif.variable,
          "flex min-h-screen flex-col",
          isHome ? "" : "sm:px-12 lg:px-20 px-4 py-6 pt-6"
        )}
      >
        <ThemeProvider defaultTheme="dark" enableColorScheme>
          <SiteNav refs={NAV_REFS} />
          <main>
            {children}
          </main>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
