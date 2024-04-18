import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Card = ({ props, style }) => {
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
        <div style={{ width: "100%", height: "400px", overflow: "hidden" }}>
          <img src={propData.image} alt="" style={style} />
        </div>
      )}
    </>
  );
};
