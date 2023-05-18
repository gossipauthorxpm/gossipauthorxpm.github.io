import Image from "./Image";

import VK from "../images/vk-logo.png"
import GITHUB from "../images/github-logo.png"
import TELEGRAM from "../images/telegram-logo.png"
import REACT from "../images/react-logo.png"
import GITLAB from "../images/gitlab-logo.png"
import React from "react";
import FooterImage from "./FooterImage";
import {INTERNET_LINKS} from "../static/internet-links";
import Link from "./Link";
import Container from "./Container";
import {RoutesEndpoints} from "../static/routes-endpoints";
import SwitchThemeToggle from "./SwitchThemeToggle";
import Text from "./Text";


export default function Footer(): React.JSX.Element {

    return <>
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <Container className="grid grid-flow-col gap-4">
                <Link href={RoutesEndpoints.ROOT_PAGE} underlineClass={"use-underline"}
                      textClassName={'text-xs'} className="link">About</Link>
                <Link href={RoutesEndpoints.STACK_PAGE} underlineClass={"use-underline"}
                      className="link">Stack</Link>
                <Link href={RoutesEndpoints.PRICE_PAGE} underlineClass={"use-underline"}
                      className="link">Price</Link>
            </Container>
            <SwitchThemeToggle/>
            <Container>
                <Container className="grid grid-flow-col gap-4">
                    <FooterImage src={VK} href={INTERNET_LINKS.VK}/>
                    <FooterImage src={TELEGRAM} href={INTERNET_LINKS.TELEGRAM}/>
                    <FooterImage src={GITHUB} href={INTERNET_LINKS.GITHUB}/>
                    <FooterImage src={GITLAB} href={INTERNET_LINKS.GITLAB}/>
                    <FooterImage src={REACT} href={INTERNET_LINKS.REACT}/>
                </Container>
            </Container>
            <Container>
                <Text className={'prose text-xl'}>Copyright © {getCurrentDate()} - GOSSIPAUTHORXPM Apache 2.0 License</Text>
            </Container>
        </footer>
    </>

    function getCurrentDate() {
        let date = new Date()
        return date.getFullYear()
    }

}