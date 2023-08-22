import Base from "./base";
import { TypographyType } from "./types";

export default function TypographyH2({ children, ...props }: TypographyType) {
    return (
      <Base {...props}>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          {children}
        </h2>
      </Base>
    )
  }
  