import React, { useState } from "react";
import { MainContainer } from "../components/MainCointainer";
import { binanceInfoAll, binanceTickets } from "../services/BinanceApi";
import { useQuery } from "react-query";

function BinancePage() {
  const [coin, setCoin] = useState("");
  const {
    data: dataTickets,
    isLoading: isLoadingTickets,
    isError: isErrorTickets,
  } = useQuery(["binanceTickets"], binanceTickets, {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    staleTime: 2000,
    refetchInterval: 2000,
  });
  console.log(dataTickets);
  if (isLoadingTickets) {
    return (
      <MainContainer sx={{ minWidth: "600px" }}>
        <h3>Loading...</h3>
      </MainContainer>
    );
  }

  if (isErrorTickets) {
    return (
      <MainContainer sx={{ minWidth: "600px" }}>
        <h3>Getting data error...</h3>
      </MainContainer>
    );
  }

  if (!dataTickets) {
    return (
      <MainContainer sx={{ minWidth: "600px" }}>
        <h3>No data...</h3>
      </MainContainer>
    );
  }

  return (
    <div style={{ margin: "30px" }}>
      <input onChange={(e) => setCoin(e.target.value)} />
      {dataTickets
        .sort((a, b) => a.symbol.localeCompare(b.symbol))
        .map((coin, index) => (
          <div style={{ display: "flex", gap: "20px" }} key={index}>
            <p>{index + 1}</p>
            <p>{coin.symbol}</p>
            <p>{coin.price}</p>
          </div>
        ))}
    </div>
  );
}

export default BinancePage;
