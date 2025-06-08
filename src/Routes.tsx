import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Signin from "./Components/Signin/Signin";
import Login from "./Components/Login/Login";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element:<Signin/>,
            },
            {
                path: 'Login',
                element:<Login/>,
            },
        ]
    },
    // {
    //     path: '/admin/',
    //     element: <Layout/>,
    //     children: [
    //         {
    //             index:true,
    //             element: <></>,
    //         }
    //     ]
    // },
    {
        path: '*',
        element: <div style={{ padding: '2rem' }}>Ошибка 404: Страница не найдена</div>
    }
])

export default router