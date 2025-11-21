import { createBrowserRouter } from "react-router";
import RootLayout from "../Root/RootLayout";
import Home from "../Pages/Home";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <RootLayout></RootLayout>,
            children:[
                {
                    path: "/",
                    element: <Home></Home>
                },
                
            ]
        },
        {
            path: "/auth",
            element: <h1>Auth Page</h1>
        },
        {
            path:"/plant",
            element: <h1>Plant Page</h1>
        }
        
    ]
);

export default router;
