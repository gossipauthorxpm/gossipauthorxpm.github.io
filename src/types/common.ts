import {ReactNode} from "react";

export type IContainerProps = {
    children: ReactNode
    className: string
}
export type IToggleProps = {
    callback: any
    text: string
}
export type IHeaderTextProps = {
    children: ReactNode
    className: string
}
export type ITextProps = {
    children: ReactNode
    className: string
}
export type IImageProps = {
    src? : any
    alt?: string
    className: string
}