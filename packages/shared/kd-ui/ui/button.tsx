"use client"
import { useRouter } from 'next/navigation'
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { signOut} from 'next-auth/react'
import { cva, type VariantProps } from "class-variance-authority"
import Link from 'next/link'
import { cn } from "../lib/utils"
import { ReactChildren } from './types'
import clsx from 'clsx'

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-petite-orchid-600 dark:bg-petite-orchid-800 hover:bg-petite-orchid-500 dark:hover:bg-petite-orchid-700 text-neutral-50",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input border-petite-orchid-500 bg-background hover:bg-petite-orchid-600 hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-petite-orchid-300 dark:hover:bg-petite-orchid-900 dark:hover:opacity-80 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        xs: "h-7 rounded-sm px-1",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

const BackButton = ({ children, className }: ReactChildren) => {
  const router = useRouter()
  return <div className="flex md:hidden">
  <Button size={'xs'} className={clsx("pl-0", className)} onClick={router.back} variant='link'>
    { children }
  </Button>
</div>
}
BackButton.displayName = 'BackButton'

const SignOutButton = () => <Button variant={'ghost'} onClick={() => signOut({
  callbackUrl: window.location.origin
})}>Sign Out</Button>

SignOutButton.displayName = 'SignOutButton'

function LinkButton({ href, children }: {href: string, children: React.ReactNode}) {
  return <Link href={href} className={buttonVariants({ variant: 'outline' })}>{children}</Link>
}

export { Button, BackButton, SignOutButton, LinkButton,  buttonVariants }
