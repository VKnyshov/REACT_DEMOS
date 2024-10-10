import React, {FC, ReactNode} from 'react';
import IUser from "../../model/IUser";


type UserComponentWithChildren <T> = T & {children?: ReactNode} & {clickHandler: (id:number) => void};
const UserComponent:FC<UserComponentWithChildren<IUser>> = ({id, firstName, lastName, gender, maidenName, age, children, clickHandler}) => {
    return (

            <div> {id} - {firstName} - {lastName}
            <button onClick={() => {
                clickHandler(id)


            }}>chose</button>
            </div>


    );
};

export default UserComponent;