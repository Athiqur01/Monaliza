import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Root from './Component/Root/Root.jsx';
import Home from './Component/Home/Home.jsx';
import AllAirtAndCriftItems from './Component/AllAirtAndCriftItems/AllAirtAndCriftItems.jsx';
import AddCriftItems from './Component/AddCriftItems/AddCriftItems.jsx';
import MyArtAndCraftList from './Component/MyArtAndCraftList/MyArtAndCraftList.jsx';
import ViewDetail from './Component/ViewDetail/ViewDetail.jsx';
import Register from './Component/Register/Register.jsx';
import LogIn from './Component/LogIn/LogIn.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute.jsx';
import Subcatagory from './Component/Subcatagory/Subcatagory.jsx';
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';
import Update from './Component/Update/Update.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=> fetch('https://monaliza-server.vercel.app/items') 
      },
      {
        path:"/AllArtAndCriftItems",
        element:<AllAirtAndCriftItems></AllAirtAndCriftItems>,
        loader:()=> fetch('https://monaliza-server.vercel.app/items') 
      },
      {
        path:"/AddCriftItems",
        element:<PrivateRoute>
                  <AddCriftItems></AddCriftItems> 
                </PrivateRoute>
      },
      {
        path:"/MyArtAndCraftList",
        element:<PrivateRoute><MyArtAndCraftList></MyArtAndCraftList></PrivateRoute>,
        loader:()=> fetch('https://monaliza-server.vercel.app/items') 
      },
      {
        path:"/viewDetail/:id",
        element:<ViewDetail></ViewDetail>,
        loader:({params})=>fetch(`https://monaliza-server.vercel.app/items/${params.id}`)
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/logIn",
        element:<LogIn></LogIn>,
        loader:()=> fetch('https://monaliza-server.vercel.app/user') 
      },
      {
        path:"/subcatagory",
        element:<Subcatagory></Subcatagory>,
        loader:()=> fetch('https://monaliza-server.vercel.app/items') 
      },

      {
        path:"/update/:id",
        element: <PrivateRoute>
          <Update></Update>

        </PrivateRoute> ,
        loader:({params})=>fetch(`https://monaliza-server.vercel.app/items/${params.id}`)
      }
      
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
     <RouterProvider router={router} />
    </AuthProvider>
    
  </React.StrictMode>,
)
