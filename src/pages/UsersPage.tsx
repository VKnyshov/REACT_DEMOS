import React, {useEffect, useState} from 'react';
import PaginatiomComponent from "../components/PaginatiomComponent";
import {apiService} from "../services/api.service";
import {useSearchParams} from "react-router-dom";
import Users from "../components/Users";
import {IUser} from "../models/IUser";

const UsersPage = () => {
    const [query, setQuery] = useSearchParams({page: '1'})
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        const page = query.get('page');
        console.log('You are on page - ', query.get('page'));
        if (page) {
            apiService.userServise.getAll(+page).then(value => setUsers(value));
        }
    }, [query]);



    return (
        <div>
            <Users users={users}/>
            <PaginatiomComponent/>
        </div>
    );
};

export default UsersPage;