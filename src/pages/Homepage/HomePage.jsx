import React from "react";
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

const HomePage = () => {
  const secondData = {
    image:
      "https://images.unsplash.com/photo-1643646018270-3e47f410521a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU2fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  };
  const framerData = [
    {
      id: 1,
      col: "1",
      row: "1",
      name: "Brown Casual",
      price: 500,
      image:
        "https://images.unsplash.com/photo-1661911853406-1f1b18b7af7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 2,
      col: "1",
      row: "2",
      name: "Autumn Shirt",
      price: 230,
      image:
        "https://images.unsplash.com/photo-1668911240626-7cb28ef123ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 3,
      col: "1",
      row: "2",
      name: "Crop Top",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1669303782833-a12efcc2be87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY0fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
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
      name: "Plain Shirt",
      price: 400,
      image:
        "https://images.unsplash.com/photo-1669156130305-2104f8c246a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDc4fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
  ];
  const data = [
    {
      name: "pict1",
      url: "https://images.unsplash.com/photo-1670718089430-d75ba6c1a194?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "pict2",
      url: "https://images.unsplash.com/photo-1670359092555-d4a4175d5503?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "pict3",
      url: "https://images.unsplash.com/photo-1667337779766-c0166925be12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "pict2",
      url: " https://images.unsplash.com/photo-1646004882668-2e3936d59866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY3fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "pict3",
      url: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcmZ1bWV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "pict1",
      url: "https://images.unsplash.com/photo-1652087069456-06fb70235fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    },
  ];

  const Header = () => {
    return (
      <>
        <Box className="heading" sx={{ display: "flex" }}>
          <h1>New Season Featured</h1>
          <span>
            Our New Featured in this season has start, bring the rich dark and
            warm style for Autumn.
          </span>
        </Box>
        <Carousel props={data} />
      </>
    );
  };

  const Body = () => {
    return (
      <>
        {/* About Us */}
        <div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "70px",
            }}
            py={8}
            pb={5}
          >
            <h1>About Us</h1>
          </Box>
          <Box className="card">
            <Grid container className="wrapper">
              <Grid className="column1" item md={6}>
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sapiente explicabo, maiores asperiores voluptas maxime aliquam
                  officia ullam aspernatur commodi! Sint tempora accusantium
                  perspiciatis accusamus expedita ex deleniti non eius natus.
                </span>
              </Grid>
              <Grid className="column2" item md={6}>
                <Card props={secondData} />
              </Grid>
            </Grid>
          </Box>
        </div>
        <Box className="framer-card" sx={{ display: "flex" }}>
          <FramerCard props={framerData} />
        </Box>
        {/* Featured Product */}
        <Box className="products" my={4}>
          <FeaturedProduct type="Featured" props={framerData} />
        </Box>
        {/* Discover More */}
        <Box className="card" my={15}>
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
              <ShapeButton props={"Our Catalog"} to="/products"/>
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
                    "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <StyledCard
                  style={{ maxWidth: "300px", maxHeight: "400px" }}
                  src={
                    "https://images.unsplash.com/photo-1654512697735-d7ff21350443?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  };

  return (
    <>

      <Header />
      <Body />
    </>
  );
};

export default HomePage;
