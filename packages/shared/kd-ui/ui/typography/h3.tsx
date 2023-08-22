import Base from "./base";
import { TypographyType } from "./types";

export default function TypographyH3({ children, ...props }:TypographyType) {
    return (
      <Base {...props}>
        <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
          { children }
        </h3>
      </Base>
    )
  }
  