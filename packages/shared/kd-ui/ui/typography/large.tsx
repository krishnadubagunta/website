import Base from "./base";
import { TypographyType } from "./types";

export default function TypographyLarge({ children, ...props }: TypographyType) {
    return (
      <Base {...props}>
        <span className="text-lg font-semibold">{ children }</span>
      </Base>
    )
  }
  