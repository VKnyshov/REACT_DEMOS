import React, {FC, useEffect, useState} from 'react';
import './App.css';
import IUser from "./model/IUser";
import UserComponent from "./components/user/UserComponent";
import {IPost} from "./model/IPost";
import PostComponent from "./components/post/PostComponent";

const App: FC = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {

        fetch('https://dummyjson.com/users')
            .then(value => value.json())
            .then(responce => {

                // console.log(responce);
                setUsers(responce.users);
            });

        return () => {
            console.log('end');
        }
    }, []);


    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {

        fetch('https://dummyjson.com/posts')
            .then(value => value.json())
            .then(responce => {

                // console.log(responce.posts);
                setPosts(responce.posts);
            });

        return () => {
            console.log('end')
        }
    }, []);


// -----------------------------------------------
const [postId,setPostId] = useState<number>(0) ;
    const clickHandler = (id:number) =>{
       setPostId(id);
        console.log(id);
    }

// ----------------------------------------
    return (
        <>
<hr/>
<h2>{postId}</h2>

<hr/>

            {
                users.map((user, index) =>
                    <UserComponent
                        clickHandler={clickHandler}
                        key={index}
                        id={user.id}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        age={user.age}
                        gender={user.gender}
                        maidenName={user.maidenName}
                    />)

            }


            <hr/>
            {/*{*/}
            {/*    posts.map((post: IPost, index) =>*/}

            {/*        <PostComponent*/}
            {/*            key={index}*/}
            {/*            id={post.id}*/}
            {/*            title={post.title}*/}
            {/*            body={post.body}*/}
            {/*        />*/}
            {/*    )*/}
            {/*}*/}


            <hr/>

        </>
    );
}

export default App;

