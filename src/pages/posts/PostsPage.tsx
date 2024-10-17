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
                        <p>{post.userId}</p>
                        <p>{post.id}</p>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                        <hr/>

                    </div>


                ))
            }
        </>
    );
};

export default PostsPage;


