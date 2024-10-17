import React, {useEffect, useState} from 'react';
import {IComments} from "../../models/IComments";

const CommentsPage = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments/')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setComments(res);
            });
    }, []);


    return (
        <>
            {
                comments.map((comment: IComments) =>
                    <>
                    <p>{comment.id}</p>
                    <p>{comment.postId}</p>
                    <p>{comment.name}</p>
                    <p>{comment.email}</p>
                    <p>{comment.body}</p>
<hr/>
                    </>
                )
            }
        </>
    );
};

export default CommentsPage;