import React, {FC, ReactNode, useState} from 'react';
import IUser from "../../model/IUser";
import PostComponent from "../post/PostComponent";


type UserComponentWithChildren <T> =T
    & {children?: ReactNode}
    & {clickHandler: (id:number) => void};
const UserComponent:FC<UserComponentWithChildren<IUser>> = ({id,firstName, lastName,clickHandler}) => {
    const [userId, setUserId] = useState(0);
    const handleClick = (id:number) => {
        setUserId(id);
    };


    return (

        <div> {id} - {firstName} - {lastName} ---

            <button onClick={() => handleClick(id)}>Click me!</button>
            <PostComponent userId={userId}/>

        </div>


    );
};

export default UserComponent;