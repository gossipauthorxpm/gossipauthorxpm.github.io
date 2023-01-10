import React from "react";
import Data from "./struct/Data";
import Footer from "./struct/Footer";
import Hr from "./struct/Hr";
import DataImages from "./data/DataImages";
import DataText from "./data/DataText";

import ImageLint from "./data/ImageLint";
import ContentBlock from "./struct/ContentBlock";
class Content extends React.Component {
    render() {
        let text_area;
        let imageLint = new ImageLint();
        let dataImages = new DataImages();

        if (this.props.language === "ru") {
             text_area = new DataText().getRussiaContent();
        } else {
             text_area = new DataText().getEnglishContent();
        }
        return <div className={'main_content'}>
            <ContentBlock data={
                <Data styleImage={imageLint.first}
                      text={text_area.first_content_area.text}
                      src={dataImages.aiFace}
                      h1_text={text_area.first_content_area.h1_text}

                />}
            />
            <Hr/>
            <ContentBlock data={
                <Data styleImage={imageLint.second}
                      text={text_area.second_text_area.text}
                      src={dataImages.aiBlock}
                      h1_text={text_area.second_text_area.h1_text}

                />}
            />
            <Hr/>
            <ContentBlock data={
                <Data styleImage={imageLint.third}
                      text={text_area.third_content_area.text}
                      src={dataImages.aiCar}
                      h1_text={text_area.third_content_area.h1_text}

                />
            }/>
            <Hr/>
            <ContentBlock lastElem={true} data={
                <Data styleImage={imageLint.four}
                      text={text_area.four_container_area.text}
                      src={dataImages.aiMatrix}
                      h1_text={text_area.four_container_area.h1_text}

                />
            }/>
            <Footer/>
        </div>
    }
}

export default Content