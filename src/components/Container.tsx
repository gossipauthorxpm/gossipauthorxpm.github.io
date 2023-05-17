import {IContainerProps} from "../types/common";

export default function Container(props: IContainerProps) {
    return <>
        <div className={props.className}>{props.children}</div>
    </>
}