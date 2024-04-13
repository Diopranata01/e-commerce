import { Box, Container } from "@mui/material";
import React from "react";
import "../../styles/scss/Products.scss";
import { Card } from "../../components";
import { Link } from "react-router-dom";
import { FeaturedProduct } from "../../components";

const Products = () => {
  const secondData = {
    image:
      "https://images.unsplash.com/photo-1673323745502-583200064577?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2565&q=80",
  };

  const framerData = [
    {
      id: 1,
      col: "1",
      row: "1",
      name: "Brown Casual",
      price: 500,
      image:
        "https://images.unsplash.com/photo-1671645157068-4acba7dd37f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 2,
      col: "1",
      row: "2",
      name: "Pearl Fall Earing",
      price: 230,
      image:
        "https://images.unsplash.com/photo-1671644730555-916aa8d8157f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 3,
      col: "1",
      row: "2",
      name: "Suit Jacket",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1652087069456-06fb70235fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 4,
      col: "2",
      row: "1",
      name: "Dark Tourqe Dress",
      price: 680,
      image:
        "https://images.unsplash.com/photo-1668615561048-7df2e1462ee9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDk2fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 5,
      col: "2",
      row: "1",
      name: "Dark Casual Dress",
      price: 500,
      image:
        "https://images.unsplash.com/photo-1668615522788-4144e6f4b22e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 6,
      col: "2",
      row: "2",
      name: "Long Leather Suites",
      price: 400,
      image:
        "https://images.unsplash.com/photo-1609449559585-23908d447562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    },
  ];

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <div className="header-products">
          <Container
            className="categories"
            sx={{ width: { lg: 1200 }, display: "flex" }}
          >
            <span>men </span>
            <span>women </span>
            <span>kids </span>
            <span>shirt's </span>
            <span>hat </span>
            <span>dress</span>
          </Container>
          <Container
            className="head-img"
            style={{ padding: 0 }}
            sx={{ width: { lg: 1200 }, display: "flex" }}
          >
            <Card props={secondData} />
            <h1>
              Grab Upto 50% Off On
              <Link style={{ textDecoration: "none", color: "#fff" }}>
                {" "}
                Featured Season
              </Link>
            </h1>
          </Container>
        </div>
      </Box>
      <Box className="body-products">
        <FeaturedProduct props={framerData} />
      </Box>
    </>
  );
};

export default Products;
