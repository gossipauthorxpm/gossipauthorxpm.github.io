import {motion} from "framer-motion";
import React from "react";
import {ISlideProps} from "../../@types/animates";

export default function VerticalSlide(props: ISlideProps): React.JSX.Element {
    if (props.view) {
        return <>
            <motion.div
                className={props.className}
                initial={{y: props.power}}
                whileInView={{y: 0}}
                transition={{duration: 2, type: "spring"}}
                viewport={{once: true}}
            >{props.children}</motion.div>
        </>
    } else {
        return <>
            <motion.div
                className={props.className}
                initial={{y: props.power}}
                animate={{y: 0}}
                transition={{duration: 2, type: "spring"}}
                viewport={{once: true}}
            >{props.children}</motion.div>
        </>
    }

}