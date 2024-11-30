import "kd-ui/styles/global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "kd-ui/ui/theme-provider";
import NextAuthProvider from "next-auth-config/components/provider";
import Navbar from "kd-ui/ui/navbar";
import clsx from "clsx";
import { getServerSession } from "next-auth/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Content Creator | Krishna Dubagunta",
    template: "%s | Content Creator | Krishna Dubagunta",
  },

  description: "Content creator application by Krishna Dubagunta",

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
  ]
};

export default async function RootLayout({
  dashboard,
  login,
}: {
  dashboard: React.ReactNode;
  login: React.ReactNode;
}) {
  const { user } = (await getServerSession()) || {}
  if (!user) {
    return <html lang="en" suppressHydrationWarning>
    <body
      className={clsx(
        inter.className,
        "antialiased sm:px-12 lg:px-20 px-4 py-6"
      )}
    >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <NextAuthProvider>
          <Navbar
            refs={{
              "/": {
                matcher: ["/medias", "/socials"],
                name: "Dashboard",
              },
              "/new/media": {
                name: "Create Media"
              }
            }}
          />
          <main className="flex min-h-screen flex-col justify-between pt-4">
            {login}
          </main>
        </NextAuthProvider>
      </ThemeProvider>
    </body>
  </html>
  }
  return (<html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          inter.className,
          "antialiased sm:px-12 lg:px-20 px-4 py-6"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextAuthProvider>
            <Navbar
              refs={{
                "/": {
                  matcher: ["/medias", "/socials"],
                  name: "Dashboard",
                },
                "/new/media": {
                  name: "Create Media"
                }
              }}
            />
            <main className="flex min-h-screen flex-col justify-between pt-4">
              { dashboard }
            </main>
          </NextAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
