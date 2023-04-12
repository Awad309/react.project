import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
  
}from "react-router-dom";
import Home from './pages/home';
import Homelogin from './pages/homelogin';
import Settingprofile from './pages/settingprofile'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Home />,
  },
  {
    path: '/homelogin',
    element:<Homelogin />,
  },
  {
    path: '/settingprofile',
    element:<Settingprofile />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);
