import React from 'react'
import Login from './Login';
import Browse from './Browse';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './Error';

const appRouter =  createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
      errorElement: <Error/>,
    },
    {
      path: "/browse",
      element: <Browse/>,
      errorElement: <Error/>,
    },
]);

const Body = () => {
  return (
        <RouterProvider router={appRouter}/>
  );
};

export default Body;