import Container from "./Container";
import {motion} from "framer-motion";
import React from "react";


export default function Delimiter(): React.JSX.Element {
    return <Container className={'delimiter-container'}>
        <motion.hr
            initial={{width: "0%"}}
            animate={{width: "80%"}}
            transition={{duration: 1.5, type: "spring"}}
            className={'delimiter-element'}/>
    </Container>
}