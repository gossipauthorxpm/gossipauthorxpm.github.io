import React from 'react';
import Header from "./components/Header";
import {BrowserRouter, HashRouter} from "react-router-dom";
import RoutesHandler from "./route/RoutesHandler";

function App(): React.JSX.Element {
    return <>
        <Header/>
        <RoutesHandler/>
    </>

}

export default App;
