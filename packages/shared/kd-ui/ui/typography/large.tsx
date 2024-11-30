import Base from "./base";
import { TypographyType, TypographyType2 } from "./types";

export default function TypographyLarge({ children, ...props }: TypographyType2<HTMLSpanElement>) {
    return (
      <Base {...props}>
        <span className="text-lg">{ children }</span>
      </Base>
    )
  }
  