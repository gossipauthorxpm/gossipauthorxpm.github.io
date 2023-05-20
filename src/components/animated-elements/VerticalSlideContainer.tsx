import React from "react";
import Container from "../elements/Container";
import {ISlideContainerProps} from "../../@types/animated-container";
import VerticalSlide from "../animates/VerticalSlide";

export default function VerticalSlideContainer(props: ISlideContainerProps): React.JSX.Element {
    return <>
        <Container className={props.className}>
            <VerticalSlide power={props.power}>
                {props.children}
            </VerticalSlide>
        </Container>
    </>
}