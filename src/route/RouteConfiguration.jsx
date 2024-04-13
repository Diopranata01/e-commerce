import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Layout from './Layout';
import HomePage from '../pages/Homepage/HomePage';
import Products from '../pages/Products/Products';
import Product from '../pages/Product/Product';

const RouteConfiguration = () => {
  return (
    <BrowserRouter>
        <Routes>
           <Route path='/' element={<Layout/>}>
                <Route path='/' element={<HomePage/>}/> 
                <Route path='products/' element={<Products/>}/> 
                <Route path='product/:category/:id' element={<Product/>}/> 
                <Route path='product/:id' element={<Product/>}/> 
                {/* <Route path='product/:id' element={<Product/>}/>  */}
            </Route> 
        </Routes>
    </BrowserRouter>
  )
}

export default RouteConfiguration