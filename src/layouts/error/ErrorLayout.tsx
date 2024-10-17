import React from 'react';
import HeaderComponent from "../../components/header/HeaderComponent";
import FooterComponent from "../../components/footer/FooterComponent";

const ErrorLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <hr/>
            <h2>Error 404, can't find URL</h2>
            <FooterComponent/>
        </div>
    );
};

export default ErrorLayout;