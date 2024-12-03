import Base from "./base";
import { TypographyType, TypographyType2 } from "./types";

export default function TypographyP({ children, ...props }: TypographyType2<HTMLParagraphElement>) {
    return (
      <Base {...props}>
        <p className="text-foreground/80 leading-5 [&:not(:first-child)]:mt-3">
          {children}
        </p>
      </Base>
    )
  }
