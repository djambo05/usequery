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
          backgroundColor: "white",
        }}
      >
        <tr style={{ height: "40px", width: "550px" }}>
          <th
            style={{
              width: "55px",
              padding: 0,
              whiteSpace: "nowrap",
            }}
          >
            №
          </th>
          <th
            style={{
              width: "40%",
              padding: 0,
              whiteSpace: "nowrap",
            }}
          >
            Naming
          </th>
          <th
            style={{
              width: "50%",
              padding: 0,
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
                backgroundColor: "yellow",
              }}
            >
              <td
                style={{
                  textAlign: "center",
                  width: "55px",
                  borderTop: "0px",
                  whiteSpace: "nowrap",
                  padding: 0,
                }}
              >
                {coin.rank}
              </td>
              <td
                style={{
                  textAlign: "center",
                  width: "220px",
                  borderTop: "0px",
                  whiteSpace: "nowrap",
                  padding: 0,
                }}
              >
                {coin.name}
              </td>
              <td
                style={{
                  textAlign: "center",
                  width: "265px",
                  borderTop: "0px",
                  borderRight: "0px",
                  whiteSpace: "nowrap",
                  padding: 0,
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
