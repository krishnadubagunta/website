import { ReactChildren } from "../types";

export type TypographyType = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & {
    className?: string,
    kaisei?: boolean,
    variant?: 'light' | 'medium' | 'thin' | 'default'
}