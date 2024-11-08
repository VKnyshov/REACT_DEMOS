import React, {useEffect} from 'react';
import {IPost} from "../models/IPost";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {postActions} from "../slices/postSlice";

const PostsComponent = () => {
        const dispatch =  useAppDispatch();
        const posts = useAppSelector(state=>state.postSlice.posts);
        useEffect(() => {
            dispatch(postActions.loadPosts());
        }, [dispatch]);
    return (
        <div>
            {posts.map((post: IPost, index) => (
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