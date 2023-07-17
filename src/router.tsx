import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const route = [
  {
    path: '',
    element: <div>Main</div>,
    errorElement: <div>Error</div>,
  },
];

const router = createBrowserRouter(route);

export default router;
