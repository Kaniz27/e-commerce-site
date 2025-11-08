
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
import PopularCard from './Pages/popularCard';
import ShopHero from './Pages/ShopHero';
import Vendor from './Pages/Vendor';
import ProductGrid from '../ProductGrid';

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
       path:'/shop',
       element:<ShopHero></ShopHero>, 
      },
      {
       path:'/page',
       element:<ShopHero></ShopHero>, 
      },
      {
       path:'/vendor',
       element:<Vendor></Vendor>, 
      },
      {
       path:'/blog',
       element:<ShopHero></ShopHero>, 
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
      {
       path:'/category/:id',
       element:<PopularCard></PopularCard>, 
      },
      {
       path:'/shop/:category',
       element:<ProductGrid></ProductGrid>, 
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


