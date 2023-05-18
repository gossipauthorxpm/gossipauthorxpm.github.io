import {createSlice} from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "isDarkTheme",
    initialState: {
        isDarkTheme: true
    },
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