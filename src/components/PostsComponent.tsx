import React from 'react';
import {IPostModel} from "../models/IPostModel";
import {useStore} from "../context/store";

const PostsComponent = () => {
const {postStore:{allPosts}} = useStore();
    return (
        <div>
            {allPosts.map((post: IPostModel, index) => (
                    <div key={index}>
                        <h3>Post ID - {post.id}</h3>
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