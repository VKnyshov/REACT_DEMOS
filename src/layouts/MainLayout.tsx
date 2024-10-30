import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import {commentService, postService} from "../services/api.service";
import {useStore} from "../context/store";


const MainLayout = () => {

const {postStore,commentStore}= useStore()
    useEffect(() => {
        postService.getPosts().then(value => postStore.loadPosts(value.data));
        commentService.getComments().then(value =>  commentStore.loadComments(value.data));

    }, [postStore,commentStore]);


    return (
        <>
            <HeaderComponent/>
            <Outlet/>
        </>
    );
};

export default MainLayout;
