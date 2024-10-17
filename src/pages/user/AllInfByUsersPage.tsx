import React from 'react';
import {useLocation} from "react-router-dom";

const AllInfByUsersPage  = () => {

    const {state}  = useLocation();
    console.log('User for id', state);
    return (
        <>
             <p>{state.email}</p>
            <p>{state.phone}</p>
            <p>{state.website}</p>
        </>
    );
};

export default AllInfByUsersPage;