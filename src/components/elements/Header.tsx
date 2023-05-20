import "../../styles/header.css"
import Link from "./Link";
import Logo from "./Logo";
import React from "react";
import HeaderContainer from "./HeaderContainer";
import SwitchThemeToggle from "./SwitchThemeToggle";
import {RoutesEndpoints} from "../../static/routes-endpoints";
import Container from "./Container";
import {useSelector} from "react-redux";
import {IReduxState} from "../../@types/redux-types";


export default function Header(): React.JSX.Element {
    const dataSelector = useSelector((state: IReduxState) => state.language.data)
    return <>
        <HeaderContainer className={'header-container-element'}>
            <Logo>GOSSIPAUTHORXPM</Logo>
            <Container className={'header-container-links'}>
                <Link href={RoutesEndpoints.PRICE_PAGE} underlineClass={"use-underline"}
                      className={'link text-xl prose'}>{dataSelector.links.price}</Link>
                <Link href={RoutesEndpoints.STACK_PAGE} underlineClass={"use-underline"}
                      className={'link text-xl prose'}>{dataSelector.links.stack}</Link>
            </Container>
            <SwitchThemeToggle/>
        </HeaderContainer>
    </>
}