import React from 'react';
import ReactDOM from 'react-dom/client';
import Products from './Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import Cart from './Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Products/>}></Route>
      <Route path='details/:id' element={<ProductDetails/>}></Route>
      <Route path='details/:id/cart' element={<Cart/>}></Route>
      <Route path='cart' element={<Cart/>}></Route>
    </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
);

