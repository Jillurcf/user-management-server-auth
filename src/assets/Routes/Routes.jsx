import {
    createBrowserRouter,
    
  } from "react-router-dom";

import Root from "../../Layout/Root";
import Home from "../../Component/Home";
import ErrorPage from "../../Component/ErrorPage";
import NewUser from "../../Component/NewUser";
import UserDetails from "../../Component/UserDetails";
import EditUser from "../../Component/EditUser";
import SignUp from "../../Component/SignUp";
import SignIn from "../../Component/SignIn";
import SignUpUser from "../../Component/SignUpUser";

    
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/newUser',
        element: <NewUser></NewUser>
      },
     
      {
        path: '/userDetails',
        element: <UserDetails></UserDetails>,
        loader: ()=> fetch('https://user-management-system-server-5ss1zr9va-jillurs-projects.vercel.app/newUsers')
      },
      {
        path: '/editUser/:id',
        element: <EditUser></EditUser>,
        loader: ({params}) => fetch(`https://user-management-system-server-5ss1zr9va-jillurs-projects.vercel.app/newUsers/${params.id}`)
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      },
      {
        path: '/signupuser',
        element: <SignUpUser></SignUpUser>,
        loader: () => fetch('https://user-management-system-server-5ss1zr9va-jillurs-projects.vercel.app/signupuser')
      }
    ]
  }
]);

export default router;