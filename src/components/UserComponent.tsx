import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector, userActions} from "../redux/store";

const UserComponent = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector(state => state.userSlice.users);
    useEffect(() => {
        dispatch(userActions.loadUsers())
    }, []);

    return (
        <>
            {
                users.map((user, index) => (
                    <div key={index}>{user.id}. {user.name}</div>))
            }
        </>
    );
};

export default UserComponent;