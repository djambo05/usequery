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
          width: "100%",
          backgroundColor: "white",
          borderBottom: "1.5px solid black",
          borderTop: "1.5px solid black",
        }}
      >
        <tr style={{ height: "40px" }}>
          <th
            style={{
              width: "55px",
              borderLeft: "1.5px solid black",
              padding: 0,
              whiteSpace: "nowrap",
            }}
          >
            №
          </th>
          <th
            style={{
              width: "40%",
              borderLeft: "1.5px solid black",
              padding: 0,
              whiteSpace: "nowrap",
            }}
          >
            Naming
          </th>
          <th
            style={{
              width: "50%",
              borderLeft: "1.5px solid black",
              borderRight: "1.5px solid black",
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
              style={{ height: "40px", backgroundColor: "yellow" }}
            >
              <td
                style={{
                  textAlign: "center",
                  width: "55px",
                  border: "1.5px solid black",
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
                  width: "40%",
                  border: "1.5px solid black",
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
                  width: "50%",
                  border: "1.5px solid black",
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
