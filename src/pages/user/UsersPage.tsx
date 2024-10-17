import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {getUsers} from "../../services/api.service";
import {IUser} from "../../models/IUser";

const UsersPage = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers().then(value => {
            console.log('Users mas', value)
            setUsers(value);
        });
    }, []);

    return (
        <div>
            <h2>Всі юзери</h2>
            {
               users.map((user: IUser, index) => (
                    <div key={index}>
                        <NavLink to={user.id.toString()} state={user}><p>{user.id}. {user.name}</p></NavLink>
                    </div>
                ))
            }
        </div>
    );
};

export default UsersPage;