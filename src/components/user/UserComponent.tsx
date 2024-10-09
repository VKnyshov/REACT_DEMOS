import React, {FC} from 'react';
import IUser from "../../model/IUser";


// type UserComponentWithChildren <T> =T & {children?: ReactNode};
const UserComponent:FC<IUser> = (user) => {
    return (
        <div>
            <div> {user.id} - {user.firstName} - {user.lastName}</div>

        </div>
    );
};

export default UserComponent;