import React, {useEffect} from 'react';
import {IComment} from "../models/IComment";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {commentActions} from "../slices/commentSlice";

const CommentsComponent = () => {
    const dispatch =  useAppDispatch();
    const comments = useAppSelector(state=>state.commentSlice.comments);
    useEffect(() => {
        dispatch(commentActions.loadComments());
    }, [dispatch]);

    return (
        <div>
            {
                comments.map((comment: IComment, index) => (
                    <div key={index}>
                        <h3>Post ID - {comment.postId}</h3>
                        <h4>Comment ID - {comment.id}</h4>
                        <p>Email: {comment.email}</p>
                        <h4>Comment Name - {comment.name}</h4>
                        <p>Comment body: {comment.body}</p>
                        <hr/>
                        <hr/>
                    </div>
                ))
            }
        </div>
    );
};

export default CommentsComponent;