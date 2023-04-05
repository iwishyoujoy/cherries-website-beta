import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css';
import MainPage from "./routes/MainPage";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainPage />
        }
        // {
        //     path: "/items",
        //     element: <Items />
        // },
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
        <RouterProvider router={router} />
  </React.StrictMode>
);

