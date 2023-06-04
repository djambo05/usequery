import React from "react";
import { MainContainer } from "../components/MainCointainer";
import { binanceAll, binanceTicket } from "../services/BinanceApi";
import { useQuery } from "react-query";

function BinancePage() {
  const {
    data: dataAll,
    isLoading: isLoadingAll,
    isError: isErrorAll,
  } = useQuery(["binanceAll"], binanceAll, {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  const {
    data: dataTicket,
    isLoading: isLoadingTicket,
    isError: isErrorTicket,
  } = useQuery(["binanceTicket"], () => binanceTicket(0), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  if (isLoadingAll) {
    return (
      <MainContainer sx={{ minWidth: "600px" }}>
        <h3>Loading...</h3>
      </MainContainer>
    );
  }

  if (isErrorAll) {
    return (
      <MainContainer sx={{ minWidth: "600px" }}>
        <h3>Getting data error...</h3>
      </MainContainer>
    );
  }

  if (!dataAll) {
    return (
      <MainContainer sx={{ minWidth: "600px" }}>
        <h3>No data...</h3>
      </MainContainer>
    );
  }

  return <MainContainer sx={{ minWidth: "600px" }}></MainContainer>;
}

export default BinancePage;
