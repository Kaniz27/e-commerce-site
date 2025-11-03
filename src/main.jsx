
import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Root/Root';
import Page from './Pages/Page';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
       index:true,
       element:<Page></Page>, 
      },
       {
       path:'/contact',
       element:<Contact></Contact>, 
      },
      {
       path:'/about',
       element:<About></About>, 
      },
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);


