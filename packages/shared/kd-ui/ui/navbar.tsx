"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGroup, motion } from "framer-motion";
import clsx from "clsx";
import Small from "./typography/small";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./sheet";
import { find } from 'lodash';
import DarkmodeToggle from "./darkmode";

export default function Navbar({
  refs
}: {
  refs: {
    [x: string]: { name: string, matcher?: string[], external?: boolean }
  }
}) {
  const pathname = usePathname();
  return (
    <nav>
      <div className="flex md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side={'left'} className="w-[150px] space-y-2">
            <div className="space-y-2">
              {Object.entries(refs).map(
                ([path, { name, matcher, external }]) => {
                  const isActive = !!find(matcher, (n) => n==pathname) || path === pathname;
                  const linkClassName = clsx(
                    "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle",
                    {
                      "text-neutral-500 dark:text-neutral-400": !isActive,
                    }
                  );
                  return (
                      <SheetClose asChild key={path}>
                          {external ? (
                              <a href={path} className={linkClassName}>
                                  <Small className="relative py-1 px-2">{name}</Small>
                              </a>
                          ) : (
                              <Link href={path} className={linkClassName}>
                                  <Small className="relative py-1 px-2">{name}</Small>
                              </Link>
                          )}
                      </SheetClose>
                  );
                }
              )}
            </div>
            <hr className="border-neutral-400" />
            <DarkmodeToggle />
          </SheetContent>
        </Sheet>
      </div>
      <div className="w-full hidden md:flex 2xl:text-lg text-md justify-between items-center">
        <div className="flex items-center">
          <LayoutGroup>
            <div className="fade">
              <div className="flex pr-4">
                {Object.entries(refs).map(
                  ([path, { name, matcher = [], external }]) => {
                    const isActive = !!find(matcher, (n) => pathname.match(n)) || path === pathname;
                    const linkClassName = clsx(
                      "transition-all hover:text-muted-foreground/60 flex align-middle",
                      {
                        "text-muted-foreground": !isActive,
                      }
                    );
                    const content = (
                      <Small className="relative py-1 px-2">
                        {name}
                        {isActive ? (
                          <motion.div
                            className="absolute border-b-2 h-8 inset-0 border-primary z-[-1]"
                            layoutId="navbar"
                            transition={{
                              type: "spring",
                              stiffness: 350,
                              damping: 30,
                            }}
                          />
                        ) : null}
                      </Small>
                    );
                    return external ? (
                      <a key={path} href={path} className={linkClassName}>
                        {content}
                      </a>
                    ) : (
                      <Link key={path} href={path} className={linkClassName}>
                        {content}
                      </Link>
                    );
                  }
                )}
              </div>
            </div>
          </LayoutGroup>
        </div>
        <DarkmodeToggle />
      </div>
    </nav>
  );
}
