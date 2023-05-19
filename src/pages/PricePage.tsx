import React, {useState} from "react";
import Container from "../components/elements/Container";
import HeaderText from "../components/elements/HeaderText";
import Text from "../components/elements/Text";
import {ROOT_TEST_LIST} from "../static/static-text";
import ULList from "../components/elements/ULList";
import HorizontalSlideContainer from "../components/animated-elements/HorizontalSlideContainer";
import {store} from "../redux/store";

export default function PricePage(): React.JSX.Element {

    const [data, setData] = useState(store.getState().language.data)
    store.subscribe(() => setData(store.getState().language.data))


    return <>
        <Container>
            <HeaderText>Price</HeaderText>
            <Container className={'prose m-10 text-justify'}>
                <Text>{data.testData}</Text>
            </Container>
            <HorizontalSlideContainer power={2000} className={'flex justify-center m-10'}>
                <ULList>{ROOT_TEST_LIST}</ULList>
            </HorizontalSlideContainer>
        </Container>
    </>
}