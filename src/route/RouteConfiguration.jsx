import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../pages/Homepage/HomePage";
import Products from "../pages/Products/Products";
import Product from "../pages/Product/Product";
import Login from "../pages/AuthPage/Login";
import RegisterPage from "../pages/AuthPage/RegisterPage";

const RouteConfiguration = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="products/" element={<Products />} />
          <Route path="product/:id" element={<Product />} />
        </Route>
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteConfiguration;
