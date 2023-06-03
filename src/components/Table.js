import React from "react";

export const Table = ({ coins }) => {
  return (
    <table
      style={{
        width: "550px",
        tableLayout: "fixed",
        borderCollapse: "collapse",
      }}
    >
      <thead
        style={{
          display: "flex",
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <tr style={{ display: "block", minHeight: "100%", width: "100%" }}>
          <th
            style={{
              height: "40px",
              width: "55px",
              border: "1.5px solid black",
            }}
          >
            №
          </th>
          <th
            style={{
              height: "100%",
              width: "40%",
              border: "1.5px solid black",
            }}
          >
            Naming
          </th>
          <th
            style={{
              height: "100%",
              width: "50%",
              border: "1.5px solid black",
            }}
          >
            Price
          </th>
        </tr>
      </thead>
      <tbody
        style={{
          display: "block",
          width: "100%",
          overflow: "auto",
          height: "300px",
        }}
      >
        {coins.map((coin) => {
          return (
            <tr key={coin.id} style={{ height: "40px" }}>
              <td
                style={{
                  textAlign: "center",
                  width: "10%",
                  border: "1.5px solid black",
                }}
              >
                {coin.rank}
              </td>
              <td
                style={{
                  textAlign: "center",
                  width: "40%",
                  border: "1.5px solid black",
                }}
              >
                {coin.name}
              </td>
              <td
                style={{
                  textAlign: "center",
                  width: "50%",
                  border: "1.5px solid black",
                }}
              >
                {coin.price}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
