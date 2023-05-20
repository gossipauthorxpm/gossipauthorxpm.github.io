import React from "react";
import {IHTextProps} from "../../@types/common";
import Container from "./Container";

export default function HeaderText(props: IHTextProps): React.JSX.Element {
    return <Container style={props.style} className={'prose m-2 self-center text-center text-xl sm:text-3xl '}>
        {props.children}
    </Container>
}