import React from "react";
import {store} from "../../redux/store";
import {setDarkTheme, setLightTheme} from "../../redux/slices";
import {useSelector} from "react-redux";
import {IReduxState} from "../../types/redux-types";

export default function SwitchThemeToggle(): React.JSX.Element {
    const selector = useSelector((state: IReduxState) => state)
    return <div style={{display: "flex", textAlign: "center", alignItems: "center"}}>
        <input style={{margin: "10px"}} type="checkbox" className="toggle toggle-md"
               onClick={switchThemes} checked={selector.theme.isDarkTheme}/>
        <span style={{userSelect: "none"}} className={'prose'}>{selector.language.data.textSwitchTheme}</span>
    </div>

    function switchThemes() {
        let html: HTMLElement = document.documentElement
        if (selector.theme.isDarkTheme) {
            // light
            html.setAttribute("data-theme", "corporate")
            store.dispatch(setLightTheme())
        } else {
            // dark
            html.setAttribute("data-theme", "business")
            store.dispatch(setDarkTheme())
        }
    }
}