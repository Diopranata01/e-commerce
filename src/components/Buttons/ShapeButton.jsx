import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";


// Custom styled component for oval button
const ShapeButtonStyle = styled(Button)({
    backgroundColor: "white",
    color: "black",
    border: "1px solid black",
});

const ShapeButton = ({ props, to }) => {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <ShapeButtonStyle variant="outlined" color="inherit">
        {props ? props : "Button"}
      </ShapeButtonStyle>
    </Link>
  );
};

export default ShapeButton;
