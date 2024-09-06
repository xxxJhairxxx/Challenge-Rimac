
import Planes from "@/pages/Planes";
import Home from "@/pages/Home";
import Summary from "@/pages/Summary";
import {
    createBrowserRouter,
  } from "react-router-dom";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/planes",
      element: <Planes/>,
    },{
      path:"/summary",
      element:<Summary/>
    }
  ]);

  export default router