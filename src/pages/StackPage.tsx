import React from "react";
import Container from "../components/elements/Container";
import HeaderText from "../components/elements/HeaderText";
import ULList from "../components/elements/ULList";
import Text from "../components/elements/Text";
import {ROOT_TEST_TEXT} from "../static/static-text";
import LeftSlideContainer from "../components/animated-elements/LeftSlideContainer";
import RightSlideContainer from "../components/animated-elements/RightSlideContainer";

export default function StackPage(): React.JSX.Element {
    const list = [1, 2, 3, 4, 5]
    return <>
        <Container>
            <HeaderText>Stack</HeaderText>
            <Container>
                <Text className={'prose m-10 text-justify'}>{ROOT_TEST_TEXT}</Text>
            </Container>
            <LeftSlideContainer className={'flex justify-center m-10'}>
                <ULList>{list}</ULList>
            </LeftSlideContainer>
            <RightSlideContainer className={'flex justify-center m-10'}>
                <ULList>{list}</ULList>
            </RightSlideContainer>
        </Container>
    </>
}