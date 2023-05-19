import {createSlice} from "@reduxjs/toolkit";
import {IDarkThemeSliceState, ILanguageSliceState} from "../types/redux-types";
import {EN_DATA, RU_DATA} from "../static/static-text";
// --------------------------------------------------------------
export const themeSlice = createSlice({
    name: "isDarkTheme",
    initialState: {
        isDarkTheme: true
    } as IDarkThemeSliceState,
    reducers: {
        setDarkTheme: state => {
            state.isDarkTheme = true
        },
        setLightTheme: state => {
            state.isDarkTheme = false
        }
    }
})
export const {setDarkTheme, setLightTheme} = themeSlice.actions;
// --------------------------------------------------------------
export const languageSlice = createSlice({
    name: "language",
    initialState: {
        data: EN_DATA,
        isRussianLanguage: false
    } as ILanguageSliceState,
    reducers: {
        setRussianLanguage: state => {
            state.data = RU_DATA
            state.isRussianLanguage = true
        },
        setEnglishLanguage: state => {
            state.data = EN_DATA
            state.isRussianLanguage = false
        }
    }
})
export const {setRussianLanguage, setEnglishLanguage} = languageSlice.actions
// --------------------------------------------------------------
