import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Skeleton } from "@mui/material";
import "../../styles/scss/Products.scss";
import { Card } from "../../components";
import { Link } from "react-router-dom";
import { FeaturedProduct } from "../../components";
import { ProductCard } from "../../components/Card/ProductCard";
import ListItemProduct from "../../api/Master/MasterProduct/ItemProduct";
import { useSearch } from "../../utilities/context/SearchContext";

const Products = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  const [filteredProduct, setFiteredProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { searchQuery } = useSearch();

  const secondData = {
    image:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  const FetchProduct = async () => {
    setIsLoading(true);
    try {
      const response = await ListItemProduct.getList();
      if (!response.data.status) {
        throw new Error("Network response was not ok");
      }

      const data = response.data.detail;

      setDataProduct(data);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };
  const FetchCategory = async () => {
    setIsLoading(true);
    try {
      const response = await ListItemProduct.getListCategory();
      if (!response.data.status) {
        throw new Error("Network response was not ok");
      }

      const data = response.data.detail;

      setDataCategory(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const Banner = () => {
    return (
      <Box sx={{ display: "flex" }}>
        <div className="header-products">
          <Container
            className="categories"
            sx={{ width: { lg: 1200 }, display: "flex" }}
          >
            {isLoading ? (
              <>
                <Skeleton width="10%" />
                <Skeleton width="10%" />
                <Skeleton width="10%" />
              </>
            ) : (
              dataCategory.map((item, index) => (
                <span key={index}> {item.name}</span>
              ))
            )}
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
    );
  };

  const FilterProduct = () => {
    setIsLoading(true);
    const data = dataProduct.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFiteredProduct(data);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    FetchProduct();
    FetchCategory();
  }, []);

  useEffect(() => {
    FilterProduct();
  }, [searchQuery]);

  return (
    <>
      {/* Banner */}
      <Banner />

      {/* Featured Product */}
      <Box className="body-products">
        <FeaturedProduct props={dataProduct} type={"Featured"} />
      </Box>

      {/* Our Product */}
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <div className="header">
          <div className="title">
            <h1>Our Product</h1>
          </div>
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          paddingInline: "20px",
          marginTop: "80px",
          marginBottom: "50px",
        }}
      >
        <Grid container spacing={2}>
          {isLoading
            ? // Render skeleton placeholders when loading
              Array.from({ length: 4 }, (_, i) => (
                <Grid item xs={12} md={3} key={i}>
                  <Skeleton
                    variant="rectangular"
                    width={270}
                    height={248}
                    sx={{ borderRadius: "15px" }}
                  />
                  <Box sx={{ pt: 1.5 }}>
                    <Skeleton width="90%" />
                    <Skeleton width="60%" />
                  </Box>
                </Grid>
              ))
            : filteredProduct.length > 0
            ? // Render filtered products if there are any
              filteredProduct.map((item, index) => (
                <Grid item xs={12} md={3} key={index}>
                  <ProductCard props={item} />
                </Grid>
              ))
            : dataProduct
            ? // Render products from dataProduct if filteredProduct is empty
              dataProduct.map((item, i) => (
                <Grid item xs={12} md={3} key={i}>
                  <ProductCard props={item} />
                </Grid>
              ))
            : null}
        </Grid>
      </Box>
    </>
  );
};

export default Products;
