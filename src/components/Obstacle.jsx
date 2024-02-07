import React from "react";

const Obstacle = ({ yPosition }) => {
  return (
    <p
      style={{
        position: "absolute",
        top: `${yPosition * 10}%`,
        right: "0",
        width: "50px",
        height: "10%",
      }}
    >
      Obstacle
    </p>
  );
};

export default Obstacle;
