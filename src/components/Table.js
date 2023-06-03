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
          display: "block",
          height: "40px",
          width: "550px",
          backgroundColor: "rgb(78, 220, 160)",
        }}
      >
        <tr style={{ height: "40px", width: "550px" }}>
          <th
            style={{
              textAlign: "left",
              width: "55px",
              paddingLeft: 20,
              whiteSpace: "nowrap",
            }}
          >
            №
          </th>
          <th
            style={{
              textAlign: "left",
              width: "40%",
              paddingLeft: 40,
              whiteSpace: "nowrap",
            }}
          >
            Naming
          </th>
          <th
            style={{
              textAlign: "left",
              width: "50%",
              paddingLeft: 40,
              whiteSpace: "nowrap",
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
          overflowY: "scroll",
          height: "260px",
        }}
      >
        {coins.map((coin) => {
          return (
            <tr
              key={coin.id}
              style={{
                height: "40px",
                width: "550px",
                backgroundColor: "rgb(176, 109, 218)",
              }}
            >
              <td
                style={{
                  textAlign: "left",
                  width: "55px",
                  borderTop: "0px",
                  whiteSpace: "nowrap",
                  paddingLeft: 20,
                }}
              >
                {coin.rank}
              </td>
              <td
                style={{
                  textAlign: "left",
                  width: "220px",
                  borderTop: "0px",
                  whiteSpace: "nowrap",
                  paddingLeft: 40,
                }}
              >
                {coin.name}
              </td>
              <td
                style={{
                  textAlign: "left",
                  width: "265px",
                  borderTop: "0px",
                  borderRight: "0px",
                  whiteSpace: "nowrap",
                  paddingLeft: 40,
                }}
              >
                {coin.price.toFixed(2)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
