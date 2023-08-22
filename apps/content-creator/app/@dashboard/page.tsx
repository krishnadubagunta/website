"use client";
import { redirect, usePathname, useRouter, useSelectedLayoutSegment } from "next/navigation";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if(pathname === '/') {
    redirect('/medias')
  }
    return <div>{children}</div>
}