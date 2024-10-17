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
                        <h3>ID коментаря - {comment.id}</h3>
                        <p>ID поста -{comment.postId}</p>
                        <p>Найменування коментаря: {comment.name}</p>
                        <p>Імейл користувача: {comment.email}</p>
                        <p>Комментар: {comment.body}</p>
                        <hr/>
                    </div>
                )
            }
        </>
    );
};

export default CommentsPage;