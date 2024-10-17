import React, {useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {NavLink} from "react-router-dom";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(response => {
                console.log(response)
                setUsers(response);
            });
    }, []);

    return (
        <div>
            <h2>Всі юзери</h2>
            {
                users.map((user: IUser) => (
                    <>
                        <NavLink to={user.id.toString()} state={user} ><p>{user.id}. {user.name}</p></NavLink>
                    </>
                ))
            }
        </div>
    );
};

export default UsersPage;