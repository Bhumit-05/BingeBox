import React, { useEffect } from 'react'
import Login from './Login';
import Browse from './Browse';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './Error';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from '../utils/UserSlice';


const Body = () => {
  const dispatch = useDispatch();

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

  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = auth.currentUser;
        dispatch(
          addUser({
            uid: uid, 
            email: email, 
            displayName: displayName,
            photoURL: photoURL
          })
        );
        
      }
      else {
        dispatch(removeUser());
      }
    });
    },[])

  return (
        <RouterProvider router={appRouter}/>
  );
};

export default Body;