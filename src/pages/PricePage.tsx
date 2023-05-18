import React from "react";
import Container from "../components/elements/Container";
import HeaderText from "../components/elements/HeaderText";
import Text from "../components/elements/Text";
import {ROOT_TEST_TEXT} from "../static/static-text";
import ULList from "../components/elements/ULList";
import LeftSlideContainer from "../components/animated-elements/LeftSlideContainer";

export default function PricePage(): React.JSX.Element {
    const list = [1, 2, 3, 4, 5]
    return <>
        <Container>
            <HeaderText>Price</HeaderText>
            <Container>
                <Text className={'prose m-10 text-justify'}>{ROOT_TEST_TEXT}</Text>
            </Container>
            <LeftSlideContainer className={'flex justify-center m-10'}>
                <ULList>{list}</ULList>
            </LeftSlideContainer>
        </Container>
    </>
}