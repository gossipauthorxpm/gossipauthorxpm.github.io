import React from "react";
import {motion} from "framer-motion";
import {IDepartureProps} from "../../types/animates";

export default function RightSlide(props: IDepartureProps): React.JSX.Element {
    return <>
        <motion.div
            initial={{x: 600}}
            animate={{x: 0}}
            transition={{duration: 2, type: "spring"}}
            viewport={{once: true}}
        >{props.children}</motion.div>
    </>
}