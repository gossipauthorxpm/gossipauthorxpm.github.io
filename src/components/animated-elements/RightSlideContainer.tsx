import React from "react";
import {ISlideContainerProps} from "../../types/animated-container";
import Container from "../elements/Container";
import RightSlide from "../animates/RightSlide";

export default function RightSlideContainer(props: ISlideContainerProps): React.JSX.Element {
    return <>
        <Container className={props.className}>
            <RightSlide>
                {props.children}
            </RightSlide>
        </Container>
    </>
}