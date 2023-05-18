import React from "react";
import Container from "../components/elements/Container";
import HeaderText from "../components/elements/HeaderText";
import ULList from "../components/elements/ULList";
import Text from "../components/elements/Text";
import {ROOT_TEST_TEXT} from "../static/static-text";
import HorizontalSlideContainer from "../components/animated-elements/HorizontalSlideContainer";

export default function StackPage(): React.JSX.Element {
    const list = [1, 2, 3, 4, 5]
    return <>
        <Container>
            <HeaderText>Stack</HeaderText>
            <Container className={'prose m-10 text-justify'}>
                <Text>{ROOT_TEST_TEXT}</Text>
            </Container>
            <HorizontalSlideContainer power={-2000} className={'flex justify-center m-10'}>
                <ULList>{list}</ULList>
            </HorizontalSlideContainer>
            <HorizontalSlideContainer power={2000} className={'flex justify-center m-10'}>
                <ULList>{list}</ULList>
            </HorizontalSlideContainer>
        </Container>
    </>
}