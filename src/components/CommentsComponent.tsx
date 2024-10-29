import React, {useEffect, useState} from 'react';
import {ICommentModel} from "../models/ICommentModel";
import {commentService} from "../services/api.service";

const CommentsComponent = () => {

    const [comments, setComments] = useState<ICommentModel[]>([])
    useEffect(() => {
        commentService.getComments()
            .then(value => {
                console.log(value.data)
                setComments(value.data)
            })
    }, []);
    return (
        <div>
            {
                comments.map((comment: ICommentModel, index) => (
                    <div key={index}>
                        <p>Comment ID - {comment.id}</p>
                        <p>Post ID - {comment.postId}</p>
                        <p>Email - {comment.email}</p>
                        <h4>Comment Name - {comment.name}</h4>
                        <p>Comment body - {comment.body}</p>
<hr/>
<hr/>

                    </div>
                ))
            }
        </div>
    );
};

export default CommentsComponent;