import React from 'react';
import {useStore} from "../context/store";
import {IUserModel} from "../models/IUserModel";

const UsersComponent = () => {
   const {userSlice:{allUsers}} = useStore();
    return (
        <div>
            {
                allUsers.map((user: IUserModel, index) => (

                    <div key={index}>{user.id}. {user.name}</div>

                ))
            }
        </div>
    );
};

export default UsersComponent;