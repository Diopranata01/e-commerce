import React from "react";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { useMediaQuery } from "@mui/material";

const Layout = () => {
  const isLargeScreen = useMediaQuery("(min-width:1200px)");
  return (
    <div className="app">
      <Container
        sx={{
          height: "fit-content",
          width: isLargeScreen ? 1200 : "100%", // Set width to 1200px for large screens, otherwise 100% width
        }}
        style={{ padding: 0 }}
      >
        <Navbar />
        <Outlet />
        <Footer />
      </Container>
    </div>
  );
};

export default Layout;
