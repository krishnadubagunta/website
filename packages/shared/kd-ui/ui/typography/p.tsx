import Base from "./base";
import { TypographyType } from "./types";

export default function TypographyP({ children, ...props }: TypographyType) {
    return (
      <Base {...props}>
        <p className="leading-7 [&:not(:first-child)]:mt-3">
          {children}
        </p>
      </Base>
    )
  }
  