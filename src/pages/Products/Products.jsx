import React, { useState, useEffect } from "react";
import { Box, Container, Grid } from "@mui/material";
import "../../styles/scss/Products.scss";
import { Card } from "../../components";
import { Link } from "react-router-dom";
import { FeaturedProduct } from "../../components";
import { ProductCard } from "../../components/Card/ProductCard";
import ListItemProduct from "../../api/Master/MasterProduct/ListItemProduct";

const Products = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);

  const secondData = {
    image:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  const FetchProduct = async () => {
    try {
      const response = await ListItemProduct.getList();
      if (!response.data.status) {
        throw new Error("Network response was not ok");
      }

      const data = response.data.detail;

      setDataProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };
  const FetchCategory = async () => {
    try {
      const response = await ListItemProduct.getListCategory();
      if (!response.data.status) {
        throw new Error("Network response was not ok");
      }

      const data = response.data.detail;

      setDataCategory(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    FetchProduct();
    FetchCategory();
  }, []);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <div className="header-products">
          <Container
            className="categories"
            sx={{ width: { lg: 1200 }, display: "flex" }}
          >
            {dataCategory &&
              dataCategory.map((item, index) => (
                <span key={index}> {item.name}</span>
              ))}
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
        <FeaturedProduct props={dataProduct} type={"Featured"} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" , marginTop: "50px"}}>
        <div className="header">
          <div className="title">
            <h1>Our Product</h1>
          </div>
        </div>
      </Box>
      <Box sx={{ display: "flex", paddingInline: "20px", marginTop: "80px", marginBottom: "50px" }}>
        <Grid container spacing={2}>
          {dataProduct?.map((item, i) => (
            <Grid item xs={12} md={3} key={i}>
              <ProductCard props={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Products;
