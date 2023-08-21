import Base from "./base";
import { TypographyType } from "./types";

export default function TypographyInlineCode({ children, ...props }: TypographyType) {
    return (
      <Base {...props}>
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          { children }
        </code>
      </Base>
    )
  }
  