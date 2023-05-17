import React from "react";
import {IHeaderContainerProps} from "../types/types-header";
import Container from "./Container";

export default function HeaderContainer(props: IHeaderContainerProps): React.JSX.Element {
    return <>
        <Container className={props.className}>
            <Container className="navbar bg-base-100 justify-evenly">
                {props.children}
            </Container>
        </Container>
    </>
}