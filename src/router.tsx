import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './page/Home';

const route = [
  {
    path: '',
    element: <Home />,
    errorElement: <div>Error</div>,
  },
];

const router = createBrowserRouter(route);

export default router;
