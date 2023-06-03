import axios from "axios";
import { useEffect, useState } from "react";
import { MainContainer } from "./MainCointainer";

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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "40px",
          border: "2px solid black",
          borderRadius: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "10%",
            height: "100%",
            borderRight: "1px solid black",
          }}
        >
          <span>№</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40%",
            height: "100%",
            borderRight: "1px solid black",
          }}
        >
          <span>Naming</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "50%",
            height: "100%",
          }}
        >
          <span>Price</span>
        </div>
      </div>
      <ul style={{ padding: 0, margin: 0, listStyleType: "none" }}>
        {coins.map((coin) => {
          return (
            <li key={coin.id} style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "10%",
                  height: "100%",
                  borderRight: "1px solid black",
                }}
              >
                <span>{coin.rank}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40%",
                  height: "100%",
                  borderRight: "1px solid black",
                }}
              >
                <span>{coin.name}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "50%",
                  height: "100%",
                  borderRight: "1px solid black",
                }}
              >
                <span>{coin.price}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </MainContainer>
  );
}

export default App;
