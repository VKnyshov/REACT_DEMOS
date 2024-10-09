import React, {FC, useEffect, useState} from 'react';
import './App.css';
import IUser from "./model/IUser";
import UserComponent from "./components/user/UserComponent";

const App: FC = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {

        fetch('https://dummyjson.com/users')
            .then(value => value.json())
            .then(value => {

                // console.log(value);
                setUsers(value);
                console.log('users: ', users)
            });

        return () => {
            console.log('end')
        }
    }, []);
    return (
        <>
            {
                users.map((user, index) =>
                    <UserComponent
                        key={index}
                        id={user.id}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        age={user.age}
                        gender={user.gender}
                        maidenName={user.maidenName}
                    />)

            }
        </>
    );
}

export default App;

