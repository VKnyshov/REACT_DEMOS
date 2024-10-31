import React, {useEffect, useMemo, useState} from 'react';
import {PostWithCommentModel} from "../models/PostWithCommentModel";
import {useStore} from "../context/store";

const PostCommentsComponent = () => {
const {postSlice:{allPosts}, commentSlice:{allComments}} = useStore()

    const [postWithCommentsState, setPostWithCommentsState] = useState<PostWithCommentModel[]>([])

    const postsWithCommentsArray = useMemo(() => {
        return allPosts.map(post => {
            return {...post, comments: allComments.filter(comment => comment.postId === post.id)};
        })
    }, [allPosts, allComments]);

    useEffect(() => {
        setPostWithCommentsState(postsWithCommentsArray);
    }, [postsWithCommentsArray]);

    return (
        <div>
            {
                postWithCommentsState.map((post,userId) =>
                    <div key={userId}>
                        <h3>{post.id}. {post.title}</h3>
                        <ul>
                            {
                                post.comments.map((comment,userId) =>
                                    <li key={userId}>{comment.id}. {comment.body}</li>
                                )}

                        </ul>

                    </div>
                )
            }
        </div>
    );
};

export default PostCommentsComponent;