import React from "react";
import Container from "../elements/Container";
import {ISlideContainerProps} from "../../types/animated-container";
import HorizontalSlide from "../animates/HorizontalSlide";

export default function HorizontalSlideContainer(props: ISlideContainerProps): React.JSX.Element {
    return <>
        <Container className={props.className}>
            <HorizontalSlide power={props.power}>
                {props.children}
            </HorizontalSlide>
        </Container>
    </>
}