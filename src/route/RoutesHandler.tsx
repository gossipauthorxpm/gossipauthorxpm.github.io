import {Route, Routes, useLocation} from "react-router-dom";
import PricePage from "../pages/PricePage";
import {RoutesEndpoints} from "../static/RoutesEndpoints";
import React from "react";
import RootPage from "../pages/RootPage";

export default function RoutesHandler(): React.JSX.Element {
    const location = useLocation();
    return <>
        <Routes key={location.pathname} location={location}>
            <Route path={RoutesEndpoints.PRICE_PAGE} element={
                <PricePage/>
            }/>
            <Route path={RoutesEndpoints.ROOT_PAGE} element={
                <RootPage/>
            }/>
        </Routes>
    </>
}