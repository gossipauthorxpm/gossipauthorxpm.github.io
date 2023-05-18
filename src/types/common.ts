import {ReactNode} from "react";

export type IContainerProps = {
    children: ReactNode
    className?: string
    style?: {}
}
export type IHTextProps = {
    children: ReactNode
    style?: {}
}
export type ITextProps = {
    children: ReactNode
    className: string
}
export type IImageProps = {
    src?: any
    alt?: string
    className: string
    useNegative: boolean
}
export type IFooterImageProps = {
    src: any
    href: string
}