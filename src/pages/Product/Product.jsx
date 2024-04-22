import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import ListItemProduct from "../../api/Master/MasterProduct/ItemProduct";
import { Container, Divider, Grid, Skeleton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Grade, StarHalf, StarOutline } from "@mui/icons-material";
import ShapeButton from "../../components/Buttons/ShapeButton";

const Product = () => {
  const { id } = useParams();
  const [dataProduct, setDataProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumDevice = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const FetchDetailProduct = async () => {
    setIsLoading(true);
    try {
      const response = await ListItemProduct.getProductDetail(id);
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

  const ImageFrame = () => {
    return (
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        sx={{
          // border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: isLoading? "center" : "",
          flexDirection: "column",
        }}
      >
        {isLoading ? (
          <Grid item xs={12} md={6}>
            <Skeleton
              variant="rectangular"
              width={270}
              height={248}
              sx={{ borderRadius: "15px" }}
            />
          </Grid>
        ) : (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              padding: "30px",
            }}
          >
            <img
              src={dataProduct.image}
              alt="Responsive"
              style={{
                width: isSmallDevice ? "30%" : isMediumDevice ? "20%" : "40%",
                height: "auto",
              }} // Make the image responsive
            />
          </Box>
        )}
        <Stack
          direction={"row"}
          spacing={1}
          sx={{ display: "flex", justifyContent: "space-evenly" }}
        >
          {dataProduct.materials && dataProduct.materials.length > 0
            ? dataProduct.materials?.map((material, index) => (
                <Box
                  sx={{
                    justifyContent: "center",
                    boxShadow: "rgba(0, 0, 0, 0.24) -9px 13px 18px",
                    borderRadius: "5px",
                    width: "100px",
                  }}
                >
                  <img
                    key={index}
                    src={material.image}
                    alt="detail product"
                    style={{
                      width: isSmallDevice
                        ? "30%"
                        : isMediumDevice
                        ? "20%"
                        : "100%",
                      height: "auto",
                    }}
                  />
                </Box>
              ))
            : null}
        </Stack>
      </Grid>
    );
  };

  useEffect(() => {
    FetchDetailProduct();
  }, []);

  return (
    <>
      <Container disableGutters maxWidth="none">
        <Box
          sx={{
            bgcolor: "#fff",
            minHeight: "100vh", // Set minimum height to fill the viewport
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            sx={{
              // border: "1px solid black",
              display: "flex",
              justifyContent: "center",
            }}
            gap={2}
          >
            <ImageFrame />
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                // border: "1px solid red",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Box sx={{ p: 2 }}>
                <Stack
                  direction="column"
                  justifyContent="space-between"
                  alignItems="start"
                  // spacing={1}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    <b>{dataProduct.name}</b>
                  </Typography>
                  <Typography gutterBottom component="div">
                    {dataProduct.treatment_type}
                  </Typography>
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{
                      p: 0,
                      display: "flex",
                      gap: "5px",
                      marginTop: "10px",
                    }}
                  >
                    {dataProduct.rating >= 4.0 ? (
                      <Grade sx={{ color: "#F9E900" }} />
                    ) : dataProduct.rating <= 4.0 && dataProduct.rating >= 1 ? (
                      <StarHalf sx={{ color: "#F9E900" }} />
                    ) : (
                      <StarOutline sx={{ color: "#F9E900" }} />
                    )}
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      margin={0}
                      marginTop={"2px"}
                    >
                      {dataProduct.rating?.toFixed(1)}
                      {` (${dataProduct.purchase_count}) Terjual`}
                    </Typography>
                  </Stack>
                  <Stack
                    sx={{
                      marginTop: "10px",
                      marginLeft: "4px",
                      width: "200px",
                      display: "flex",
                      alignItems: "start",
                    }}
                    spacing={2}
                  >
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      margin={0}
                      marginTop={"5px"}
                      sx={{ fontSize: "12px", color: "grey" }}
                    >
                      {`Stok Tersedia ${dataProduct.stock}`}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{
                        width: "inherit",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <ShapeButton props={"+"} />
                      <Typography> 3 </Typography>
                      <ShapeButton props={"-"} />
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
              <Divider />
              <Box sx={{ p: 2, marginBottom: "50px" }}>
                <Stack
                  direction="column"
                  justifyContent="space-between"
                  alignItems="start"
                >
                  <Typography gutterBottom component="div">
                    <b>Deskripsi Produk</b>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {dataProduct.description}
                  </Typography>
                </Stack>
              </Box>
              <Divider />
              <Box sx={{ p: 2, marginBottom: "50px" }}>
                <Stack
                  direction="column"
                  justifyContent="space-between"
                  alignItems="start"
                >
                  <Typography gutterBottom component="div">
                    <b>Kandungan Produk</b>
                  </Typography>
                  {dataProduct.materials && dataProduct.materials.length > 0 ? (
                    dataProduct.materials.map((material, index) => (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        key={index}
                      >
                        {material.name}
                      </Typography>
                    ))
                  ) : (
                    <Typography variant="body2" color="text.secondary">
                      {dataProduct.description}
                    </Typography>
                  )}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Product;
