import React from "react";

export const StyledCard = ({style, src}) => {
  return (
    <>
      <div style={style}>
        <img
          src={
            src}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </>
  );
};
