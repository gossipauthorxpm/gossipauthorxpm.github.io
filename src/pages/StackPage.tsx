import React from "react";
import Container from "../components/elements/Container";
import HeaderText from "../components/elements/HeaderText";
import ULList from "../components/elements/ULList";
import Text from "../components/elements/Text";
import HorizontalSlideContainer from "../components/animated-elements/HorizontalSlideContainer";
import {useSelector} from "react-redux";
import {IReduxState} from "../@types/redux-types";
import ExitAnimate from "../components/animates/ExitAnimate";

export default function StackPage(): React.JSX.Element {
    const list = [1, 2, 3, 4, 5]

    const dataSelector = useSelector((state: IReduxState) => state.language.data)

    return <ExitAnimate>
        <Container>
            <HeaderText>Stack</HeaderText>
            <Container className={'prose m-10 text-justify'}>
                <Text>{dataSelector.stackPage.rootText}</Text>
            </Container>
            <HorizontalSlideContainer power={-2000} className={'flex justify-center m-10'}>
                <ULList>{dataSelector.stackPage.list}</ULList>
            </HorizontalSlideContainer>
        </Container>
    </ExitAnimate>
}