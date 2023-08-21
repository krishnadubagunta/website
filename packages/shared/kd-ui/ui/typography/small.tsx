import Base from "./base";
import { TypographyType } from "./types";

export default function TypographySmall({ children, ...props }: TypographyType) {
    return (
      <Base {...props}>
        <small className="text-sm font-medium leading-none">{children}</small>
      </Base>
    )
  }
  