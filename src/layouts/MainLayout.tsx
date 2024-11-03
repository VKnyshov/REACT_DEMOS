import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import {Provider} from "react-redux";
import {store} from "../redux/store";

const MainLayout = () => {

    return (
        <>
            <Provider store={store}>
            <HeaderComponent/>
            <Outlet/>
                </Provider>
        </>
    );
};

export default MainLayout;
