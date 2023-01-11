import React from "react";
import Span from "./struct/Span";
import Image from "./struct/Image";
import {motion} from "framer-motion"
import russiaFlag from "../images/Flag_of_Russia.webp"
import americaFlag from "../images/america_flag.webp"


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.devicePhone = this.getDevice();
        this.width = this.devicePhone ? 120 : 50;
        this.height = this.devicePhone ? 60 : 30;
    }
    hoverPhone = {
        scale: 1.05,
        width: '85%',
        textShadow: '-2px 0px 0px rgba(255, 0, 150, 1)'
    }
    hoverPC = {
        scale: 1.05,
        width: '60%',
        textShadow: '-2px 0px 0px rgba(255, 0, 150, 1)'
    }

    render() {
        return <div id={'header'} className={'header'}>
            <motion.header
                className={'header_element'}
                initial={{textShadow: '-2px 0px 0px rgba(32, 60, 20, 1)'}}
                animate={this.devicePhone ? {opacity: 1, width: '95'} : {opacity: 1, width: '60%'}}
                whileHover={this.devicePhone ? this.hoverPhone : this.hoverPC}
                transition={{duration: 1}}
            >
                <Span text={"GOSSIPAUTHORXPM"}/>
                <div>
                    <Image lang={'ru'}
                           langChange={this.props.langChange}
                           src={russiaFlag}
                           width={this.width}
                           height={this.height}
                           animate={true}
                           scaleValue={1.3}
                           animateDuration={0.2}/>
                    <Image lang={'en'}
                           langChange={this.props.langChange}
                           src={americaFlag}
                           width={this.width}
                           height={this.height}
                           animate={true}
                           scaleValue={1.3}
                           animateDuration={0.2}/>
                </div>
            </motion.header>
        </div>
    }

    getDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
            .test(navigator.userAgent);
    }

}

export default Header;