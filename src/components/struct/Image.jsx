import React from 'react';
import { motion } from "framer-motion"

class Image extends React.Component {
    constructor(props) {
        super(props);
        if(this.props.styleImage !== undefined) {
            this.styleImage = this.props.styleImage;
        }
        else{
            this.styleImage = {}
        }
    }
    render() {
        if(this.props.animate) {
            return <motion.img
                style={this.props.styleImage}
                whileHover={{
                    scale: this.props.scaleValue,
                    

                }}
                whileTap={{ scale: 0.9 }}
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