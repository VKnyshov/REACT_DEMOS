import React from 'react';
import {useLocation} from "react-router-dom";

const AllInfByUsersPage  = () => {

    const {state}  = useLocation();
    const user = state.user;

    console.log('User for id', state);

    return (
        <>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
        </>
    );
};

export default AllInfByUsersPage;