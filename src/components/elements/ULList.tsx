import React from "react";
import {IULListProps} from "../../types/common";

export default function ULList(props: IULListProps): React.JSX.Element {
    return <>
        <ul className={'list-disc'}>{React.Children.map(props.children, child => <li>
            {child}
        </li>)}
        </ul>
    </>
}