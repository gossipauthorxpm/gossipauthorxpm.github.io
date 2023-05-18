import React from "react";
import "../styles/root-page.css"
import Container from "../components/Container";
import HeaderText from "../components/HeaderText";
import Text from "../components/Text";
import Image from "../components/Image";
import ImageComputer from "../images/ProgrammingIllustration.png"
import {ROOT_PAGE_TEXT_1} from "../static/static-text";


export default function RootPage(): React.JSX.Element {
    return <>
        <Container className={'flex flex-col'}>
            <HeaderText className={'prose self-center text-center text-xl sm:text-3xl'}>Welcome to GOSSIPAUTHORXPM
                PROJECT</HeaderText>
            <Container className={'flex items-center flex-col xl:flex-row'}>
                <Image className={'m-10'} src={ImageComputer} alt={'Image'}/>
                <Text className={'prose m-10 text-justify'}>{ROOT_PAGE_TEXT_1}</Text>
            </Container>
            <Container className={'flex items-center flex-col justify-center'}>
                <Text className={'prose m-10 self-center'}>TEST TEXT TEST TEXT</Text>
                <Text className={'prose m-10 self-end'}>TEST TEXT TEST TEXT</Text>
                <Text className={'prose m-10 self-start'}>TEST TEXT TEST TEXT</Text>
            </Container>
        </Container>
    </>
}