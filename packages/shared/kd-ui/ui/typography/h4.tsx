import Base from "./base";
import { TypographyType } from "./types";

export default function TypographyH4({ children, ...props }: TypographyType) {
    return (
      <Base {...props}>
        <h4 className="scroll-m-20 text-xl tracking-tight">
          { children }
        </h4>
      </Base>
    )
  }
  