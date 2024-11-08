import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {IUser} from "../models/IUser";
import {userActions} from "../slices/userSlice";
import {postActions} from "../slices/postSlice";
import {commentActions} from "../slices/commentSlice";

const UserPostCommentComponent = () => {

    const dispatch = useAppDispatch();

    const users = useAppSelector(state => state.userSlice.users);
    const posts = useAppSelector(state => state.postSlice.posts);
    const comments = useAppSelector(state => state.commentSlice.comments);

    useEffect(() => {
        dispatch(userActions.loadUsers())
        dispatch(postActions.loadPosts());
        dispatch(commentActions.loadComments());
    }, [dispatch]);

    return (
        <div>
            {
                users.map((user: IUser, index) =>
                    (<div key={index}> {user.id}. {user.name}</div>))
            }
            <hr/>
            <hr/>
            {
                posts.map((post, index) =>
                    (<div key={index}>{post.id}. {post.title}</div>))

            }
            <hr/>
            <hr/>
            {
                comments.map((comment, index) =>
                    (<div key={index}>{comment.id}. {comment.body}</div>)
                )
            }
        </div>
    );
};

export default UserPostCommentComponent;