import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import "./Slider.scss";
import Slider from "react-slick";

export const Carousel = ({ props }) => {
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
      setLoading(false);
    }
  }, [props]);

  return (
    <div className="slider" >
      <Box className="container">
        <Slider {...settings} className="carousel">
          {loading ? (
            <div>Loading...</div>
          ) : (
            data.map((item, index) => (
              <div key={index}>
                <img src={item.image} alt={item.name} />
              </div>
            ))
          )}
        </Slider>
      </Box>
    </div>
  );
};
