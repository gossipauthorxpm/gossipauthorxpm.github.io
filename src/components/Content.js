import React from "react";
import Data from "./tags/Data";
import Footer from "./tags/Footer";
import Hr from "./tags/Hr";
import {motion} from "framer-motion"
import AiFace from "../images/ai_images/face.png"
import AiBlock from "../images/ai_images/block.png"
import AiCar from "../images/ai_images/infinity_car.png"
import AiMatrix from "../images/ai_images/matrix.png"
import DataText from "./data/DataText";
import ContentBlock from "./tags/ContentBlock";
class Content extends React.Component {
    render() {
        let text_area
        if (this.props.language === "ru") {
             text_area = new DataText().getRussiaContent()
        } else {
             text_area = new DataText().getEnglishContent()
        }
        return <div className={'main_content'}>
            <ContentBlock data={<Data text={text_area.first_content_area.text}
                                      src={AiFace}
                                      h1_text={text_area.first_content_area.h1_text}/>}/>
            <Hr/>
            <ContentBlock data={<Data text={text_area.second_text_area.text}
                                      src={AiBlock}
                                      h1_text={text_area.second_text_area.h1_text}/>}/>
            <Hr/>
            <ContentBlock data={<Data text={text_area.third_content_area.text}
                                      src={AiCar}
                                      h1_text={text_area.third_content_area.h1_text}/>}/>
            <Hr/>
            <ContentBlock lastElem={true} data={<Data text={text_area.four_container_area.text}
                                      src={AiMatrix}
                                      h1_text={text_area.four_container_area.h1_text}/>}/>
            <Footer/>
        </div>
    }
}

export default Content