import React from "react";
import { Table } from "../components/Table";
import config from "../env";

const Binance = require("node-binance-api");
function BinancePage() {
  console.log(config);
  const binance = new Binance().options({
    APIKEY: config.APIKEY,
    APISECRET: config.SECRETKEY,
  });
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        margin: "30px",
        padding: "30px",
        borderRadius: "15px",
        backgroundColor: "yellow",
      }}
    >
      Binance
    </div>
  );
}

export default BinancePage;
