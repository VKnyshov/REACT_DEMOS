import React, {FC} from 'react';
import {useLocation} from "react-router-dom";

const AllInfByUsersPage: FC<any> = () => {
    const {state} = useLocation();
    return (
        <>
            <h3>{state.id}. {state.name}</h3>
            <p>{state.email}</p>
            <p>{state.phone}</p>
            <p>{state.website}</p>
        </>
    );
};

export default AllInfByUsersPage;