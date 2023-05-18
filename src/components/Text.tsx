import React from "react";
import {ITextProps} from "../types/common";

export default function Text(props: ITextProps): React.JSX.Element {
    return <>
        <p className={props.className}>{props.children}</p>
    </>
}