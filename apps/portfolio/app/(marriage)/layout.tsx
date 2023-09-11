import "kd-ui/styles/global.css";
import clsx from "clsx";
import TypographyH1 from "kd-ui/ui/typography/h1";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "sm:px-12 lg:px-20 px-4 py-6 text-yellow-600 bg-neutral-900")}>
        <div className="flex w-full justify-center">
          <TypographyH1 paris>
            Chidrupi & Krishna&apos;s wedding invitation
          </TypographyH1>
        </div>
        { children }
      </body>
    </html>
  );
}
