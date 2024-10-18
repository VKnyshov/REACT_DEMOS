import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
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

    const navigate = useNavigate();
    // const onClickNavigation = () =>{
    //     navigate(user.id.toString(),{state:{user}})
    // };




    return (

        <div>
            <h2>Всі юзери</h2>
            {
               users.map((user: IUser, index) => (
                   <div key={index}>
                      {/*<h2> {user.id}. {user.name}</h2>*/}
                       <button onClick={() =>
                           {navigate(user.id.toString(),{state:{user}})
                           }
                       }>{user.id}. {user.name}</button>
                   </div>
               ))
            }

        </div>
    );
};

export default UsersPage;