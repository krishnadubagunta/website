import clsx from "clsx";
import { TypographyType } from "./types";
import { kaiseiFont } from "../../styles/kaiseiFont";

export default function Base({ className, children, kaisei=false, variant }: TypographyType) {
    return <span className={clsx({
        [className || '']: className,
        [kaiseiFont.className]: kaisei,
        ['font-light']: variant === 'light',
        ['font-semibold']: variant === 'medium',
        ['font-normal']: !variant || variant === 'default',
        ['font-thin']: variant === 'thin'
    })}>
        { children }
    </span>
}