import Base from "./base";
import { TypographyType2 } from "./types";


export default function TypographyH1({ children, ...props}: TypographyType2<HTMLHeadingElement>) {
    return (
      <Base {...props}>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          { children }
        </h1>
      </Base>
    )
  }
