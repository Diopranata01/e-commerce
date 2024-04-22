import React, { useState, useEffect } from "react";
import "../../styles/scss/HomePage.scss";
import {
  Card,
  FramerCard,
  FeaturedProduct,
  Carousel,
  StyledCard,
} from "../../components";
import { Box, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import { AutoAwesome } from "@mui/icons-material";
import ShapeButton from "../../components/Buttons/ShapeButton";
import ItemProduct from "../../api/Master/MasterProduct/ItemProduct";
import BannerProduct from "../../api/Master/BannerProduct/BannerProduct";

const HomePage = () => {
  const [banners, setBanners] = useState([]);
  const [dataProduct, setDataProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const secondData = {
    image:
      "https://metaderma.id/wp-content/uploads/2023/06/DSC07202-scaled.jpg",
  };

  const FetchBannerAds = async () => {
    setIsLoading(true);
    try {
      const response = await BannerProduct.getListBanner();
      if (!response.data.status) {
        throw new Error("Network response was not ok");
      }
      const data = response.data.detail;
      setBanners(data);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);

    } catch (error) {
      console.error("Error fetching banners:", error);
    }
  };

  const FetchProduct = async () => {
    setIsLoading(true);
    try {
      const response = await ItemProduct.getList();
      if (!response.data.status) {
        throw new Error("Network response was not ok");
      }

      const data = response.data.detail;

      setDataProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const Header = () => {
    return (
      <>
        <Box className="heading" sx={{ display: "flex" }}>
          <h1>Our Vision</h1>
          <span>
            Seamlessly blending the expertise of a traditional pharmacy with the
            allure and efficacy of high-quality skincare products, delivering a
            personalized and beauty experience.
          </span>
        </Box>
        <Carousel props={banners ? banners : "no data"} isLoading={isLoading} />
      </>
    );
  };

  const Body = () => {
    return (
      <>
        {/* About Us */}
        <div style={{ height: "700px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "70px",
            }}
            py={8}
          >
            <h1>About Us</h1>
          </Box>
          <Box className="card">
            <Grid container className="wrapper">
              <Grid className="column1" item md={6}>
                <span>
                  At Metaderma, we are dedicated to empowering individuals to
                  embrace their unique beauty journey by providing access to
                  trusted skincare solutions, expert advice, and a supportive
                  community, fostering confidence and well-being for all.
                </span>
              </Grid>
              <Grid className="column2" item md={6}>
                <Card props={secondData} style={{ width: "100%" }} />
              </Grid>
            </Grid>
          </Box>
        </div>
        <Box className="framer-card" sx={{ display: "flex" }}>
          <FramerCard props={dataProduct} />
        </Box>
        {/* Featured Product */}
        <Box className="products" my={4}>
          <FeaturedProduct type="Featured" props={dataProduct} />
        </Box>
        {/* Discover More */}
        <Box className="card" my={10}>
          <Grid container className="wrapper">
            <Grid className="column-about" item md={6} px={10} gap={2}>
              <Stack sx={{ display: "flex", alignItems: "start" }}>
                <Box sx={{ display: "inherit" }}>
                  <h1>Discover </h1>
                  <AutoAwesome />
                </Box>
                <h1>More</h1>
              </Stack>
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sapiente explicabo, maiores asperiores voluptas maxime aliquam
              </span>
              <ShapeButton props={"Our Product"} to="/products" />
            </Grid>
            <Grid
              container
              item
              md={6}
              spacing={2}
              sx={{ alignItems: "center" }}
            >
              <Grid item xs={6} md={4}>
                <StyledCard
                  style={{ maxWidth: "300px", maxHeight: "400px" }}
                  src={
                    "https://images.unsplash.com/photo-1598412795976-9c195182ee01?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGJlYXV0eSUyMHByb2R1Y3RzfGVufDB8fDB8fHww"
                  }
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <StyledCard
                  style={{ maxWidth: "300px", maxHeight: "400px" }}
                  src={
                    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYXV0eSUyMHByb2R1Y3RzfGVufDB8fDB8fHww"
                  }
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  };

  useEffect(() => {
    FetchBannerAds();

    FetchProduct();
  }, []);

  return (
    <>
      <Header />
      <Body />
    </>
  );
};

export default HomePage;
