import React from "react";
import {motion} from "framer-motion";

class Hr extends React.Component {
    render() {
        return (
            <motion.hr
                initial={{
                opacity: 0,
                width: '0%'
            }}
                whileInView={{
                opacity: 1,
                width: '50%'
            }}
                transition={{
                duration: 3,
                type: 'spring'
           }}
                viewport={{ once: true }}
            />
        );
    }
}

export default Hr;