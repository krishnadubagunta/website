import clsx from "clsx";
import { TypographyType, TypographyType2 } from "./types";
import { kaiseiFont } from "../../styles/kaiseiFont";
import React, { ReactElement } from "react";
import { parisFont } from "../../styles/parisFont";

export default function Base<T>({ className, children, kaisei=false, paris=false, serif=false, variant }: TypographyType2<T>) {
    if (!children) return null

    const element = React.cloneElement(children as ReactElement<any>, {
        className: clsx((children as ReactElement<any>).props.className, {
            [className || '']: className,
            [kaiseiFont.className]: kaisei,
            [parisFont.className]: paris,
            ['font-serif']: serif,
            ['font-light']: variant === 'light',
            ['font-semibold']: variant === 'medium',
            ['font-normal']: !variant || variant === 'default',
            ['font-thin']: variant === 'thin'
        })
    })

    return element
}
