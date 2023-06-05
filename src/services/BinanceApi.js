import config from "../env";

export const binanceInfoAll = async () => {
  const data = await fetch(`${config.URL}/fapi/v1/exchangeInfo`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-MBX-APIKEY": config.APIKEY,
    },
  }).then((data) => data.json());
  return data;
};

export const binanceTickets = async () => {
  const data = await fetch(`${config.URL}/fapi/v1/ticker/price`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-MBX-APIKEY": config.APIKEY,
    },
  }).then((data) => data.json());
  console.log(data);
  return data;
};
