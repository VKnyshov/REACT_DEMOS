import React, {useEffect, useMemo, useState} from 'react';
import {PostWithCommentModel} from "../models/PostWithCommentModel";
import {useStore} from "../context/store";

const PostCommentsComponent = () => {
const {postStore:{allPosts}, commentStore:{allComments}} = useStore()

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
                postWithCommentsState.map((post) =>
                    <div>
                        <h3>{post.id}. {post.title}</h3>
                        <ul>
                            {
                                post.comments.map((comment) =>
                                    <li>{comment.id}. {comment.body}</li>
                                )}

                        </ul>

                    </div>
                )
            }
        </div>
    );
};

export default PostCommentsComponent;