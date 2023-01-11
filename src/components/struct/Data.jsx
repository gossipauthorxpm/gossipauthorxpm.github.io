import React from "react";
import H1 from "./H1";
import Image from "./Image";

class Data extends React.Component {
    render() {
        return <div className={'container'}>
            <div className={'text_area'}>
                <H1 text={this.props.h1_text}/>
                {this.props.text}
            </div>
            <div><Image src={this.props.src} styleImage={this.props.styleImage} height={600} width={600} animate={true} animateDuration={0.5}
                        scaleValue={1.10}/></div>
        </div>
    }

}

export default Data