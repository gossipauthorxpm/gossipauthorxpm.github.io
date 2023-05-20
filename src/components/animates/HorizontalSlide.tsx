import React from "react";
import {motion} from "framer-motion";
import {ISlideProps} from "../../@types/animates";

export default function HorizontalSlide(props: ISlideProps): React.JSX.Element {
    if (props.view) {
        return <>
            <motion.div
                className={props.className}
                initial={{x: props.power}}
                whileInView={{x: 0}}
                transition={{duration: 2, type: "spring"}}
                viewport={{once: true}}
            >{props.children}</motion.div>
        </>
    } else {
        return <>
            <motion.div
                className={props.className}
                initial={{x: props.power}}
                animate={{x: 0}}
                transition={{duration: 2, type: "spring"}}
                viewport={{once: true}}
            >{props.children}</motion.div>
        </>
    }
}