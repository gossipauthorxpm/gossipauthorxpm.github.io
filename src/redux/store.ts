import {configureStore} from "@reduxjs/toolkit";
import {languageSlice, themeSlice} from "./slices";


export const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
        language: languageSlice.reducer
    }
})

