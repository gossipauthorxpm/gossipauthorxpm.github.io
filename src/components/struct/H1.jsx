import React from "react";
import {motion} from "framer-motion";

class H1 extends React.Component {
    animation = {
        init: {
            x: 0,
            textShadow: '0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00'
        },
        end: {
            x: 15,
            textShadow: '0px -5px 10px #FFF, 0 5px 10px #ff0, 0 -10px 20px #ff8000, 0 10px 40px #F00'
        },
        settings: {
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            type: 'spring'
        }
    }

    render() {
        return <motion.h1 initial={this.animation.init} animate={this.animation.end}
                          transition={this.animation.settings}>
            {this.props.text}
        </motion.h1>
    }
}

export default H1