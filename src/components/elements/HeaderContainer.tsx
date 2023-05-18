import React from "react";
import {IHeaderContainerProps} from "../../types/types-header";
import Container from "./Container";
import Delimiter from "./Delimiter";

export default function HeaderContainer(props: IHeaderContainerProps): React.JSX.Element {
    return <>
        <Container className="navbar bg-base-100 justify-evenly header-container-element">
            {props.children}
        </Container>
        <Delimiter/>
    </>

}