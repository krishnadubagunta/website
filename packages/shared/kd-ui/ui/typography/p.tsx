import clsx from "clsx";
import Base from "./base";
import { TypographyType, TypographyType2 } from "./types";

export default function TypographyP({ children, serif, ...props }: TypographyType2<HTMLParagraphElement>) {
    return (
      <Base serif={serif} {...props}>
        <p className={clsx(
          "text-foreground/80 [&:not(:first-child)]:mt-3",
          serif ? "leading-[1.7]" : "leading-5"
        )}>
          {children}
        </p>
      </Base>
    )
  }
