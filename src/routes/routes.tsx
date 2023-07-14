
import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home";
import App from "../App";
import SignUp from "../page/SignUp/SignUp";
import Login from "../page/login/login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {
            index: true,
            element : <Home/>
        },
        {
            path:'/signup',
            element: <SignUp/>
        },
        {
            path:'/login',
            element: <Login/>
        }
    ]
  },
]);
export default routes