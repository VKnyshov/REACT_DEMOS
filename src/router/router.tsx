import {createBrowserRouter} from "react-router-dom";
import ErrorLayout from "../layouts/ErrorLayout";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import PostsCommentsPage from "../pages/PostsCommentsPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path:'posts', element:<PostsPage/>},
            {path:'comments', element:<CommentsPage/>},
            {path:'postComments', element:<PostsCommentsPage/>},
        ]
    }

])