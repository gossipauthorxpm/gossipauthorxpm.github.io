import {ReactNode} from "react";

export type IContainerProps = {
    children: ReactNode
    className: string
}
export type IToggleProps = {
    callback: any
    text: string
}