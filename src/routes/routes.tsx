import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home";
import App from "../App";
import SignUp from "../page/SignUp/SignUp";
import Login from "../page/login/login";
import AllBooks from "../page/AllBooks/AllBooks";
import BookDetails from "../page/BookDetails/BookDetails";
import AddNewBook from "../page/AddNewBook/AddNewBook";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all-books",
        element: <AllBooks />,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />,
      },
      {
        path: "/add-book",
        element: <AddNewBook />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
export default routes;
