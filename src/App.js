import axios from "axios";
import { useEffect, useState } from "react";
import { MainContainer } from "./components/MainCointainer";
import { Table } from "./components/Table";
import { useQuery } from "react-query";

async function fetchCoins() {
  const { data } = await axios.get(
    `https://api.coinstats.app/public/v1/coins?limit=10`
  );
  return data.coins;
}

function App() {
  const { data, isLoading, isError } = useQuery("coins", fetchCoins);
  if (isLoading) {
    return (
      <MainContainer>
        <h3>Loading...</h3>
      </MainContainer>
    );
  }

  if (isError) {
    return (
      <MainContainer>
        <h3>Getting data error...</h3>
      </MainContainer>
    );
  }

  if (!data) {
    return (
      <MainContainer>
        <h3>No data...</h3>
      </MainContainer>
    );
  }
  return (
    <MainContainer>
      <Table data={data} />
    </MainContainer>
  );
}

export default App;
