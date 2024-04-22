import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import "./FramerCard.scss";

export const FramerCard = ({ props }) => {
  // props
  const newData = props;
  // data
  const [data, setData] = useState(newData);

  return (
    <>
      <Box className="card-box" sx={{ flexGrow: 1 }}>
        <Grid container className="wrapper">
          <Grid className="col1" item md={6} container spacing={4}>
            <Grid className="row1" sx={{ display: "flex" }}>
              {data?.slice(0, 2).map(
                (
                  item,
                  index // Use slice(0, 4) to map only the first 4 items
                ) => (
                  <Grid xs={2} sm={4} md={2} key={index}>
                    <img alt="img" src={item.image} />
                  </Grid>
                )
              )}
            </Grid>
            <Grid className="row1" sx={{ display: "flex" }}>
              {data?.slice(2, 4).map(
                (
                  item,
                  index // Use slice(0, 4) to map only the first 4 items
                ) => (
                  <Grid xs={2} sm={4} md={2} key={index}>
                    <img alt="img" src={item.image} />
                  </Grid>
                )
              )}
            </Grid>
          </Grid>
          <Grid className="col1" item md={6} container spacing={4}>
            <Grid className="row1" sx={{ display: "flex" }}>
              {data?.slice(4, 6).map(
                (
                  item,
                  index // Use slice(0, 4) to map only the first 4 items
                ) => (
                  <Grid xs={2} sm={4} md={2} key={index}>
                    <img alt="img" src={item.image} />
                  </Grid>
                )
              )}
            </Grid>
            <Grid className="row1" sx={{ display: "flex" }}>
              {data?.slice(6, 8).map(
                (
                  item,
                  index // Use slice(0, 4) to map only the first 4 items
                ) => (
                  <Grid xs={2} sm={4} md={2} key={index}>
                    <img alt="img" src={item.image} />
                  </Grid>
                )
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
