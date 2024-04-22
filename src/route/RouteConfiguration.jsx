import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../pages/Homepage/HomePage";
import Products from "../pages/Products/Products";
import Product from "../pages/Product/Product";
import Login from "../pages/AuthPage/Login";
import RegisterPage from "../pages/AuthPage/RegisterPage";
import { useAuth } from "../utilities/context/AuthContext";

const RouteConfiguration = () => {
  const { isLoggedIn } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="products/" element={isLoggedIn ? <Products /> : <Navigate to="/login" />} />
          <Route path="product/:id" element={isLoggedIn ? <Product /> : <Navigate to="/login" />} />
        </Route>
        <Route path="register" element={isLoggedIn ? <Navigate to="/" /> : <RegisterPage />} />
        <Route path="login" element={isLoggedIn ? <Navigate to="/" /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteConfiguration;