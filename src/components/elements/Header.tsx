import "../../styles/header.css"
import Link from "./Link";
import Logo from "./Logo";
import React, {useState} from "react";
import HeaderContainer from "./HeaderContainer";
import SwitchThemeToggle from "./SwitchThemeToggle";
import {RoutesEndpoints} from "../../static/routes-endpoints";
import Container from "./Container";
import {store} from "../../redux/store";


export default function Header(): React.JSX.Element {

    const [data, setData] = useState(store.getState().language.data)
    store.subscribe(() => setData(store.getState().language.data))

    return <>
        <HeaderContainer className={'header-container-element'}>
            <Logo>GOSSIPAUTHORXPM</Logo>
            <Container className={'header-container-links'}>
                <Link href={RoutesEndpoints.PRICE_PAGE} underlineClass={"use-underline"}
                      className={'link text-xl prose'}>{data.links.price}</Link>
                <Link href={RoutesEndpoints.STACK_PAGE} underlineClass={"use-underline"}
                      className={'link text-xl prose'}>{data.links.stack}</Link>
            </Container>
            <SwitchThemeToggle/>
        </HeaderContainer>
    </>
}