import React, { useState, useEffect } from "react";
import { Box, Skeleton } from "@mui/material";
import "./Slider.scss";
import Slider from "react-slick";

export const Carousel = ({ props , isLoading}) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 2500,
  };

  useEffect(() => {
    if (props && props.length > 0) {
      setData(props);
    }
  }, [props]);

  useEffect(() => {
    if (isLoading) {
      setLoading(props);
    } else {
      setLoading(false);
    }
  }, [isLoading]);

  return (
    <div className="slider">
      <Box className="container">
        {loading ? (
          <Skeleton sx={{ bgcolor: "grey.200", height: "550px" }} className="carousel" variant="rectangular" />
        ) : (
          <Slider {...settings} className="carousel">
            {data.map((item, index) => (
              <div key={index}>
                <img src={item.image} alt={item.name} />
              </div>
            ))}
          </Slider>
        )}
      </Box>
    </div>
  );
};
