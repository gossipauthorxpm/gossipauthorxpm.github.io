import React, {useState} from "react";
import {IImageProps} from "../../types/common";
import Container from "./Container";
import {store} from "../../redux/store";

export default function Image(props: IImageProps): React.JSX.Element {
    const [isInverse, setIsInverse] = useState(store.getState().theme.isDarkTheme)
    store.subscribe(() => setIsInverse(store.getState().theme.isDarkTheme))

    return <>
        <img style={isInverse && props.useNegative ? {filter: "invert(0.75)"} : {filter: "invert(0)"}}
             src={props.src}
             alt={props.alt}/>
    </>


}