import axios from "axios";
import { useEffect, useState } from "react";
import { MainContainer } from "./MainCointainer";
import {
  Paper,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
} from "@mui/material";

function App() {
  const [coins, setCoins] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchCoins() {
    try {
      const { data } = await axios.get(
        `https://api.coinstats.app/public/v1/coins?limit=10`
      );
      setCoins(data.coins);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCoins();
  }, []);

  if (loading) {
    return (
      <MainContainer>
        <h3>Loading...</h3>
      </MainContainer>
    );
  }

  if (error) {
    return (
      <MainContainer>
        <h3>Getting data error...</h3>
      </MainContainer>
    );
  }

  if (!coins) {
    return (
      <MainContainer>
        <h3>No data...</h3>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ height: "50px" }}>
              <TableCell align="left">№</TableCell>
              <TableCell align="center">Naming</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </MainContainer>
  );
}

export default App;
