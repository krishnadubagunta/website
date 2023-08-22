import Base from "./base";
import { TypographyType } from "./types";

export default function TypographyBlockquote({ children, ...props }: TypographyType) {
    return (
      <Base {...props}>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          { children }
        </blockquote>
      </Base>
    )
  }
  