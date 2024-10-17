import React, {useEffect, useState} from 'react';
import {IPost} from "../../models/IPost";
import {getPosts} from "../../services/api.service";

const PostsPage = () => {
    const [posts, setUsers] = useState<IPost[]>([]);

    useEffect(() => {
        getPosts().then(value => {
            console.log('Posts mas', value)
            setUsers(value);
        });
    }, []);


    return (
        <>
            {
                posts.map((post: IPost, index) => (
                    <div key={index}>
                        <p>ID юзера - {post.userId}</p>
                        <p>ID поста - {post.id}</p>
                        <p>Найменування паста: {post.title}</p>
                        <p>Пост: {post.body}</p>
                        <hr/>

                    </div>


                ))
            }
        </>
    );
};

export default PostsPage;


