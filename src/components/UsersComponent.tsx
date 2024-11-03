import React, {useEffect} from 'react';
import {IUser} from "../models/IUser";
import {useAppDispatch, useAppSelector, userActions} from "../redux/store";

const UsersComponent = () => {
   const dispatch =  useAppDispatch();
   const users = useAppSelector(state=>state.userSlice.users);
   useEffect(() => {
            dispatch(userActions.loadUsers());
    }, []);

    return (
        <div>
            {
                users.map((user:IUser,index) => (

                    <div key={index}>{user.id}. {user.name}</div>

                ))
            }
        </div>
    );
};

export default UsersComponent;