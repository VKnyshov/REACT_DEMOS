import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import {Provider} from "react-redux";
import {store} from "../redux/store";

export const MainLayout = () => {
    return (
        <div>
            <Provider store={store}>
                <HeaderComponent/>
                <Outlet/>
            </Provider>
        </div>
    );
};

export default MainLayout;