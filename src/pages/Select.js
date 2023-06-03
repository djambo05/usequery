import React from "react";
import { PageButton } from "../components/PageButton";
import { useNavigate } from "react-router-dom";

function Select() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        columnGap: "10px",
      }}
    >
      <PageButton
        onClick={() => navigate("/binance")}
        sx={{ backgroundColor: "yellow", color: "black" }}
      >
        Binance
      </PageButton>
      <PageButton
        onClick={() => navigate("/coinstats")}
        sx={{ backgroundColor: "lightblue", color: "black" }}
      >
        Coinstats
      </PageButton>
    </div>
  );
}

export default Select;
