import {motion} from "framer-motion";
import React from "react";
import {ISlideProps} from "../../types/animates";

export default function TopSlide(props: ISlideProps): React.JSX.Element{
    return <>
        <motion.div
            initial={{y: -2000}}
            animate={{y: 0}}
            transition={{duration: 2, type: "spring"}}
            viewport={{once: true}}
        >{props.children}</motion.div>
    </>
}