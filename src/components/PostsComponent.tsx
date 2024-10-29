import React, {useEffect, useState} from 'react';
import {postService} from "../services/api.service";
import {IPostModel} from "../models/IPostModel";

const PostsComponent = () => {

    const [posts, setPosts] = useState<IPostModel[]>([])


    useEffect(() => {
        postService.getPosts().then(value => {
            console.log('Must have:', value.data)
            setPosts(value.data)

        })

    }, []);

    return (
        <div>
            {posts.map((post: IPostModel, index) => (
                    <div key={index}>
                        <h3>ID of post - {post.id}</h3>
                        <p>User ID - {post.userId}</p>
                        <h4>Title - {post.title}</h4>
                        <p>Body - {post.body}</p>
                        <hr/>
                        <hr/>
                    </div>
                )
            )}

        </div>
    );
};

export default PostsComponent;