import clsx from "clsx";
import { TypographyType, TypographyType2 } from "./types";
import { kaiseiFont } from "../../styles/kaiseiFont";
import React, { ReactElement } from "react";
import { parisFont } from "../../styles/parisFont";

export default function Base<T>({ className, children, kaisei=false, paris=false, variant }: TypographyType2<T>) {
    if (!children) return null

    const element = React.cloneElement(children as ReactElement, {
        className: clsx((children as ReactElement).props.className, {
            [className || '']: className,
            [kaiseiFont.className]: kaisei,
            [parisFont.className]: paris,
            ['font-light']: variant === 'light',
            ['font-semibold']: variant === 'medium',
            ['font-normal']: !variant || variant === 'default',
            ['font-thin']: variant === 'thin'
        })
    })

    return element
}
