import React, {useEffect} from 'react';
import {commentActions, postActions, useAppDispatch, useAppSelector, userActions} from "../redux/store";

const PostCommentsComponent = () => {

    const dispatch =  useAppDispatch();
    const {userSlice:{users},postSlice:{posts},commentSlice:{comments}}  = useAppSelector(state => state);
    useEffect(() => {
        dispatch(userActions.loadUsers())
        dispatch(postActions.loadPosts());
        dispatch(commentActions.loadComments());
    }, []);

    return (
        <div>
            {
                users.map((user, index) =>

                <div key={index}> {user.id}. {user.name}</div>
                )
            }
            <hr/>
            <hr/>
            <hr/>

            {
                posts.map((post, index) =>
                    <div key={index}>{post.id}. {post.title}</div>)

            }
            <hr/>
            <hr/>
            <hr/>
            {
                comments.map((comment, index) =>
                    <div key={index}>{comment.id}. {comment.body}</div>
                )
            }
        </div>
    );
};

export default PostCommentsComponent;