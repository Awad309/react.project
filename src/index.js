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
import Relax from './pages/relax'
import Recentlyplayed from './pages/recentlyplayed';
import Knowmore from './pages/knowmore';
import Articles from './pages/articles';
import Articlesreadmore from './pages/articlesreadmore';
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
  },
  {
    path: '/relax',
    element:<Relax />,
  },
  {
    path: '/recentlyplayed',
    element:<Recentlyplayed />,
  },
  {
    path: '/knowmore',
    element:<Knowmore />,
  },
  {
    path: '/articles',
    element:<Articles />,
  },
  {
    path: '/articlesreadmore',
    element:<Articlesreadmore />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);
