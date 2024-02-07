import React from "react";

const Car = ({ yPosition }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: `${yPosition * 10}%`,
        width: "50px",
        height: "10%",
      }}
    >
      Car
    </div>
  );
};

export default Car;
