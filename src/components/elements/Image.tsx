import React from "react";
import {IImageProps} from "../../types/common";
import {useSelector} from "react-redux";
import {IReduxState} from "../../types/redux-types";

export default function Image(props: IImageProps): React.JSX.Element {
    const isInverseSelector = useSelector((state: IReduxState) => state.theme.isDarkTheme)
    return <>
        <img style={isInverseSelector && props.useNegative ? {filter: "invert(0.75)"} : {filter: "invert(0)"}}
             src={props.src}
             alt={props.alt}/>
    </>


}