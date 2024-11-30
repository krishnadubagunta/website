import { Component, DetailedHTMLProps, FunctionComponent, HTMLAttributes, PropsWithChildren } from "react";
import { ReactChildren } from "../types";

export type TypographyType = React.PropsWithChildren & {
    className?: string,
    kaisei?: boolean,
    paris?: boolean,
    variant?: 'light' | 'medium' | 'thin' | 'default'
}

interface TT extends ReactChildren {
    // className?: string,
    kaisei?: boolean,
    paris?: boolean,
    variant?: 'light' | 'medium' | 'thin' | 'default'
}

export type TypographyType2<T> = DetailedHTMLProps<HTMLAttributes<T>, T> & TT
