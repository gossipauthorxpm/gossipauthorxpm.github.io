import React from "react";
import {motion} from "framer-motion";
import {ICenterDepartureProps} from "../../types/animates";

export default function LeftDeparture(props: ICenterDepartureProps): React.JSX.Element {
    return <>
        <motion.div
        initial={{x: -600}}
        animate={{x: 0}}
        transition={{duration: 2, type: "spring"}}
        viewport={{ once: true }}
        >{props.children}</motion.div>
    </>
}