export type IDarkThemeSliceState = {
    isDarkTheme: boolean
}

export type ILanguageSliceState = {
    isRussianLanguage: boolean
    data: IPagesDataState
}

export type IPagesDataState = {
    testData: string
    textSwitchLanguage: string
    textSwitchTheme: string
    links: {
        about: string,
        stack: string,
        price: string
    }
    rootPage: {
        text1: string
        text2: string
        text3: string
    },
    stackPage: {
        list: string[],
        rootText: string
    }
}

export type IReduxState = {
    theme: IDarkThemeSliceState,
    language: ILanguageSliceState
}