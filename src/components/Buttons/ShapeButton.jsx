import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";

// Custom styled component for oval button
const ShapeButtonStyle = styled(Button)({
  backgroundColor: "white",
  color: "black",
  border: "1px solid black",
});

const ShapeButton = ({ props, to, isLoading, handleSubmit }) => {
  const isLink = to ? true : false;

  if (isLink && !isLoading) {
    // Render a Link component if 'to' prop is provided
    return (
      <Link to={to} style={{ textDecoration: "none" }}>
        <ShapeButtonStyle variant="outlined" color="inherit">
          {props ? props : "Button"}
        </ShapeButtonStyle>
      </Link>
    );
  }
  if (!isLoading) {
    // Render a Button component if 'to' prop is not provided
    return (
      <ShapeButtonStyle
        variant="outlined"
        color="inherit"
        onClick={handleSubmit}
      >
        {props || "Button"}
      </ShapeButtonStyle>
    );
  } else {
    return (
      <LoadingButton
        loading
        variant="outlined"  
        sx={{
          paddingInline: "0px", 
        }}
        disabled
      >
        Loading...
      </LoadingButton>
    );
  }
};

export default ShapeButton;
