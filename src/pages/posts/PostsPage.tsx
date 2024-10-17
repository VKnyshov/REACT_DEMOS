import React, {useEffect, useState} from 'react';
import {IPost} from "../../models/IPost";

const PostsPage = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/")
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setPosts(res);
            })
    }, []);


    return (
        <>
            {
                posts.map((post: IPost) => (
                    <>
                        <p>{post.userId}</p>
                        <p>{post.id}</p>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                        <hr/>

                    </>


                ))
            }
        </>
    );
};

export default PostsPage;


