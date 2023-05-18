import "../styles/header.css"
import Link from "./Link";
import Logo from "./Logo";
import React from "react";
import HeaderContainer from "./HeaderContainer";
import SwitchThemeToggle from "./SwitchThemeToggle";
import {RoutesEndpoints} from "../static/routes-endpoints";
import Container from "./Container";


export default function Header(): React.JSX.Element {
    return <>
        <HeaderContainer className={'header-container-element'}>
            <Logo>GOSSIPAUTHORXPM</Logo>
            <Container className={'header-container-links'}>
                <Link href={RoutesEndpoints.PRICE_PAGE} underlineClass={"use-underline"}
                      className={'link text-xl prose'}>Price</Link>
                <Link href={RoutesEndpoints.STACK_PAGE} underlineClass={"use-underline"}
                      className={'link text-xl prose'}>Stack</Link>
            </Container>
            <SwitchThemeToggle/>
        </HeaderContainer>
    </>
}