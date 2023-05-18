import React from "react";
import "../styles/root-page.css"
import Container from "../components/Container";
import HeaderText from "../components/HeaderText";
import Text from "../components/Text";
import Image from "../components/Image";
import ImageComputer from "../images/ProgrammingIllustration.png"
import {RoutesEndpoints} from "../static/RoutesEndpoints";
import {ROOT_PAGE_TEXT_1} from "../static/StaticText";


export default function RootPage(): React.JSX.Element {
    return <>
        <Container className={'root-page'}>
            <HeaderText className={'prose text-3xl self-start'}>Welcome to GOSSIPAUTHORXPM PROJECT</HeaderText>
            <Container className={''}>
                <Image className={'m-10'} src={ImageComputer} alt={'Image'}/>
                <Text className={'text-2xl self-justify-text'}>{ROOT_PAGE_TEXT_1}</Text>
            </Container>
            <Text className={'text-2xl self-start-text'}>TEST TEXT TEST TEXT</Text>
            <Text className={'text-2xl self-center-text'}>TEST TEXT TEST TEXT</Text>
            <Text className={'text-2xl self-left-text'}>TEST TEXT TEST TEXT</Text>
        </Container>
    </>
}