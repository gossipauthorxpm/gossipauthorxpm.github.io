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


export default function Footer(): React.JSX.Element {

    return <>
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <Container className="grid grid-flow-col gap-4">
                <Link href={"/"} underlineClass={"use-underline"} className="link">About us</Link>
                <Link href={"/"} underlineClass={"use-underline"} className="link">About us</Link>
                <Link href={"/"} underlineClass={"use-underline"} className="link">About us</Link>
                <Link href={"/"} underlineClass={"use-underline"} className="link">About us</Link>
            </Container>
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
                <p>Copyright © {getCurrentDate()} - GOSSIPAUTHORXPM Apache MIT 2 License</p>
            </Container>
        </footer>
    </>

    function getCurrentDate() {
        let date = new Date()
        return date.getFullYear()
    }

}