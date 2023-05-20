import React from "react";
import "../styles/root-page.css"
import Container from "../components/elements/Container";
import HeaderText from "../components/elements/HeaderText";
import Text from "../components/elements/Text";
import Image from "../components/elements/Image";
import ImageComputer from "../images/ProgrammingIllustration.png"
import HorizontalSlide from "../components/animates/HorizontalSlide";
import VerticalSlide from "../components/animates/VerticalSlide";
import {useSelector} from "react-redux";
import {IReduxState} from "../@types/redux-types";
import ExitAnimate from "../components/animates/ExitAnimate";
import SelectWithBorder from "../components/animates/SelectWithBorder";


export default function RootPage(): React.JSX.Element {
    const dataSelector = useSelector((state: IReduxState) => state.language.data)
    return <ExitAnimate>
        <Container className={'flex flex-col'}>
            <HeaderText>
                Welcome to GOSSIPAUTHORXPM PROJECT
            </HeaderText>
            <Container className={'flex items-center flex-col xl:flex-row'}>
                <HorizontalSlide className={'m-10'} power={-2000}>
                    <SelectWithBorder>
                        <Image useNegative={true} src={ImageComputer} alt={'Image'}/>
                    </SelectWithBorder>
                </HorizontalSlide>
                <VerticalSlide className={'prose m-10 text-justify'} power={200}>
                    <Text>{dataSelector.rootPage.text1}</Text>
                </VerticalSlide>
            </Container>
            <Container className={'flex items-center flex-col justify-center'}>
                <VerticalSlide className={'prose m-10 text-justify self-center'} power={100} view={true}>
                    <Text>{dataSelector.rootPage.text2}</Text>
                </VerticalSlide>
                <VerticalSlide className={'prose m-10 text-justify self-end'} power={100} view={true}>
                    <Text>{dataSelector.rootPage.text3}</Text>
                </VerticalSlide>
            </Container>
        </Container>
    </ExitAnimate>
}