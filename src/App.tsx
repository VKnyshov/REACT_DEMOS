import {FC, useEffect, useState} from 'react';
import './App.css';
import IUser from "./model/IUser";
import UserComponent from "./components/user/UserComponent";

const App: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(value => value.json())
            .then(responce => {
                console.log('User Response: ', responce);
                setUsers(responce.users);
            });

        return () => {
            console.log('end');
        }
    }, []);

    return (
        <>
        <hr/>
        { users.map((user) => <UserComponent key={user.id} user={user}/>) }
        </>
    );
}

export default App;
