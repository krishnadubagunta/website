import Base from "./base";
import { TypographyType2 } from "./types";

export default function TypographyH4({ children, ...props }: TypographyType2<HTMLHeadingElement>) {
    return (
      <Base {...props}>
        <h4 className="scroll-m-20 text-xl tracking-tight">
          { children }
        </h4>
      </Base>
    )
  }
  