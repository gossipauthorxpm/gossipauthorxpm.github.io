import React from "react";
import {motion} from "framer-motion";

class ContentBlock extends React.Component {
    start_animate = (last_element) => {
        if (last_element !== undefined && last_element) {
            return {
                opacity: 0,
                y: 50
            }
        }
        return {
            opacity: 0,
            y: 200
        }
    }
    end_animate = () => {
        return {
            opacity: 1,
            y: 0
        }
    }
    settings_animate = () => {
        return {
            duration: 1.5,
        }
    }
    render() {
        return <motion.div initial={this.start_animate(this.props.lastElem)}
                           whileInView={this.end_animate()}
                           transition={this.settings_animate()}
        >{this.props.data}</motion.div>
    }
}

export default ContentBlock