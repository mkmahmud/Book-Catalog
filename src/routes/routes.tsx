
import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home";
import App from "../App";
import SignUp from "../page/SignUp/SignUp";

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
        }
    ]
  },
]);
export default routes