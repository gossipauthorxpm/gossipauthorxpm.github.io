import React from "react";
import {ITextProps} from "../../types/common";
import {motion} from "framer-motion";


export default function Text(props: ITextProps): React.JSX.Element {
    return <>
        <motion.div
            transition={{type: "spring"}}
            initial={{y: 200}}
            whileInView={{y: 0}}
            viewport={{ once: true }}
            className={props.className}>
            <p>{props.children}</p>
        </motion.div>
    </>
}