import {IContainerProps} from "../types/common";
import React from "react";

export default function Container(props: IContainerProps): React.JSX.Element {
    return <>
        <div className={props.className}>{props.children}</div>
    </>
}