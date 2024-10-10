import React, {FC, useEffect, useState} from 'react';
import {IPost} from "../../model/IPost";

// type UserComponentWithChildren <T> =T & {children?: ReactNode};
const PostComponent:FC<IPost> = (post) => {
    return (
        <div>
            {post.id} <br/>
            {post.title}<br/>
            {post.body}<br/>
        </div>
    );
};

export default PostComponent;
