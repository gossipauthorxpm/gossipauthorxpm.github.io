import React from "react";
import {motion} from "framer-motion";

class H1 extends React.Component {
    render() {
        return <motion.h1 initial={{x: 0}} animate={{x: 15}} transition={{duration: 1, repeat: Infinity, repeatType: "reverse", type: 'spring'}} >
            {this.props.text}
        </motion.h1>
    }
}

export default H1