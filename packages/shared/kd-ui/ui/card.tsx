import * as React from "react"
import Image from 'next/image'
import { cn } from "../lib/utils"
import { ShoppingCart, ShoppingCartIcon } from "lucide-react"
import { Button } from "./button"
import Small from "./typography/small"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

const PriceTag = ({ title, description, price}: {
  title: string,
  description?: string,
  price?: string
}) => (
  <div className="flex flex-col w-full relative pt-1 px-1 space-y-2">
    <div className="flex w-full items-start justify-between pr-1">
      <Small className="text-ellipsis line-clamp-1 text-foreground">{title}</Small>
      {/* {price && <Small className="text-neutral-500">{`$${price}`}</Small>} */}
    </div>
    <div className="flex w-full items-center justify-between">
      {description && <Small className="text-xs text-foreground/80 text-ellipsis line-clamp-1">{description}</Small>}
      {/* {price && <Button
        variant='link'
        className="text-petite-orchid-500 dark:text-petite-orchid-300 hover:text-petite-orchid-800 dark:hover:text-petite-orchid-400 px-2"
      >
        <ShoppingCart size={18} />
      </Button>} */}
    </div>
  </div>
);

const CardImage = ({ src, alt, title, description, price, height, width }: {
  src: string,
  alt: string,
  title: string,
  description?: string,
  price?: string,
  height: number,
  width: number
}) => (
  <div className="flex flex-col w-64 space-y-2 lg:space-y-1">
    <div className="overflow-clip">
      <Image
        src={src}
        className="rounded-md aspect-square object-cover hover:scale-105 transform-gpu motion-safe:transition-transform ease-in-out duration-500"
        width={width}
        height={height}
        alt={alt}
      />
    </div>
    <PriceTag title={title} description={description} price={price} />
  </div>
);
CardImage.displayName = 'CardImage'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardImage }
