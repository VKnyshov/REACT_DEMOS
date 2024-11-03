import React, {useEffect} from 'react';
import {commentActions, postActions, useAppDispatch, useAppSelector} from "../redux/store";

const PostCommentsComponent = () => {

    const dispatch =  useAppDispatch();
    const {postSlice:{posts},commentSlice:{comments}}  = useAppSelector(state => state);
    useEffect(() => {
        dispatch(postActions.loadPosts());
        dispatch(commentActions.loadComments());
    }, []);

    return (
        <div>
            {
                posts.map((post, index) =>
                    <div key={index}>{post.id}. {post.title}</div>)

                      }
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