"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkmodeToggle from "./darkmode";
import { LayoutGroup, motion } from "framer-motion";
import clsx from "clsx";
import Small from "./typography/small";
import P from "./typography/p";
import { MenuIcon } from "lucide-react";
import { Button } from "./button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./sheet";
import { find } from 'lodash'

export default function navbar({
  refs
}: {
  refs: {
    [x: string]: { name: string, matcher?: string[] }
  }
}) {
  let pathname = usePathname();
  if (pathname.startsWith("/blog")) {
    pathname = "/blog";
  }
  return (
    <nav>
      <div className="flex md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side={'left'} className="w-[150px]">
            {Object.entries(refs).map(
              ([path, { name, matcher }]) => {
                const isActive = !!find(matcher, (n) => n==pathname) || path === pathname;
                return (
                    <SheetClose asChild key={path}>
                        <Link
                            href={path}
                            className={clsx(
                            "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle",
                            {
                                "text-neutral-500 dark:text-neutral-400": !isActive,
                            }
                            )}
                        >
                            <Small className="relative py-1 px-2">{name}</Small>
                        </Link>
                    </SheetClose>
                );
              }
            )}
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
                  ([path, { name, matcher = [] }]) => {
                    const isActive = !!find(matcher, (n) => pathname.match(n)) || path === pathname;
                    return (
                      <Link
                        key={path}
                        href={path}
                        className={clsx(
                          "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle",
                          {
                            "text-neutral-500 dark:text-neutral-400": !isActive,
                          }
                        )}
                      >
                        <Small className="relative py-1 px-2">
                          {name}
                          {isActive ? (
                            <motion.div
                              className="absolute border-b-2 h-8 inset-0 border-neutral-300 dark:border-neutral-800 z-[-1]"
                              layoutId="navbar"
                              transition={{
                                type: "spring",
                                stiffness: 350,
                                damping: 30,
                              }}
                            />
                          ) : null}
                        </Small>
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
