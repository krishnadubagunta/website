// "use client"

// import { LucideProps, Moon, Sun } from "lucide-react"
// import { useTheme } from "next-themes"
// import { Toggle } from "./toggle"
// import { useCallback, useMemo } from "react"
// import Icon, { IconProps } from "./icon"

// export default function DarkmodeToggle() {
//   const { resolvedTheme, setTheme } = useTheme()
//   const darkMode: boolean = useMemo(() => resolvedTheme === 'dark', [resolvedTheme])
//   const resolvedIconName: IconProps['name'] = useMemo(() => darkMode ? 'moon' : 'sun', [darkMode])
//   const oppositeTheme = useCallback((theme: string): string => {
//     console.log(theme)
//     return theme === 'dark' ? 'light' : 'dark'
//   }, [])

//   return <Toggle size={'sm'} aria-label="dark-mode" defaultPressed={darkMode} onPressedChange={() => setTheme(oppositeTheme(resolvedTheme || 'dark'))}>
//       <Icon name={resolvedIconName} fillOpacity={0} strokeWidth={2} />
//     </Toggle>
// }
