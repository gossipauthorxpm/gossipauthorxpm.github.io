import React from 'react';
import { motion } from "framer-motion"

class Image extends React.Component {
    render() {
        if(this.props.animate) {
            return <motion.img
                whileHover={{
                    scale: this.props.scaleValue
                }}
                transition={{
                    duration: this.props.animateDuration,
                    type: 'spring'
                }}
                src={this.props.src}
                alt={''}
                width={this.props.width}
                height={this.props.height}
                className={'image'}
                onClick={()=>{
                if(this.props.langChange === undefined){
                    return
                }
                    this.props.langChange(this.props.lang)
                }
                }
            />
        }else{
            return <img className={'image'} src={this.props.src} alt={''} width={this.props.width} height={this.props.height}/>
        }
    }
}

export default Image;