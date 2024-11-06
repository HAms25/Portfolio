import Home from "@/pages/Home";
import AppLayout from "../layout/AppLayout";
import Experience from "@/pages/Experience";
import Project from "@/pages/Project";

const AppRoutes = [
    {
        path: "/",
        element: <AppLayout />,

        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/experience",
                element: <Experience />
            },
            {
                path: "/project",
                element: <Project />
            }
        ]
    }
]

export default AppRoutes;