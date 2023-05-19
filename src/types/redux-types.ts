export type IDarkThemeSliceState = {
    isDarkTheme: boolean
}
export type ILanguageSliceState = {
    isRussianLanguage: boolean
    data: ILanguageDataState
}

export type ILanguageDataState = {
    testData: string
    textSwitchLanguage: string
    textSwitchTheme: string
    links: {
        about: string,
        stack: string,
        price: string
    }
}