import "../styles/header.css"
import Link from "./Link";
import Logo from "./Logo";
import {AnimatePresence} from "framer-motion";
import React, {useState} from "react";
import HeaderContainer from "./HeaderContainer";
import Toggle from "./Toggle";

export default function Header(): React.JSX.Element {

    const [darkTheme, setDarkTheme] = useState(true)

    return <>
        <HeaderContainer className={'header-container-element'}>
            <Logo>GOSSIPAUTHORXPM</Logo>
            <Link href={''} underlineClass={"use-underline"} className={'link text-xl prose'}>Price</Link>
            <Link href={''} underlineClass={"use-underline"} className={'link text-xl prose'}>Stack</Link>
            <Toggle text={"Switch theme"} callback={switchThemes}/>
        </HeaderContainer>
    </>

    function switchThemes() {
        let html: HTMLElement = document.documentElement
        if (darkTheme) {
            // light
            html.setAttribute("data-theme", "corporate")
            setDarkTheme(false)
        } else {
            // dark
            html.setAttribute("data-theme", "business")
            setDarkTheme(true)
        }

    }

}