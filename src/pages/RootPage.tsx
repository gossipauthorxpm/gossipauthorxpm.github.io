import React from "react";
import "../styles/root-page.css"
import Container from "../components/elements/Container";
import HeaderText from "../components/elements/HeaderText";
import Text from "../components/elements/Text";
import Image from "../components/elements/Image";
import ImageComputer from "../images/ProgrammingIllustration.png"
import {ROOT_PAGE_TEXT_1, ROOT_TEST_TEXT} from "../static/static-text";
import LeftSlide from "../components/animates/LeftSlide";


export default function RootPage(): React.JSX.Element {
    return <>
        <Container className={'flex flex-col'}>
            <HeaderText>
                Welcome to GOSSIPAUTHORXPM PROJECT
            </HeaderText>
            <Container className={'flex items-center flex-col xl:flex-row'}>
                <LeftSlide>
                    <Image useNegative={true} className={'m-10'} src={ImageComputer} alt={'Image'}/>
                </LeftSlide>
                <Text className={'prose m-10 text-justify'}>{ROOT_PAGE_TEXT_1}</Text>
            </Container>
            <Container className={'flex items-center flex-col justify-center'}>
                <Text className={'prose m-10 text-justify self-center'}>{ROOT_TEST_TEXT}</Text>
                <Text className={'prose m-10 text-justify self-end'}>{ROOT_TEST_TEXT}</Text>
                <Text className={'prose m-10 text-justify self-start'}>{ROOT_TEST_TEXT}</Text>
            </Container>
        </Container>
    </>
}