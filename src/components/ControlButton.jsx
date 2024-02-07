import React from "react";

// ControlButton.js
const ControlButton = ({ direction, onClick }) => {
  return <button onClick={onClick}>{direction}</button>;
};

export default ControlButton;
