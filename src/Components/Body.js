import React, { useEffect } from 'react'
import Login from './Login';
import Browse from './Browse';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './Error';
import PageForMovie from './PageForMovie';


const Body = () => {

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
    {
      path: "/movie/:id",
      element: <PageForMovie/>,
      errorElement: <Error/>,
    }
  ]);

  return (
    <RouterProvider router={appRouter}/>
  );
};

export default Body;