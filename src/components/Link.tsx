import React from "react";
import {ILinkProps} from "../types/types-header";
import {motion} from "framer-motion";

export default function Link(props: ILinkProps): React.JSX.Element {
    return <span className={props.underlineClass}>
        <motion.a
            initial={props.initial}
            transition={props.transition}
            whileHover={props.whileHover}
            className={props.className}
            href={props.href}>{props.children}</motion.a>
    </span>
}