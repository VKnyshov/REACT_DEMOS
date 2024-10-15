import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <NavLink to={'/'}>Home</NavLink> <br/>

            <NavLink to={'about'}>about</NavLink> <br/>
            <NavLink to={'contacts'}>contacts</NavLink>
            <hr/>

        </div>
    );
};

export default HeaderComponent;