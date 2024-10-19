import React, {FC} from 'react';
import {IUser} from "../models/IUser";

type UsersProps = {
    users: IUser[];
}
const Users: FC<UsersProps> = ({users}) => {
    return (
        <div>
            {
                users.map(user=> (
                    <div>{user.id}. {user.firstName} {user.lastName}</div>
                ))
            }
        </div>
    );
};

export default Users;