import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ContactsPage from "./pages/contacts/ContactsPage";
import AboutPage from "./pages/about/AboutPage";
import ErrorLayout from "./layouts/error/ErrorLayout";
import SingleContactPage from "./pages/contact/SingleContactPage";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const browserRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorLayout/>,

        children: [

            {
                element: <AboutPage/>, index: true,
            },
            {
                path: 'about',
                element: <AboutPage/>,
            },
            {
                path: 'contacts',
                element: <ContactsPage/>,
            },
            {
                path: 'contacts/:id',
                element: <SingleContactPage/>
            },


        ]
    },
])

root.render(
    <RouterProvider router={browserRouter}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
