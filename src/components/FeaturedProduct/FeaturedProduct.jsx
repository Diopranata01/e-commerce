import React, { useRef } from "react";
import { Card } from "../../components";
import "./FeaturedProducts.scss";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const FeaturedProduct = ({ type, props }) => {
  const data = props;

  const slidereRef = useRef(null);

  const nextImage = () => {
    slidereRef.current.slickNext();
  };
  const prevImage = () => {
    slidereRef.current.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="featured-products">
        {type && (
          <div className="header">
            <div className="title">
              <h1>{type} Product</h1>
            </div>
          </div>
        )}
        <div className="body">
          <div className="text">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis consectetur magni, voluptate adipisci tenetur
              commodi. Doloribus debitis illum quidem officia voluptate
              laboriosam inventore dicta quisquam adipisci, aliquid facilis!
              Quam, omnis.
            </span>
          </div>
          <div className="image">
            <Box className="container">
              <Slider {...settings} className="carousel" ref={slidereRef}>
                {data?.map((item, index) => (
                  <div key={index}>
                    <Link
                      to={`/product/${item.id}`}
                      className="link-no-decoration"
                    >
                      <Card props={item} />
                      <div className="details">
                        <Typography>{item.name}</Typography>
                        <Typography>{`Rp.${item.price}`}</Typography>
                      </div>
                    </Link>
                  </div>
                ))}
              </Slider>
            </Box>
          </div>
          <div className="icon">
            <KeyboardArrowLeftIcon onClick={prevImage} />
            <KeyboardArrowRightIcon onClick={nextImage} />
          </div>
        </div>
      </div>
    </>
  );
};
