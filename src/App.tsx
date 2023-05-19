import React from 'react';
import Header from "./components/elements/Header";
import "./styles/common.css"
import RoutesHandler from "./route/RoutesHandler";
import Footer from "./components/elements/Footer";
import {store} from "./redux/store";

function App(): React.JSX.Element {
    return <>
        <Header/>
        <RoutesHandler/>
        <Footer/>
    </>

}

export default App;
