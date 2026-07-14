"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Navbar from "kd-ui/ui/navbar";

type NavRefs = {
  [path: string]: { name: string; matcher?: string[] };
};

export default function SiteNav({ refs }: { refs: NavRefs }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setScrolled(false);
      return;
    }

    function handleScroll() {
      setScrolled(window.scrollY > 80);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  if (!isHome) {
    // Layout's body already applies sm:px-12 lg:px-20 px-4 for non-home
    // routes, so no extra padding here — this would otherwise double it.
    return <Navbar refs={refs} />;
  }

  return (
    <div
      className={clsx(
        "fixed inset-x-0 top-0 z-50 sm:px-12 lg:px-20 px-4 py-4 transition-colors duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <Navbar refs={refs} />
    </div>
  );
}
