import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import router from './router';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
