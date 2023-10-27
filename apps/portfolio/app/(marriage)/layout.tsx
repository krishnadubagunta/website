import "kd-ui/styles/global.css";
import clsx from "clsx";
import TypographyH1 from "kd-ui/ui/typography/h1";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: ReactNode }) {
  
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={clsx(inter.className, "sm:px-12 lg:px-20 px-4 py-6 text-yellow-600 bg-white")}>
        <div className="flex w-full justify-center">
          <TypographyH1 paris>
            Chidrupi & Krishna&apos;s wedding
          </TypographyH1>
        </div>
        { children }
      </body>
    </html>
  );
}
