import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import {MyContext} from "../context/ContextProvider";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";
import {commentService, postService} from "../services/api.service";



const MainLayout = () => {

    const [posts, setPosts] = useState<IPostModel[]>([])
    const [comments, setComments] = useState<ICommentModel[]>([])


   useEffect(() => {
        postService.getPosts().then(value => setPosts(value.data));
        commentService.getComments().then(value => setComments(value.data));
    }, []);

    return (
        <>
            <MyContext.Provider value={
                {
                    postStore:{
                        allPosts:posts
                    },
                    commentStore:{
                        allComments:comments
                    }
                }

            }>
            <HeaderComponent/>
            <Outlet/>
            </MyContext.Provider>
        </>
    );
};

export default MainLayout;
