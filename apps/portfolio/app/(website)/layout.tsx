import "kd-ui/styles/global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "kd-ui/ui/theme-provider";
import Navbar from "kd-ui/ui/navbar";
import { Analytics } from '@vercel/analytics/react'
import clsx from "clsx";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Krishna Dubagunta (KD)",
    template: "%s | Krishna Dubagunta",
  },
  description: "Portfolio site of KD",
  icons: [
    {
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "sm:px-12 lg:px-20 px-4 py-6"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar
            refs={{
              "/": {
                name: "Home",
              },
              "/blogs": {
                matcher: ["/blogs?/*"],
                name: "Blog",
              },
              "/gallery": {
                matcher: ["/gallery?/*"],
                name: "Gallery",
              },
            }}
          />
          <main className="flex min-h-screen flex-col justify-between pt-4">
            {children}
          </main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
