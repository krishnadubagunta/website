import { ReactChildren } from "../types";

export default function TypographyList({ children }: ReactChildren) {
    return (
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        { children }
      </ul>
    )
  }
  