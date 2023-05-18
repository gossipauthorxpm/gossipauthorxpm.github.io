import React from "react";
import {ILinkProps} from "../types/types-header";
import {motion} from "framer-motion";
import {Link as LinkRouter} from "react-router-dom";
import Container from "./Container";

export default function Link(props: ILinkProps): React.JSX.Element {
    return <Container className={props.underlineClass}>
        <LinkRouter className={props.className} to={props.href}>
            <motion.span
                className={props.textClassName}
                initial={props.initial}
                transition={props.transition}
                whileHover={props.whileHover}>
                {props.children}
            </motion.span>
        </LinkRouter>
    </Container>
}