import {createBrowserRouter} from "react-router-dom";
import ErrorLayout from "../layouts/ErrorLayout";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            {                path: 'users', element: <UsersPage/>}
        ]
    }

])