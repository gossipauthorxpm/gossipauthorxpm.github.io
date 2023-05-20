import React from "react";
import {motion} from "framer-motion";
import {ISelectWithBorderProps} from "../../@types/animates";
import {useSelector} from "react-redux";
import {IReduxState} from "../../@types/redux-types";

export default function SelectWithBorder(props: ISelectWithBorderProps): React.JSX.Element {
    const isDarkTheme = useSelector((state: IReduxState) => state.theme.isDarkTheme)
    const color = isDarkTheme ? "#a4a4a4" : "#404040"
    return <>
        <motion.div
            initial={{borderRadius: "25px"}}
            whileHover={{ boxShadow: `0px 0px 45px ${color}`}}
            transition={{duration: 0.1}}
        >
            {props.children}
        </motion.div>
    </>
}