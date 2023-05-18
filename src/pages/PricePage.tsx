import React from "react";
import Container from "../components/elements/Container";
import HeaderText from "../components/elements/HeaderText";
import Text from "../components/elements/Text";
import {ROOT_TEST_TEXT} from "../static/static-text";
import ULList from "../components/elements/ULList";
import LeftSlide from "../components/animates/LeftSlide";

export default function PricePage(): React.JSX.Element {
    const list = [1, 2, 3, 4, 5]
    return <>
        <Container>
            <HeaderText>Price</HeaderText>
            <Container>
                <Text className={'prose m-10 text-justify'}>{ROOT_TEST_TEXT}</Text>
            </Container>
            <Container className={'flex justify-center m-10'}>
                <LeftSlide>
                    <ULList>{list}</ULList>
                </LeftSlide>
            </Container>
        </Container>
    </>
}