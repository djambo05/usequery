import axios from "axios";
import { useEffect, useState } from "react";
import { MainContainer } from "./components/MainCointainer";
import { Table } from "./components/Table";

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
      <Table coins={coins} />
    </MainContainer>
  );
}

export default App;
