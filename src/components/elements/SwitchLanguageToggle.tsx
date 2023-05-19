import React from "react";
import {store} from "../../redux/store";
import {setEnglishLanguage, setRussianLanguage} from "../../redux/slices";
import {useSelector} from "react-redux";
import {IReduxState} from "../../types/redux-types";

export default function SwitchLanguageToggle(): React.JSX.Element {
    const languageSelector = useSelector((state: IReduxState) => state.language)

    return <div style={{display: "flex", textAlign: "center", alignItems: "center"}}>
        <input style={{margin: "10px"}} type="checkbox" className="toggle toggle-md toggle-secondary"
               onClick={switchLanguage} checked={languageSelector.isRussianLanguage} readOnly={true}/>
        <span style={{userSelect: "none"}} className={'prose'}>{languageSelector.data.textSwitchLanguage}
        </span>
    </div>

    function switchLanguage() {
        if (languageSelector.isRussianLanguage) {
            store.dispatch(setEnglishLanguage())
        } else {
            store.dispatch(setRussianLanguage())
        }
    }
}