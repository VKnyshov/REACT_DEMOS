import React, {useEffect, useState} from 'react';
import {IComments} from "../../models/IComments";
import {getComments} from "../../services/api.service";

const CommentsPage = () => {
    const [comments, setComments] = useState<IComments[]>([])

    useEffect(() => {
        getComments().then(value => {
            console.log('Comments mas', value)
            setComments (value);
        });
    }, []);

    return (
        <>
            {
                comments.map((comment: IComments, index) =>
                    <div key={index}>
                        <p>{comment.id}</p>
                        <p>{comment.postId}</p>
                        <p>{comment.name}</p>
                        <p>{comment.email}</p>
                        <p>{comment.body}</p>
                        <hr/>
                    </div>
                )
            }
        </>
    );
};

export default CommentsPage;