import React, {useState} from "react";
import {store} from "../../redux/store";
import {setDarkTheme, setLightTheme} from "../../redux/slices";

export default function SwitchThemeToggle(): React.JSX.Element {

    const [check, setCheck] = useState(store.getState().theme.isDarkTheme)
    const [data, setData] = useState(store.getState().language.data)

    store.subscribe(() => setCheck(store.getState().theme.isDarkTheme))
    store.subscribe(() => setData(store.getState().language.data))

    return <div style={{display: "flex", textAlign: "center", alignItems: "center"}}>
        <input style={{margin: "10px"}} type="checkbox" className="toggle toggle-md"
               onClick={switchThemes} checked={check}/>
        <span style={{userSelect: "none"}} className={'prose'}>{data.textSwitchTheme}</span>
    </div>

    function switchThemes() {
        let html: HTMLElement = document.documentElement
        if (store.getState().theme.isDarkTheme) {
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