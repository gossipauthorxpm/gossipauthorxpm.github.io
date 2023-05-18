import {createSlice} from "@reduxjs/toolkit";
import {IReduxDarkTheme} from "../types/redux-types";

export const themeSlice = createSlice({
    name: "isDarkTheme",
    initialState: {
        isDarkTheme: true
    } as IReduxDarkTheme,
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