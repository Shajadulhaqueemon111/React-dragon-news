import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Route from './Route/Route';
import Home from './Pageges/Home';
import Login from './Pageges/Login';
import Register from './Pageges/Register';
import AuthProvider from './Providers/AuthProvider';
import News from './Pageges/News';
import PrivateRoute from './Providers/PrivateRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('/news.json')

      },
      {
        path:'/login',
        element:<Login></Login>

      },
      {
        path:'/news/:id',
        element: <PrivateRoute><News></News> </PrivateRoute>

      },
      {
        path:'/register',
        element:<Register></Register>

      },
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
