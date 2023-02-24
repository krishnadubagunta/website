'use client';
import { usePathname as usePathnameHook } from "next/navigation";

export default function usePathname() {
    const pathname = usePathnameHook();
    
    return pathname.split('/').slice(-1)[0];
}