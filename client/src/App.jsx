import React from 'react'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
 
} from "react-router";
import Layout from './layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/Signup" element={<SignUp />}></Route>
          </Route>
        </Route>
      </>
    )
  );
  
  return (
    <>
      <RouterProvider router={router} />
       
     
    </>
  );
}
