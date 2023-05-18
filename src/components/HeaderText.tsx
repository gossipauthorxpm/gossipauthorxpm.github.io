import React from "react";
import {IHeaderTextProps} from "../types/common";
import Container from "./Container";

export default function HeaderText(props: IHeaderTextProps): React.JSX.Element {
    return <Container className={props.className}>
        {props.children}
    </Container>
}