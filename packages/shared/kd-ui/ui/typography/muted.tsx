import { TypographyType } from "./types";

export default function TypographyMuted({ children }: TypographyType) {
    return (
      <p className="text-sm text-muted-foreground">{ children }</p>
    )
  }
  