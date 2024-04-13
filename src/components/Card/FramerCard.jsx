import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import "./FramerCard.scss";

export const FramerCard = ({ props }) => {
  // props
  const newData = props;
  // data
  const [data, setData] = useState(newData);

  const col1row1Filter = data.filter(
    (item) => item.row === "1" && item.col === "1"
  );
  const col2row1Filter = data.filter(
    (item) => item.row === "1" && item.col === "2"
  );
  const col1row2Filter = data.filter(
    (item) => item.row === "2" && item.col === "1"
  );
  const col2row2Filter = data.filter(
    (item) => item.row === "2" && item.col === "2"
  );

  return (
    <>
      <Box className="card-box" sx={{ flexGrow: 1 }}>
        <Grid container className="wrapper">
          <Grid className="col1" item md={6} sx={{ display: "inherit" }}>
            <Box className="row1" sx={{ display: "flex" }}>
              {col1row1Filter?.map((item, index) => (
                <img alt="img" key={index} src={item.image} />
              ))}
            </Box>
            <Box className="row2" sx={{ display: "flex" }}>
              {col1row2Filter?.map((item, index) => (
                <img alt="img" key={index} src={item.image} />
              ))}
            </Box>
          </Grid>
          <Grid className="col2" item md={6} sx={{ display: "inherit" }}>
            <Box className="row1" sx={{ display: "flex" }}>
              {col2row1Filter?.map((item, index) => (
                <img alt="img" key={index} src={item.image} />
              ))}
            </Box>
            <Box className="row2" sx={{ display: "flex" }}>
              {col2row2Filter?.map((item, index) => (
                <img alt="img" key={index} src={item.image} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

