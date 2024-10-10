import {FC, useState} from 'react';
import IUser from "../../model/IUser";
import PostComponent from "../post/PostComponent";


interface UserComponentProps {
    user: IUser;
}

const UserComponent:FC<UserComponentProps> = ({user}) => {
    const [userId, setUserId] = useState(0);

    return (
        <div>
            {user.id} - {user.firstName} - {user.lastName} ---
            <button onClick={() => setUserId(user.id)}>Click me!</button>
            <PostComponent userId={userId}/>
            <hr/>
        </div>
    );
};

export default UserComponent;