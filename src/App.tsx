import React, {FC, useEffect, useState} from 'react';
import './App.css';
import IUser from "./model/IUser";
import UserComponent from "./components/user/UserComponent";
import PostComponent from "./components/post/PostComponent";

const App: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [userId, setUserId] = useState(0);


    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(value => value.json())
            .then(responce => {
                console.log(responce);
                setUsers(responce.users);
            });

        return () => {
            console.log('end');
        }
    }, []);


    return (
        <>
            <hr/>
            <PostComponent key={userId} userId={userId}/>
            <hr/>
            {users.map((user) =>
                <div key={user.id}>
                    <UserComponent user={user}/>
                    <button onClick={() => setUserId(user.id)}>chose</button>
                    <hr/>
                </div>
            )}
        </>
    );
}

export default App;

