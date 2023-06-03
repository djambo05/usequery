import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { MainContainer } from "./components/MainCointainer";
import { Table } from "./components/Table";
import { useQuery } from "react-query";
import { Button } from "@mui/material";

async function fetchCoins(skip) {
  const { data } = await axios.get(
    `https://api.coinstats.app/public/v1/coins?skip=${skip}&limit=10`
  );
  return data.coins;
}

function App() {
  const [page, setPage] = useState(0);
  const { data, isLoading, isError } = useQuery(
    ["coins", page],
    () => fetchCoins(page),
    { keepPreviousData: true }
  );

  const tableRef = useRef(null);

  useEffect(() => {
    if (tableRef.current) {
      console.log(tableRef.current.scrollTop);
      tableRef.current.scrollTop = 0; // Сбросить положение прокрутки при изменении страницы
    }
  }, [page]);

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
      <Table data={data} forwardRef={tableRef} />
      <Button onClick={() => setPage((p) => p - 10)} disabled={!page}>
        Previous
      </Button>
      <Button onClick={() => setPage((p) => p + 10)}>Next</Button>
    </MainContainer>
  );
}

export default App;
