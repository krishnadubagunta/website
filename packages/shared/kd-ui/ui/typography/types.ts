import { ReactChildren } from "../types";

export type TypographyType = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & {
    className?: string,
    kaisei?: boolean,
    paris?: boolean,
    variant?: 'light' | 'medium' | 'thin' | 'default'
}