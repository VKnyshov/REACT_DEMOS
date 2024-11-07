import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import CommentsPage from "../pages/CommentsPage";
import PostsPage from "../pages/PostsPage";
import PostsCommentsPage from "../pages/PostsCommentsPage";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement: <ErrorLayout/>,
        children:[
            {index: true,element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'postsComments', element: <PostsCommentsPage/>},
        ]
    }
])