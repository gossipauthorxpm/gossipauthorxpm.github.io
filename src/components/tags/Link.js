import React from "react";
import { motion } from "framer-motion"

class Link extends React.Component {
    render() {
        return <motion.a
            whileHover={{
                scale: 1.5,
                fontSize: '24px',
                color: "#fff"
            }}
            transition={{
                duration: 0.37
            }}
            href={`${this.props.href}`}>{this.props.text}</motion.a>
    }
}

export default Link