import React from "react";
import {motion} from "framer-motion";
import {IExitAnimateProps} from "../../types/animates";

export default function ExitAnimate(props: IExitAnimateProps): React.JSX.Element {
    return <motion.div
        key='exit'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.3}}
        exit={{opacity: 0}}
    >
        {props.children}
    </motion.div>
}