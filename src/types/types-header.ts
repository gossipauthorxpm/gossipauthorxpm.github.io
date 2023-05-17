import {ReactNode} from "react";

export type IHeaderContainerProps = {
    children: ReactNode
    className: string
}

export type ILogoProps = {
    children: ReactNode
}
export type ILinkProps = {
    href: string
    children: ReactNode
    className?: string
    transition?: ITransitionLink
    whileHover?: IWhileHoverLink
    initial?: IInitialLink
    underlineClass?: "use-underline"
}
export type ITransitionLink = {
    duration: number
}
export type IWhileHoverLink = {
    type?: string
    textDecoration?: string
}
export type IInitialLink = {
    opacity?: number
    width?: string | number
    height?: string | number
}