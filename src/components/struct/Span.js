import React from 'react';
import {motion} from "framer-motion";
class Span extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return <motion.span>{this.props.text}</motion.span>
    }
}
export default Span