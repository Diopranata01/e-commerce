import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Card = ({ props }) => {
  const newData = props;
  const [propData, setPropData] = useState(newData);

  useEffect(() => {
    if (props !== "") {
      setPropData(newData);
    }
  }, [newData]);

  return (
    <>
      {propData.id ? (
        <Link to={`/product/${propData.id}`}>
          <img src={propData.image} alt="" />
        </Link>
      ) : (
        <img src={propData.image} alt="" />
      )}
    </>
  );
};

