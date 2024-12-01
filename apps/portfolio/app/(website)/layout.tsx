"use client";

import "kd-ui/styles/global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "kd-ui/ui/theme-provider";
import Navbar from "kd-ui/ui/navbar";
import { Analytics } from '@vercel/analytics/react'
import clsx from "clsx";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "flex min-h-screen flex-col justify-between pt-6",
          "sm:px-12 lg:px-20 px-4 py-6"
        )}
      >
        <ThemeProvider defaultTheme="dark" enableColorScheme>
          <Navbar
            refs={{
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
            }}
          />
          <main>
            {children}
          </main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
