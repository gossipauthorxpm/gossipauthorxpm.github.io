import React from "react";
import {IToggleProps} from "../types/common";

export default function Toggle(props: IToggleProps): React.JSX.Element {
    return <div>
        <input style={{margin: "10px"}} type="checkbox" className="toggle toggle-md"
               onClick={props.callback}/>
        <span className={'prose'}>{props.text}</span>
    </div>
}