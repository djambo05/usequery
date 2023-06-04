import { useEffect, useState, useRef } from "react";
import { MainContainer } from "../components/MainCointainer";
import { Table } from "../components/Table";
import { useQuery } from "react-query";
import { Box } from "@mui/material";
import { PageButton } from "../components/PageButton";
import { useNavigate } from "react-router-dom";
import { fetchCoins } from "../services/CoinstatsApi";

function Coinstats() {
  const [page, setPage] = useState(0);
  const { data, isLoading, isError } = useQuery(
    ["coins", page],
    () => fetchCoins(page),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  const tableRef = useRef(null);

  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.scrollTop = 0; // Сбросить положение прокрутки при изменении страницы
    }
  }, [page]);

  const navigate = useNavigate();

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
      <Box
        sx={{ display: "flex", height: "30px", gap: "10px", marginTop: "20px" }}
      >
        <PageButton
          sx={{ color: "black", backgroundColor: "#53ed0d" }}
          variant="contained"
          onClick={() => setPage((p) => p - 10)}
          disabled={!page}
        >
          Previous
        </PageButton>
        <PageButton
          sx={{ color: "black", backgroundColor: "#53ed0d" }}
          onClick={() => setPage((p) => p + 10)}
        >
          Next
        </PageButton>
        <PageButton
          sx={{ backgroundColor: "yellow", color: "black" }}
          onClick={() => navigate("/binance")}
        >
          Binance
        </PageButton>
      </Box>
    </MainContainer>
  );
}

export default Coinstats;
