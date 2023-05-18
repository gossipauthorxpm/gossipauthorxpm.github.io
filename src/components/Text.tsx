import React from "react";
import {ITextProps} from "../types/common";

export default function Text(props: ITextProps): React.JSX.Element {
    return <div className={props.className}>
        <p>{props.children}</p>
    </div>
}