// "use client"

// import * as React from "react"
// import { Moon, Sun } from "lucide-react"
// import { useTheme } from "next-themes"

// import { Button } from "./button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "./dropdown-menu"

// export default function DarkmodeToggle() {
//   const { setTheme } = useTheme()

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="outline" size="icon">
//           <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//           <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//           <span className="sr-only">Toggle theme</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         <DropdownMenuItem onClick={() => setTheme("light")}>
//           Light
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("dark")}>
//           Dark
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("system")}>
//           System
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }

"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Toggle } from "./toggle"
import { useCallback, useMemo } from "react"

export default function DarkmodeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const darkMode = useMemo(() => resolvedTheme === 'dark', [resolvedTheme])
  const ResolvedIcon = useMemo(() => darkMode ? Moon : Sun, [darkMode])
  const oppositeTheme = useCallback((theme: string): string => {
    return theme === 'dark' ? 'light' : 'dark'
  }, [])

  return <Toggle size={'sm'} aria-label="dark-mode" defaultPressed={darkMode} onPressedChange={() => setTheme(oppositeTheme(resolvedTheme || 'dark'))}>
      <ResolvedIcon className="sm:h-5 sm:w-5 h-3 w-3 text-primary fill-none stroke-2" />
    </Toggle>
}
