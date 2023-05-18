import React from "react";
import "../styles/root-page.css"
import Container from "../components/Container";
import HeaderText from "../components/HeaderText";
import Text from "../components/Text";

export default function RootPage(): React.JSX.Element {
    return <>
        <Container className={'root-page'}>
            <HeaderText className={'prose text-3xl self-start'}>Welcome to GOSSIPAUTHORXPM PROJECT</HeaderText>
            <Container className={'prose'}>
                <Text className={'text-2xl'}>TEST TEXT TEST TEXT</Text>
            </Container>
        </Container>
    </>
}