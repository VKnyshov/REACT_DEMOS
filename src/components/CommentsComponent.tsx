import React from 'react';
import {ICommentModel} from "../models/ICommentModel";
import {useContextProvider} from "../context/ContextProvider";

const CommentsComponent = () => {

    const {commentStore:{allComments}}  = useContextProvider()
    return (
        <div>
            {
                allComments.map((comment: ICommentModel, index) => (
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