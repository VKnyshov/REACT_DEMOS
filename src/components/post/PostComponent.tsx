import { FC, useEffect, useState} from 'react';
import {IPost} from "../../model/IPost";

interface PostComponentProps {
    userId: number;
}

const PostComponent: FC<PostComponentProps> = ({userId}) => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        if (!userId) {
            setPosts([])
        } else {
            fetch('https://dummyjson.com/posts/user/' + userId)
                .then(value => value.json())
                .then(responce => {
                    console.log(responce);
                    setPosts(responce.posts);
                });

            return () => {
                console.log('end')
            }
        }
    }, [userId]);

    return (
        <>
        {
            posts.map((post: IPost) =>
                <div key={post.id}>
                    <p>
                        {post.id} <br/>
                        {post.title}<br/>
                        {post.body}<br/>
                    </p>
                </div>
            )
        }
        </>
    );
};

export default PostComponent;