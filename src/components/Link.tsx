import React from "react";
import {ILinkProps} from "../types/types-header";
import {motion} from "framer-motion";
import {Link as LinkRouter} from "react-router-dom";

export default function Link(props: ILinkProps): React.JSX.Element {
    return <div className={props.underlineClass}>
        <LinkRouter className={props.className} to={props.href}>
            <motion.span
                initial={props.initial}
                transition={props.transition}
                whileHover={props.whileHover}>
                {props.children}
            </motion.span>
        </LinkRouter>
    </div>
}