import React from 'react';
import Header from "./components/Header";
import "./styles/common.css"
import RoutesHandler from "./route/RoutesHandler";
import Footer from "./components/Footer";

function App(): React.JSX.Element {
    return <>
        <Header/>
        <RoutesHandler/>
        <Footer/>
    </>

}

export default App;
