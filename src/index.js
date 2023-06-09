import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css';
import MainPage from "./routes/MainPage";
import ShopPage from "./routes/ShopPage";
import {ShoppingCartProvider} from "./context/ShoppingCartContext.tsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainPage />
        },
        {
            path: "/shop/",
            element: <ShopPage />
        }
        // {
        //     path: "/*",
        //     element: <NotFoundPage />
        // }
    ],
    {
        basename: process.env.PUBLIC_URL
    }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ShoppingCartProvider>
          <RouterProvider router={router} />
      </ShoppingCartProvider>
  </React.StrictMode>
);

