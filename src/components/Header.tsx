import "../styles/header.css"
import Link from "./Link";
import Logo from "./Logo";
import React, {useState} from "react";
import HeaderContainer from "./HeaderContainer";
import Toggle from "./Toggle";
import {RoutesEndpoints} from "../static/routes-endpoints";
import Container from "./Container";
import {setLightTheme, setDarkTheme} from "../redux/slices";
import {store} from "../redux/store";

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
            <Toggle text={"Switch theme"} callback={switchThemes}/>
        </HeaderContainer>
    </>

    function switchThemes() {
        let html: HTMLElement = document.documentElement
        if (store.getState().theme.isDarkTheme) {
            // light
            html.setAttribute("data-theme", "corporate")
            store.dispatch(setLightTheme())
        } else {
            // dark
            html.setAttribute("data-theme", "business")
            store.dispatch(setDarkTheme())
        }
    }

}