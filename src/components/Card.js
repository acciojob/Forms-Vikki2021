import React from "react";

const Card = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        maxWidth: "400px",
        margin: "20px auto",
        borderRadius: "8px",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
