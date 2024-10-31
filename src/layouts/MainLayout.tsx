import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import {commentService, postService, userService} from "../services/api.service";
import {useStore} from "../context/store";


const MainLayout = () => {

const {postSlice,commentSlice,userSlice}= useStore()
    useEffect(() => {
        userService.getUsers().then(value => userSlice.loadUsers(value.data))
        postService.getPosts().then(value => postSlice.loadPosts(value.data));
        commentService.getComments().then(value =>  commentSlice.loadComments(value.data));

    }, []);


    return (
        <>
            <HeaderComponent/>
            <Outlet/>
        </>
    );
};

export default MainLayout;
