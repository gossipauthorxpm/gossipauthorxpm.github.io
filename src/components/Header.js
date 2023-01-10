import React from "react";
import Span from "./tags/Span";
import Image from "./tags/Image";
import { motion } from "framer-motion"
import russiaFlag from "../images/Flag_of_Russia.webp"
import americaFlag from "../images/america_flag.webp"


class Header extends React.Component {
    render() {
        return <div id={'header'} className={'header'}>
            <motion.header
                className={'header_element'}
                whileHover={{scale: 1.05, width: '60%'}}
                animate={{opacity: 1, width: '60%'}}
                transition={{duration: 1}}
            >
            <Span text={"GOSSIPAUTHORXPM"}/>
                <div>
                <Image lang={'ru'} langChange={this.props.langChange} src={russiaFlag} width={50} height={30} animate={true} scaleValue={1.3} animateDuration={0.2}/>
                <Image lang={'en'} langChange={this.props.langChange} src={americaFlag} width={50} height={30} animate={true} scaleValue={1.3} animateDuration={0.2}/>
                </div>
            </motion.header>
        </div>
    };
}
export default Header;