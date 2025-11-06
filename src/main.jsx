
import './index.css'
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Root from './Root/Root';
import Page from './Pages/Page';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';

import ProductDetails from './Pages/ProductDetails';
import ProductDetails2 from './Pages/ProductDetails2';

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
       path:'/products',
       element:<h1>hi</h1>, 
      },
      
      {
       path:'/about',
       element:<About></About>, 
      },
      {
       path:'/product/:id',
       element:<ProductDetails></ProductDetails>, 
      },
      {
       path:'/products/:id',
       element:<ProductDetails2></ProductDetails2>, 
      },
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
  
);


