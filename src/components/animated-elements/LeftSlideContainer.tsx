import React from "react";
import Container from "../elements/Container";
import {ISlideContainerProps} from "../../types/animated-container";
import LeftSlide from "../animates/LeftSlide";

export default function LeftSlideContainer(props: ISlideContainerProps): React.JSX.Element {
    return <>
        <Container className={props.className}>
            <LeftSlide>
                {props.children}
            </LeftSlide>
        </Container>
    </>
}