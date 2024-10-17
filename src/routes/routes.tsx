import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorLayout from "../layouts/error/ErrorLayout";
import UsersPage from "../pages/user/UsersPage";
import AllInfByUsersPage from "../pages/user/AllInfByUsersPage";
import PostsPage from "../pages/posts/PostsPage";
import CommentsPage from "../pages/comments/CommentsPage";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorLayout/>,

        children: [
            {
                element: <div><h1>Оберіть необхідну інформацію</h1></div>, index: true,
            },
            {
                path: 'users',
                element: <UsersPage/>,
            },
            {
                path: 'users/:id',
                element: <AllInfByUsersPage/>,
            },
            {
                path: 'posts',
                element: <PostsPage/>,
            },
            {
                path: 'comments',
                element: <CommentsPage/>
            },
        ]
    },
])