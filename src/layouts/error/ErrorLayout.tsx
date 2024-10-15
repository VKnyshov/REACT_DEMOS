import React from 'react';
import HeaderComponent from "../../components/header/HeaderComponent";
import FooterComponent from "../../components/footer/FooterComponent";

const ErrorLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <hr/>
            Error 404, can't find URL
            <FooterComponent/>
        </div>
    );
};

export default ErrorLayout;