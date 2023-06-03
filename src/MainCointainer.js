import React from "react";

export const MainContainer = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          minWidth: "550px",
          minHeight: "500px",
          borderRadius: "15px",
          padding: "20px",
          backgroundColor: "rgb(228, 229, 151)",
        }}
      >
        {children}
      </div>
    </div>
  );
};