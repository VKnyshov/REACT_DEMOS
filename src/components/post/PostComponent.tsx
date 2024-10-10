import React, { useEffect, useState} from 'react';
import {IPost} from "../../model/IPost";

// type UserComponentWithChildren <T> =T & {children?: ReactNode};
function PostComponent(userId:number){
    // if (!userId) return null;


    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {

        fetch('https://dummyjson.com/posts/user' + userId)
            .then(value => value.json())
            .then(responce => {

                console.log(responce);
                setPosts(responce.posts);
            });

        return () => {
            console.log('end')
        }
    }, []);


    const [postId,setPostId] = useState<number>(0) ;
    const clickHandler = (id:number) =>{
        setPostId(id);
        console.log(id);
    }





    return (
        <>{
            posts.map((post: IPost) =>
                <div>
                    {post.id} <br/>
                    {post.title}<br/>
                    {post.body}<br/>
                </div>
            )
        }
</>

    );
};

export default PostComponent;