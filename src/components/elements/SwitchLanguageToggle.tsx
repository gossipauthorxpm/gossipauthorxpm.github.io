import React, {useState} from "react";
import {store} from "../../redux/store";
import {setEnglishLanguage, setRussianLanguage} from "../../redux/slices";


export default function SwitchLanguageToggle(): React.JSX.Element {

    const [isRussianLang, setIsRussianLang] = useState(store.getState().language.isRussianLanguage)
    const [data, setData] = useState(store.getState().language.data)

    store.subscribe(() => setIsRussianLang(store.getState().language.isRussianLanguage))
    store.subscribe(() => setData(store.getState().language.data))

    return <div style={{display: "flex", textAlign: "center", alignItems: "center"}}>
        <input style={{margin: "10px"}} type="checkbox" className="toggle toggle-md toggle-secondary"
               onClick={switchLanguage} checked={isRussianLang}/>
        <span style={{userSelect: "none"}} className={'prose'}>{data.textSwitchLanguage}
        </span>
    </div>

    function switchLanguage() {
        if (isRussianLang) {
            store.dispatch(setEnglishLanguage())
        } else {
            store.dispatch(setRussianLanguage())
        }
    }
}