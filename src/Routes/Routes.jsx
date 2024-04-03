import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AllTasks from "../Pages/AllTasks/AllTasks";
import Blog from "../Pages/Blog/Blog";
import SignIn from "../Pages/SignIn/SignIn";
import Register from "../Pages/Register/Register";
import SeeDetail from "../Pages/AllTasks/SeeDetail";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../Pages/UserProfile/UserProfile";
import AddTask from "../Pages/AddTask/AddTask";
import UpdateTask from "../Pages/UpdateTask/UpdateTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'allTasks',
          element: <AllTasks></AllTasks>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        {
          path: 'seeDetail/:id',
          element: <SeeDetail></SeeDetail>,
          loader: ({params})=> fetch(`https://task-management-coder-squad-server.vercel.app/api/v1/allFood/${params.id}`)

        },
       
        {
          path: 'addTask',
          element: <AddTask></AddTask>
          // loader: ()=> fetch('https://task-management-coder-squad-server.vercel.app/api/v1/allFood')
        },
        {
          path: 'updateTask/:id',
          element: <UpdateTask></UpdateTask>,
          loader: ({params})=> fetch(`https://task-management-coder-squad-server.vercel.app/alltask/:id/${params.id}`)
          
        },
       
       
        

    ]
  },
  {
    path: 'signin',
    element: <SignIn></SignIn>
  },
  {
    path: 'register',
    element: <Register></Register>
  },
  {
    path: 'userProfile',
    element: <UserProfile></UserProfile>
  }
]);
export default router;