import React from "react";
import {IHTextProps} from "../types/common";
import Container from "./Container";

export default function HeaderText(props: IHTextProps): React.JSX.Element {
    return <Container style={props.style} className={props.className}>
        {props.children}
    </Container>
}