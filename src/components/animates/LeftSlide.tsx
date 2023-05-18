import React from "react";
import {motion} from "framer-motion";
import {ISlideProps} from "../../types/animates";

export default function LeftSlide(props: ISlideProps): React.JSX.Element {
    return <>
        <motion.div
        initial={{x: -2000}}
        animate={{x: 0}}
        transition={{duration: 2, type: "spring"}}
        viewport={{ once: true }}
        >{props.children}</motion.div>
    </>
}