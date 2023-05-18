import React from "react";
import "../styles/root-page.css"
import Container from "../components/elements/Container";
import HeaderText from "../components/elements/HeaderText";
import Text from "../components/elements/Text";
import Image from "../components/elements/Image";
import ImageComputer from "../images/ProgrammingIllustration.png"
import {ROOT_PAGE_TEXT_1, ROOT_TEST_TEXT} from "../static/static-text";
import HorizontalSlide from "../components/animates/HorizontalSlide";
import VerticalSlide from "../components/animates/VerticalSlide";


export default function RootPage(): React.JSX.Element {
    return <>
        <Container className={'flex flex-col'}>
            <HeaderText>
                Welcome to GOSSIPAUTHORXPM PROJECT
            </HeaderText>
            <Container className={'flex items-center flex-col xl:flex-row'}>
                <HorizontalSlide className={'m-10'} power={-2000}>
                    <Image useNegative={true} src={ImageComputer} alt={'Image'}/>
                </HorizontalSlide>
                <VerticalSlide className={'prose m-10 text-justify'} power={200}>
                    <Text>{ROOT_PAGE_TEXT_1}</Text>
                </VerticalSlide>
            </Container>
            <Container className={'flex items-center flex-col justify-center'}>
                <VerticalSlide className={'prose m-10 text-justify self-center'} power={100} view={true}>
                    <Text>{ROOT_TEST_TEXT}</Text>
                </VerticalSlide>
                <VerticalSlide className={'prose m-10 text-justify self-end'} power={100} view={true}>
                    <Text>{ROOT_TEST_TEXT}</Text>
                </VerticalSlide>
                <VerticalSlide className={'prose m-10 text-justify self-start'} power={100} view={true}>
                    <Text>{ROOT_TEST_TEXT}</Text>
                </VerticalSlide>
            </Container>
        </Container>
    </>
}