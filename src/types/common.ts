import {ReactNode} from "react";

export type IContainerProps = {
    children: ReactNode
    className?: string
    style?: {}
}
export type IHTextProps = {
    children: ReactNode
    className: string
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
}
export type IFooterImageProps = {
    src: any
    href: string
}