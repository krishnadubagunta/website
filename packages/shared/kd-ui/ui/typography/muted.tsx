import { TypographyType2 } from "./types";

export default function TypographyMuted({ children }: TypographyType2<HTMLParagraphElement>) {
    return (
      <p className="text-sm text-muted-foreground">{ children }</p>
    )
  }
  