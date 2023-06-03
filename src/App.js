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
      <table style={{ minWidth: "100%", margin: 0 }}>
        <thead style={{ height: "40px" }}>
          <tr>
            <th style={{ width: "10%" }}>№</th>
            <th style={{ width: "40%" }}>Naming</th>
            <th style={{ width: "50%" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
          </tr>
        </tbody>
      </table>
    </MainContainer>
  );
}

export default App;
